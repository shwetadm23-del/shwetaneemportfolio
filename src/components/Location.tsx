import React from 'react';
import { MapPin, Building2 } from 'lucide-react';

const Location: React.FC = () => {
  const cities = ['Indore', 'Bhopal', 'Ujjain', 'Madhya Pradesh'];

  return (
    <section className="py-20 bg-white fade-in-section">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-green-100 px-4 py-2 rounded-full mb-6">
            <MapPin size={20} className="text-blue-600" />
            <span className="text-blue-700 font-medium">Location</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Looking for a <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">Digital Marketing Expert</span>
            <br />in Indore?
          </h2>

          {/* Main Content */}
          <div className="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-2xl shadow-lg mb-8">
            <div className="flex justify-center mb-6">
              <Building2 size={60} className="text-blue-500" />
            </div>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              I help businesses in <span className="font-bold text-blue-600">Indore, Bhopal, Ujjain</span>, and across 
              <span className="font-bold text-green-600"> Madhya Pradesh</span> grow through data-driven digital marketing 
              & performance campaigns.
            </p>

            {/* Cities Tags */}
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              {cities.map((city, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white text-blue-600 rounded-full font-medium shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  {city}
                </span>
              ))}
            </div>

            <p className="text-gray-600 leading-relaxed">
              Whether you run a local business in Indore or want to expand nationwide, 
              I can craft the right marketing strategy to fuel your growth.
            </p>
          </div>

          {/* Map Placeholder */}
          <div className="bg-gray-100 rounded-2xl p-12 flex items-center justify-center">
            <div className="text-center">
              <MapPin size={48} className="text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500 text-lg font-medium">Serving clients across Madhya Pradesh</p>
              <p className="text-gray-400">with personalized digital marketing solutions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;