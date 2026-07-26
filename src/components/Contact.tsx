'use client';

import Image from 'next/image';

export default function Contact() {
  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Thank you for your message! Loran\'s Team will get back to you shortly.');
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div id="contact" className="bg-[#FAF8F5]">
      {/* Contact Section wrapper */}
      <section className="py-24 border-t border-stone-200/40 lg:min-h-screen lg:flex lg:items-center" aria-labelledby="contact-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <div className="grid grid-cols-1 md:grid-cols-12 bg-white border border-stone-200/40 rounded-sm shadow-xl overflow-hidden">

            {/* Left Column: Contact Details with low-opacity interior image overlay */}
            <div className="md:col-span-5 relative flex flex-col justify-between p-8 sm:p-12 text-stone-900 overflow-hidden min-h-[400px]">

              {/* Background Interior Image Faded */}
              <div className="absolute inset-0 z-0 opacity-[0.06] select-none">
                <Image
                  src="/assets/about_interior.png"
                  alt="Interior background"
                  fill
                  className="object-cover"
                  sizes="30vw"
                />
              </div>

              {/* Gradient tint overlay to keep text 100% accessible and readable */}
              <div className="absolute inset-0 z-10 bg-gradient-to-br from-[#FAF8F5]/90 via-[#FAF8F5]/50 to-transparent" aria-hidden="true" />

              {/* Info Content Wrapper */}
              <div className="relative z-20 flex flex-col h-full justify-between gap-12">
                <div>
                  <span className="font-sans text-[11px] sm:text-xs tracking-[0.25em] font-semibold text-amber-800 uppercase mb-3 block">
                    Contact Us
                  </span>
                  <h2
                    id="contact-heading"
                    className="font-serif text-3xl sm:text-4xl font-light tracking-wide text-stone-900 uppercase"
                  >
                    Let&apos;s Connect
                  </h2>
                  <div className="w-12 h-px bg-stone-300 my-6" aria-hidden="true" />
                </div>

                {/* Details List */}
                <div className="space-y-6 font-sans text-xs sm:text-sm text-stone-600 font-light leading-relaxed">

                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <span className="flex-shrink-0 mt-1" aria-hidden="true">
                      <svg className="w-5 h-5 text-[#c59842] fill-none stroke-current stroke-[1.5]" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                    </span>
                    <p>
                      Near Ramaloor St Jude chapel,<br />
                      Kothamangalam, Kerala 686691
                    </p>
                  </div>

                  {/* Phone Number */}
                  <div className="flex items-start gap-4">
                    <span className="flex-shrink-0 mt-1" aria-hidden="true">
                      <svg className="w-5 h-5 text-[#c59842] fill-none stroke-current stroke-[1.5]" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.625c0-1.25.75-2.375 1.875-2.875l2.25-1c.875-.375 1.875.125 2.25 1l1.125 2.625c.375.875-.125 1.875-1 2.25l-1.5.625c1.25 2.5 3.25 4.5 5.75 5.75l.625-1.5c.375-.875 1.375-1.375 2.25-1l2.625 1.125c.875.375 1.375 1.375 1 2.25l-1 2.25c-.5 1.125-1.625 1.875-2.875 1.875-6.625 0-12-5.375-12-12z" />
                      </svg>
                    </span>
                    <div className="flex flex-col">
                      <a href="tel:+919446869346" className="hover:text-[#c59842] transition-colors focus-visible:outline-none">+91 94468 69346</a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <span className="flex-shrink-0 mt-1" aria-hidden="true">
                      <svg className="w-5 h-5 text-[#c59842] fill-none stroke-current stroke-[1.5]" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    </span>
                    <a href="mailto:loransparlour@gmail.com" className="hover:text-[#c59842] transition-colors focus-visible:outline-none">
                      loransparlour@gmail.com
                    </a>
                  </div>

                  {/* Clock Hours */}
                  <div className="flex items-start gap-4">
                    <span className="flex-shrink-0 mt-1" aria-hidden="true">
                      <svg className="w-5 h-5 text-[#c59842] fill-none stroke-current stroke-[1.5]" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2M12 21a9 9 0 100-18 9 9 0 000 18z" />
                      </svg>
                    </span>
                    <div>
                      <p>Mon - Sat : 9:00 AM - 9:00 PM</p>
                      <p>Sunday : 9:00 AM - 8:00 PM</p>
                    </div>
                  </div>

                </div>

                {/* Interactive Map Image Embed */}
                <a
                  href="https://maps.app.goo.gl/8Sz3qJuR3UqKZNQm7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-full h-[145px] border border-stone-200/60 rounded-md overflow-hidden shadow-sm z-20 mt-2 block group"
                  aria-label="Open Loran's location in Google Maps"
                >
                  <Image
                    src="/assets/map.png"
                    alt="Loran's location map near Ramaloor St Jude chapel, Kothamangalam"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                  <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-stone-900/0 transition-colors" aria-hidden="true" />
                  <div className="absolute bottom-2 right-2 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded text-[10px] font-semibold text-[#c59842] uppercase tracking-wider shadow flex items-center gap-1">
                    <span>Open Maps</span>
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </a>
              </div>

            </div>

            {/* Right Column: Contact Message Form */}
            <form
              onSubmit={handleFormSubmit}
              className="md:col-span-7 p-8 sm:p-12 flex flex-col justify-between gap-6 bg-stone-50/50"
              aria-label="Send a message to Loran's Salon"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="name-input" className="text-[10px] tracking-wider font-semibold text-stone-500 uppercase">Your Name</label>
                  <input
                    id="name-input"
                    type="text"
                    required
                    placeholder="Enter your name"
                    className="bg-white border border-stone-200/80 p-3 sm:p-4 text-xs sm:text-sm rounded-sm focus:outline-none focus:border-[#c59842] focus:ring-1 focus:ring-[#c59842] transition-colors placeholder:text-stone-300"
                  />
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone-input" className="text-[10px] tracking-wider font-semibold text-stone-500 uppercase">Phone Number</label>
                  <input
                    id="phone-input"
                    type="tel"
                    required
                    placeholder="Enter your phone number"
                    className="bg-white border border-stone-200/80 p-3 sm:p-4 text-xs sm:text-sm rounded-sm focus:outline-none focus:border-[#c59842] focus:ring-1 focus:ring-[#c59842] transition-colors placeholder:text-stone-300"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="email-input" className="text-[10px] tracking-wider font-semibold text-stone-500 uppercase">Email Address</label>
                <input
                  id="email-input"
                  type="email"
                  required
                  placeholder="Enter your email address"
                  className="bg-white border border-stone-200/80 p-3 sm:p-4 text-xs sm:text-sm rounded-sm focus:outline-none focus:border-[#c59842] focus:ring-1 focus:ring-[#c59842] transition-colors placeholder:text-stone-300"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="message-input" className="text-[10px] tracking-wider font-semibold text-stone-500 uppercase">Your Message</label>
                <textarea
                  id="message-input"
                  rows={4}
                  required
                  placeholder="How can we help you?"
                  className="bg-white border border-stone-200/80 p-3 sm:p-4 text-xs sm:text-sm rounded-sm focus:outline-none focus:border-[#c59842] focus:ring-1 focus:ring-[#c59842] transition-colors placeholder:text-stone-300 resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-3 bg-[#c59842] hover:bg-[#b58832] text-white text-xs tracking-[0.2em] font-semibold uppercase px-8 py-4 sm:py-4.5 transition-all duration-300 shadow-md shadow-gold-500/10 w-fit focus:outline-none focus:ring-2 focus:ring-[#c59842] focus:ring-offset-2 cursor-pointer group"
              >
                <span>Send Message</span>
                <svg
                  className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>

          </div>
        </div>
      </section>

      {/* Premium Multi-Column Footer */}
      <footer className="bg-[#F4F1EA] text-stone-600 py-16 border-t border-stone-200 relative z-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 pb-12 border-b border-stone-200">

            {/* Logo and brand message */}
            <div className="md:col-span-5 flex flex-col items-start gap-4">
              <div className="relative w-[180px] h-auto select-none">
                <Image
                  src="/assets/hero texxt.png"
                  alt="Loran's Gents Beauty Parlour & Make Up Studio"
                  width={180}
                  height={90}
                  className="object-contain w-full h-auto"
                />
              </div>
              <span className="font-sans text-[9px] tracking-[0.25em] font-bold text-[#c59842] uppercase leading-none block">
                Ladies Hair Cutting
              </span>
              <p className="font-sans text-xs text-stone-500 font-light leading-relaxed max-w-xs mt-2">
                Grooming experience crafted for the modern gentleman. Step in to look and feel your absolute best.
              </p>
            </div>

            {/* Quick links columns */}
            <div className="md:col-span-4 grid grid-cols-2 gap-6">
              <div className="flex flex-col gap-3">
                <span className="text-[10px] tracking-widest font-bold text-stone-950 uppercase mb-1">Quick Links</span>
                <a href="#" className="text-xs hover:text-[#c59842] transition-colors focus-visible:outline-none">Home</a>
                <a href="#about" className="text-xs hover:text-[#c59842] transition-colors focus-visible:outline-none">About</a>
                <a href="#services" className="text-xs hover:text-[#c59842] transition-colors focus-visible:outline-none">Services</a>
              </div>
              <div className="flex flex-col gap-3 mt-6">
                <a href="#gallery" className="text-xs hover:text-[#c59842] transition-colors focus-visible:outline-none">Gallery</a>
                <a href="#faq" className="text-xs hover:text-[#c59842] transition-colors focus-visible:outline-none">FAQ</a>
                <a href="#contact" className="text-xs hover:text-[#c59842] transition-colors focus-visible:outline-none">Contact</a>
              </div>
            </div>

            {/* Social handles and Scroll To Top */}
            <div className="md:col-span-3 flex flex-col items-start md:items-end justify-between gap-6">
              <div className="flex flex-col items-start md:items-end gap-3.5">
                <span className="text-[10px] tracking-widest font-bold text-stone-950 uppercase">Follow Us</span>
                <div className="flex gap-3">
                  {/* Instagram */}
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-[#c59842]/40 text-[#c59842] hover:bg-[#c59842] hover:text-white transition-colors w-9 h-9 rounded-full flex items-center justify-center focus-visible:outline-none"
                    aria-label="Follow us on Instagram"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  </a>

                  {/* Facebook */}
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-[#c59842]/40 text-[#c59842] hover:bg-[#c59842] hover:text-white transition-colors w-9 h-9 rounded-full flex items-center justify-center focus-visible:outline-none"
                    aria-label="Follow us on Facebook"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M9 8H7v3h2v9h3v-9h3l.5-3H12V6c0-.9.2-1.2 1-1.2h2V2h-3c-2.5 0-4 1.2-4 3.8V8z" />
                    </svg>
                  </a>

                  {/* WhatsApp chat using the board numbers */}
                  <a
                    href="https://wa.me/919446869346"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-[#c59842]/40 text-[#c59842] hover:bg-[#c59842] hover:text-white transition-colors w-9 h-9 rounded-full flex items-center justify-center focus-visible:outline-none"
                    aria-label="Chat with us on WhatsApp"
                  >
                    <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.503-5.738-1.464L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.59 1.977 14.113.951 11.483.951c-5.446 0-9.87 4.373-9.874 9.804-.002 1.716.452 3.393 1.312 4.88L1.93 20.165l4.717-1.011zM17.65 14.546c-.3-.15-1.78-.88-2.05-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.95 1.18-.18.2-.35.23-.65.08-.3-.15-1.265-.47-2.41-1.49-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.47.13-.62.14-.13.3-.35.45-.53.15-.17.2-.3.3-.5.1-.2.05-.38-.02-.53-.07-.15-.68-1.63-.93-2.24-.25-.61-.53-.53-.73-.54-.19-.01-.41-.01-.63-.01-.22 0-.58.08-.88.41-.3.33-1.15 1.12-1.15 2.73s1.18 3.16 1.34 3.39c.16.23 2.32 3.54 5.62 4.97.78.34 1.4.55 1.87.7.79.25 1.5.21 2.07.13.63-.09 1.78-.73 2.03-1.43.25-.7.25-1.3.17-1.43-.07-.13-.27-.2-.57-.35z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Bouncing Scroll-to-Top Button */}
              <button
                onClick={scrollToTop}
                className="border border-stone-300 hover:border-[#c59842] text-[#c59842] hover:bg-[#c59842] hover:text-white transition-all w-9 h-9 rounded-full flex items-center justify-center cursor-pointer animate-pulse focus:outline-none focus:ring-1 focus:ring-[#c59842]"
                aria-label="Scroll to top"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                </svg>
              </button>
            </div>

          </div>

          {/* Copyright Bottom Bar */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-stone-500 text-[10px] tracking-widest font-semibold uppercase">
            <span>© {new Date().getFullYear()} Loran&apos;s Gents Beauty Parlour & Make Up Studio. All Rights Reserved.</span>
            <span>Where Style Meets Precision</span>
          </div>

        </div>
      </footer>
    </div>
  );
}
