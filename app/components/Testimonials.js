"use client"

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const testimonials = [
  { name: "Razva Nionesc", img: "/images/razva.png", role: "Romania", quote: "100% would recommend. Now I feel better about my website knowing someone with long time experience went over it and optimized all SEO . I have no idea how SEO works and it’s okay to give the job to someone else so you can focus on other things ! 🙌" },
  { name: "Dean Nzal", img: "/images/dean.png", role: "United States", quote: "I recently hired SkyGrow to optimize my website's on-page SEO, and I couldn't be happier with the results! As a business owner, I knew I needed to improve my search rankings to attract more organic traffic, but I didn't know where to start. That's where SkyGrow came in." },
  { name: "Dan Kelly", img: "/images/dan.png", role: "Canada", quote: "I was incredibly impressed! I am extremely happy with the work they've done for us thus far. Their proficiency in acquiring high-authority, white-hat, dofollow backlinks has notably elevated my website's ranking." }
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
    <section className="bg-gray-800 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">What Our Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-700 p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
            >
              <svg className="w-10 h-10 text-purple-500 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-gray-300 mb-4">{testimonial.quote}</p>
              <div className="flex items-center">
                <Image src={testimonial.img} alt={testimonial.name} width={50} height={50} className="w-10 h-10 rounded-full mr-3" />
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}