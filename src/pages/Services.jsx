import React from 'react';
import { Scissors, Sparkles, Hand, Clock, DollarSign } from 'lucide-react';
import { services } from '../mockData/services';

const Services = () => {
  const categories = [
    {
      id: 'hair',
      title: 'Hair Services',
      icon: Scissors,
      description: 'Transform your look with expert hair care',
      items: services.hair,
      color: 'from-[#0d3d3d] to-[#1a4d4d]'
    },
    {
      id: 'beauty',
      title: 'Beauty Services',
      icon: Sparkles,
      description: 'Enhance your natural radiance',
      items: services.beauty,
      color: 'from-[#1a4d4d] to-[#0d3d3d]'
    },
    {
      id: 'nails',
      title: 'Nail Services',
      icon: Hand,
      description: 'Perfect nails for every occasion',
      items: services.nails,
      color: 'from-[#0d3d3d] to-[#1a4d4d]'
    }
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0d3d3d] to-[#1a4d4d] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Discover our comprehensive range of professional beauty services designed to bring out your best
          </p>
        </div>
      </section>

      {/* Services Categories */}
      {categories.map((category, index) => (
        <section
          key={category.id}
          className={index % 2 === 0 ? 'bg-white py-20' : 'bg-[#f7f5f2] py-20'}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Category Header */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center mb-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-full flex items-center justify-center`}>
                    <category.icon className="text-[#d4af37]" size={32} />
                  </div>
                </div>
                <h2 className="text-4xl font-bold text-[#0d3d3d] mb-3">
                  {category.title}
                </h2>
                <p className="text-lg text-gray-600">{category.description}</p>
              </div>

              {/* Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.items.map((service) => (
                  <div
                    key={service.id}
                    className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-[#d4af37] group"
                  >
                    <h3 className="text-xl font-bold text-[#0d3d3d] mb-3 group-hover:text-[#d4af37] transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center text-gray-700">
                        <DollarSign size={16} className="text-[#d4af37] mr-1" />
                        <span className="font-semibold">{service.price}</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <Clock size={16} className="text-[#d4af37] mr-1" />
                        <span>{service.duration}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#0d3d3d] to-[#1a4d4d] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Book Your Service?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Contact us today to schedule your appointment and experience our exceptional services
          </p>
          <a
            href="/contact"
            className="inline-block bg-[#d4af37] hover:bg-[#c9a961] text-[#0d3d3d] font-semibold px-10 py-4 rounded-lg transition-colors text-lg"
          >
            Contact Us Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;
