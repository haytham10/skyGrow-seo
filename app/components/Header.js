'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-primary fixed w-full z-10">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/">
          <span className="text-xl font-bold cursor-pointer">SkyGrow</span>
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link href="/"><span className="hover:text-highlight cursor-pointer">Home</span></Link>
          <Link href="/#services"><span className="hover:text-highlight cursor-pointer">Services</span></Link>
          <Link href="/about"><span className="hover:text-highlight cursor-pointer">About</span></Link>
          <Link href="/contact"><span className="hover:text-highlight cursor-pointer">Contact</span></Link>
          <Link href="/blog"><span className="hover:text-highlight cursor-pointer">Blog</span></Link>
        </div>
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
      </nav>
      {menuOpen && (
        <div className="md:hidden bg-primary">
          <nav className="flex flex-col items-center space-y-4 py-4">
            <Link href="/"><span onClick={() => setMenuOpen(false)} className="hover:text-highlight cursor-pointer">Home</span></Link>
            <Link href="/#services"><span onClick={() => setMenuOpen(false)} className="hover:text-highlight cursor-pointer">Services</span></Link>
            <Link href="/about"><span onClick={() => setMenuOpen(false)} className="hover:text-highlight cursor-pointer">About</span></Link>
            <Link href="/contact"><span onClick={() => setMenuOpen(false)} className="hover:text-highlight cursor-pointer">Contact</span></Link>
            <Link href="/blog"><span onClick={() => setMenuOpen(false)} className="hover:text-highlight cursor-pointer">Blog</span></Link>
          </nav>
        </div>
      )}
    </header>
  );
}
