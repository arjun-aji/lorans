'use client';

import React from 'react';

interface GallerySkeletonProps {
  count?: number;
}

export default function GallerySkeleton({ count = 6 }: GallerySkeletonProps) {
  const aspectClasses = [
    'aspect-[3/4]',
    'aspect-[4/3]',
    'aspect-square',
    'aspect-[9/16]',
    'aspect-[16/9]',
    'aspect-[3/4]',
  ];

  return (
    <div
      className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-6"
      aria-label="Loading gallery media"
    >
      {Array.from({ length: count }).map((_, i) => {
        const aspectClass = aspectClasses[i % aspectClasses.length];
        return (
          <div
            key={i}
            className={`relative overflow-hidden rounded-xl bg-stone-200/70 border border-[#ECE7DF] ${aspectClass}`}
          >
            {/* Shimmer animation */}
            <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.8s_infinite] bg-gradient-to-r from-transparent via-white/50 to-transparent" />
          </div>
        );
      })}
    </div>
  );
}
