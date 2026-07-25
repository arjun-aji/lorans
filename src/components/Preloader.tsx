'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    // Disable scrolling while loading
    document.body.classList.add('overflow-hidden');

    // Simulate loading/intro screen timing
    const loadTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1600); // 1.6s showing preloader

    const unmountTimer = setTimeout(() => {
      setIsMounted(false);
      document.body.classList.remove('overflow-hidden');
    }, 2300); // 1.6s + 700ms transition fade-out duration

    return () => {
      clearTimeout(loadTimer);
      clearTimeout(unmountTimer);
      document.body.classList.remove('overflow-hidden');
    };
  }, []);

  if (!isMounted) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#FAF8F5] transition-all duration-700 ease-in-out ${
        isLoading 
          ? 'opacity-100 pointer-events-auto' 
          : 'opacity-0 -translate-y-full pointer-events-none'
      }`}
    >
      {/* Inline styles for custom keyframe animations */}
      <style>{`
        @keyframes preloader-bar {
          0% { left: -40%; }
          100% { left: 100%; }
        }
        @keyframes preloader-fade-in {
          0% { opacity: 0; transform: scale(0.94); filter: blur(4px); }
          100% { opacity: 1; transform: scale(1); filter: blur(0); }
        }
        .animate-preloader-fade {
          animation: preloader-fade-in 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-preloader-bar {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 40%;
          background-color: #c59842;
          animation: preloader-bar 1.4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
      `}</style>

      {/* Loading Box */}
      <div className="flex flex-col items-center max-w-sm px-6 animate-preloader-fade opacity-0">
        
        {/* Brand Gold Logo */}
        <div className="relative w-[180px] h-[45px] mb-4 select-none">
          <Image
            src="/assets/lorans_logo_gold.png"
            alt="Loran's"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Subtitle */}
        <span className="font-sans text-[8px] tracking-[0.3em] font-semibold text-stone-500 uppercase leading-none block mb-6">
          Hair Cutting Saloon
        </span>

        {/* Delicate loading bar */}
        <div className="w-32 h-[1.5px] bg-stone-200/60 relative overflow-hidden rounded-full">
          <div className="animate-preloader-bar rounded-full" />
        </div>
        
      </div>
    </div>
  );
}
