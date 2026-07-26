import axios from 'axios';
import { GalleryItem, GalleryResponse } from '@/types/gallery';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5500/api';
const FALLBACK_API_URL = 'http://localhost:5000/api';

export const fetchGalleryItems = async (): Promise<GalleryItem[]> => {
  let responseData: GalleryResponse | null = null;

  try {
    const res = await axios.get<GalleryResponse>(`${API_BASE_URL}/gallery?limit=100`, {
      timeout: 4000,
    });
    responseData = res.data;
  } catch {
    // If primary port 5500 fails, try fallback port 5000
    try {
      const resFallback = await axios.get<GalleryResponse>(`${FALLBACK_API_URL}/gallery?limit=100`, {
        timeout: 4000,
      });
      responseData = resFallback.data;
    } catch (fallbackError) {
      throw fallbackError;
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
