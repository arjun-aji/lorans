import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import Gallery from '@/components/gallery/Gallery';
import StructuredData from '@/components/StructuredData';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: "Grooming Portfolio & Haircut Gallery | Loran's Gents Beauty Parlour Ramalloor",
  description: "View our photo and video showcase of haircuts, beard styling, hair spa, hydra facials, and wedding grooming at Loran's Gents Beauty & Make Up Studio in Ramalloor, Kolenchery, Ernakulam.",
  keywords: [
    "Haircut Gallery Ramalloor",
    "Grooming Portfolio Kolenchery",
    "Beard Styling Photos Ernakulam",
    "Hair Treatment Showcase Kerala",
    "Loran's Gents Beauty & Make Up Studio",
    "Men's Beauty Parlour Ramalloor"
  ],
  alternates: {
    canonical: '/gallery',
  },
  openGraph: {
    title: "Grooming Portfolio & Haircut Gallery | Loran's Gents Beauty Parlour Ramalloor",
    description: "View our photo and video showcase of haircuts, beard styling, hair spa, hydra facials, and wedding grooming at Loran's Gents Beauty & Make Up Studio in Ramalloor, Kolenchery, Ernakulam.",
    url: 'https://www.loransmakeupstudio.com/gallery',
    images: [
      {
        url: '/assets/hero.jpeg',
        alt: "Grooming Portfolio at Loran's Gents Beauty Parlour Ramalloor",
      },
    ],
  },
};

export default function GalleryPage() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Gallery Showcase', url: '/gallery' }
  ];

  return (
    <>
      <StructuredData breadcrumbs={breadcrumbs} />
      <main className="min-h-screen bg-[#FAF8F5] py-16 px-4 sm:px-8 lg:px-12 flex flex-col justify-between">
        <div className="max-w-7xl mx-auto w-full">
          
          {/* Top Back Link */}
          <div className="mb-6 flex justify-start">
            <Link
              href="/#gallery"
              className="inline-flex items-center gap-2 text-stone-500 hover:text-[#C59842] text-xs sm:text-sm tracking-wider font-semibold uppercase transition-colors group focus:outline-none"
            >
              <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform duration-300" />
              <span>Back to Home</span>
            </Link>
          </div>

          {/* Header Block with Brand Logo */}
          <div className="flex flex-col items-center text-center mb-8">
            <div className="relative w-[180px] h-auto mb-4 select-none">
              <Image
                src="/assets/hero texxt.png"
                alt="Loran's Gents Beauty Parlour & Make Up Studio Ramalloor"
                width={180}
                height={90}
                className="object-contain w-full h-auto"
                priority
              />
            </div>
            
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-wide text-[#1F1F1F] uppercase">
              Full Grooming Showcase
            </h1>
            <div className="w-12 h-[2px] bg-[#C59842] my-4 rounded-full" />
            <p className="font-sans text-xs sm:text-sm text-stone-600 font-light max-w-md leading-relaxed">
              Explore our complete portfolio of precision haircuts, beard trims, facials, and grooming videos in Ramalloor, Ernakulam.
            </p>
          </div>

          {/* Render Dynamic Gallery (Fetches ALL media without limit) */}
          <div className="pt-2">
            <Gallery showFilter={true} showViewAllButton={false} />
          </div>

        </div>

        {/* Footer Copy */}
        <div className="text-center text-stone-500 text-[10px] tracking-widest font-semibold uppercase mt-16 pb-8 border-t border-[#ECE7DF] pt-8">
          © {new Date().getFullYear()} Loran&apos;s Gents Beauty Parlour &amp; Make Up Studio. All Rights Reserved.
        </div>
      </main>
    </>
  );
}
