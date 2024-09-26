import HeroSection from './components/HeroSection';
import Testimonials from './components/Testimonials';
import ServicePackages from './components/ServicePackages';
import AboutUs from './components/AboutUs';
import ContactSection from './components/ContactSection';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Testimonials />
      <ServicePackages />
      <AboutUs />
      <ContactSection />
      <Link href="/about" className="inline-block px-4 py-2 bg-highlight text-white rounded-md hover:bg-green-600 transition duration-300 mt-8">
        About Us
      </Link>
    </>
  );
}
