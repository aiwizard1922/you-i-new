import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Heart } from 'lucide-react';
// import { foundersInfo } from '../mockData/founders'; // Uncomment when Meet the Founders section is enabled

const AboutUs = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0d3d3d] to-[#1a4d4d] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About U & I Salon</h1>
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
                U & I Salon, founded by ACK , began with a clear vision: a place where artistry meets
                connection, and every visit goes beyond a simple service. We aim to leave you feeling
                renewed, confident, and beautiful—every time you walk through our doors.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                The name "U & I" speaks to our partnership approach. We listen, understand your style and
                goals, and walk alongside you on your beauty journey. Your vision becomes ours—we're here
                to help you look and feel your best.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our team brings years of experience, staying up to date with trends while respecting
                classic beauty. We use quality products and offer tailored consultations so you get
                results you love, every time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Founders - Commented out for now. Uncomment when family photo is ready.
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="w-full lg:w-1/2">
              <img
                src={foundersInfo.image}
                alt="The family behind U & I Salon"
                className="w-full rounded-2xl shadow-2xl object-cover aspect-[4/3]"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="text-[#d4af37]" size={32} />
                <h2 className="text-3xl md:text-4xl font-bold text-[#0d3d3d]">
                  {foundersInfo.title}
                </h2>
              </div>
              <p className="text-[#d4af37] font-semibold text-lg mb-4">
                {foundersInfo.subtitle}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                {foundersInfo.description}
              </p>
            </div>
          </div>
        </div>
      </section>
      */}

      {/* Team Section - Generic, no need to update when staff changes */}
      <section className="py-20 bg-[#f7f5f2]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-center mb-8">
            <Users className="text-[#d4af37] mr-4" size={48} />
            <h2 className="text-4xl font-bold text-[#0d3d3d]">Our Team</h2>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 text-center">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Our team of skilled stylists and beauty professionals is dedicated to making you look and feel amazing. 
              We bring together talented individuals who share our passion for excellence and personalized care.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Whether you're visiting for the first time or you're a regular, you'll always receive the same 
              warm welcome and quality service. We're committed to staying current with the latest trends 
              while delivering results you'll love.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-[#d4af37] hover:bg-[#c9a961] text-[#0d3d3d] font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Values Section - Luxury */}
      <section className="py-24 bg-gradient-to-br from-[#0d3d3d] via-[#0a3535] to-[#0d3d3d] relative overflow-hidden">
        {/* Subtle gold accent */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/50 to-transparent" />
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-[#f5f0e1] font-medium tracking-[0.3em] uppercase text-sm mb-3">What We Stand For</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              The U & I Promise
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Where every visit is an indulgence, and every detail is crafted with intention
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-white/5 backdrop-blur-sm border border-[#d4af37]/20 rounded-xl p-8 hover:border-[#d4af37]/50 hover:bg-white/10 transition-all duration-300">
              <div className="w-12 h-12 rounded-full border border-[#d4af37]/40 flex items-center justify-center mb-6 group-hover:bg-[#d4af37]/10 transition-colors">
                <span className="text-2xl">✦</span>
              </div>
              <h3 className="text-2xl font-semibold text-[#d4af37] mb-4">Crafted Excellence</h3>
              <p className="text-gray-300 leading-relaxed">
                Every cut, every color, every detail—executed with precision and artistry. We don't do good. We do exceptional.
              </p>
            </div>
            <div className="group bg-white/5 backdrop-blur-sm border border-[#d4af37]/20 rounded-xl p-8 hover:border-[#d4af37]/50 hover:bg-white/10 transition-all duration-300">
              <div className="w-12 h-12 rounded-full border border-[#d4af37]/40 flex items-center justify-center mb-6 group-hover:bg-[#d4af37]/10 transition-colors">
                <span className="text-2xl">◇</span>
              </div>
              <h3 className="text-2xl font-semibold text-[#d4af37] mb-4">Bespoke Experience</h3>
              <p className="text-gray-300 leading-relaxed">
                Your style. Your vision. Your moment. We create a tailored experience that's as unique as you are.
              </p>
            </div>
            <div className="group bg-white/5 backdrop-blur-sm border border-[#d4af37]/20 rounded-xl p-8 hover:border-[#d4af37]/50 hover:bg-white/10 transition-all duration-300">
              <div className="w-12 h-12 rounded-full border border-[#d4af37]/40 flex items-center justify-center mb-6 group-hover:bg-[#d4af37]/10 transition-colors">
                <span className="text-2xl">✧</span>
              </div>
              <h3 className="text-2xl font-semibold text-[#d4af37] mb-4">Timeless Elegance</h3>
              <p className="text-gray-300 leading-relaxed">
                Where classic sophistication meets modern luxury. Beauty that transcends trends—yours to wear with pride.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
