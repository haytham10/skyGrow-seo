import HeroSection from './components/HeroSection';
import Testimonials from './components/Testimonials';
import ServicePackages from './components/ServicePackages';
import AboutUs from './components/AboutUs';
import ContactSection from './components/ContactSection';

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