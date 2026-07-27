'use client';

import React from 'react';
import Link from 'next/link';
import ServiceIcon from './ServiceIcon';
import { SERVICE_CATEGORIES } from '@/data/servicesData';

export default function Services() {
  return (
    <section
      id="services"
      className="py-16 sm:py-24 bg-[#FAF8F5] border-t border-[#ECE7DF] lg:min-h-screen lg:flex lg:items-center"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full">

        {/* Section Header */}
        <div className="text-center flex flex-col items-center max-w-2xl mx-auto">
          <span className="font-sans text-[11px] sm:text-xs tracking-[0.3em] font-semibold text-[#C59842] uppercase mb-2">
            Our Services
          </span>
          <h2
            id="services-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#1F1F1F]"
          >
            Look Good, Feel Great
          </h2>

          {/* Subtle Luxury Divider */}
          <div className="flex items-center justify-center gap-3 my-4 sm:my-5" aria-hidden="true">
            <div className="w-10 h-[1px] bg-[#ECE7DF]" />
            <span className="text-[#C59842] text-[11px]">✕</span>
            <div className="w-10 h-[1px] bg-[#ECE7DF]" />
          </div>

          <p className="font-sans text-stone-600 font-light text-xs sm:text-sm lg:text-base leading-relaxed px-2">
            Explore our grooming and beauty services tailored for every occasion.
          </p>
        </div>

        {/* 6 Category Cards Grid (2-column on mobile, 3-column on desktop) */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6 lg:gap-8 mt-8 sm:mt-16">
          {SERVICE_CATEGORIES.map((category) => (
            <Link
              key={category.id}
              href={`/services/${category.slug}`}
              className="bg-white border border-[#ECE7DF] rounded-2xl p-3.5 sm:p-6 lg:p-8 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between cursor-pointer"
            >
              <div>
                {/* Header Row with Icon & Title */}
                <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4 mb-3 sm:mb-4">
                  <div
                    className="w-10 h-10 sm:w-14 sm:h-14 rounded-full border border-[#C59842]/30 bg-[#FAF8F5] flex items-center justify-center text-[#C59842] flex-shrink-0 group-hover:bg-[#C59842] group-hover:text-white transition-colors duration-300"
                    aria-hidden="true"
                  >
                    <ServiceIcon type={category.iconType} className="w-5 h-5 sm:w-6 sm:h-6 stroke-current" />
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-xs sm:text-base lg:text-lg tracking-wider text-[#1F1F1F] uppercase leading-tight mt-0.5 sm:mt-1">
                      {category.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="font-sans text-stone-600 font-light text-[11px] sm:text-xs lg:text-sm leading-tight sm:leading-relaxed mb-3 sm:mb-5">
                  {category.description}
                </p>

                {/* Bullet List of Featured Services */}
                <ul className="space-y-1 sm:space-y-2 mb-4 sm:mb-6">
                  {category.featured.map((item, i) => (
                    <li key={i} className="flex items-center font-sans text-[10px] sm:text-xs text-stone-600">
                      <span className="text-[#C59842] font-bold mr-1.5 sm:mr-2 text-xs sm:text-sm">•</span>
                      <span className="truncate">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer */}
              <div className="border-t border-[#ECE7DF] pt-3 sm:pt-4 mt-auto flex items-center justify-between">
                <span className="font-sans text-[9px] sm:text-[10px] tracking-wider sm:tracking-widest font-semibold text-stone-500 uppercase">
                  {category.totalServices}
                </span>
                <span className="font-sans text-[10px] sm:text-xs tracking-wider font-semibold uppercase text-[#C59842] group-hover:text-[#B58832] inline-flex items-center gap-1 sm:gap-1.5 transition-colors">
                  <span>Explore</span>
                  <svg
                    className="w-3 h-3 sm:w-3.5 sm:h-3.5 transform group-hover:translate-x-1 transition-transform duration-300"
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

        {/* View All Services CTA Button */}
        <div className="flex justify-center mt-8 sm:mt-16 w-full">
          <Link
            href="/services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#C59842] hover:bg-[#B58832] text-white text-xs sm:text-sm tracking-[0.2em] font-semibold uppercase px-8 sm:px-10 py-4 sm:py-4.5 rounded-lg sm:rounded-md transition-all duration-300 shadow-md shadow-[#C59842]/15 group focus:outline-none focus:ring-2 focus:ring-[#C59842] focus:ring-offset-2 text-center"
          >
            <span>View All Services</span>
            <svg
              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}
