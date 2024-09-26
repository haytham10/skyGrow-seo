import Link from 'next/link';
import { Star, BarChart, Zap, ChevronRight } from 'lucide-react';

export default function ServiceCard({ pkg }) {
  const icons = {
    Star,
    BarChart,
    Zap,
  };
  const IconComponent = icons[pkg.icon];

  return (
    <div className="bg-navy-800 rounded-lg p-8 flex flex-col border border-gold-500">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-2xl font-bold text-gold-500">{pkg.name}</h3>
        <IconComponent className="h-8 w-8 text-gold-500" />
      </div>
      <p className="text-off-white mb-4">{pkg.description}</p>
      <ul className="mb-8 flex-grow">
        {pkg.features.map((feature) => (
          <li key={feature} className="flex items-center mb-2">
            <ChevronRight className="h-5 w-5 text-gold-500 mr-2" />
            <span className="text-off-white">{feature}</span>
          </li>
        ))}
      </ul>
      <div className="text-3xl font-bold text-gold-500 mb-4">{pkg.price}</div>
      <Link href={`/${pkg.id}`}>
        <button className="bg-burgundy-600 text-off-white px-4 py-2 rounded-full font-semibold hover:bg-burgundy-700 transition duration-300">
          Select Package
        </button>
      </Link>
    </div>
  );
}
