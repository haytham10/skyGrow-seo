'use client'

import { useState, useEffect } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUser, FaEnvelope, FaBuilding, FaGlobe, FaComments, FaCheckCircle } from 'react-icons/fa';

export default function ConsultationForm({ packageName, packagePrice }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    website: '',
    notes: '',
    selectedPack: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setFormData(prevData => ({
      ...prevData,
      selectedPack: packageName && packagePrice ? `${packageName} - ${packagePrice}` : 'Not specified'
    }));
  }, [packageName, packagePrice]);

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

  const inputClasses = "w-full px-4 py-2 pl-10 rounded bg-charcoal-800 text-off-white focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-300";
  const labelClasses = "block mb-1 text-sm text-gray-300";

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center p-8 bg-charcoal-800 rounded-lg shadow-lg"
      >
        <FaCheckCircle className="text-6xl text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-off-white mb-2">Thank You!</h3>
        <p className="text-gray-300">
          We've received your consultation request. We'll reach out to you shortly.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-6 bg-charcoal-800 p-8 rounded-lg shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="bg-burgundy-600 text-off-white px-4 py-3 rounded relative"
            role="alert"
          >
            <span className="block sm:inline">{error}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div>
        <label htmlFor="name" className={labelClasses}>Name</label>
        <div className="relative">
          <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
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
        <label htmlFor="email" className={labelClasses}>Email</label>
        <div className="relative">
          <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
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
        <label htmlFor="company" className={labelClasses}>Company Name</label>
        <div className="relative">
          <FaBuilding className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
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

      <div>
        <label htmlFor="website" className={labelClasses}>Website URL</label>
        <div className="relative">
          <FaGlobe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
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

      <div>
        <label htmlFor="notes" className={labelClasses}>Additional Notes (optional)</label>
        <div className="relative">
          <FaComments className="absolute left-3 top-3 text-gray-400" />
          <textarea
            id="notes"
            name="notes"
            className={inputClasses}
            rows="5"
            placeholder="Tell us more about your project..."
            value={formData.notes}
            onChange={handleChange}
          ></textarea>
        </div>
      </div>

      <div>
        <label htmlFor="selectedPack" className={labelClasses}>Selected Package</label>
        <input
          type="text"
          id="selectedPack"
          name="selectedPack"
          readOnly
          className={inputClasses}
          value={formData.selectedPack}
        />
      </div>

      <motion.button
        type="submit"
        className="w-full bg-burgundy-600 text-off-white px-4 py-2 rounded font-semibold hover:bg-burgundy-700 transition duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Submitting...' : 'Request Consultation'}
      </motion.button>
    </motion.form>
  );
}
