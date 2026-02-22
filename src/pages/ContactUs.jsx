import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { useToast } from '../hooks/use-toast';
import { contactInfo } from '../mockData/contact';
import { API_BASE_URL } from '../config';

const ContactUs = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch(`${API_BASE_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      let data;
      try {
        data = await res.json();
      } catch {
        throw new Error('Invalid response from server');
      }

      if (!res.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      toast({
        title: "Message Sent!",
        description: data.message || "Thank you for contacting us. We'll get back to you soon!",
      });

      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (err) {
      const message = err.message || "Could not send message. Please try again.";
      const isNetworkError = message.includes('Failed to fetch') || message.includes('NetworkError') || message.includes('Load failed');
      toast({
        title: "Error",
        description: isNetworkError
          ? "Cannot reach server. Make sure the backend is running (cd backend && npm start)."
          : message,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0d3d3d] to-[#1a4d4d] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Get in touch with us to book your appointment or ask any questions
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-[#f7f5f2]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-[#0d3d3d] mb-8">
                Get In Touch
              </h2>
              
              <div className="space-y-6">
                {/* Phone - Click to call */}
                <a
                  href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                  className="bg-white rounded-lg p-6 shadow-lg flex items-start hover:shadow-xl transition-shadow cursor-pointer group block"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#0d3d3d] to-[#1a4d4d] rounded-full flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-105 transition-transform">
                    <Phone className="text-[#d4af37]" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#0d3d3d] mb-2 group-hover:text-[#d4af37] transition-colors">Phone</h3>
                    <p className="text-gray-600">{contactInfo.phone}</p>
                    <p className="text-sm text-[#d4af37] mt-1 font-medium">Tap to call</p>
                  </div>
                </a>

                {/* Email - Click to send email */}
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="bg-white rounded-lg p-6 shadow-lg flex items-start hover:shadow-xl transition-shadow cursor-pointer group block"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#0d3d3d] to-[#1a4d4d] rounded-full flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="text-[#d4af37]" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#0d3d3d] mb-2 group-hover:text-[#d4af37] transition-colors">Email</h3>
                    <p className="text-gray-600">{contactInfo.email}</p>
                    <p className="text-sm text-[#d4af37] mt-1 font-medium">Tap to email</p>
                  </div>
                </a>

                {/* Address - Click to open Google Maps */}
                <a
                  href={contactInfo.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-lg p-6 shadow-lg flex items-start hover:shadow-xl transition-shadow cursor-pointer group block"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#0d3d3d] to-[#1a4d4d] rounded-full flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-105 transition-transform">
                    <MapPin className="text-[#d4af37]" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#0d3d3d] mb-2 group-hover:text-[#d4af37] transition-colors">Location</h3>
                    <p className="text-gray-600">{contactInfo.address}</p>
                    <p className="text-gray-600">{contactInfo.city}</p>
                    <p className="text-sm text-[#d4af37] mt-1 font-medium">Tap for directions</p>
                  </div>
                </a>

                {/* Hours */}
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#0d3d3d] to-[#1a4d4d] rounded-full flex items-center justify-center mr-4">
                      <Clock className="text-[#d4af37]" size={24} />
                    </div>
                    <h3 className="text-lg font-semibold text-[#0d3d3d]">Business Hours</h3>
                  </div>
                  <div className="space-y-2 ml-16">
                    {Object.entries(contactInfo.hours).map(([day, hours]) => (
                      <div key={day} className="flex justify-between">
                        <span className="text-gray-700 capitalize font-medium">{day}:</span>
                        <span className="text-gray-600">{hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <h2 className="text-3xl font-bold text-[#0d3d3d] mb-6">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="your name"
                      className="border-gray-300 focus:border-[#d4af37] focus:ring-[#d4af37]"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your mail id"
                      className="border-gray-300 focus:border-[#d4af37] focus:ring-[#d4af37]"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="your phone number"
                      className="border-gray-300 focus:border-[#d4af37] focus:ring-[#d4af37]"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your appointment needs..."
                      rows={6}
                      className="border-gray-300 focus:border-[#d4af37] focus:ring-[#d4af37]"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#d4af37] hover:bg-[#c9a961] text-[#0d3d3d] font-semibold py-6 text-lg"
                  >
                    <Send className="mr-2" size={20} />
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
