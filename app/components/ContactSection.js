'use client'

import { FaRocket } from 'react-icons/fa';
import ConsultationForm from './ConsultationForm';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 relative overflow-hidden bg-gray-900">
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <h2 className="text-5xl font-bold mb-4 text-center text-white">
          Ready to Grow?
        </h2>
        <p className="text-center text-blue-300 mb-12">
          Let's discuss how we can elevate your online presence
        </p>
        <ConsultationForm />
        <div className="mt-8 text-center">
          <p className="text-white mb-2">Or reach us directly:</p>
          <p>Email: <a href="mailto:info@skygrowseo.com" className="text-blue-300 hover:text-blue-400 transition duration-300">info@skygrowseo.com</a></p>
          {/* <p>Phone: <a href="tel:+1234567890" className="text-blue-300 hover:text-blue-400 transition duration-300">+1 (234) 567-890</a></p> */}
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500 to-pink-600 opacity-10"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute top-0 left-0 w-48 h-48 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full filter blur-3xl opacity-20"></div>
    </section>
  );
}