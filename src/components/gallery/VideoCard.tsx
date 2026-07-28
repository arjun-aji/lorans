'use client';

import React from 'react';
import { GalleryItem } from '@/types/gallery';
import { Play } from 'lucide-react';

interface VideoCardProps {
  item: GalleryItem;
  index: number;
  priority?: boolean;
  aspectClass?: string;
  onClick: () => void;
}

const VideoCardComponent = ({
  item,
  index,
  onClick,
}: VideoCardProps) => {
  const videoUrl = item.secure_url || item.media_url;
  const itemNumber = (index + 1).toString().padStart(2, '0');

  return (
    <div
      onClick={onClick}
      className="group relative w-full overflow-hidden rounded-[20px] sm:rounded-[24px] bg-stone-900 border border-[#ECE7DF] hover:border-[#C59842] shadow-sm hover:shadow-xl active:scale-[0.98] transition-all duration-300 ease-out cursor-pointer hover:-translate-y-1"
      role="button"
      tabIndex={0}
      aria-label={`Play video: ${item.title}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
    >
      {/* Dynamic Video preview */}
      <video
        src={videoUrl}
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
        className="w-full h-auto block object-cover pointer-events-none transition-transform duration-500 ease-out group-hover:scale-105"
      />

      {/* Top Right Play Icon & Index Badge */}
      <div className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 z-20 flex items-center gap-1.5 sm:gap-2">
        <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#C59842] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
          <Play className="w-2.5 h-2.5 sm:w-3 sm:h-3 ml-0.5 fill-current" />
        </div>
        <span className="font-serif text-[10px] sm:text-xs font-semibold tracking-widest text-[#C59842] bg-stone-950/70 backdrop-blur-md px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md border border-[#C59842]/30 shadow">
          {itemNumber}
        </span>
      </div>
    </div>
  );
};

export const VideoCard = React.memo(VideoCardComponent);
