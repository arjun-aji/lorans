'use client';

import React from 'react';
import { GalleryItem } from '@/types/gallery';

interface ImageCardProps {
  item: GalleryItem;
  index: number;
  priority?: boolean;
  aspectClass?: string;
  onClick: () => void;
}

const ImageCardComponent = ({
  item,
  index,
  priority = false,
  onClick,
}: ImageCardProps) => {
  const imageUrl = item.secure_url || item.media_url || item.thumbnail_url;
  const itemNumber = (index + 1).toString().padStart(2, '0');

  return (
    <div
      onClick={onClick}
      className="group relative w-full overflow-hidden rounded-[20px] sm:rounded-[24px] bg-stone-900 border border-[#ECE7DF] hover:border-[#C59842] shadow-sm hover:shadow-xl active:scale-[0.98] transition-all duration-300 ease-out cursor-pointer hover:-translate-y-1"
      role="button"
      tabIndex={0}
      aria-label={`View image: ${item.title}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
    >
      {/* Dynamic Native Aspect Ratio Image */}
      <img
        src={imageUrl}
        alt={item.alt_text || item.title || "Loran's Gallery Image"}
        loading={priority ? 'eager' : 'lazy'}
        className="w-full h-auto block object-cover transition-transform duration-500 ease-out group-hover:scale-105"
      />

      {/* Top Right Item Index Badge */}
      <div className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 z-20">
        <span className="font-serif text-[10px] sm:text-xs font-semibold tracking-widest text-[#C59842] bg-stone-950/70 backdrop-blur-md px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md border border-[#C59842]/30 shadow">
          {itemNumber}
        </span>
      </div>
    </div>
  );
};

export const ImageCard = React.memo(ImageCardComponent);
