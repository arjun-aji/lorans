'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent">

      {/* ─── MOBILE NAVBAR (< md) ────────────────────────────────────────────── */}
      {/* Three-zone: [Hamburger] [Logo centered] [Spacer] */}
      <div className="md:hidden w-full px-5 h-16 flex items-center justify-between relative">

        {/* LEFT — Hamburger (44×44 touch target) */}
        <button
          onClick={toggleMenu}
          className="flex flex-col justify-center items-center w-11 h-11 space-y-[5px] focus:outline-none relative z-50 flex-shrink-0"
          aria-expanded={isOpen}
          aria-label="Toggle Menu"
        >
          <span
            className={`block w-[22px] h-[1.5px] bg-stone-950 transition-all duration-300 origin-center ${
              isOpen ? 'rotate-45 translate-y-[6.5px]' : ''
            }`}
          />
          <span
            className={`block w-[22px] h-[1.5px] bg-stone-950 transition-all duration-300 ${
              isOpen ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`block w-[22px] h-[1.5px] bg-stone-950 transition-all duration-300 origin-center ${
              isOpen ? '-rotate-45 -translate-y-[6.5px]' : ''
            }`}
          />
        </button>

        {/* CENTER — Logo, absolutely centered in the bar */}
        <a
          href="#"
          className="focus-visible:outline-none block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          aria-label="Loran's Home"
        >
          <div className="relative w-[170px] h-[44px]">
            <Image
              src="/assets/logo.png"
              alt="Loran's"
              fill
              sizes="170px"
              className="object-contain"
            />
          </div>
        </a>

        {/* RIGHT — Mirror spacer (same width as hamburger for optical balance) */}
        <div className="w-11 h-11 flex-shrink-0" aria-hidden="true" />
      </div>

      {/* ─── DESKTOP NAVBAR (≥ md) — UNCHANGED ───────────────────────────────── */}
      <nav
        className="hidden md:flex w-full h-20 items-center"
        aria-label="Main Navigation"
      >
        {/* Inner container matches page content width & padding */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full flex items-center justify-between">

          {/* Brand Logo */}
          <div className="flex items-center">
            <a
              href="#"
              className="focus-visible:outline-none block"
              aria-label="Loran's Home"
            >
              <div className="relative w-[160px] h-[42px]">
                <Image
                  src="/assets/logo.png"
                  alt="Loran's"
                  fill
                  sizes="160px"
                  className="object-contain"
                />
              </div>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <div className="flex items-center space-x-10 text-xs font-semibold tracking-[0.2em] uppercase text-stone-600">
            <a href="#services" className="hover:text-stone-900 hover:tracking-[0.25em] transition-all duration-300">Services</a>
            <a href="#gallery"  className="hover:text-stone-900 hover:tracking-[0.25em] transition-all duration-300">Gallery</a>
            <a href="#about"    className="hover:text-stone-900 hover:tracking-[0.25em] transition-all duration-300">Our Story</a>
            <a href="#faq"      className="hover:text-stone-900 hover:tracking-[0.25em] transition-all duration-300">FAQ</a>
            <a href="#contact"  className="hover:text-stone-900 hover:tracking-[0.25em] transition-all duration-300">Contact</a>
          </div>

          {/* CTA Button */}
          <div>
            <a
              href={`https://wa.me/917356568307?text=${encodeURIComponent(
                'Please enter the details...\nName:\nDate:\nService: '
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#c59842] hover:bg-[#b58832] text-[10px] font-bold tracking-[0.2em] uppercase text-white transition-all duration-300 shadow-md shadow-gold-500/10"
            >
              Book Appointment
            </a>
          </div>

        </div>
      </nav>


      {/* ─── MOBILE BACKDROP OVERLAY ──────────────────────────────────────────── */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-stone-900/40 z-30 transition-opacity duration-300 md:hidden"
          onClick={toggleMenu}
          aria-hidden="true"
        />
      )}

      {/* ─── MOBILE DRAWER ────────────────────────────────────────────────────── */}
      <div
        className={`fixed top-0 right-0 bottom-0 h-screen w-1/2 bg-[#FAF8F5]/85 backdrop-blur-md border-l border-stone-200 shadow-2xl transition-transform duration-300 ease-in-out md:hidden z-40 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!isOpen}
      >
        <div className="px-6 pt-24 pb-8 flex flex-col space-y-6 text-center text-sm font-semibold tracking-[0.25em] uppercase text-stone-600">
          <a href="#services" onClick={toggleMenu} className="hover:text-stone-950 transition-colors py-1">Services</a>
          <a href="#gallery"  onClick={toggleMenu} className="hover:text-stone-950 transition-colors py-1">Gallery</a>
          <a href="#about"    onClick={toggleMenu} className="hover:text-stone-950 transition-colors py-1">Our Story</a>
          <a href="#faq"      onClick={toggleMenu} className="hover:text-stone-950 transition-colors py-1">FAQ</a>
          <a href="#contact"  onClick={toggleMenu} className="hover:text-stone-950 transition-colors py-1">Contact</a>
          <a
            href={`https://wa.me/917356568307?text=${encodeURIComponent(
              'Please enter the details...\nName:\nDate:\nService: '
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={toggleMenu}
            className="inline-flex items-center justify-center px-6 py-3 bg-[#c59842] hover:bg-[#b58832] text-xs font-semibold tracking-[0.2em] uppercase text-white transition-colors w-full mt-2"
          >
            Book Appointment
          </a>
        </div>
      </div>

    </header>
  );
}
