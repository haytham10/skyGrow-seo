import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative bg-navy-900 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="SEO growth chart"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-navy-900 opacity-75"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-2xl">
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
            <span className="block">Elevate Your Online</span>{' '}
            <span className="block text-blue-600">Presence</span>
          </h1>
          <p className="mt-6 text-xl text-gray-300">
            SkyGrow: Premium SEO Solutions for Discerning Businesses
          </p>
          <div className="mt-10 flex flex-col sm:flex-row sm:space-x-4">
            <Link href="#services" className="mb-4 sm:mb-0 inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:text-lg">
              Explore Our Services
            </Link>
            <Link href="#contact" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 md:text-lg">
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}