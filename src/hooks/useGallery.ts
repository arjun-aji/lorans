import { useQuery } from '@tanstack/react-query';
import { fetchGalleryItems } from '@/services/gallery';
import { GalleryItem, GalleryFilterType } from '@/types/gallery';

interface UseGalleryOptions {
  limit?: number;
  filter?: GalleryFilterType;
}

export const useGallery = (options: UseGalleryOptions = {}) => {
  const { limit, filter = 'all' } = options;

  const query = useQuery<GalleryItem[], Error>({
    queryKey: ['gallery'],
    queryFn: fetchGalleryItems,
    staleTime: 1000 * 60 * 3, // 3 minutes
  });

  const allItems = query.data ?? [];

  // Filter by media_type if required ('image' | 'video' | 'all')
  const filteredItems = allItems.filter((item) => {
    if (filter === 'image') return item.media_type === 'image';
    if (filter === 'video') return item.media_type === 'video';
    return true;
  });

  // Slice items if limit is specified (e.g. limit: 6 for homepage)
  const items = limit ? filteredItems.slice(0, limit) : filteredItems;

  return {
    ...query,
    items,
    totalCount: allItems.length,
    filteredCount: filteredItems.length,
  };
};
