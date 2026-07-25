'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function GalleryPage() {
  const galleryItems = [
    { id: 1, src: '/assets/fade_haircut.png', category: 'Mid Fade', alt: 'Modern skin fade haircut side view' },
    { id: 2, src: '/assets/beard_grooming.png', category: 'Beard Grooming', alt: 'Precision beard trim and line shaping' },
    { id: 3, src: '/assets/facial_mask.png', category: 'Facial Care', alt: 'Skincare facial clay treatment at spa' },
    { id: 4, src: '/assets/hero.jpeg', category: 'Haircut', alt: 'Classic gentlemen haircut styling' },
    { id: 5, src: '/assets/fade_haircut.png', category: 'Texture Fade', alt: 'Textured hair styling with mid fade' },
    { id: 6, src: '/assets/beard_grooming.png', category: 'Beard Styling', alt: 'Detailed mustache styling and beard care' },
    { id: 7, src: '/assets/facial_mask.png', category: 'Spa Massage', alt: 'Soothing face massage and therapy' },
    { id: 8, src: '/assets/hero.jpeg', category: 'Styling Finish', alt: 'Gentlemen hair styling finish' },
    { id: 9, src: '/assets/fade_haircut.png', category: 'Zero Fade', alt: 'Clean zero fade haircut' },
    { id: 10, src: '/assets/beard_grooming.png', category: 'Full Beard Trim', alt: 'Full beard grooming service' },
    { id: 11, src: '/assets/facial_mask.png', category: 'Premium Skincare', alt: 'Premium facial treatment for men' },
    { id: 12, src: '/assets/about_interior.png', category: 'Saloon Vibe', alt: 'Loran styling chair interior design view' },
  ];

  return (
    <main className="min-h-screen bg-[#FAF8F5] py-20 px-6 sm:px-12 flex flex-col justify-between">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Top Back Link */}
        <div className="mb-8 flex justify-start">
          <Link
            href="/#gallery"
            className="inline-flex items-center gap-2 text-stone-500 hover:text-[#c59842] text-xs sm:text-sm tracking-wider font-semibold uppercase transition-colors group focus:outline-none"
          >
            <svg
              className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>Back to Gallery</span>
          </Link>
        </div>

        {/* Header Block with Brand Logo */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="relative w-[150px] h-[38px] mb-6 select-none">
            <Image
              src="/assets/lorans_logo_black.png"
              alt="Loran's"
              fill
              className="object-contain"
              priority
            />
          </div>
          
          <h1 className="font-serif text-3xl sm:text-4xl tracking-wide text-stone-900 uppercase">
            Grooming Gallery
          </h1>
          <div className="w-12 h-px bg-[#c59842] my-4" />
          <p className="font-sans text-xs sm:text-sm text-stone-500 font-light max-w-md">
            A visual showcase of our premium haircuts, detail beard lines, and luxury therapeutic spa sessions.
          </p>
        </div>

        {/* Expanded Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
          {galleryItems.map((item) => (
            <div 
              key={item.id}
              className="relative aspect-square overflow-hidden cursor-pointer group bg-stone-100 rounded-sm shadow-md border border-stone-200/40"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-w-768px) 50vw, (max-w-1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
              />
              
              {/* Luxury dark hover details */}
              <div 
                className="absolute inset-0 bg-stone-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4"
                aria-hidden="true"
              >
                <div className="text-center space-y-2">
                  <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-[#c59842] font-semibold block">
                    Portfolio
                  </span>
                  <span className="font-sans text-xs sm:text-sm tracking-wider uppercase text-white font-medium block border-t border-white/20 pt-2 px-4">
                    {item.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Footer Copy */}
      <div className="text-center text-stone-400 text-[10px] tracking-widest font-semibold uppercase mt-20">
        © {new Date().getFullYear()} Loran&apos;s Hair Cutting Saloon. All Rights Reserved.
      </div>
    </main>
  );
}
