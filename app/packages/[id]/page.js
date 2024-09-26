'use client'

import { useParams } from 'next/navigation';
import ConsultationForm from '../../components/ConsultationForm';

const packages = {
  'basic-seo-pack': {
    name: 'Basic SEO Pack',
    price: '$1,000/month',
  },
  'advanced-seo-pack': {
    name: 'Advanced SEO Pack',
    price: '$2,000/month',
  },
  'premium-seo-pack': {
    name: 'Premium SEO Pack',
    price: '$4,000/month',
  },
};

export default function PackageConsultation() {
  const params = useParams();
  const id = params.id;
  const selectedPackage = packages[id];

  if (!selectedPackage) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-primary text-white">
        <p>Package not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-primary text-white py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{selectedPackage.name}</h1>
        <p className="text-xl mb-8">Price: {selectedPackage.price}</p>
        <ConsultationForm packageName={selectedPackage.name} />
      </div>
    </div>
  );
}