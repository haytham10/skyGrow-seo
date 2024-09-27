import { CheckIcon, StarIcon } from '@heroicons/react/solid';
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
      'Monthly Performance Reports',
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
    <section id="services" className="bg-navy-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="sm:text-center mb-12">
          <h2 className="text-4xl font-extrabold sm:text-5xl">Exclusive SEO Packages</h2>
          <p className="mt-4 text-xl text-off-white">Choose the perfect plan for your business needs</p>
        </div>
        <div className="mt-12 space-y-8 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0">
          {packages.map((pack) => (
            <div 
              key={pack.id} 
              className={`rounded-lg shadow-xl overflow-hidden ${
                pack.id === 'advanced-growth-strategy' 
                  ? 'bg-blue-800 transform scale-105 z-10 border-2 b' 
                  : 'bg-navy-800'
              }`}
            >
              <div className="p-8">
                {pack.id === 'advanced-growth-strategy' && (
                  <span className="bg-yellow-400 bg-opacity-75 text-gray-700 text-xs font-bold px-4 py-1 rounded-lg uppercase mb-4 inline-block">
                    Recommended
                  </span>
                )}
                <h3 className="text-2xl font-bold flex items-center mb-4">
                  {pack.name}
                  {pack.id === 'advanced-growth-strategy' && (
                    <StarIcon className="h-6 w-6 text-gold-500 ml-2" />
                  )}
                </h3>
                <p className="text-off-white mb-6">{pack.description}</p>
                <p className="mb-8">
                  <span className="text-5xl font-bold">{pack.price}</span>
                  <span className="text-xl text-off-white">/month</span>
                </p>
                <Link 
                  href={`/packages/${pack.id}`} 
                  className={`block w-full rounded-md py-3 text-center text-lg font-semibold transition duration-300 ${
                    pack.id === 'advanced-growth-strategy'
                      ? 'bg-blue-500 hover:bg-blue-600 text-white'
                      : 'bg-blue-600 hover:bg-blue-700 text-white'
                  }`}
                >
                  Select Package
                </Link>
              </div>
				<div className="p-8">
                <h4 className="text-lg font-semibold mb-4">What's Included</h4>
                <ul className="space-y-3">
                  {pack.features.map((feature) => (
                    <li key={feature} className="flex items-center space-x-3">
                      <CheckIcon className="flex-shrink-0 h-5 w-5 text-green-500" aria-hidden="true" />
                      <span className="text-off-white">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}