'use client';

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-4 md:top-8 left-1/2 -translate-x-1/2 z-50 w-[95%] md:w-[90%] max-w-[1100px]">
      <div
        className="bg-[#1a1a1a]/40 rounded-full px-4 md:px-8 py-3 md:py-4 flex items-center justify-between relative"
        style={{
          border: '0.5px solid',
          borderImage: 'linear-gradient(269.63deg, rgba(255, 255, 255, 0.05) 2.68%, #FFFFFF 50.22%, rgba(255, 255, 255, 0.05) 97.75%) 1',
          backdropFilter: 'blur(10px)',
          boxShadow: '0px 2px 4px 0px #FFFFFF66 inset, 0px -2px 4px 0px #00000033',
        }}
      >
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <Image
              src="/western-logo.png"
              alt="Western Innovation"
              width={180}
              height={40}
              className="h-8 md:h-10 w-auto"
            />
          </Link>
        </div>

        {/* Nav Links - Centered (Desktop) */}
        <ul className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm absolute left-1/2 -translate-x-1/2">
          <li><Link href="/" className="text-[#FFCC33] hover:text-[#FFCC33]/80 transition-colors">Home</Link></li>
          <li><Link href="#" className="text-white hover:text-[#FFCC33] transition-colors">About</Link></li>
          <li><Link href="#" className="text-white hover:text-[#FFCC33] transition-colors">Services</Link></li>
          <li><Link href="#" className="text-white hover:text-[#FFCC33] transition-colors">Products</Link></li>
          <li><Link href="#" className="text-white hover:text-[#FFCC33] transition-colors">Careers</Link></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Contact Button (Desktop) */}
        <Link href="/contact" className="hidden lg:block">
          <button className="bg-[#FFCC33] text-black px-4 md:px-6 py-2 md:py-2.5 rounded-full font-medium text-sm md:text-base hover:bg-[#FFCC33]/90 transition-colors">
            Contact Us
          </button>
        </Link>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden mt-2 bg-[#1a1a1a]/95 rounded-2xl px-6 py-4"
          style={{
            backdropFilter: 'blur(10px)',
            border: '0.5px solid rgba(255, 204, 51, 0.3)',
          }}
        >
          <ul className="space-y-3">
            <li><Link href="/" className="block text-[#FFCC33] hover:text-[#FFCC33]/80 transition-colors py-2">Home</Link></li>
            <li><Link href="#" className="block text-white hover:text-[#FFCC33] transition-colors py-2">About</Link></li>
            <li><Link href="#" className="block text-white hover:text-[#FFCC33] transition-colors py-2">Services</Link></li>
            <li><Link href="#" className="block text-white hover:text-[#FFCC33] transition-colors py-2">Products</Link></li>
            <li><Link href="#" className="block text-white hover:text-[#FFCC33] transition-colors py-2">Careers</Link></li>
          </ul>
          <Link href="/contact" className="block">
            <button className="w-full mt-4 bg-[#FFCC33] text-black px-6 py-2.5 rounded-full font-medium text-sm hover:bg-[#FFCC33]/90 transition-colors">
              Contact Us
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
}
