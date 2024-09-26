import Link from 'next/link';

const packages = [
  {
    name: 'Basic SEO Pack',
    price: '$1,000/month',
    features: ['On-page SEO', '5 High-quality Backlinks', 'Monthly Reporting'],
  },
  {
    name: 'Advanced SEO Pack',
    price: '$2,000/month',
    features: ['On-page & Off-page SEO', '10 High-quality Backlinks', 'Bi-weekly Reporting'],
  },
  {
    name: 'Premium SEO Pack',
    price: '$4,000/month',
    features: ['Full SEO Service', '20 High-quality Backlinks', 'Content Creation', 'Weekly Reporting'],
  },
];

export default function ServicePackages() {
  return (
    <section id="services" className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our SEO Packages</h2>
        <div className="flex flex-col md:flex-row justify-center items-stretch space-y-8 md:space-y-0 md:space-x-8">
          {packages.map((pkg, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-8 flex-1 flex flex-col">
              <h3 className="text-2xl font-bold mb-4">{pkg.name}</h3>
              <p className="text-xl font-semibold mb-6">{pkg.price}</p>
              <ul className="mb-6 space-y-2 flex-grow">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="text-highlight mr-2">✔</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="#contact" className="bg-highlight text-white px-4 py-2 rounded-full font-semibold hover:bg-green-600 transition duration-300 text-center">
                  Proceed to Checkout
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
