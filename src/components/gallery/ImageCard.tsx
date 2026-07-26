'use client';

import React from 'react';
import Image from 'next/image';
import { GalleryItem } from '@/types/gallery';
import { Camera, Maximize2 } from 'lucide-react';

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
  aspectClass = 'aspect-[4/3]',
  onClick,
}: ImageCardProps) => {
  const imageUrl = item.secure_url || item.media_url || item.thumbnail_url;
  const itemNumber = (index + 1).toString().padStart(2, '0');

  return (
    <div
      onClick={onClick}
      className={`group relative w-full ${aspectClass} overflow-hidden rounded-xl bg-stone-900 border border-[#ECE7DF] hover:border-[#C59842]/80 shadow-sm hover:shadow-xl active:scale-[0.98] transition-all duration-300 ease-out cursor-pointer hover:-translate-y-1`}
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
      {/* Next.js Image Optimization */}
      <Image
        src={imageUrl}
        alt={item.alt_text || item.title || 'Loran\'s Gallery Image'}
        fill
        priority={priority}
        loading={priority ? undefined : 'lazy'}
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105 opacity-95 group-hover:opacity-100"
        unoptimized={imageUrl.startsWith('http')}
      />

      {/* Subtle Inner Gold Framing Line */}
      <div 
        className="absolute inset-2 sm:inset-3 border border-[#C59842]/20 rounded-lg pointer-events-none z-10 transition-opacity duration-300 opacity-40 sm:opacity-60 group-hover:opacity-100 group-hover:border-[#C59842]/60" 
        aria-hidden="true" 
      />

      {/* Top Left Media Badge (desktop/tablet hover, small badge on mobile) */}
      <div className="absolute top-2.5 left-2.5 sm:top-4 sm:left-4 z-20 opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <span className="inline-flex items-center gap-1 text-[9px] sm:text-[10px] font-semibold tracking-widest uppercase bg-stone-950/80 text-white backdrop-blur-md px-2 sm:px-3 py-0.5 sm:py-1 rounded-full border border-white/10 shadow">
          <Camera className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#C59842]" />
          <span>Photo</span>
        </span>
      </div>

      {/* Top Right Index Numbering */}
      <div className="absolute top-2.5 right-2.5 sm:top-4 sm:right-4 z-20">
        <span className="font-serif text-[10px] sm:text-xs font-semibold tracking-widest text-[#C59842] bg-stone-950/70 backdrop-blur-md px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md border border-[#C59842]/30 shadow">
          {itemNumber}
        </span>
      </div>

      {/* Dark Luxury Gradient Overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 sm:p-5 z-20"
        aria-hidden="true"
      >
        <div className="flex items-center justify-between">
          <h3 className="font-sans text-[11px] sm:text-sm font-bold uppercase text-white tracking-wider truncate transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
            {item.title}
          </h3>
          <div className="hidden sm:flex w-7 h-7 rounded-full bg-white/10 backdrop-blur-md text-white items-center justify-center border border-white/20">
            <Maximize2 className="w-3.5 h-3.5" />
          </div>
        </div>
        {item.description && (
          <p className="font-sans text-[10px] sm:text-[11px] text-stone-300 font-light truncate mt-0.5 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300 delay-75">
            {item.description}
          </p>
        )}
      </div>
    </div>
  );
};

export const ImageCard = React.memo(ImageCardComponent);
