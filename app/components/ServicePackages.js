import { CheckIcon } from '@heroicons/react/solid';
import Link from 'next/link';

const packages = [
  {
    id: 'essential-optimization',
    name: 'Essential Optimization',
    price: '$1,500',
    description: 'Tailored for businesses aiming to establish a strong online foundation.',
    features: [
      'In-depth Keyword Analysis',
      'On-Page SEO Enhancement',
      'Basic Local SEO Setup',
      'SEO Technical Fixes',
    ],
  },
  {
    id: 'advanced-growth-strategy',
    name: 'Advanced Growth Strategy',
    price: '$2,500',
    description: 'Designed for companies seeking to dominate their market niche.',
    features: [
      'All Essential features',
      'Content Strategy & Creation',
      'Link Acquisition Campaign',
      'Technical SEO Audit & Fixes'
    ],
  },
  {
    id: 'elite-market-domination',
    name: 'Elite Market Domination',
    price: '$5,000',
    description: 'Comprehensive solution for industry leaders aiming for market supremacy.',
    features: [
      'All Advanced features',
      'AI-Driven SEO Strategies',
      'International SEO Optimization',
      'Conversion Rate Optimization'
    ],
  },
];

export default function ServicePackages() {
  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4 text-center text-white">Exclusive SEO Packages</h2>
        <p className="text-center text-gray-300 mb-12">Choose the perfect plan to elevate your online presence</p>
        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((plan, index) => (
            <div 
              key={plan.id} 
              className={`bg-gray-800 p-8 rounded-lg shadow-xl ${
                index === 1 ? 'transform scale-105 border-2 border-purple-500' : ''
              }`}
            >
              {index === 1 && (
                <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white text-sm font-bold py-1 px-4 rounded-full mb-4 inline-block">
                  MOST POPULAR
                </div>
              )}
              <h3 className="text-2xl font-bold mb-4 text-white">{plan.name}</h3>
              <p className="text-4xl font-bold mb-6 text-white">
                {plan.price}
                <span className="text-xl font-normal text-gray-400">/month</span>
              </p>
              <p className="text-gray-400 mb-6">{plan.description}</p>
              <ul className="mb-8 space-y-4">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <CheckIcon className="w-5 h-5 text-green-500 mr-2" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={`/packages/${plan.id}`}
                className="block w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white py-3 rounded-full font-semibold text-center hover:from-purple-600 hover:to-pink-700 transition duration-300 transform hover:scale-105"
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}