import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative h-screen bg-primary flex items-center justify-center">
      {/* Background Image or Video */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/hero-bg.jpg)' }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
          Maximize Your Online Growth
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8">
          Expert SEO services tailored to your business needs.
        </p>
        <Link href="#contact" className="bg-highlight text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition duration-300">
            Get Started
        </Link>
      </div>
    </section>
  );
}
