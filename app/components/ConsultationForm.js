'use client'

import { useState } from 'react';
import axios from 'axios';

export default function ConsultationForm({ packageName }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    website: '',
    notes: '',
    packageName,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Send form data to API
    try {
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
        <label className="block mb-1">Name</label>
        <input
          type="text"
          name="name"
          required
          className="w-full px-4 py-2 rounded bg-gray-800 text-white"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="block mb-1">Email</label>
        <input
          type="email"
          name="email"
          required
          className="w-full px-4 py-2 rounded bg-gray-800 text-white"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="block mb-1">Company Name</label>
        <input
          type="text"
          name="company"
          required
          className="w-full px-4 py-2 rounded bg-gray-800 text-white"
          value={formData.company}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="block mb-1">Website URL</label>
        <input
          type="url"
          name="website"
          required
          className="w-full px-4 py-2 rounded bg-gray-800 text-white"
          value={formData.website}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="block mb-1">Additional Notes (optional)</label>
        <textarea
          name="notes"
          className="w-full px-4 py-2 rounded bg-gray-800 text-white"
          rows="5"
          value={formData.notes}
          onChange={handleChange}
        ></textarea>
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
