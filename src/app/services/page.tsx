'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ServiceIcon from '@/components/ServiceIcon';
import Header from '@/components/Header';
import Contact from '@/components/Contact';
import Preloader from '@/components/Preloader';
import { SERVICE_CATEGORIES } from '@/data/servicesData';

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState<string>('all');

  const filteredCategories = activeTab === 'all' 
    ? SERVICE_CATEGORIES 
    : SERVICE_CATEGORIES.filter(cat => cat.id === activeTab);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-stone-900 font-sans">
      <Preloader />
      <Header />

      {/* ════════════════════════════════════════════════════════════════
          MOBILE-ONLY COMPACT LUXURY SERVICES EXPERIENCE (< md)
          Reduces vertical height by 40%+, app-like high density
      ════════════════════════════════════════════════════════════════ */}
      <div className="md:hidden flex flex-col min-h-screen pt-16 pb-20">

        {/* Compact Hero Section */}
        <div className="px-4 pt-4 pb-2 flex flex-col items-start">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-stone-500 hover:text-[#C59842] text-[11px] tracking-wider font-semibold uppercase transition-colors mb-1.5"
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>Back to Home</span>
          </Link>

          <h1 className="font-serif text-[22px] font-semibold text-[#1F1F1F] tracking-tight leading-tight">
            Services Catalog
          </h1>

          <p className="font-sans text-[13px] text-stone-600 font-light truncate max-w-xs mt-0.5">
            Explore our curated grooming and beauty directory.
          </p>
        </div>

        {/* Compact Horizontal Filter Chips (~36px height) */}
        <div className="px-4 py-2 border-y border-[#ECE7DF] bg-[#FAF8F5]/90 backdrop-blur-sm sticky top-16 z-30 mb-3">
          <div className="flex overflow-x-auto no-scrollbar space-x-2 py-0.5">
            <button
              onClick={() => setActiveTab('all')}
              className={`h-[34px] px-3.5 shrink-0 rounded-full text-[11px] font-semibold tracking-wider uppercase transition-all flex items-center justify-center cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-[#C59842] text-white shadow-sm'
                  : 'bg-white border border-[#ECE7DF] text-stone-700 active:bg-stone-100'
              }`}
            >
              All
            </button>
            {SERVICE_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`h-[34px] px-3.5 shrink-0 rounded-full text-[11px] font-semibold tracking-wider uppercase transition-all flex items-center justify-center cursor-pointer ${
                  activeTab === cat.id
                    ? 'bg-[#C59842] text-white shadow-sm'
                    : 'bg-white border border-[#ECE7DF] text-stone-700 active:bg-stone-100'
                }`}
              >
                {cat.shortTitle}
              </button>
            ))}
          </div>
        </div>

        {/* Compact Category Overview Cards (~90-110px tall, NO bullets!) */}
        {activeTab === 'all' && (
          <div className="px-4 mb-5 space-y-2.5">
            <div className="flex items-center justify-between mb-1">
              <span className="font-sans text-[11px] tracking-[0.2em] font-semibold text-[#C59842] uppercase">
                Category Overview
              </span>
            </div>

            {SERVICE_CATEGORIES.map((category) => (
              <Link
                key={category.id}
                href={`/services/${category.slug}`}
                className="bg-white border border-[#ECE7DF] rounded-xl p-3.5 shadow-sm active:scale-[0.99] transition-transform flex items-center justify-between gap-3 block"
              >
                {/* Left: Circular Icon */}
                <div className="w-11 h-11 rounded-full border border-[#C59842]/30 bg-[#FAF8F5] flex items-center justify-center text-[#C59842] shrink-0">
                  <ServiceIcon type={category.iconType} className="w-5 h-5 stroke-current" />
                </div>

                {/* Center: Title & Description */}
                <div className="flex-1 min-w-0">
                  <h2 className="font-sans font-bold text-[14px] text-[#1F1F1F] uppercase leading-tight truncate">
                    {category.title}
                  </h2>
                  <p className="font-sans text-stone-600 font-light text-[12px] truncate mt-0.5">
                    {category.description}
                  </p>
                  <span className="font-sans text-[#C59842] font-semibold text-[11px] tracking-wider uppercase block mt-1">
                    {category.totalServices}
                  </span>
                </div>

                {/* Right: Chevron Arrow */}
                <div className="text-[#C59842] shrink-0 pl-1">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Detailed Service Category Lists (Compact Mobile Rows) */}
        <div className="px-4 space-y-5">
          {filteredCategories.map((category) => (
            <div key={category.id} id={`mobile-${category.slug}`} className="scroll-mt-24">
              {/* Category Header Banner */}
              <div className="flex items-center justify-between border-b border-[#ECE7DF] pb-1.5 mb-2.5">
                <div>
                  <span className="font-sans text-[10px] tracking-[0.2em] font-semibold text-[#C59842] uppercase block">
                    {category.label}
                  </span>
                  <h3 className="font-serif text-[17px] font-semibold text-[#1F1F1F]">
                    {category.detailHeading}
                  </h3>
                </div>
                <Link
                  href={`/services/${category.slug}`}
                  className="text-[11px] font-semibold text-[#C59842] uppercase flex items-center gap-0.5 shrink-0"
                >
                  <span>View All</span>
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              {/* Compact Service Rows */}
              <div className="bg-white border border-[#ECE7DF] rounded-xl p-1 shadow-sm divide-y divide-[#ECE7DF]/60">
                {category.items.map((item, index) => (
                  <div
                    key={index}
                    className="p-3 flex items-center justify-between gap-3 active:bg-[#FAF8F5]"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-8 h-8 rounded-full border border-[#C59842]/25 bg-[#FAF8F5] flex items-center justify-center text-[#C59842] shrink-0">
                        <ServiceIcon type={category.iconType} className="w-4 h-4 stroke-current" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-sans font-bold text-[13px] text-[#1F1F1F] uppercase truncate">
                          {item.name}
                        </h4>
                        <p className="font-sans text-stone-500 font-light text-[11px] truncate mt-0.5">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    <a
                      href={`https://wa.me/919446869346?text=${encodeURIComponent(
                        `Please enter the details...\nName:\nDate:\nService: ${item.name}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] tracking-wider font-bold uppercase text-[#C59842] shrink-0 flex items-center gap-1 bg-[#FAF8F5] border border-[#C59842]/30 px-2.5 py-1.5 rounded-lg active:bg-[#C59842] active:text-white transition-colors"
                    >
                      <span>Book</span>
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Sticky Bottom Full-Width CTA */}
        <div className="fixed bottom-0 left-0 right-0 z-40 p-3 bg-[#FAF8F5]/90 backdrop-blur-md border-t border-[#ECE7DF] md:hidden">
          <a
            href={`https://wa.me/919446869346?text=${encodeURIComponent(
              'Please enter the details...\nName:\nDate:\nService: '
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-12 bg-[#C59842] hover:bg-[#B58832] active:scale-[0.98] text-white font-sans text-xs font-semibold tracking-[0.2em] uppercase rounded-xl shadow-lg flex items-center justify-center gap-2 transition-all"
          >
            <span>Book Appointment</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

      </div>

      {/* ════════════════════════════════════════════════════════════════
          DESKTOP-ONLY SERVICES PAGE LAYOUT (≥ md) — UNCHANGED
      ════════════════════════════════════════════════════════════════ */}
      <main className="hidden md:block flex-grow pt-24 pb-20 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto w-full">
        
        {/* Top Header Block */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="mb-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-stone-500 hover:text-[#C59842] text-xs tracking-widest font-semibold uppercase transition-colors group focus:outline-none mb-6"
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
              <span>Back to Home</span>
            </Link>
          </div>

          <div className="relative mb-6 select-none w-[240px] sm:w-[280px] h-auto">
            <Image
              src="/assets/hero texxt.png"
              alt="Loran's Gents Beauty Parlour & Make Up Studio"
              width={280}
              height={140}
              className="object-contain w-full h-auto"
              priority
            />
          </div>
          
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-wide text-[#1F1F1F] uppercase mt-2">
            Services Catalog
          </h1>
          
          <div className="flex items-center justify-center gap-3 my-4" aria-hidden="true">
            <div className="w-10 h-[1px] bg-[#ECE7DF]" />
            <span className="text-[#C59842] text-[11px]">✕</span>
            <div className="w-10 h-[1px] bg-[#ECE7DF]" />
          </div>

          <p className="font-sans text-xs sm:text-sm text-stone-600 font-light max-w-xl leading-relaxed">
            Explore our curated grooming and beauty directory crafted specifically for every occasion.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-10 max-w-4xl">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-[#C59842] text-white shadow-sm'
                  : 'bg-white border border-[#ECE7DF] text-stone-700 hover:border-[#C59842] hover:text-[#C59842]'
              }`}
            >
              All Categories
            </button>
            {SERVICE_CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  activeTab === cat.id
                    ? 'bg-[#C59842] text-white shadow-sm'
                    : 'bg-white border border-[#ECE7DF] text-stone-700 hover:border-[#C59842] hover:text-[#C59842]'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>

        {/* Overview Section: 3x2 Category Grid (Reference Image 1) */}
        {activeTab === 'all' && (
          <div className="mb-20">
            <div className="text-center mb-8">
              <span className="font-sans text-xs tracking-[0.3em] font-semibold text-[#C59842] uppercase">
                Category Overview
              </span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {SERVICE_CATEGORIES.map((category) => (
                <Link
                  key={category.id}
                  href={`/services/${category.slug}`}
                  className="bg-white border border-[#ECE7DF] rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between cursor-pointer"
                >
                  <div>
                    <div className="flex items-start gap-4 mb-4">
                      <div 
                        className="w-14 h-14 rounded-full border border-[#C59842]/30 bg-[#FAF8F5] flex items-center justify-center text-[#C59842] flex-shrink-0 group-hover:bg-[#C59842] group-hover:text-white transition-colors duration-300"
                        aria-hidden="true"
                      >
                        <ServiceIcon type={category.iconType} className="w-6 h-6 stroke-current" />
                      </div>
                      <div>
                        <h3 className="font-sans font-bold text-base sm:text-lg tracking-wider text-[#1F1F1F] uppercase leading-tight mt-1">
                          {category.title}
                        </h3>
                      </div>
                    </div>

                    <p className="font-sans text-stone-600 font-light text-xs sm:text-sm leading-relaxed mb-5">
                      {category.description}
                    </p>

                    <ul className="space-y-2 mb-6">
                      {category.featured.map((item, i) => (
                        <li key={i} className="flex items-center font-sans text-xs text-stone-600">
                          <span className="text-[#C59842] font-bold mr-2 text-sm">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-[#ECE7DF] pt-4 mt-auto flex items-center justify-between">
                    <span className="font-sans text-[10px] tracking-widest font-semibold text-stone-500 uppercase">
                      {category.totalServices}
                    </span>
                    <span className="font-sans text-xs tracking-wider font-semibold uppercase text-[#C59842] group-hover:text-[#B58832] inline-flex items-center gap-1.5 transition-colors">
                      <span>Explore Services</span>
                      <svg 
                        className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform duration-300" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Detailed Service Category Sections (Reference Image 2) */}
        <div className="space-y-16">
          {filteredCategories.map((category) => (
            <div key={category.id} id={category.slug} className="scroll-mt-28">
              {/* Category Header Banner */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#ECE7DF] pb-4 mb-6 gap-2">
                <div>
                  <span className="font-sans text-xs tracking-[0.25em] font-semibold text-[#C59842] uppercase block mb-1">
                    {category.label}
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl text-[#1F1F1F]">
                    {category.detailHeading}
                  </h2>
                </div>
                <Link
                  href={`/services/${category.slug}`}
                  className="font-sans text-xs tracking-wider font-semibold text-[#C59842] hover:text-[#B58832] uppercase inline-flex items-center gap-1 self-start sm:self-end"
                >
                  <span>View Dedicated Page</span>
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>

              {/* Service Rows (Reference Image 2 style) */}
              <div className="bg-white border border-[#ECE7DF] rounded-2xl p-2 sm:p-4 shadow-sm">
                <div className="divide-y divide-[#ECE7DF]/70">
                  {category.items.map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:p-5 hover:bg-[#FAF8F5]/80 rounded-xl transition-all duration-300 group gap-3"
                    >
                      <div className="flex items-start sm:items-center gap-4">
                        <div className="w-10 h-10 rounded-full border border-[#C59842]/30 bg-[#FAF8F5] flex items-center justify-center text-[#C59842] flex-shrink-0 group-hover:bg-[#C59842] group-hover:text-white transition-colors duration-300">
                          <ServiceIcon type={category.iconType} className="w-5 h-5 stroke-current" />
                        </div>
                        <div>
                          <h3 className="font-sans font-bold text-sm sm:text-base tracking-wider text-[#1F1F1F] uppercase">
                            {item.name}
                          </h3>
                          <p className="font-sans text-stone-500 font-light text-xs sm:text-sm mt-0.5 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>

                      <div className="flex-shrink-0 self-end sm:self-center">
                        <a
                          href={`https://wa.me/919446869346?text=${encodeURIComponent(
                            `Please enter the details...\nName:\nDate:\nService: ${item.name}`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs tracking-[0.2em] font-semibold uppercase text-[#C59842] group-hover:text-[#B58832] transition-colors"
                        >
                          <span>Book Now</span>
                          <svg
                            className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </main>

      <Contact />
    </div>
  );
}
