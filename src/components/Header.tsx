'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent">
      <nav className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between" aria-label="Main Navigation">
        {/* Brand Logo */}
        <div className="flex items-center">
          <a
            href="#"
            className="focus-visible:outline-none block"
            aria-label="Loran's Home"
          >
            <div className="relative w-[110px] h-[28px]">
              <Image
                src="/assets/lorans_logo_black.png"
                alt="Loran's"
                fill
                className="object-contain"
              />
            </div>
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-10 text-xs font-semibold tracking-[0.2em] uppercase text-stone-600">
          <a href="#services" className="hover:text-stone-900 hover:tracking-[0.25em] transition-all duration-300">Services</a>
          <a href="#gallery" className="hover:text-stone-900 hover:tracking-[0.25em] transition-all duration-300">Gallery</a>
          <a href="#about" className="hover:text-stone-900 hover:tracking-[0.25em] transition-all duration-300">Our Story</a>
          <a href="#faq" className="hover:text-stone-900 hover:tracking-[0.25em] transition-all duration-300">FAQ</a>
          <a href="#contact" className="hover:text-stone-900 hover:tracking-[0.25em] transition-all duration-300">Contact</a>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a
            href={`https://wa.me/917356568307?text=${encodeURIComponent(
              "Please enter the details...\nName:\nDate:\nService: "
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-[#c59842] hover:bg-[#b58832] text-[10px] font-bold tracking-[0.2em] uppercase text-white transition-all duration-300 shadow-md shadow-gold-500/10"
          >
            Book Appointment
          </a>
        </div>

        {/* Mobile Hamburguer Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none relative z-50"
          aria-expanded={isOpen}
          aria-label="Toggle Menu"
        >
          <span
            className={`block w-6 h-0.5 bg-stone-950 transition-all duration-300 ${isOpen ? 'transform rotate-45 translate-y-2' : ''
              }`}
          />
          <span
            className={`block w-6 h-0.5 bg-stone-950 transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'
              }`}
          />
          <span
            className={`block w-6 h-0.5 bg-stone-950 transition-all duration-300 ${isOpen ? 'transform -rotate-45 -translate-y-2' : ''
              }`}
          />
        </button>
      </nav>

      {/* Mobile Backdrop Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-stone-900/40 z-30 transition-opacity duration-300 md:hidden" 
          onClick={toggleMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile Drawer (Sidebar: full screen height, half screen width) */}
      <div
        className={`fixed top-0 right-0 bottom-0 h-screen w-1/2 bg-[#FAF8F5]/85 backdrop-blur-md border-l border-stone-200 shadow-2xl transition-transform duration-300 ease-in-out md:hidden z-40 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!isOpen}
      >
        <div className="px-6 pt-24 pb-8 flex flex-col space-y-6 text-center text-sm font-semibold tracking-[0.25em] uppercase text-stone-600">
          <a href="#services" onClick={toggleMenu} className="hover:text-stone-950 transition-colors py-1">Services</a>
          <a href="#gallery" onClick={toggleMenu} className="hover:text-stone-950 transition-colors py-1">Gallery</a>
          <a href="#about" onClick={toggleMenu} className="hover:text-stone-950 transition-colors py-1">Our Story</a>
          <a href="#faq" onClick={toggleMenu} className="hover:text-stone-950 transition-colors py-1">FAQ</a>
          <a href="#contact" onClick={toggleMenu} className="hover:text-stone-950 transition-colors py-1">Contact</a>
          <a
            href={`https://wa.me/917356568307?text=${encodeURIComponent(
              "Please enter the details...\nName:\nDate:\nService: "
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
