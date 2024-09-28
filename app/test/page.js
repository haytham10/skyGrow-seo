import Image from 'next/image'
import Link from 'next/link'

export default function SkyGrowHome() {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <header className="bg-gray-800 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <svg className="w-8 h-8 text-purple-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                SkyGrow
              </span>
            </div>
            <ul className="hidden md:flex space-x-6">
              {["Home", "Services", "About", "Blog", "Contact"].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-purple-400 transition duration-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
            <button className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-2 rounded-full hover:from-purple-600 hover:to-pink-700 transition duration-300 transform hover:scale-105">
              Get Started
            </button>
          </nav>
        </div>
      </header>

      <main>
        <section className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  Elevate Your <br />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                    Digital Presence
                  </span>
                </h1>
                <p className="text-gray-300 text-xl mb-8">
                  SkyGrow: Cutting-edge SEO & Digital Marketing solutions to skyrocket your online visibility and business growth.
                </p>
                <div className="space-x-4">
                  <button className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-3 rounded-full hover:from-purple-600 hover:to-pink-700 transition duration-300 transform hover:scale-105">
                    Explore Services
                  </button>
                  <button className="border-2 border-purple-500 text-purple-400 px-8 py-3 rounded-full hover:bg-purple-500 hover:text-white transition duration-300">
                    Get Started
                  </button>
                </div>
              </div>
              <div className="md:w-1/2 relative">
                <div className="w-full h-96 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full blur-3xl opacity-20 absolute top-0 left-0"></div>
                <Image
                  src="/placeholder.svg"
                  alt="Digital Marketing Illustration"
                  width={600}
                  height={400}
                  className="w-full h-auto relative z-10"
                />
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-purple-500 to-transparent opacity-10"></div>
        </section>

        <section className="py-20 bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">What Our Clients Say</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: "Jane Smith", role: "CEO, Acme Corp", quote: "SkyGrow boosted our organic traffic by 150% within three months!" },
                { name: "John Doe", role: "Marketing Director, Tech Inc", quote: "Their SEO strategies transformed our online presence. Highly recommended!" },
                { name: "Emily Brown", role: "Founder, StartUp Co", quote: "SkyGrow's expertise helped us achieve top rankings for our key products." }
              ].map((testimonial, index) => (
                <div key={index} className="bg-gray-700 p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
                  <svg className="w-10 h-10 text-purple-500 mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-gray-300 mb-4">{testimonial.quote}</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-purple-500 rounded-full mr-3"></div>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-gray-400 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-4xl font-bold mb-4 text-center">Exclusive SEO Packages</h2>
            <p className="text-center text-gray-300 mb-12">Choose the perfect plan to elevate your online presence</p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: "Essential Boost", price: 1500, features: ["Keyword Research", "On-Page SEO", "Content Optimization", "Monthly Reporting"] },
                { name: "Growth Accelerator", price: 2500, features: ["All Essential Features", "Link Building", "Technical SEO", "Conversion Optimization"] },
                { name: "Domination Elite", price: 5000, features: ["All Growth Features", "AI-Driven Strategies", "International SEO", "24/7 Priority Support"] }
              ].map((plan, index) => (
                <div key={index} className={`bg-gray-800 p-8 rounded-lg shadow-xl ${index === 1 ? 'transform scale-105 border-2 border-purple-500' : ''}`}>
                  {index === 1 && (
                    <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white text-sm font-bold py-1 px-4 rounded-full mb-4 inline-block">
                      MOST POPULAR
                    </div>
                  )}
                  <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                  <p className="text-4xl font-bold mb-6">
                    ${plan.price}
                    <span className="text-xl font-normal text-gray-400">/month</span>
                  </p>
                  <ul className="mb-8 space-y-4">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white py-3 rounded-full font-semibold hover:from-purple-600 hover:to-pink-700 transition duration-300 transform hover:scale-105">
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-gray-800 to-transparent"></div>
        </section>

        <section className="py-20 bg-gray-800">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-4xl font-bold mb-8 text-center">About SkyGrow</h2>
            <p className="text-gray-300 text-lg mb-8 text-center">
              At SkyGrow, we're not just another SEO agency. We're your partners in digital growth, committed to elevating your online presence and driving real, measurable results.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Data-Driven", description: "We base our strategies on solid data and analytics." },
                { title: "Innovative", description: "We stay ahead of the curve with cutting-edge SEO techniques." },
                { title: "Transparent", description: "We believe in clear communication and honest reporting." }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-4 max-w-2xl relative z-10">
            <h2 className="text-4xl font-bold mb-8 text-center">Ready to Grow?</h2>
            <p className="text-center text-gray-300 mb-12">Let's discuss how we can elevate your online presence</p>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <input
                type="text"
                placeholder="Company"
                className="w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white py-3 rounded-full font-semibold hover:from-purple-600 hover:to-pink-700 transition duration-300 transform hover:scale-105"
              >
                Let's Talk Growth
              </button>
            </form>
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500 to-pink-600 opacity-10"></div>
        </section>
      </main>

      <footer className="bg-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <svg className="w-8 h-8 text-purple-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
                <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                  SkyGrow
                </span>
              </div>
              <p className="text-gray-400 mb-4">
                Elevating businesses through strategic SEO solutions. Your partner in digital growth.
              </p>
              <div className="flex space-x-4">
                {["facebook", "twitter", "instagram", "linkedin"].map((social) => (
                  <a key={social} href="#" className="text-gray-400 hover:text-white transition duration-300">
                    <span className="sr-only">{social}</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d={
                        social === "facebook" ? "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" :
                        social === "twitter" ? "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" :
                        social === "instagram" ? "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" :
                        "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                      } />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
            {[
              { title: "Services", items: ["SEO Optimization", "Content Strategy", "Link Building", "Local SEO", "Technical SEO"] },
              { title: "Company", items: ["About Us", "Blog", "Case Studies", "Careers", "Contact Us"] },
              { title: "Resources", items: ["SEO Guide", "Webinars", "Newsletter", "FAQ", "SEO Glossary"] }
            ].map((column, index) => (
              <div key={index}>
                <h4 className="text-lg font-semibold mb-4">{column.title}</h4>
                <ul className="space-y-2">
                  {column.items.map((item, i) => (
                    <li key={i}>
                      <Link href="#" className="text-gray-400 hover:text-white transition duration-300">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>&copy; 2023 SkyGrow SEO Agency. All rights reserved.</p>
            <div className="mt-2 space-x-4">
              <Link href="#" className="hover:text-white transition duration-300">Privacy Policy</Link>
              <Link href="#" className="hover:text-white transition duration-300">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}