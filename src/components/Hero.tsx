import React from 'react';
import { Rocket, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto">
          {/* Animated Icons */}
          <div className="mb-8 animate-bounce">
            <Rocket size={60} className="mx-auto text-purple-500 mb-4" />
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent animate-pulse">
              Drive Growth
            </span>
            <br />
            <span className="text-gray-800">with Result-Oriented</span>
            <br />
            <span className="bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent">
              Digital Marketing
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
            I'm <span className="font-semibold text-purple-600">Shweta Neem</span>, a Digital Marketing Expert based in Indore, 
            helping businesses boost online presence, generate quality leads, and maximize ROI through 
            <span className="font-semibold text-pink-500"> data-driven marketing strategies</span>.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contact"
              className="group bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 flex items-center space-x-2"
            >
              <span>Let's Scale Your Business Together</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-purple-200 rounded-full opacity-20 animate-float"></div>
          <div className="absolute top-40 right-10 w-16 h-16 bg-pink-200 rounded-full opacity-30 animate-float-delayed"></div>
          <div className="absolute bottom-40 left-20 w-12 h-12 bg-blue-200 rounded-full opacity-25 animate-float"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;