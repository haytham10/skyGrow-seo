'use client'

import { useState, useEffect } from 'react';
import axios from 'axios';

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

  useEffect(() => {
    // Update selectedPack when packageName or packagePrice changes
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
    // Send form data to API
    try {
      console.log('Submitting form data:', formData); // Add this line for debugging
      await axios.post('/api/consultation', formData);
      setSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  if (submitted) {
    return (
      <p className="text-center">
        Thank you for your interest! We'll reach out to you shortly.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block mb-1 text-sm">Name</label>
        <input
          type="text"
          name="name"
          required
          className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-highlight"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="block mb-1 text-sm">Email</label>
        <input
          type="email"
          name="email"
          required
          className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-highlight"
          placeholder="you@example.com"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="block mb-1 text-sm">Company Name</label>
        <input
          type="text"
          name="company"
          required
          className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-highlight"
          placeholder="Your Company"
          value={formData.company}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="block mb-1 text-sm">Website URL</label>
        <input
          type="url"
          name="website"
          required
          className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-highlight"
          placeholder="https://yourwebsite.com"
          value={formData.website}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="block mb-1 text-sm">Additional Notes (optional)</label>
        <textarea
          name="notes"
          className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-highlight"
          rows="5"
          placeholder="Tell us more about your project..."
          value={formData.notes}
          onChange={handleChange}
        ></textarea>
      </div>
      {/* Add a visible field for the selected package */}
      <div>
        <label className="block mb-1 text-sm">Selected Package</label>
        <input
          type="text"
          name="selectedPack"
          readOnly
          className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-highlight"
          value={formData.selectedPack}
        />
      </div>
      <button
        type="submit"
        className="w-full bg-highlight text-white px-4 py-2 rounded font-semibold hover:bg-green-600 transition duration-300"
      >
        Submit
      </button>
    </form>
  );
}
