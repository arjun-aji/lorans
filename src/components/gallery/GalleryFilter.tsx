'use client';

import React from 'react';
import { GalleryFilterType } from '@/types/gallery';
import { Camera, Video, Grid } from 'lucide-react';

interface GalleryFilterProps {
  currentFilter: GalleryFilterType;
  onFilterChange: (filter: GalleryFilterType) => void;
  photoCount?: number;
  videoCount?: number;
  totalCount?: number;
}

export default function GalleryFilter({
  currentFilter,
  onFilterChange,
}: GalleryFilterProps) {
  const filters: { id: GalleryFilterType; label: string; icon: React.ReactNode }[] = [
    { id: 'all', label: 'All Media', icon: <Grid className="w-3.5 h-3.5" /> },
    { id: 'image', label: 'Photos', icon: <Camera className="w-3.5 h-3.5" /> },
    { id: 'video', label: 'Videos', icon: <Video className="w-3.5 h-3.5" /> },
  ];

  return (
    <div 
      className="flex items-center justify-center gap-2 sm:gap-3 mb-6 sm:mb-10 text-[13px] sm:text-xs font-semibold tracking-wider uppercase overflow-x-auto no-scrollbar py-1"
      role="tablist"
      aria-label="Gallery media filter"
    >
      {filters.map((f) => {
        const isActive = currentFilter === f.id;
        return (
          <button
            key={f.id}
            onClick={() => onFilterChange(f.id)}
            role="tab"
            aria-selected={isActive}
            className={`inline-flex items-center justify-center gap-1.5 h-[36px] px-3.5 sm:px-5 rounded-full border transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#C59842] flex-shrink-0 ${
              isActive
                ? 'bg-[#C59842] border-[#C59842] text-white shadow-sm shadow-[#C59842]/20'
                : 'bg-white border-[#ECE7DF] text-stone-600 hover:border-[#C59842]/50 hover:text-[#C59842]'
            }`}
          >
            {f.icon}
            <span>{f.label}</span>
          </button>
        );
      })}
    </div>
  );
}
