import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Elevate Your <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                Digital Presence
              </span>
            </h1>
            <p className="text-gray-300 text-xl mb-8">
              SkyGrow: Cutting-edge SEO & Digital Marketing solutions to skyrocket your online visibility and business growth.
            </p>
            <div className="space-x-4">
              <Link href="#services" className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-3 rounded-full hover:from-purple-600 hover:to-pink-700 transition duration-300 transform hover:scale-105 inline-block">
                Explore Services
              </Link>
              <Link href="#contact" className="border-2 border-purple-500 text-purple-400 px-8 py-3 rounded-full hover:bg-purple-500 hover:text-white transition duration-300 inline-block">
                Get Started
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="w-full h-96 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full blur-3xl opacity-20 absolute top-0 left-0"></div>
            <Image
              src="/images/hero-illustration.png"
              alt="Digital Marketing Illustration"
              width={600}
              height={400}
              className="w-auto h-auto relative z-10 md:pl-20"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-purple-500 to-transparent opacity-10"></div>
    </section>
  );
}