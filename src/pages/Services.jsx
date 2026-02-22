import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Scissors,
  Sparkles,
  Hand,
  CircleDot,
  Droplets,
  Wind,
  Sun,
  Footprints,
  Gem,
  Crown,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { serviceCategories } from '../mockData/services';

const categoryIcons = {
  threading: CircleDot,
  hair: Scissors,
  cleanUp: Droplets,
  facials: Sparkles,
  facePeel: Wind,
  waxing: Wind,
  deTan: Sun,
  manicurePedicure: Hand,
  nails: Hand,
  body: Footprints,
  groom: Crown
};

const quickLinkTitles = {
  threading: 'Threading',
  hair: 'Hair',
  cleanUp: 'Clean Up',
  facials: 'Facials',
  facePeel: 'Face Peel',
  waxing: 'Waxing',
  deTan: 'De-Tan',
  manicurePedicure: 'Mani & Pedi',
  nails: 'Nails',
  body: 'Body',
  groom: 'Groom'
};

const Services = () => {
  const [expandedCategory, setExpandedCategory] = useState(null);
  const sectionRefs = useRef({});

  const toggleCategory = (categoryId) => {
    setExpandedCategory((prev) => (prev === categoryId ? null : categoryId));
    if (expandedCategory !== categoryId) {
      setTimeout(() => {
        sectionRefs.current[categoryId]?.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }, 100);
    }
  };

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0d3d3d] to-[#1a4d4d] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Click below to view any services and their prices.
          </p>
        </div>
      </section>

      {/* Quick Links - Category Grid */}
      <section className="py-12 bg-[#f7f5f2]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {serviceCategories.map((category) => {
              const IconComponent = categoryIcons[category.id] || Gem;
              const isExpanded = expandedCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => toggleCategory(category.id)}
                  className={`flex flex-col items-center justify-center p-6 rounded-xl transition-all duration-300 border-2 ${
                    isExpanded
                      ? 'bg-[#0d3d3d] border-[#d4af37] text-white shadow-lg scale-105'
                      : 'bg-white border-[#0d3d3d]/20 hover:border-[#d4af37] hover:shadow-md text-[#0d3d3d]'
                  }`}
                >
                  <IconComponent
                    className={isExpanded ? 'text-[#d4af37]' : 'text-[#0d3d3d]'}
                    size={32}
                  />
                  <span className="mt-2 text-sm font-semibold text-center leading-tight">
                    {quickLinkTitles[category.id] || category.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Expandable Service Sections */}
      <section className="py-8 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          {serviceCategories.map((category) => {
            const IconComponent = categoryIcons[category.id] || Gem;
            const isExpanded = expandedCategory === category.id;

            return (
              <div
                key={category.id}
                ref={(el) => (sectionRefs.current[category.id] = el)}
                className="mb-6"
              >
                {/* Category Header - Clickable */}
                <button
                  onClick={() => toggleCategory(category.id)}
                  className={`w-full flex items-center justify-between p-4 rounded-xl transition-all duration-300 ${
                    isExpanded
                      ? 'bg-[#0d3d3d] text-white'
                      : 'bg-[#f7f5f2] hover:bg-[#0d3d3d]/10 text-[#0d3d3d]'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        isExpanded ? 'bg-[#d4af37]/20' : 'bg-[#0d3d3d]/10'
                      }`}
                    >
                      <IconComponent
                        className={isExpanded ? 'text-[#d4af37]' : 'text-[#0d3d3d]'}
                        size={24}
                      />
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-bold">{category.title}</h3>
                      {category.description && (
                        <p className={`text-sm mt-0.5 ${isExpanded ? 'text-gray-200' : 'text-gray-600'}`}>
                          {category.description}
                        </p>
                      )}
                    </div>
                  </div>
                  {isExpanded ? (
                    <ChevronUp size={24} className="text-[#d4af37]" />
                  ) : (
                    <ChevronDown size={24} />
                  )}
                </button>

                {/* Expanded Content */}
                {isExpanded && (
                  <div className="mt-4 space-y-6">
                    {category.subcategories.map((subcategory, subIndex) => (
                      <div
                        key={subIndex}
                        className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
                      >
                        <div className="bg-[#0d3d3d]/5 px-6 py-4 border-b border-[#d4af37]/20">
                          <h4 className="text-lg font-semibold text-[#0d3d3d]">
                            {subcategory.name}
                          </h4>
                          {subcategory.description && (
                            <p className="text-sm text-gray-600 mt-1">
                              {subcategory.description}
                            </p>
                          )}
                        </div>
                        <div className="overflow-x-auto">
                          <table className="w-full">
                            <tbody>
                              {subcategory.items.map((item, itemIndex) => (
                                <tr
                                  key={itemIndex}
                                  className="border-b border-gray-100 last:border-0 hover:bg-[#f7f5f2]/50 transition-colors"
                                >
                                  <td className="px-6 py-4">
                                    <div>
                                      <span className="font-medium text-gray-900">
                                        {item.name}
                                      </span>
                                      {item.description && (
                                        <p className="text-sm text-gray-500 mt-0.5">
                                          {item.description}
                                        </p>
                                      )}
                                    </div>
                                  </td>
                                  <td className="px-6 py-4 text-right whitespace-nowrap">
                                    <span className="font-semibold text-[#0d3d3d]">
                                      {item.price}
                                    </span>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#0d3d3d] to-[#1a4d4d] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Book Your Service?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Contact us today to schedule your appointment and experience our exceptional services
          </p>
          <Link
            to="/contact"
            className="inline-block bg-[#d4af37] hover:bg-[#c9a961] text-[#0d3d3d] font-semibold px-10 py-4 rounded-lg transition-colors text-lg"
          >
            Contact Us Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
