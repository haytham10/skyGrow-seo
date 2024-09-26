import ServiceCard from './ServiceCard';

export default function ServicesPage() {
  const packages = [
    {
      id: 'essential-optimization',
      name: 'Essential SEO Optimization',
      price: '$1,500/month',
      description: 'Tailored for businesses aiming to establish a strong online foundation.',
      features: ['In-depth Keyword Analysis', 'On-Page SEO Enhancement', 'Monthly Performance Reports'],
      icon: 'Star',
    },
    {
      id: 'advanced-growth-strategy',
      name: 'Advanced Growth Strategy',
      price: '$2,500/month',
      description: 'Designed for companies seeking to dominate their market niche.',
      features: [
        'All Essential features',
        'Content Strategy & Creation',
        'Link Acquisition Campaign',
        'Technical SEO Audit & Fixes',
      ],
      icon: 'BarChart',
    },
    {
      id: 'elite-market-domination',
      name: 'Elite Market Domination',
      price: '$5,000/month',
      description: 'Comprehensive solution for industry leaders aiming for market supremacy.',
      features: [
        'All Advanced features',
        'AI-Driven SEO Strategies',
        'International SEO Optimization',
        'Conversion Rate Optimization',
      ],
      icon: 'Zap',
    },
  ];

  return (
    <main className="bg-charcoal-800">
      <section id="services" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gold-500">Exclusive SEO Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <ServiceCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
