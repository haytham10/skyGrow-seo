"use client"

import { useState } from 'react';
import axios from 'axios';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Send form data to API
    try {
      await axios.post('/api/contact', formData);
      setSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  if (submitted) {
    return <p className="text-center">Thank you for your message! We'll get back to you soon.</p>;
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
        <label className="block mb-1">Message</label>
        <textarea
          name="message"
          required
          className="w-full px-4 py-2 rounded bg-gray-800 text-white"
          rows="5"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
      </div>
      <button type="submit" className="w-full bg-highlight text-white px-4 py-2 rounded font-semibold hover:bg-green-600 transition duration-300">
        Send Message
      </button>
    </form>
  );
}
