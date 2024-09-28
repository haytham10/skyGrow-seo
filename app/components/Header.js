"use client"

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/#services", label: "Services" },
    { href: "/#about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/#contact", label: "Contact" },
  ];

  return (
    <header className="bg-gray-900 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
		  <Link href="/" className="flex items-center">
			<Image
			  src="/images/header-logo.png"
			  alt="SkyGrow Logo"
			  width={150}
			  height={50}
			  className="h-auto"
			/>
		  </Link>
          </div>
          <ul className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="text-white hover:text-purple-400 transition duration-300">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <button
			onClick={() => { 
			  window.location.href = "/#contact";
			}}
		  	className="hidden md:block bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-2 rounded-full hover:from-purple-600 hover:to-pink-700 transition duration-300 transform hover:scale-105">
            Get Started
          </button>
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>
      </div>

      {isMenuOpen && (
        <nav className="md:hidden mt-4 space-y-2 pb-4">
          {navLinks.map((link) => (
            <Link 
              key={link.label}
              href={link.href} 
              className="block px-4 py-2 text-lg text-white hover:text-purple-400 hover:bg-gray-800 transition duration-300"
            >
              {link.label}
            </Link>
          ))}
          <div className="px-4 py-2">
			<button
				onClick={() => { 
				  window.location.href = "/#contact";
				}}
				className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-2 rounded-full hover:from-purple-600 hover:to-pink-700 transition duration-300">
				Get Started
			</button>
          </div>
        </nav>
      )}
    </header>
  );
}