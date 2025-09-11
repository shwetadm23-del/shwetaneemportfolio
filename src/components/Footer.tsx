import React from 'react';
import { Heart, Rocket } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          {/* Logo */}
          <div className="mb-6">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Shweta Neem
            </h3>
            <p className="text-gray-400 mt-2">Digital Marketing Expert</p>
          </div>

          {/* Tagline */}
          <p className="text-gray-300 mb-6 max-w-md mx-auto">
            Helping businesses grow through data-driven digital marketing strategies and performance campaigns.
          </p>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <a href="#home" className="text-gray-300 hover:text-purple-400 transition-colors duration-300">Home</a>
            <a href="#about" className="text-gray-300 hover:text-purple-400 transition-colors duration-300">About</a>
            <a href="#services" className="text-gray-300 hover:text-purple-400 transition-colors duration-300">Services</a>
            <a href="#contact" className="text-gray-300 hover:text-purple-400 transition-colors duration-300">Contact</a>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-sm text-gray-400 mb-8">
            <span>📧 shwetadm23@gmail.com</span>
            <span className="hidden sm:inline">•</span>
            <span>📱 +91 9981917748</span>
            <span className="hidden sm:inline">•</span>
            <span>📍 Indore, Madhya Pradesh</span>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                © 2024 Shweta Neem. All rights reserved.
              </p>
              <div className="flex items-center space-x-1 text-gray-400 text-sm">
                <span>Made with</span>
                <Heart size={16} className="text-red-400 animate-pulse" />
                <span>for growing businesses</span>
                <Rocket size={16} className="text-purple-400 ml-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;