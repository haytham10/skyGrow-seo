'use client'

import { useState } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUser, FaEnvelope, FaBuilding, FaGlobe, FaComments, FaCheckCircle, FaRocket } from 'react-icons/fa';

export default function ConsultationForm({ packageName, packagePrice }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    website: '',
    notes: '',
    selectedPack: packageName && packagePrice ? `${packageName} - ${packagePrice}` : 'Not specified'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const inputClasses = "w-full p-4 pl-12 bg-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-white transition-all duration-300 ease-in-out";
  const labelClasses = "block mb-3 text-sm font-medium text-gray-300";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      await axios.post('/api/consultation', formData);
      setSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      setError('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center p-8 bg-gradient-to-br from-purple-600 to-pink-500 rounded-lg shadow-lg"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200, damping: 10 }}
        >
          <FaCheckCircle className="text-6xl text-white mx-auto mb-4" />
        </motion.div>
        <h3 className="text-3xl font-bold text-white mb-2">Thank You!</h3>
        <p className="text-gray-100">
          We've received your consultation request. We'll reach out to you shortly.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-8 bg-gray-800 p-8 rounded-lg shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="bg-red-600 text-white px-4 py-3 rounded-lg relative"
            role="alert"
          >
            <span className="block sm:inline">{error}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="grid grid-cols-1 m-auto md:grid-cols-2 gap-10">
        <div className="space-y-6">
          <div>
            <label htmlFor="name" className={labelClasses}>Name</label>
            <div className="relative">
              <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                id="name"
                name="name"
                required
                className={inputClasses}
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <label htmlFor="company" className={labelClasses}>Company Name</label>
            <div className="relative">
              <FaBuilding className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                id="company"
                name="company"
                required
                className={inputClasses}
                placeholder="Your Company"
                value={formData.company}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <label htmlFor="email" className={labelClasses}>Email</label>
            <div className="relative">
              <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                id="email"
                name="email"
                required
                className={inputClasses}
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <label htmlFor="website" className={labelClasses}>Website URL</label>
            <div className="relative">
              <FaGlobe className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="url"
                id="website"
                name="website"
                required
                className={inputClasses}
                placeholder="https://yourwebsite.com"
                value={formData.website}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <label htmlFor="notes" className={labelClasses}>Additional Notes (optional)</label>
          <div className="relative">
            <FaComments className="absolute left-4 top-4 text-gray-400" />
            <textarea
              id="notes"
              name="notes"
              className={`${inputClasses} h-32 resize-none`}
              placeholder="Tell us more about your project..."
              value={formData.notes}
              onChange={handleChange}
            ></textarea>
          </div>
        </div>

        {formData.selectedPack !== "Not specified" && (
		<div>
          <label htmlFor="selectedPack" className={labelClasses}>Selected Package</label>
          <input
            type="text"
            id="selectedPack"
            name="selectedPack"
            readOnly
            className={`${inputClasses} bg-gray-600 cursor-not-allowed`}
            value={formData.selectedPack}
          />
        </div>
		)}
      </div>

      <motion.button
        type="submit"
        className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white py-4 rounded-xl font-semibold text-lg hover:from-purple-600 hover:to-pink-700 transition duration-300 flex items-center justify-center"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          >
            <FaRocket className="text-2xl" />
          </motion.div>
        ) : (
          <>
            <FaRocket className="mr-2" /> Request Consultation
          </>
        )}
      </motion.button>
    </motion.form>
  );
}