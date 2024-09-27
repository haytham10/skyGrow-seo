"use client"

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/consultation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
		  notes: formData.message,
          company: 'Not specified',
          website: 'Not specified',
          selectedPack: 'General Inquiry',
        }),
      });

      if (response.ok) {
        setShowSuccess(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setShowSuccess(false), 5000); // Hide success message after 5 seconds
      } else {
        const data = await response.json();
        setError(data.error || 'An error occurred. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setError('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-navy-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Connect With Us</h2>
          <p className="mt-4 text-xl text-gray-300">Let's discuss how we can elevate your online presence</p>
        </div>
        <div className="mt-12 max-w-lg mx-auto">
          <AnimatePresence>
            {showSuccess && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded"
              >
                Email sent successfully! We'll get back to you soon.
              </motion.div>
            )}
          </AnimatePresence>
          {error && (
            <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
              {error}
            </div>
          )}
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="name"
                required
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-white"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                required
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-white"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-white"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}