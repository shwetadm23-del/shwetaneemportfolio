import React from 'react';
import { User, Target, TrendingUp, Globe } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    { icon: Target, text: 'Handled 10+ clients from different domains', color: 'text-purple-500' },
    { icon: TrendingUp, text: 'Expertise in Google Ads, Facebook Ads, SEO, Lead Generation', color: 'text-pink-500' },
    { icon: Globe, text: 'Based in Indore, MP with clients across India', color: 'text-blue-500' }
  ];

  return (
    <section id="about" className="py-20 fade-in-section">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-purple-100 px-4 py-2 rounded-full mb-4">
              <User size={20} className="text-purple-600" />
              <span className="text-purple-700 font-medium">About Me</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Meet Your <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Marketing Partner</span>
            </h2>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image/Avatar */}
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-purple-200 to-pink-200 rounded-full flex items-center justify-center">
                <div className="w-72 h-72 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <User size={120} className="text-purple-400" />
                </div>
              </div>
              {/* Floating decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-300 rounded-full animate-pulse"></div>
              <div className="absolute bottom-10 -left-6 w-6 h-6 bg-green-300 rounded-full animate-bounce"></div>
            </div>

            {/* Right Column - Content */}
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                Hi, I'm <span className="font-bold text-purple-600">Shweta Neem</span>, a passionate Digital Marketing & 
                Performance Marketing Specialist with <span className="font-semibold text-pink-500">1+ year</span> of hands-on 
                experience in driving measurable results for brands across diverse industries.
              </p>

              {/* Highlights */}
              <div className="space-y-4">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                    <highlight.icon size={24} className={`${highlight.color} flex-shrink-0 mt-1`} />
                    <span className="text-gray-700 font-medium">{highlight.text}</span>
                  </div>
                ))}
              </div>

              {/* Quote */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg border-l-4 border-purple-400">
                <p className="text-gray-700 font-medium italic">
                  "I believe in ROI-driven strategies – not just traffic, but real leads and conversions that grow your business."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;