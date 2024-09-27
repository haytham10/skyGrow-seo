"use client"

import { useParams } from 'next/navigation';
import ConsultationForm from '../../components/ConsultationForm';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaSearch, FaCode, FaChartLine, FaPencilAlt, FaLink, FaCogs, FaRobot, FaGlobe, FaExchangeAlt } from 'react-icons/fa';

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

  if (!selectedPackage) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-navy-900 text-off-white">
        <p>Package not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-navy-900 text-off-white py-12 sm:py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-zinc-200">{selectedPackage.name}</h1>
          <p className="text-xl sm:text-2xl mb-8 text-zinc-100">{selectedPackage.price}</p>
        </motion.div>
        
        <motion.div 
          className="bg-navy-800 bg-opacity-20 p-8 rounded-lg shadow-xl mb-12"
          variants={fadeInUp}
        >
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            variants={staggerFeatures}
            initial="initial"
            animate="animate"
          >
            {selectedPackage.features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-blue-900 bg-opacity-20 p-6 rounded-lg shadow-md hover:bg-blue-800 hover:bg-opacity-40 transition-colors duration-300"
                variants={featureAnimation}
              >
                <div className="flex items-center mb-3">
                  <feature.icon className="text-yellow-400 text-2xl mr-3 flex-shrink-0" />
                  <h3 className="text-lg font-semibold text-off-white">{feature.name}</h3>
                </div>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <ConsultationForm packageName={selectedPackage.name} packagePrice={selectedPackage.price} />
        </motion.div>
      </div>
    </div>
  );
}