'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useGallery } from '@/hooks/useGallery';
import { GalleryItem, GalleryFilterType } from '@/types/gallery';
import GalleryGrid from './GalleryGrid';
import GalleryFilter from './GalleryFilter';
import GallerySkeleton from './GallerySkeleton';
import GalleryLightbox from './GalleryLightbox';
import { ArrowRight, Sparkles } from 'lucide-react';

interface GalleryProps {
  limit?: number;
  showFilter?: boolean;
  showViewAllButton?: boolean;
}

export default function Gallery({
  limit,
  showFilter = true,
  showViewAllButton = true,
}: GalleryProps) {
  const [currentFilter, setCurrentFilter] = useState<GalleryFilterType>('all');
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const { items, isLoading, isError, totalCount } = useGallery({
    limit,
    filter: currentFilter,
  });

  // If API fails completely with no cached items, hide the section gracefully
  if (isError && items.length === 0) {
    return null;
  }

  const handleItemClick = (_item: GalleryItem, index: number) => {
    setSelectedIndex(index);
  };

  const handleCloseLightbox = () => {
    setSelectedIndex(null);
  };

  const handleNavigateLightbox = (newIndex: number) => {
    setSelectedIndex(newIndex);
  };

  return (
    <section 
      id="gallery" 
      className="py-12 sm:py-24 bg-[#FAF8F5] border-t border-[#ECE7DF] lg:min-h-screen lg:flex lg:items-center"
      aria-labelledby="gallery-heading"
    >
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-12 w-full">
        
        {/* Section Header */}
        <div className="text-center flex flex-col items-center max-w-2xl mx-auto mb-6 sm:mb-10">
          <span className="font-sans text-[10px] sm:text-xs tracking-[0.3em] font-semibold text-[#C59842] uppercase mb-1 sm:mb-2">
            Showcase
          </span>
          <h2 
            id="gallery-heading" 
            className="font-serif text-[28px] sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#1F1F1F] uppercase leading-tight"
          >
            Our Finest Work
          </h2>
          
          {/* Subtle Luxury Divider */}
          <div className="flex items-center justify-center gap-2.5 my-3 sm:my-5" aria-hidden="true">
            <div className="w-8 sm:w-10 h-[1px] bg-[#ECE7DF]" />
            <span className="text-[#C59842] text-[10px] sm:text-[11px]">✕</span>
            <div className="w-8 sm:w-10 h-[1px] bg-[#ECE7DF]" />
          </div>

          <p className="font-sans text-stone-600 font-light text-sm sm:text-base leading-relaxed px-2">
            A curated showcase of our haircuts, beard lines, facials, and grooming videos.
          </p>
        </div>

        {/* Media Type Filter Tabs (All / Photos / Videos) */}
        {showFilter && (
          <GalleryFilter
            currentFilter={currentFilter}
            onFilterChange={setCurrentFilter}
            totalCount={totalCount}
          />
        )}

        {/* Skeleton Loading State */}
        {isLoading ? (
          <GallerySkeleton count={limit || 6} />
        ) : items.length === 0 ? (
          /* Empty State */
          <div className="flex flex-col items-center justify-center py-14 sm:py-20 bg-white border border-[#ECE7DF] rounded-2xl text-center shadow-sm max-w-md mx-auto p-6 sm:p-8">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#FAF8F5] border border-[#C59842]/30 flex items-center justify-center text-[#C59842] mb-3 sm:mb-4">
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h3 className="font-serif text-lg sm:text-xl font-normal text-[#1F1F1F] uppercase tracking-wide">
              No gallery items available.
            </h3>
            <p className="font-sans text-xs text-stone-500 font-light mt-1 sm:mt-1.5">
              Check back soon for new photos and video showcases.
            </p>
          </div>
        ) : (
          /* Masonry Editorial Grid */
          <GalleryGrid items={items} onItemClick={handleItemClick} />
        )}

        {/* Compact Centered View All Button */}
        {showViewAllButton && limit && items.length > 0 && (
          <div className="flex justify-center mt-8 sm:mt-16">
            <Link
              href="/gallery"
              className="inline-flex items-center justify-center gap-2 sm:gap-3 border border-[#C59842] text-[#C59842] hover:bg-[#C59842] hover:text-white text-xs tracking-[0.2em] font-semibold uppercase px-6 sm:px-10 py-3 sm:py-4 rounded-md transition-all duration-300 shadow-sm w-auto group focus:outline-none focus:ring-2 focus:ring-[#C59842] focus:ring-offset-2"
            >
              <span>Explore Full Showcase</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        )}

      </div>

      {/* Lightbox Fullscreen Modal */}
      <GalleryLightbox
        items={items}
        selectedIndex={selectedIndex}
        onClose={handleCloseLightbox}
        onNavigate={handleNavigateLightbox}
      />
    </section>
  );
}
