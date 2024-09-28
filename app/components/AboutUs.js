import { FaChartLine, FaLightbulb, FaComments } from 'react-icons/fa';

export default function AboutUs() {
  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl font-bold mb-8 text-center text-white">About SkyGrow</h2>
        <p className="text-gray-300 text-lg mb-8 text-center">
          At SkyGrow, we're not just another SEO agency. We're your partners in digital growth, committed to elevating your online presence and driving real, measurable results.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Data-Driven", description: "We base our strategies on solid data and analytics.", icon: FaChartLine },
            { title: "Innovative", description: "We stay ahead of the curve with cutting-edge SEO techniques.", icon: FaLightbulb },
            { title: "Transparent", description: "We believe in clear communication and honest reporting.", icon: FaComments }
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}