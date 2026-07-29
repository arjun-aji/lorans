import Image from 'next/image';

export default function About() {
  const statCards = (
    <div className="grid grid-cols-3 gap-3 sm:gap-6 w-full max-w-xl">
      {/* Stat 1: Years of Experience */}
      <div className="flex flex-col items-center justify-center p-4 sm:p-5 bg-white border border-stone-200/50 rounded-sm shadow-sm hover:shadow-md hover:border-[#c59842]/40 transition-all duration-300 group">
        <svg
          className="w-6 h-6 sm:w-7 sm:h-7 text-[#c59842] fill-none stroke-current stroke-[1.2] mb-2 sm:mb-3 group-hover:scale-115 transition-transform duration-300"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v12.5M12 14.5a3.5 3.5 0 003.5-3.5V6h-7v5a3.5 3.5 0 003.5 3.5z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M5.5 6c-1 0-1.5.5-1.5 1.5v2c0 1 .5 1.5 1.5 1.5h1M18.5 6c1 0 1.5.5 1.5 1.5v2c0 1-.5 1.5-1.5 1.5h-1" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 22h6M12 18v4" />
        </svg>
        <span className="font-sans font-bold text-lg sm:text-2xl text-stone-900">26+</span>
        <span className="font-sans text-[7.5px] sm:text-[9px] tracking-widest text-stone-500 font-semibold text-center mt-1.5 uppercase leading-snug">
          Years of<br />Experience
        </span>
      </div>

      {/* Stat 2: Happy Customers */}
      <div className="flex flex-col items-center justify-center p-4 sm:p-5 bg-white border border-stone-200/50 rounded-sm shadow-sm hover:shadow-md hover:border-[#c59842]/40 transition-all duration-300 group">
        <svg
          className="w-6 h-6 sm:w-7 sm:h-7 text-[#c59842] fill-none stroke-current stroke-[1.2] mb-2 sm:mb-3 group-hover:scale-115 transition-transform duration-300"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
          <circle cx="9" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M23 21v-2a4 4 0 00-3-3.87" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 3.13a4 4 0 010 7.75" />
        </svg>
        <span className="font-sans font-bold text-lg sm:text-2xl text-stone-900">5000+</span>
        <span className="font-sans text-[7.5px] sm:text-[9px] tracking-widest text-stone-500 font-semibold text-center mt-1.5 uppercase leading-snug">
          Happy<br />Customers
        </span>
      </div>

      {/* Stat 3: Professional Workers */}
      <div className="flex flex-col items-center justify-center p-4 sm:p-5 bg-white border border-stone-200/50 rounded-sm shadow-sm hover:shadow-md hover:border-[#c59842]/40 transition-all duration-300 group">
        <svg
          className="w-6 h-6 sm:w-7 sm:h-7 text-[#c59842] fill-none stroke-current stroke-[1.2] mb-2 sm:mb-3 group-hover:scale-115 transition-transform duration-300"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle cx="6" cy="6" r="3" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="6" cy="18" r="3" strokeLinecap="round" strokeLinejoin="round" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M20 4L8.5 11.7M8.5 12.3L20 20" />
        </svg>
        <span className="font-sans font-bold text-lg sm:text-2xl text-stone-900">3</span>
        <span className="font-sans text-[7.5px] sm:text-[9px] tracking-widest text-stone-500 font-semibold text-center mt-1.5 uppercase leading-snug">
          Professional<br />Workers
        </span>
      </div>
    </div>
  );

  return (
    <section
      id="about"
      className="py-16 sm:py-24 bg-[#FAF8F5] border-t border-stone-200/40 lg:min-h-screen lg:flex lg:items-center"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-20 items-center">

          {/* Left Column: Story & Desktop Statistics */}
          <div className="md:col-span-7 flex flex-col items-center md:items-start text-center md:text-left">
            <span className="font-sans text-[11px] sm:text-xs tracking-[0.25em] font-semibold text-amber-800 uppercase mb-3">
              About Loran&apos;s Ramalloor
            </span>
            <h2
              id="about-heading"
              className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light tracking-wide text-stone-900 mb-4"
            >
              Who We Are
            </h2>

            {/* Elegant Line Divider */}
            <div className="w-16 h-[1.5px] bg-[#c59842] mb-6 sm:mb-8" aria-hidden="true" />

            {/* Description Text */}
            <div className="font-sans text-stone-600 font-light leading-relaxed text-sm sm:text-base space-y-5 sm:space-y-6 max-w-2xl">
              <p>
                Loran&apos;s Gents Beauty Parlour &amp; Make Up Studio is the destination for professional men&apos;s grooming, ladies&apos; haircutting, and specialized makeup services in Ramalloor, Ernakulam. Conveniently situated near Kothamangalam we offer complete hair and skin care solutions under one roof.
              </p>
              <p>
                From classic haircuts and precision beard styling to advanced Keratin treatments, Hydra Facials, hair spa, waxing, manicures, pedicures, and HD wedding groom makeup, our skilled stylists bring over 20 years of experience delivering excellence across Kerala.
              </p>
            </div>

            {/* Cursive Handwriting Signature */}
            <span
              className="font-signature text-3xl sm:text-4xl text-[#c59842] mt-4 sm:mt-6 mb-6 md:mb-12 block select-none"
              aria-label="Loran's Team Signature"
            >
              Loran&apos;s Team
            </span>

            {/* Statistics Row (Desktop View) */}
            <div className="hidden md:block w-full">
              {statCards}
            </div>
          </div>

          {/* Right Column: High-End Salon Imagery & Mobile Statistics */}
          <div className="md:col-span-5 w-full flex flex-col items-center">
            <div className="relative h-[280px] sm:h-[380px] lg:h-[460px] w-full overflow-hidden shadow-xl rounded-sm group">
              <Image
                src="/assets/about1.png"
                alt="Styling stations at Loran's Gents Beauty & Make Up Studio Ramalloor"
                title="Loran's Gents Beauty Parlour & Make Up Studio Ramalloor Interior"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 40vw"
                loading="lazy"
              />
              {/* Soft overlay borders representing architectural luxury */}
              <div className="absolute inset-4 border border-white/10 pointer-events-none transition-all duration-500 group-hover:inset-3" />
            </div>

            {/* Statistics Row (Mobile View: Positioned directly below the About Image) */}
            <div className="md:hidden mt-8 w-full flex justify-center">
              {statCards}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
