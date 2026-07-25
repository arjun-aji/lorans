'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function ServicesPage() {
  const services = [
    {
      title: 'Haircut & Styling',
      description: 'Customized haircut options tailored specifically to your facial structure and hair type. Includes relaxing hair wash, blow dry, and styling with premium pomades.',
      icon: (
        <svg className="w-8 h-8 text-[#c59842] fill-none stroke-current stroke-[1.2]" viewBox="0 0 24 24">
          <circle cx="6" cy="6" r="3" />
          <circle cx="6" cy="18" r="3" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M20 4L8.5 11.7M8.5 12.3L20 20" />
        </svg>
      ),
    },
    {
      title: 'Beard Styling & Shaving',
      description: 'Shaping, line cleaning, and trimming with professional detailers. Features hot towel steam service and post-shave botanical oils to nourish the skin.',
      icon: (
        <svg className="w-8 h-8 text-[#c59842] fill-none stroke-current stroke-[1.2]" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14c-1.5-1.5-3.5-2-5-2-2 0-4 1-5 2.5 1.5 2 4.5 2.5 6 1 .5-.5 1-1.5 1-1.5s.5 1 1 1.5c1.5 1.5 4.5 1 6-1-1-1.5-3-2.5-5-2.5-1.5 0-3.5.5-5 2z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5M9 4h6" />
        </svg>
      ),
    },
    {
      title: 'Therapeutic Hair Spa',
      description: 'Deep conditioning treatment designed to restore moisture, prevent breakage, and refresh the scalp. Includes a revitalizing head massage and steam treatment.',
      icon: (
        <svg className="w-8 h-8 text-[#c59842] fill-none stroke-current stroke-[1.2]" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c0 0-4 4.5-4 8.5S10 17 12 17s4-1 4-5.5S12 3 12 3z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 17c-2 0-6.5-1.5-8-5.5 1.5-1 4.5-1.5 6.5 1.5M12 17c2 0 6.5-1.5 8-5.5-1.5-1-4.5-1.5-6.5 1.5M12 17v4M7 21h10" />
        </svg>
      ),
    },
    {
      title: 'Skincare Facial',
      description: 'A deep-cleansing facial to remove impurities, scrub off dead cells, and apply clay hydration packs to achieve smooth, healthy, and glowing skin.',
      icon: (
        <svg className="w-8 h-8 text-[#c59842] fill-none stroke-current stroke-[1.2]" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 22c4.97 0 9-4.03 9-9 0-6.5-4-11-9-11S3 6.5 3 13c0 4.97 4.03 9 9 9z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 12.5c.5-.5 1.5-.5 2 0M14 12.5c.5-.5 1.5-.5 2 0M10 16.5c1 1 3 1 4 0" />
        </svg>
      ),
    },
    {
      title: 'Premium Hair Coloring',
      description: 'Professional grey coverage or highlights using high-end, scalp-safe formulas. Done with precision to achieve natural, rich shades that last.',
      icon: (
        <svg className="w-8 h-8 text-[#c59842] fill-none stroke-current stroke-[1.2]" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 3L6 15v5h5L21 8z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 6l3 3M6 15l-3 3M10 19v2M12 21h2" />
        </svg>
      ),
    },
    {
      title: 'Kids Haircut',
      description: 'Comfortable, stylish, and quick haircuts for our younger clients. Administered in a patient, welcoming manner to ensure a fun experience.',
      icon: (
        <svg className="w-8 h-8 text-[#c59842] fill-none stroke-current stroke-[1.2]" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="8" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 14a4 4 0 008 0" />
          <circle cx="9.5" cy="10.5" r="1" fill="currentColor" />
          <circle cx="14.5" cy="10.5" r="1" fill="currentColor" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 9c2-1 4-1 6-1 2 0 3 .5 4 2" />
        </svg>
      ),
    },
  ];

  return (
    <main className="min-h-screen bg-[#FAF8F5] py-20 px-6 sm:px-12 flex flex-col justify-between">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Top Back Link */}
        <div className="mb-8 flex justify-start">
          <Link
            href="/#services"
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
            <span>Back to Services</span>
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
            All Salon Services
          </h1>
          <div className="w-12 h-px bg-[#c59842] my-4" />
          <p className="font-sans text-xs sm:text-sm text-stone-500 font-light max-w-md">
            Explore our curated grooming directory crafted specifically for the modern gentleman.
          </p>
        </div>

        {/* Detailed Services Listing as a 3-column Grid on Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="flex flex-col justify-between p-6 bg-white border border-stone-200/50 rounded-sm shadow-md hover:shadow-lg transition-shadow duration-300 min-h-[270px]"
            >
              <div>
                <div className="flex-shrink-0 text-[#c59842] bg-[#FAF8F5] p-3 rounded-sm border border-stone-100 shadow-sm w-fit mb-4" aria-hidden="true">
                  {service.icon}
                </div>
                <div className="space-y-2 mb-6">
                  <h2 className="font-sans font-bold text-base tracking-wider text-stone-900 uppercase">
                    {service.title}
                  </h2>
                  <p className="font-sans text-stone-600 font-light text-xs leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>

              <a 
                href={`https://wa.me/917356568307?text=${encodeURIComponent(
                  `Please enter the details...\nName:\nDate:\nService: ${service.title}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs tracking-[0.2em] font-bold uppercase text-[#c59842] hover:text-[#b58832] transition-colors group/link focus-visible:outline-none mt-auto"
              >
                <span>Book Now</span>
                <svg 
                  className="w-3.5 h-3.5 transform group-hover/link:translate-x-0.5 transition-transform duration-300" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </a>
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
