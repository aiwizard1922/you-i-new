import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';
import { contactInfo } from '../mockData/contact';

const Footer = () => {
  return (
    <footer className="bg-[#0d3d3d] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <img
              src="https://customer-assets.emergentagent.com/job_843e387b-83bb-4df8-bb8e-6dcdc428d7c3/artifacts/c26lyfja_WhatsApp%20Image%202026-02-16%20at%201.46.23%20PM.jpeg"
              alt="YOU & I Salon"
              className="h-16 w-16 object-contain mb-4"
            />
            <p className="text-sm text-gray-300">
              Where beauty meets artistry. Experience luxury salon services in a welcoming atmosphere.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-[#d4af37] mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="block text-sm text-gray-300 hover:text-[#d4af37] transition-colors cursor-pointer py-1">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="block text-sm text-gray-300 hover:text-[#d4af37] transition-colors cursor-pointer py-1">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="block text-sm text-gray-300 hover:text-[#d4af37] transition-colors cursor-pointer py-1">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="block text-sm text-gray-300 hover:text-[#d4af37] transition-colors cursor-pointer py-1">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-[#d4af37] mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone size={18} className="mr-2 mt-0.5 text-[#d4af37]" />
                <span className="text-sm text-gray-300">{contactInfo.phone}</span>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="mr-2 mt-0.5 text-[#d4af37]" />
                <span className="text-sm text-gray-300">{contactInfo.email}</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-0.5 text-[#d4af37]" />
                <span className="text-sm text-gray-300">
                  {contactInfo.address}<br />{contactInfo.city}
                </span>
              </li>
            </ul>
          </div>

          {/* Hours & Social */}
          <div>
            <h3 className="text-lg font-semibold text-[#d4af37] mb-4">Hours</h3>
            <p className="text-sm text-gray-300 mb-4">
              Tue-Thu: 10 AM - 7 PM<br />
              Fri: 10 AM - 8 PM<br />
              Sat: 9 AM - 6 PM<br />
              Sun: 10 AM - 5 PM<br />
              Mon: Closed
            </p>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#d4af37] transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#d4af37] transition-colors"
              >
                <Facebook size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-sm text-gray-400">
            © 2025 YOU & I Salon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
