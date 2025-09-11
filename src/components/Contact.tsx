import React from 'react';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: MapPin,
      label: 'Location',
      value: 'Indore, Madhya Pradesh',
      color: 'text-red-500'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'shwetadm23@gmail.com',
      href: 'mailto:shwetadm23@gmail.com',
      color: 'text-blue-500'
    },
    {
      icon: Phone,
      label: 'Mobile',
      value: '+91 9981917748',
      href: 'tel:+919981917748',
      color: 'text-green-500'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 fade-in-section">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full mb-4 shadow-md">
              <MessageCircle size={20} className="text-purple-600" />
              <span className="text-purple-700 font-medium">Contact</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Let's discuss how I can help your business 
              <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent"> grow</span> 🚀
            </h2>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <div key={index} className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
                <div className="text-center">
                  <div className={`inline-flex p-4 bg-gray-50 rounded-full mb-4 group-hover:bg-gradient-to-r group-hover:from-purple-100 group-hover:to-pink-100 transition-all duration-300`}>
                    <info.icon size={32} className={`${info.color} group-hover:scale-110 transition-transform duration-300`} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{info.label}</h3>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-gray-600 hover:text-purple-600 transition-colors duration-300 font-medium"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-gray-600 font-medium">{info.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Let's connect and create a customized digital marketing strategy that drives real results for your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:shwetadm23@gmail.com"
                className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                <Mail className="mr-2" size={20} />
                Send Email
              </a>
              <a
                href="tel:+919981917748"
                className="inline-flex items-center bg-gradient-to-r from-green-500 to-teal-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                <Phone className="mr-2" size={20} />
                Call Now
              </a>
            </div>

            <p className="text-sm text-gray-500 mt-4">
              Let's Connect & Grow Together 🚀
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;