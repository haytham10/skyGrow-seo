"use client"

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/#services", label: "Services" },
    { href: "/#about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/#contact", label: "Contact" }
  ];

  return (
    <header className="bg-navy-800 text-white py-6 px-6 md:px-12 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/header-logo.png"
            alt="SkyGrow Logo"
            width={180}
            height={50}
            className="h-auto"
          />
        </Link>

        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.label}
              href={link.href} 
              className="text-white hover:text-opacity-80 text-inherit font-medium transition duration-300 border-b-2 border-transparent hover:border-white py-2"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-3xl focus:outline-none hover:text-opacity-80 transition duration-300">
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="md:hidden mt-6 space-y-3 pb-6">
          {navLinks.map((link) => (
            <Link 
              key={link.label}
              href={link.href} 
              className="block px-4 py-3 text-lg text-white hover:text-opacity-80 hover:bg-navy-800 transition duration-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}