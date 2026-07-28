import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ServiceIcon from '@/components/ServiceIcon';
import Header from '@/components/Header';
import Contact from '@/components/Contact';
import Preloader from '@/components/Preloader';
import StructuredData from '@/components/StructuredData';
import { getCategoryBySlug, SERVICE_CATEGORIES } from '@/data/servicesData';

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

export async function generateStaticParams() {
  return SERVICE_CATEGORIES.map((cat) => ({
    category: cat.slug,
  }));
}

export async function generateMetadata({ params }: CategoryPageProps) {
  const { category: slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    return {
      title: "Services | Loran's Gents Beauty Parlour & Make Up Studio Ramalloor",
    };
  }

  return {
    title: `${category.title} Services in Ramalloor | Loran's Gents Beauty & Make Up Studio`,
    description: `${category.detailDescription} Premium ${category.title.toLowerCase()} in Ramalloor, Kolenchery, Ernakulam, Kerala at Loran's Salon.`,
    keywords: [
      category.title,
      `${category.title} Ramalloor`,
      `${category.title} Kolenchery`,
      `${category.title} Ernakulam`,
      "Loran's Gents Beauty & Make Up Studio",
      "Men's Beauty Parlour Ramalloor",
      "Best Beauty Parlour Ramalloor",
      "Grooming Kerala"
    ],
    alternates: {
      canonical: `/services/${category.slug}`,
    },
    openGraph: {
      title: `${category.title} Services in Ramalloor | Loran's Gents Beauty & Make Up Studio`,
      description: `${category.detailDescription} Premium ${category.title.toLowerCase()} in Ramalloor, Kolenchery, Ernakulam, Kerala at Loran's Salon.`,
      url: `https://www.loransmakeupstudio.com/services/${category.slug}`,
      images: [
        {
          url: category.image,
          alt: `${category.title} at Loran's Gents Beauty & Make Up Studio Ramalloor`,
        },
      ],
    },
  };
}

export default async function CategoryDetailPage({ params }: CategoryPageProps) {
  const { category: slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Services Catalog', url: '/services' },
    { name: category.title, url: `/services/${category.slug}` }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-stone-900 font-sans">
      <Preloader />
      <Header />
      <StructuredData
        breadcrumbs={breadcrumbs}
        serviceName={category.title}
        serviceDescription={category.detailDescription}
      />

      <main className="flex-grow pt-24 pb-20 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto w-full">
        {/* Top Back Navigation & Logo Header */}
        <div className="mb-10 flex flex-col md:flex-row items-center justify-between gap-6 border-b border-[#ECE7DF] pb-6">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-stone-500 hover:text-[#C59842] text-xs tracking-widest font-semibold uppercase transition-colors group focus:outline-none"
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
            <span>Back to Services</span>
          </Link>

          {/* Centered Logo */}
          <Link href="/" className="relative w-[180px] h-[48px] block select-none">
            <Image
              src="/assets/hero texxt.png"
              alt="Loran's Gents Beauty Parlour & Make Up Studio Ramalloor"
              width={180}
              height={48}
              priority
              className="object-contain w-full h-auto"
            />
          </Link>

          <div className="hidden md:block w-32" aria-hidden="true" />
        </div>

        {/* Hero Banner for Category Detail */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white border border-[#ECE7DF] rounded-2xl p-6 sm:p-10 shadow-sm mb-12">
          {/* Left Text Block */}
          <div className="lg:col-span-8 flex flex-col items-start">
            <span className="font-sans text-xs tracking-[0.3em] font-semibold text-[#C59842] uppercase mb-3">
              {category.label}
            </span>
            
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1F1F1F] leading-tight mb-4">
              {category.detailHeading}
            </h1>

            <div className="w-12 h-[2px] bg-[#C59842] mb-5 rounded-full" />

            <p className="font-sans text-stone-600 font-light text-sm sm:text-base leading-relaxed max-w-2xl">
              {category.detailDescription}
            </p>
          </div>

          {/* Right Lifestyle Image */}
          <div className="lg:col-span-4 relative h-64 sm:h-72 w-full rounded-xl overflow-hidden shadow-md border border-[#ECE7DF]">
            <Image
              src={category.image}
              alt={`${category.title} services at Loran's Gents Beauty & Make Up Studio Ramalloor`}
              fill
              className="object-cover object-center transform hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 1024px) 100vw, 33vw"
              priority
            />
          </div>
        </div>

        {/* Elegant Service List Rows */}
        <div className="bg-white border border-[#ECE7DF] rounded-2xl p-3 sm:p-6 shadow-sm">
          <div className="divide-y divide-[#ECE7DF]/70">
            {category.items.map((item, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:p-6 hover:bg-[#FAF8F5]/80 rounded-xl transition-all duration-300 group gap-4"
              >
                {/* Left: Icon & Service Info */}
                <div className="flex items-start sm:items-center gap-4">
                  <div 
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-[#C59842]/30 bg-[#FAF8F5] flex items-center justify-center text-[#C59842] flex-shrink-0 group-hover:bg-[#C59842] group-hover:text-white transition-colors duration-300"
                    aria-hidden="true"
                  >
                    <ServiceIcon type={category.iconType} className="w-5 h-5 stroke-current" />
                  </div>

                  <div>
                    <h2 className="font-sans font-bold text-sm sm:text-base tracking-wider text-[#1F1F1F] uppercase">
                      {item.name}
                    </h2>
                    <p className="font-sans text-stone-500 font-light text-xs sm:text-sm leading-relaxed mt-1 max-w-2xl">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Right: Book Now WhatsApp CTA */}
                <div className="flex-shrink-0 self-end sm:self-center">
                  <a
                    href={`https://wa.me/919446869346?text=${encodeURIComponent(
                      `Please enter the details...\nName:\nDate:\nService: ${item.name}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs tracking-[0.2em] font-semibold uppercase text-[#C59842] group-hover:text-[#B58832] transition-colors focus:outline-none"
                  >
                    <span>Book Now</span>
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
            ))}
          </div>
        </div>

        {/* Other Categories Links Navigation */}
        <div className="mt-16 pt-10 border-t border-[#ECE7DF]">
          <h3 className="font-sans text-xs tracking-[0.25em] font-semibold text-stone-500 uppercase text-center mb-6">
            Explore Other Service Categories
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {SERVICE_CATEGORIES.map((cat) => (
              <Link
                key={cat.id}
                href={`/services/${cat.slug}`}
                className={`p-3 text-center rounded-xl border text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                  cat.slug === category.slug
                    ? 'border-[#C59842] bg-[#C59842] text-white shadow-sm'
                    : 'border-[#ECE7DF] bg-white text-stone-700 hover:border-[#C59842]/60 hover:text-[#C59842]'
                }`}
              >
                {cat.title}
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Contact />
    </div>
  );
}
