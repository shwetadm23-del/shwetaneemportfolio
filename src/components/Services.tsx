import React from 'react';
import { Briefcase, Search, Users, TrendingUp, Target, BarChart3 } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Target,
      title: 'Performance Marketing (PPC)',
      description: 'Google Ads (Search, Display, YouTube), Facebook & Instagram Ads, Conversion Tracking & ROI Optimization',
      color: 'from-purple-400 to-purple-600',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600'
    },
    {
      icon: Search,
      title: 'Search Engine Optimization',
      description: 'On-page & Off-page SEO, Local SEO for Indore & nearby cities, Keyword Research & Competitive Analysis',
      color: 'from-blue-400 to-blue-600',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      icon: Users,
      title: 'Social Media Marketing',
      description: 'Content Strategy & Paid Campaigns, Audience Growth & Engagement, Brand Awareness Campaigns',
      color: 'from-pink-400 to-pink-600',
      bgColor: 'bg-pink-50',
      iconColor: 'text-pink-600'
    },
    {
      icon: BarChart3,
      title: 'Lead Generation Campaigns',
      description: 'B2B & B2C Campaigns, Landing Page Optimization, Marketing Funnels',
      color: 'from-green-400 to-green-600',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white fade-in-section">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-pink-100 px-4 py-2 rounded-full mb-4">
            <Briefcase size={20} className="text-purple-600" />
            <span className="text-purple-700 font-medium">Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Digital Marketing Services</span>
            <br />I Offer
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group p-8 ${service.bgColor} rounded-2xl hover:shadow-xl transform hover:-translate-y-2 transition-all duration-500 cursor-pointer`}
            >
              {/* Icon */}
              <div className={`inline-flex p-4 bg-gradient-to-r ${service.color} rounded-full mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon size={32} className="text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>

              {/* Hover Effect Overlay */}
              <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className={`h-1 bg-gradient-to-r ${service.color} rounded-full`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;