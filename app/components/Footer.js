import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary py-8 text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-4">
          <Link href="/" className="text-xl font-bold">SkyGrow
          </Link>
        </div>
        <div className="flex justify-center space-x-6 mb-4">
          <Link href="/privacy-policy" className="hover:text-highlight">Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-highlight">Terms & Conditions
          </Link>
        </div>
        <div className="flex justify-center space-x-4 mb-4">
          {/* Social Media Links */}
          <Link href="#" target="_blank" rel="noopener noreferrer" className="hover:text-highlight">
            {/* Social Media Icon */}
            <svg className="w-6 h-6 fill-current" /* Replace with icon SVG */></svg>
          </Link>
          {/* Add other social media icons as needed */}
        </div>
        <p>&copy; {new Date().getFullYear()} SkyGrow SEO Agency. All rights reserved.</p>
      </div>
    </footer>
  );
}
