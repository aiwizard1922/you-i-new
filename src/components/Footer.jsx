import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';
import { contactInfo } from '../mockData/contact';

const Footer = () => {
  return (
    <footer className="bg-[#0d3d3d] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 items-start">
          {/* Brand */}
          <div className="flex flex-col">
            <img
              src="https://customer-assets.emergentagent.com/job_843e387b-83bb-4df8-bb8e-6dcdc428d7c3/artifacts/c26lyfja_WhatsApp%20Image%202026-02-16%20at%201.46.23%20PM.jpeg"
              alt="U & I Salon"
              className="h-16 w-16 object-contain mb-4"
            />
            <p className="text-sm text-gray-300 leading-relaxed max-w-xs">
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
              <li className="flex items-start gap-3">
                <Phone size={18} className="flex-shrink-0 mt-0.5 text-[#d4af37]" />
                <span className="text-sm text-gray-300">{contactInfo.phone}</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="flex-shrink-0 mt-0.5 text-[#d4af37]" />
                <span className="text-sm text-gray-300 break-words">{contactInfo.email}</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="flex-shrink-0 mt-0.5 text-[#d4af37]" />
                <span className="text-sm text-gray-300">
                  {contactInfo.address}<br />{contactInfo.city}
                </span>
              </li>
            </ul>
          </div>

          {/* Hours & Social */}
          <div>
            <h3 className="text-lg font-semibold text-[#d4af37] mb-4">Hours</h3>
            <p className="text-sm text-gray-300 leading-relaxed mb-4">
              Mon: 08:30 AM - 08:30 PM<br />
              Tue: 09:00 AM - 07:00 PM<br />
              Wed: 08:30 AM - 08:30 PM<br />
              Thu: 08:30 AM - 08:30 PM<br />    
              Fri: 08:30 AM - 08:30 PM<br />
              Sat: 08:30 AM - 09:30 PM<br />
              Sun: 08:00 AM - 09:30 PM<br />
              
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/uandi_unisex_salon?igsh=eXFwd3l5YXdmcHBx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#d4af37] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#d4af37] transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center">
          <p className="text-sm text-gray-400">
            © 2025 U & I Salon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
