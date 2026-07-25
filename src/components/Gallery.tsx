'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = ['all', 'haircut', 'fade', 'beard', 'styling', 'facial'];

  const galleryItems = [
    { id: 1, src: '/assets/fade_haircut.png', category: 'fade', alt: 'Modern skin fade haircut side view' },
    { id: 2, src: '/assets/beard_grooming.png', category: 'beard', alt: 'Precision beard trim and line shaping' },
    { id: 3, src: '/assets/facial_mask.png', category: 'facial', alt: 'Skincare facial clay treatment at spa' },
    { id: 4, src: '/assets/hero.jpeg', category: 'haircut', alt: 'Classic gentlemen haircut styling' },
    { id: 5, src: '/assets/fade_haircut.png', category: 'haircut', alt: 'Textured hair styling with mid fade' },
    { id: 6, src: '/assets/beard_grooming.png', category: 'styling', alt: 'Detailed mustache styling and beard care' },
    { id: 7, src: '/assets/facial_mask.png', category: 'facial', alt: 'Soothing face massage and therapy' },
    { id: 8, src: '/assets/hero.jpeg', category: 'styling', alt: 'Gentlemen hair styling finish' },
    { id: 9, src: '/assets/fade_haircut.png', category: 'fade', alt: 'Clean zero fade haircut' },
    { id: 10, src: '/assets/beard_grooming.png', category: 'beard', alt: 'Full beard grooming service' },
    { id: 11, src: '/assets/facial_mask.png', category: 'facial', alt: 'Premium facial treatment for men' },
    { id: 12, src: '/assets/about_interior.png', category: 'styling', alt: 'Loran styling chair interior design view' },
  ];

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section 
      id="gallery" 
      className="py-24 bg-[#FAF8F5] border-t border-stone-200/40 lg:min-h-screen lg:flex lg:items-center"
      aria-labelledby="gallery-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full">
        
        {/* Header */}
        <div className="text-center flex flex-col items-center">
          <span className="font-sans text-[11px] sm:text-xs tracking-[0.25em] font-semibold text-amber-800 uppercase mb-3">
            Gallery
          </span>
          <h2 
            id="gallery-heading" 
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light tracking-wide text-stone-900 uppercase"
          >
            Our Finest Work
          </h2>
          
          {/* Divider */}
          <div className="w-12 h-px bg-stone-300 my-6" aria-hidden="true" />
        </div>

        {/* Category Filter Tabs */}
        <div 
          className="flex flex-wrap justify-center gap-x-6 gap-y-3 mt-4 mb-10 text-[10px] sm:text-xs font-semibold tracking-widest uppercase"
          role="tablist"
          aria-label="Gallery category filters"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              role="tab"
              aria-selected={activeCategory === category}
              aria-controls="gallery-grid"
              className={`py-1.5 border-b-2 transition-all duration-300 cursor-pointer focus:outline-none ${
                activeCategory === category
                  ? 'border-[#c59842] text-[#c59842]'
                  : 'border-transparent text-stone-500 hover:text-stone-900'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid Layout: 4x3 on mobile (grid-cols-4), 6x2 on desktop (lg:grid-cols-6) */}
        <div 
          id="gallery-grid"
          className="grid grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-4 mt-8"
          role="region"
          aria-live="polite"
        >
          {filteredItems.map((item) => (
            <div 
              key={item.id}
              className="relative aspect-square overflow-hidden cursor-pointer group bg-stone-100 rounded-sm shadow-sm"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-w-768px) 25vw, 16vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
              />
              
              {/* Luxury dark hover details */}
              <div 
                className="absolute inset-0 bg-stone-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-2"
                aria-hidden="true"
              >
                <span className="font-sans text-[8px] sm:text-[10px] tracking-widest uppercase text-white font-medium text-center border-b border-white/20 pb-1">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <div className="flex justify-center mt-12">
          <a
            href="/gallery"
            className="inline-flex items-center justify-center gap-3 border border-[#c59842] text-[#c59842] hover:bg-[#c59842] hover:text-white text-xs tracking-[0.2em] font-semibold uppercase px-8 py-3.5 transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-[#c59842] focus:ring-offset-2"
          >
            <span>View All Photos</span>
            <svg
              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}
