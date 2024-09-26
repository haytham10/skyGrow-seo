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
    </>
  );
}
