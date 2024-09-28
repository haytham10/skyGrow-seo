"use client"

import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import ConsultationForm from '../../components/ConsultationForm';
import { motion, useAnimation } from 'framer-motion';
import { FaCheckCircle, FaSearch, FaCode, FaChartLine, FaPencilAlt, FaLink, FaCogs, FaRobot, FaGlobe, FaExchangeAlt, FaStar } from 'react-icons/fa';

const packages = {
  'essential-optimization': {
    name: 'Essential SEO Optimization',
    price: '$1,500/month',
    features: [
      { name: 'Keyword Research', icon: FaSearch, description: 'In-depth analysis to target the right keywords' },
      { name: 'On-Page SEO', icon: FaCode, description: 'Optimize your website structure and content' },
      { name: 'Monthly Reporting', icon: FaChartLine, description: 'Detailed insights on your SEO performance' },
      { name: 'Basic Local SEO', icon: FaGlobe, description: 'Setup for local businesses' },
    ],
    color: 'from-blue-400 to-green-500',
  },
  'advanced-growth-strategy': {
    name: 'Advanced Growth Strategy',
    price: '$2,500/month',
    features: [
      { name: 'All Essential features', icon: FaCheckCircle, description: 'Includes all features from Essential package' },
      { name: 'Content Strategy', icon: FaPencilAlt, description: 'Develop a content plan to boost your SEO' },
      { name: 'Link Building', icon: FaLink, description: 'Acquire high-quality backlinks to improve authority' },
      { name: 'Technical SEO', icon: FaCogs, description: 'Advanced technical optimizations for better performance' },
    ],
    color: 'from-purple-400 to-pink-500',
  },
  'elite-market-domination': {
    name: 'Elite Market Domination',
    price: '$5,000/month',
    features: [
      { name: 'All Advanced features', icon: FaCheckCircle, description: 'Includes all features from Advanced package' },
      { name: 'AI-Driven Strategies', icon: FaRobot, description: 'Leverage AI for cutting-edge SEO tactics' },
      { name: 'International SEO', icon: FaGlobe, description: 'Optimize for global markets and languages' },
      { name: 'Conversion Optimization', icon: FaExchangeAlt, description: 'Improve your website\'s conversion rates' },
    ],
    color: 'from-yellow-400 to-red-500',
  },
};

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerFeatures = {
  animate: { transition: { staggerChildren: 0.1 } }
};

const featureAnimation = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 }
};

export default function PackageConsultation() {
  const params = useParams();
  const id = params.id;
  const selectedPackage = packages[id];
  const [isInView, setIsInView] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('animate');
    }
  }, [isInView, controls]);

  if (!selectedPackage) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <p className="text-2xl font-bold">Package not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white py-20 px-4 relative overflow-hidden">
      <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br ${selectedPackage.color} opacity-10`}></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute top-0 left-0 w-48 h-48 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h1 className={`text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r ${selectedPackage.color}`}>
            {selectedPackage.name}
          </h1>
          <p className="text-3xl font-semibold mb-8 text-blue-300">{selectedPackage.price}</p>
        </motion.div>
        
        <motion.div 
          className="bg-gray-800 bg-opacity-50 p-8 rounded-xl shadow-2xl mb-16 backdrop-blur-sm"
          variants={fadeInUp}
          initial="initial"
          animate={controls}
          onViewportEnter={() => setIsInView(true)}
        >
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 gap-8"
            variants={staggerFeatures}
          >
            {selectedPackage.features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-gray-700 bg-opacity-50 p-6 rounded-lg shadow-md hover:bg-gray-600 hover:bg-opacity-50 transition-all duration-300 transform hover:scale-105 hover:rotate-1"
                  variants={featureAnimation}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center mb-3">
                    <div className={`relative p-3 rounded-full bg-gradient-to-br ${selectedPackage.color} mr-4`}>
                      <Icon className="text-2xl text-white" />
                      <div className="absolute inset-0 bg-white opacity-25 rounded-full blur-sm"></div>
                    </div>
                    <h3 className="text-xl font-semibold text-blue-300">{feature.name}</h3>
                  </div>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
        
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <h2 className={`text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r ${selectedPackage.color}`}>
            Ready to Skyrocket Your SEO?
          </h2>
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-20 h-20 bg-yellow-400 rounded-full opacity-20 animate-ping"></div>
            <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-purple-400 rounded-full opacity-20 animate-ping"></div>
            <ConsultationForm packageName={selectedPackage.name} packagePrice={selectedPackage.price} />
          </div>
        </motion.div>
        
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <p className="text-xl text-gray-300">Join our satisfied clients and watch your online presence Fly!</p>
          <div className="flex justify-center mt-4">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="text-yellow-400 text-2xl mx-1" />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}