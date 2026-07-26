'use client';

import React, { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GalleryItem } from '@/types/gallery';
import { X, ChevronLeft, ChevronRight, Video, Camera } from 'lucide-react';

interface GalleryLightboxProps {
  items: GalleryItem[];
  selectedIndex: number | null;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
}

export default function GalleryLightbox({
  items,
  selectedIndex,
  onClose,
  onNavigate,
}: GalleryLightboxProps) {
  const isOpen = selectedIndex !== null && selectedIndex >= 0 && selectedIndex < items.length;
  const currentItem = isOpen ? items[selectedIndex] : null;

  const handlePrev = useCallback(() => {
    if (selectedIndex === null) return;
    const newIndex = (selectedIndex - 1 + items.length) % items.length;
    onNavigate(newIndex);
  }, [selectedIndex, items.length, onNavigate]);

  const handleNext = useCallback(() => {
    if (selectedIndex === null) return;
    const newIndex = (selectedIndex + 1) % items.length;
    onNavigate(newIndex);
  }, [selectedIndex, items.length, onNavigate]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, handlePrev, handleNext]);

  // Lock body scroll when Lightbox is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && currentItem && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 bg-stone-950/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
          onClick={onClose}
          aria-modal="true"
          role="dialog"
          aria-label="Gallery Fullscreen Lightbox"
        >
          {/* Main Modal Box */}
          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.92, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 24 }}
            className="relative max-w-5xl w-full max-h-[92vh] bg-stone-900 border border-stone-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col p-4 sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar: Media Count & Close Button */}
            <div className="flex items-center justify-between pb-3 border-b border-stone-800/80 mb-4 z-20">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-widest uppercase bg-[#C59842] text-white px-2.5 py-1 rounded-full shadow">
                  {currentItem.media_type === 'video' ? (
                    <>
                      <Video className="w-3 h-3" />
                      <span>Video</span>
                    </>
                  ) : (
                    <>
                      <Camera className="w-3 h-3" />
                      <span>Photo</span>
                    </>
                  )}
                </span>
                <span className="font-sans text-xs text-stone-400 font-medium">
                  {selectedIndex + 1} of {items.length}
                </span>
              </div>

              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#C59842]"
                aria-label="Close fullscreen modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Media Content Display */}
            <div className="relative flex-1 flex items-center justify-center min-h-[320px] max-h-[68vh] bg-black rounded-2xl overflow-hidden group">
              {currentItem.media_type === 'video' ? (
                <video
                  key={currentItem._id}
                  src={currentItem.secure_url || currentItem.media_url}
                  controls
                  autoPlay
                  className="max-h-[68vh] w-full object-contain rounded-2xl"
                />
              ) : (
                <img
                  key={currentItem._id}
                  src={currentItem.secure_url || currentItem.media_url}
                  alt={currentItem.alt_text || currentItem.title}
                  className="max-h-[68vh] w-full object-contain rounded-2xl"
                />
              )}

              {/* Prev / Next Navigation Arrows */}
              {items.length > 1 && (
                <>
                  <button
                    onClick={handlePrev}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-stone-950/70 hover:bg-[#C59842] text-white backdrop-blur-md flex items-center justify-center border border-white/10 shadow-lg transition-all duration-300 cursor-pointer focus:outline-none"
                    aria-label="Previous media"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>

                  <button
                    onClick={handleNext}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-stone-950/70 hover:bg-[#C59842] text-white backdrop-blur-md flex items-center justify-center border border-white/10 shadow-lg transition-all duration-300 cursor-pointer focus:outline-none"
                    aria-label="Next media"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}
            </div>

            {/* Bottom Caption & Title */}
            <div className="pt-4 text-center">
              <h3 className="font-serif text-lg sm:text-xl font-normal text-white uppercase tracking-wide">
                {currentItem.title}
              </h3>
              {currentItem.description && (
                <p className="font-sans text-xs sm:text-sm text-stone-400 font-light mt-1 max-w-xl mx-auto leading-relaxed">
                  {currentItem.description}
                </p>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
