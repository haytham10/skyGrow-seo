import Link from 'next/link';
import Image from 'next/image';
import { FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-navy-800 text-gray-300">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          <div className="space-y-6 text-center md:text-left">
            <Image
              src="/images/header-logo.png"
              alt="SkyGrow Logo"
              width={180}
              height={45}
              className="h-auto mx-auto md:mx-0"
            />
            <p className="text-sm max-w-xs mx-auto md:mx-0">
              Elevating businesses through strategic SEO solutions. Your partner in digital growth and online visibility.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FaLinkedin size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FaInstagram size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FaTwitter size={24} />
              </a>
            </div>
          </div>
          
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-white mb-6">Services</h3>
            <ul className="space-y-3">
              <li><Link href="/services/seo-optimization" className="text-gray-300 hover:text-gold-500 transition-colors">SEO Optimization</Link></li>
              <li><Link href="/services/content-strategy" className="text-gray-300 hover:text-gold-500 transition-colors">Content Strategy</Link></li>
              <li><Link href="/services/link-building" className="text-gray-300 hover:text-gold-500 transition-colors">Link Building</Link></li>
              <li><Link href="/services/local-seo" className="text-gray-300 hover:text-gold-500 transition-colors">Local SEO</Link></li>
              <li><Link href="/services/technical-seo" className="text-gray-300 hover:text-gold-500 transition-colors">Technical SEO</Link></li>
            </ul>
          </div>
          
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-white mb-6">Company</h3>
            <ul className="space-y-3">
              <li><Link href="./#about" className="text-gray-300 hover:text-gold-500 transition-colors">About Us</Link></li>
              <li><Link href="/blog" className="text-gray-300 hover:text-gold-500 transition-colors">Blog</Link></li>
              <li><Link href="/case-studies" className="text-gray-300 hover:text-gold-500 transition-colors">Case Studies</Link></li>
              <li><Link href="/careers" className="text-gray-300 hover:text-gold-500 transition-colors">Careers</Link></li>
              <li><Link href="./#contact" className="text-gray-300 hover:text-gold-500 transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-white mb-6">Resources</h3>
            <ul className="space-y-3">
              <li><Link href="/resources/seo-guide" className="text-gray-300 hover:text-gold-500 transition-colors">SEO Guide</Link></li>
              <li><Link href="/resources/webinars" className="text-gray-300 hover:text-gold-500 transition-colors">Webinars</Link></li>
              <li><Link href="/resources/newsletter" className="text-gray-300 hover:text-gold-500 transition-colors">Newsletter</Link></li>
              <li><Link href="/resources/faq" className="text-gray-300 hover:text-gold-500 transition-colors">FAQ</Link></li>
              <li><Link href="/resources/glossary" className="text-gray-300 hover:text-gold-500 transition-colors">SEO Glossary</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-center md:text-left">&copy; 2023 SkyGrow SEO Agency. All rights reserved.</p>
            <div className="mt-4 md:mt-0 space-x-4 text-center md:text-left">
              <Link href="/privacy-policy" className="text-sm text-gray-300 hover:text-gold-500 transition-colors">Privacy Policy</Link>
              <Link href="/terms-of-service" className="text-sm text-gray-300 hover:text-gold-500 transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}