"use client"

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    quote: "SkyGrow boosted our organic traffic by 150% within three months!",
    author: "Jane Smith, CEO of Acme Corp",
  },
  {
    quote: "Professional and effective SEO strategies. Highly recommended.",
    author: "John Doe, Founder of StartUp Inc.",
  },
  {
    quote: "Our rankings improved dramatically thanks to SkyGrow's expertise.",
    author: "Emily Johnson, Marketing Manager at Tech Solutions",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent((current + 1) % testimonials.length);
    }, 5000);

    return () => clearTimeout(timer);
  }, [current]);

  return (
    <section className="bg-navy-800 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center text-white mb-12">What Our Clients Say</h2>
        <div className="relative h-64">
          <AnimatePresence>
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex flex-col items-center justify-center text-center"
            >
              <p className="text-xl italic text-gray-300 mb-4">"{testimonials[current].quote}"</p>
              <p className="text-lg font-semibold text-white">- {testimonials[current].author}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}