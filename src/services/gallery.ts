import axios from 'axios';
import { GalleryItem, GalleryResponse } from '@/types/gallery';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://lorans-cms.onrender.com/api';
const LOCAL_FALLBACK_URL_5500 = 'http://localhost:5500/api';
const LOCAL_FALLBACK_URL_5000 = 'http://localhost:5000/api';

export const fetchGalleryItems = async (): Promise<GalleryItem[]> => {
  let responseData: GalleryResponse | null = null;

  // Try production backend URL first (with 10s timeout for Render cold-starts)
  try {
    const res = await axios.get<GalleryResponse>(`${API_BASE_URL}/gallery?limit=100`, {
      timeout: 10000,
    });
    responseData = res.data;
  } catch (error) {
    console.warn('Production API fetch error, checking local fallbacks...', error);
    // Try local fallback 5500
    try {
      const res5500 = await axios.get<GalleryResponse>(`${LOCAL_FALLBACK_URL_5500}/gallery?limit=100`, {
        timeout: 4000,
      });
      responseData = res5500.data;
    } catch {
      // Try local fallback 5000
      try {
        const res5000 = await axios.get<GalleryResponse>(`${LOCAL_FALLBACK_URL_5000}/gallery?limit=100`, {
          timeout: 4000,
        });
        responseData = res5000.data;
      } catch (fallbackError) {
        throw fallbackError;
      }
    }
  }

  if (!responseData?.success || !Array.isArray(responseData?.data?.items)) {
    return [];
  }

  const items = responseData.data.items;

  // Sort newest first using createdAt
  return items.sort((a, b) => {
    const dateA = a.createdAt ? new Date(a.createdAt).getTime() : 0;
    const dateB = b.createdAt ? new Date(b.createdAt).getTime() : 0;
    return dateB - dateA;
  });
};
