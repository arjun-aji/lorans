import Image from "next/image";
import Header from "@/components/Header";
import About from "@/components/About";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Preloader from "@/components/Preloader";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-stone-900 font-sans">
      <Preloader />
      {/* Premium Header/Navigation */}
      <Header />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section
          className="relative h-[100dvh] md:h-auto md:min-h-[700px] lg:min-h-screen flex items-center overflow-hidden bg-[#FAF8F5] pt-20"
          aria-label="Welcome to Loran's"
        >
          {/* Background Image Container (Full screen to allow image to be visible on the left) */}
          <div className="absolute inset-0 z-0 select-none">
            <Image
              src="/assets/hero.jpeg"
              alt="Professional barber styling a gentleman's hair at Loran's Hair Cutting Saloon"
              fill
              priority
              className="object-cover object-[80%_30%] animate-slow-zoom"
              sizes="100vw"
            />
          </div>

          {/* White shadow (cream overlay) smooth gradient - no middle border, lets background peek through on the left */}
          <div
            className="absolute inset-0 z-10 bg-gradient-to-b from-[#FAF8F5]/90 via-[#FAF8F5]/75 to-[#FAF8F5]/90 md:bg-gradient-to-r md:from-[#FAF8F5]/92 md:via-[#FAF8F5]/78 md:via-42% md:to-transparent"
            aria-hidden="true"
          />

          {/* Content Container */}
          <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-12 w-full flex items-center h-full">
            <div className="max-w-xl text-center md:text-left flex flex-col items-center md:items-start w-full animate-fade-in-up">
              {/* Category tag */}
              <span className="font-sans text-[11px] sm:text-xs tracking-[0.25em] font-medium text-amber-800 uppercase mb-3">
                Premium Grooming for Men
              </span>

              {/* Brand Title */}
              <h1 className="sr-only">Loran&apos;s</h1>
              <div className="relative w-[190px] h-[48px] sm:w-[285px] sm:h-[72px] lg:w-[380px] lg:h-[96px] mb-4">
                <Image
                  src="/assets/lorans_logo_black.png"
                  alt="Loran's"
                  fill
                  priority
                  className="object-contain"
                />
              </div>

              {/* Sub-Title */}
              <h2 className="font-serif text-base sm:text-xl tracking-[0.2em] font-medium text-amber-700 uppercase mt-1 mb-6 sm:mb-8">
                Gents Beauty Parlour
              </h2>

              {/* Tagline Divider Block */}
              <div className="w-full border-y border-stone-300/80 py-3.5 my-6 sm:my-8 max-w-md">
                <p className="font-sans text-[11px] sm:text-xs tracking-[0.3em] font-semibold text-stone-850 uppercase text-center md:text-left">
                  Where Style Meets Precision
                </p>
              </div>

              {/* Description Paragraph */}
              <p className="font-sans text-stone-600 font-light leading-relaxed text-sm sm:text-base max-w-md mb-8 sm:mb-10">
                Professional grooming services tailored for the modern gentleman. Because confidence looks good on you.
              </p>

              {/* CTA Button */}
              <a
                href={`https://wa.me/917356568307?text=${encodeURIComponent(
                  "Please enter the details...\nName:\nDate:\nService: "
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#c59842] hover:bg-[#b58832] text-white text-xs sm:text-sm tracking-[0.2em] font-semibold uppercase px-8 py-4.5 sm:px-10 sm:py-5 transition-all duration-300 shadow-lg shadow-gold-500/10 group focus:outline-none focus:ring-2 focus:ring-[#c59842] focus:ring-offset-2"
              >
                <span>Book Appointment</span>
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

          {/* Scroll Down Indicator */}
          <div
            className="absolute bottom-8 left-6 lg:left-12 z-20 hidden sm:flex items-center gap-3 text-stone-500"
            aria-hidden="true"
          >
            <div className="w-6 h-10 border border-stone-400 rounded-full flex justify-center p-1.5">
              <div className="w-1 h-2 bg-stone-500 rounded-full animate-bounce"></div>
            </div>
            <span className="text-[9px] tracking-[0.25em] font-semibold uppercase font-sans">Scroll Down</span>
          </div>
        </section>

        {/* Services Section */}
        <Services />

        {/* Gallery Section */}
        <Gallery />

        {/* About Section */}
        <About />

        {/* FAQ Section */}
        <Faq />

        {/* Contact & Footer Section */}
        <Contact />
      </main>
    </div>
  );
}
