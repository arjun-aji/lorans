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
        {/* ── HERO SECTION ──────────────────────────────────────────────── */}
        <section
          id="hero"
          className="relative overflow-hidden bg-[#FAF8F5]"
          aria-label="Welcome to Loran's Gents Beauty Parlour"
        >

          {/* ════════════════════════════════════════════════════════════════
              MOBILE HERO  (< md)  — editorial stacked layout
          ════════════════════════════════════════════════════════════════ */}
          <div className="md:hidden flex flex-col min-h-[100dvh]">

            {/* ── TOP: Content block (≈60% of viewport) ── */}
            <div className="flex flex-col px-7 pt-[calc(4rem+48px)] pb-10 flex-shrink-0">

              {/* Gold label */}
              <span
                className="font-sans text-[12px] tracking-[0.35em] font-medium uppercase opacity-0"
                style={{
                  color: "#C59842",
                  animation: "fade-in-up 0.7s cubic-bezier(0.16,1,0.3,1) 0.1s forwards",
                  marginBottom: "20px",
                }}
              >
                Grooming for Men
              </span>

              {/* Heading image (hero texxt.png) */}
              <div
                className="opacity-0"
                style={{
                  animation: "fade-in-up 0.8s cubic-bezier(0.16,1,0.3,1) 0.22s forwards",
                  marginBottom: "24px",
                  maxWidth: "320px",
                }}
              >
                <Image
                  src="/assets/hero texxt.png"
                  alt="Loran's Gents Beauty Parlour & Make Up Studio"
                  width={320}
                  height={160}
                  priority
                  className="object-contain object-left w-full h-auto"
                />
              </div>

              {/* Badge */}
              <div
                className="opacity-0"
                style={{
                  animation: "fade-in-up 0.7s cubic-bezier(0.16,1,0.3,1) 0.34s forwards",
                  marginBottom: "40px",
                }}
              >
                <span
                  className="inline-flex items-center text-white font-sans font-semibold tracking-[0.16em] uppercase rounded-full shadow-md"
                  style={{
                    background: "#C59842",
                    fontSize: "10px",
                    height: "38px",
                    paddingLeft: "20px",
                    paddingRight: "20px",
                  }}
                >
                  Ladies Hair Cutting
                </span>
              </div>

              {/* Gold rule + tagline */}
              <div
                className="opacity-0"
                style={{
                  animation: "fade-in-up 0.7s cubic-bezier(0.16,1,0.3,1) 0.44s forwards",
                  marginBottom: "20px",
                }}
              >
                <div
                  className="rounded-full"
                  style={{ width: "60px", height: "1.5px", background: "#C59842", marginBottom: "10px" }}
                />
                <span
                  className="font-sans font-semibold uppercase"
                  style={{ fontSize: "9.5px", letterSpacing: "0.3em", color: "#1F1F1F" }}
                >
                  Where Style Meets Precision
                </span>
              </div>

              {/* Description */}
              <p
                className="font-sans text-stone-600 text-base leading-7 opacity-0"
                style={{
                  animation: "fade-in-up 0.8s cubic-bezier(0.16,1,0.3,1) 0.52s forwards",
                  maxWidth: "320px",
                  marginBottom: "36px",
                }}
              >
                Professional grooming tailored for modern gentlemen. Experience precision, comfort and timeless style.
              </p>

              {/* CTA */}
              <a
                href={`https://wa.me/917356568307?text=${encodeURIComponent(
                  "Please enter the details...\nName:\nDate:\nService: "
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-cta inline-flex items-center gap-2.5 text-white font-sans font-semibold tracking-[0.14em] uppercase rounded-md opacity-0 active:scale-[0.97] transition-transform focus:outline-none focus:ring-2 focus:ring-[#C59842] focus:ring-offset-2"
                style={{
                  background: "#C59842",
                  fontSize: "11px",
                  height: "52px",
                  paddingLeft: "28px",
                  paddingRight: "28px",
                  boxShadow: "0 4px 18px rgba(197,152,66,0.30)",
                  animation: "fade-in-up 0.8s cubic-bezier(0.16,1,0.3,1) 0.64s forwards",
                  alignSelf: "flex-start",
                }}
              >
                <span>Book Appointment</span>
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>

            {/* ── BOTTOM: Hero image (≈40% of viewport) ── */}
            <div
              className="relative flex-1 min-h-[38vh] opacity-0"
              style={{ animation: "fade-in-up 0.9s cubic-bezier(0.16,1,0.3,1) 0.5s forwards" }}
            >
              {/* Barber image */}
              <Image
                src="/assets/hero.jpeg"
                alt="Professional barber styling a gentleman's hair at Loran's"
                fill
                priority
                className="object-cover object-[60%_15%] animate-hero-zoom-in"
                sizes="100vw"
                style={{ filter: "contrast(1.06) saturate(1.1) sepia(0.05)" }}
              />
              {/* Top-to-bottom gradient fade: white → transparent so image blends into bg */}
              <div
                className="absolute inset-0 pointer-events-none"
                aria-hidden="true"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(250,248,245,1) 0%, rgba(250,248,245,0.6) 18%, rgba(250,248,245,0.0) 45%)",
                }}
              />
            </div>
          </div>

          {/* ════════════════════════════════════════════════════════════════
              DESKTOP HERO  (≥ md)  — original split layout, UNCHANGED
          ════════════════════════════════════════════════════════════════ */}
          <div className="hidden md:block">

            {/* ── Hero Image ── full bleed, zoom-in on load */}
            <div className="absolute inset-0 z-0 select-none">
              <Image
                src="/assets/hero.jpeg"
                alt="Professional barber styling a gentleman's hair at Loran's Gents Beauty Parlour"
                fill
                priority
                className="object-cover object-[72%_30%] animate-hero-zoom-in"
                sizes="100vw"
                style={{ filter: "contrast(1.08) saturate(1.12) sepia(0.06)" }}
              />
            </div>

            {/* ── Gradient overlay: opaque cream left → transparent right ── */}
            <div
              className="absolute inset-0 z-10 pointer-events-none"
              aria-hidden="true"
              style={{
                background:
                  "linear-gradient(to right, rgba(250,248,245,0.97) 0%, rgba(250,248,245,0.93) 28%, rgba(250,248,245,0.82) 42%, rgba(250,248,245,0.55) 56%, rgba(250,248,245,0.18) 72%, transparent 88%)",
              }}
            />

            {/* ── Content ── */}
            <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-16 w-full flex items-center min-h-screen py-28">
              <div className="max-w-[540px] flex flex-col items-start">

                {/* Small gold label */}
                <span
                  className="font-sans text-[11px] tracking-[0.35em] font-medium uppercase mb-5 opacity-0"
                  style={{
                    color: "#C59842",
                    animation: "fade-in-up 0.7s cubic-bezier(0.16,1,0.3,1) 0.1s forwards",
                  }}
                >
                  Grooming for Men
                </span>

                {/* Visually hidden h1 for SEO & accessibility */}
                <h1 className="sr-only">Loran&apos;s Gents Beauty Parlour &amp; Make Up Studio</h1>

                {/* Main heading image */}
                <div
                  className="relative w-full max-w-[480px] opacity-0 mb-5"
                  style={{ animation: "fade-in-up 0.8s cubic-bezier(0.16,1,0.3,1) 0.22s forwards" }}
                >
                  <Image
                    src="/assets/hero texxt.png"
                    alt="Loran's Gents Beauty Parlour & Make Up Studio"
                    width={480}
                    height={240}
                    priority
                    className="object-contain object-left w-full h-auto"
                  />
                </div>

                {/* Ladies hair cutting badge */}
                <div
                  className="opacity-0 mb-8"
                  style={{ animation: "fade-in-up 0.7s cubic-bezier(0.16,1,0.3,1) 0.44s forwards" }}
                >
                  <span
                    className="inline-block text-white font-sans text-xs font-semibold tracking-[0.18em] uppercase px-6 py-2 rounded-full shadow-md"
                    style={{ background: "#C59842" }}
                  >
                    Ladies Hair Cutting
                  </span>
                </div>

                {/* Gold rule + tagline */}
                <div
                  className="opacity-0 mb-6"
                  style={{ animation: "fade-in-up 0.7s cubic-bezier(0.16,1,0.3,1) 0.52s forwards" }}
                >
                  <div
                    className="mb-3 rounded-full"
                    style={{ width: "60px", height: "1.5px", background: "#C59842" }}
                  />
                  <span
                    className="font-sans text-[10.5px] tracking-[0.3em] font-semibold uppercase"
                    style={{ color: "#1F1F1F" }}
                  >
                    Where Style Meets Precision
                  </span>
                </div>

                {/* Description */}
                <p
                  className="font-sans text-stone-600 text-lg leading-8 max-w-[500px] opacity-0 mb-10"
                  style={{ animation: "fade-in-up 0.8s cubic-bezier(0.16,1,0.3,1) 0.60s forwards" }}
                >
                  Professional grooming services tailored for the modern gentleman.
                  Experience precision, comfort, and timeless style in an atmosphere
                  designed around confidence.
                </p>

                {/* CTA */}
                <a
                  href={`https://wa.me/917356568307?text=${encodeURIComponent(
                    "Please enter the details...\nName:\nDate:\nService: "
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-cta group inline-flex items-center gap-3 text-white font-sans text-sm font-semibold tracking-[0.14em] uppercase rounded-md opacity-0 focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    background: "#C59842",
                    height: "56px",
                    paddingLeft: "40px",
                    paddingRight: "40px",
                    boxShadow: "0 4px 20px rgba(197,152,66,0.28)",
                    animation: "fade-in-up 0.8s cubic-bezier(0.16,1,0.3,1) 0.72s forwards",
                  }}
                >
                  <span>Book Appointment</span>
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
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

            {/* Scroll indicator */}
            <div
              className="absolute bottom-8 left-6 lg:left-16 z-20 hidden sm:flex items-center gap-3 text-stone-400 opacity-0"
              aria-hidden="true"
              style={{ animation: "fade-in 0.8s ease 1.1s forwards" }}
            >
              <div className="w-5 h-9 border border-stone-300 rounded-full flex justify-center pt-1.5">
                <div className="w-0.5 h-2 bg-stone-400 rounded-full animate-bounce" />
              </div>
              <span className="font-sans text-[9px] tracking-[0.28em] font-semibold uppercase">Scroll</span>
            </div>
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
