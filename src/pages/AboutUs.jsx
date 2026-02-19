import React from 'react';
import { Users } from 'lucide-react';
import { teamMembers } from '../mockData/team';

const AboutUs = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0d3d3d] to-[#1a4d4d] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About YOU & I Salon</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            A haven of beauty and style where your transformation journey begins
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-[#f7f5f2]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-8">
              <Users className="text-[#d4af37] mr-4" size={48} />
              <h2 className="text-4xl font-bold text-[#0d3d3d]">Our Story</h2>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                YOU & I Salon was born from a simple yet powerful vision: to create a space where beauty,
                artistry, and personal connection come together. We believe that a salon visit should be
                more than just a service—it should be an experience that leaves you feeling refreshed,
                confident, and beautiful.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our name, "YOU & I," reflects our philosophy of partnership. We work closely with each
                client to understand their unique style, preferences, and goals. Your beauty journey is
                our journey, and we're committed to helping you look and feel your absolute best.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                With years of combined experience, our talented team stays current with the latest trends
                and techniques while honoring timeless beauty standards. We use premium products and
                provide personalized consultations to ensure exceptional results every time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0d3d3d] mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Talented professionals dedicated to making you look and feel amazing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-[#f7f5f2] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="h-64 bg-gradient-to-br from-[#0d3d3d] to-[#1a4d4d] flex items-center justify-center">
                  <Users className="text-[#d4af37] group-hover:scale-110 transition-transform duration-300" size={80} />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#0d3d3d] mb-2">
                    {member.name}
                  </h3>
                  <p className="text-[#d4af37] font-semibold mb-2">{member.role}</p>
                  <p className="text-sm text-gray-600 mb-3">
                    <span className="font-medium">Specialty:</span> {member.specialty}
                  </p>
                  <p className="text-sm text-gray-600 mb-3">
                    <span className="font-medium">Experience:</span> {member.experience}
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-[#f7f5f2]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-[#0d3d3d] mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-[#0d3d3d] mb-4">Excellence</h3>
                <p className="text-gray-600">
                  We strive for perfection in every service, ensuring outstanding results that exceed expectations.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-[#0d3d3d] mb-4">Care</h3>
                <p className="text-gray-600">
                  Your comfort and satisfaction are our top priorities. We treat every client like family.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-[#0d3d3d] mb-4">Innovation</h3>
                <p className="text-gray-600">
                  We stay ahead of trends, continuously learning and adopting the latest techniques and products.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
