import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Scissors, Sparkles, Hand } from 'lucide-react';
import { Button } from '../components/ui/button';

const Home = () => {
  const features = [
    {
      icon: Scissors,
      title: 'Hair Services',
      description: 'Expert cuts, coloring, and styling'
    },
    {
      icon: Sparkles,
      title: 'Beauty Services',
      description: 'Facials, makeup, and skincare'
    },
    {
      icon: Hand,
      title: 'Nail Services',
      description: 'Manicures, pedicures, and nail art'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0d3d3d] via-[#1a4d4d] to-[#0d3d3d] overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#d4af37] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#d4af37] rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            U & I Salon
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Where beauty meets artistry. Experience luxury salon services in a welcoming atmosphere.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/services">
              <Button className="bg-[#d4af37] hover:bg-[#c9a961] text-[#0d3d3d] font-semibold px-8 py-6 text-lg">
                Explore Services
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
            <Link to="/contact">
              <Button 
                variant="outline" 
                className="border-2 border-[#d4af37] text-white hover:bg-[#d4af37]/10 px-8 py-6 text-lg"
              >
                Book Appointment
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-[#f7f5f2]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0d3d3d] mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our comprehensive range of beauty and wellness services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#0d3d3d] to-[#1a4d4d] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="text-[#d4af37]" size={32} />
                </div>
                <h3 className="text-2xl font-semibold text-[#0d3d3d] mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <Link
                  to="/services"
                  className="text-[#d4af37] font-medium hover:text-[#c9a961] transition-colors inline-flex items-center"
                >
                  Learn More
                  <ArrowRight className="ml-2" size={18} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-[#0d3d3d] to-[#1a4d4d]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Look?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Book your appointment today and experience the U & I difference
          </p>
          <Link to="/contact">
            <Button className="bg-[#d4af37] hover:bg-[#c9a961] text-[#0d3d3d] font-semibold px-10 py-6 text-lg">
              Contact Us Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
