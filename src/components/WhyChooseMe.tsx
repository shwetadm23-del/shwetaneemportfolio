import React from 'react';
import { CheckCircle, Award, Users, TrendingUp, MapPin, Heart } from 'lucide-react';

const WhyChooseMe: React.FC = () => {
  const benefits = [
    {
      icon: Users,
      text: 'Experience of handling 10+ clients in 1 year',
      color: 'text-purple-500'
    },
    {
      icon: Award,
      text: 'Expertise in multi-industry campaigns',
      color: 'text-blue-500'
    },
    {
      icon: TrendingUp,
      text: 'Strong focus on ROI & measurable growth',
      color: 'text-green-500'
    },
    {
      icon: MapPin,
      text: "Local expertise in Indore's market trends",
      color: 'text-pink-500'
    },
    {
      icon: Heart,
      text: 'Personalized strategies for startups, SMEs, and growing businesses',
      color: 'text-red-500'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50 fade-in-section">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full mb-4 shadow-md">
            <CheckCircle size={20} className="text-green-500" />
            <span className="text-gray-700 font-medium">Why Choose Me</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Your Success is My <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Priority</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Here's what sets me apart from other digital marketing professionals
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="p-3 bg-gray-50 rounded-full group-hover:bg-gradient-to-r group-hover:from-purple-100 group-hover:to-pink-100 transition-all duration-300">
                      <benefit.icon size={24} className={`${benefit.color} group-hover:scale-110 transition-transform duration-300`} />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <p className="text-gray-700 font-medium leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                      {benefit.text}
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <CheckCircle size={20} className="text-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg inline-block">
              <p className="text-lg text-gray-600 mb-4">
                Ready to see <span className="font-bold text-purple-600">real results</span>?
              </p>
              <a
                href="#contact"
                className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                Let's Discuss Your Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMe;