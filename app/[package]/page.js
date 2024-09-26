'use client';

import { useParams, useSearchParams } from 'next/navigation';
import ClientInfoForm from './ClientInfoForm';

export default function PackagePage() {
  const params = useParams();
  const searchParams = useSearchParams();
  
  const packageId = params.package || searchParams.get('package');

  const packages = {
    'essential-optimization': {
      name: 'Essential SEO Optimization',
      price: 1000,
    },
    'advanced-growth-strategy': {
      name: 'Advanced Growth Strategy',
      price: 2500,
    },
    'elite-market-domination': {
      name: 'Elite Market Domination',
      price: 5000,
    },
  };

  const selectedPackage = packages[packageId];

  if (!selectedPackage) {
    return (
      <main className="bg-navy-900 text-off-white min-h-screen flex items-center justify-center">
        <p>Package not found.</p>
      </main>
    );
  }

  return (
    <main className="bg-navy-900 text-off-white min-h-screen">
      <div className="container mx-auto py-20 px-4">
        <h1 className="text-4xl font-bold mb-4 text-gold-500">{selectedPackage.name}</h1>
        <p className="text-2xl mb-8">Price: ${selectedPackage.price}/month</p>
        <ClientInfoForm selectedPackage={selectedPackage} />
      </div>
    </main>
  );
}
