export type MediaType = 'image' | 'video';

export interface GalleryItem {
  _id: string;
  title: string;
  description?: string;
  alt_text?: string;
  media_type: MediaType;
  media_url: string;
  secure_url: string;
  thumbnail_url: string;
  public_id?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface GalleryResponse {
  success: boolean;
  message: string;
  data: {
    items: GalleryItem[];
    pagination?: {
      page: number;
      limit: number;
      total: number;
      totalPages: number;
    };
  };
}

export type GalleryFilterType = 'all' | 'image' | 'video';
