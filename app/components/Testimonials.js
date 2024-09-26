"use client"

import Link from 'next/link';
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
    }, 5000); // Change testimonial every 5 seconds

    return () => clearTimeout(timer);
  }, [current]);

  return (
    <section className="py-20 bg-primary text-white text-center">
      <h2 className="text-3xl font-bold mb-12">What Our Clients Say</h2>
      <div className="container mx-auto px-4">
        <AnimatePresence>
          <motion.div
            key={current}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto"
          >
            <p className="text-xl italic mb-4">"{testimonials[current].quote}"</p>
            <p className="font-semibold">- {testimonials[current].author}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
