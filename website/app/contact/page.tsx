'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    callVolume: '',
    message: '',
    contactMethod: 'email',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for your message! We will get back to you soon.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#E0F2FE] to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-heading font-bold text-[#1E293B] mb-4">
            Let's Start a Conversation
          </h1>
          <p className="text-xl text-[#64748B] max-w-3xl mx-auto">
            We're here to help your business thrive. Reach out anytime—we'd love to hear from you.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-heading font-bold text-[#1E293B] mb-6">
              Contact Information
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-heading font-bold text-[#1E293B] mb-2">Primary Contact Email</h3>
                <p className="text-[#64748B]">
                  Email: <a href="mailto:support@voicepilot.ai" className="text-[#3B82F6] hover:underline">support@voicepilot.ai</a>
                </p>
                <p className="text-sm text-[#64748B] mt-2">
                  Response time: Within 4 business hours for general inquiries
                </p>
              </div>

              <div>
                <h3 className="font-heading font-bold text-[#1E293B] mb-2">Business Address</h3>
                <p className="text-[#64748B]">
                  VoicePilot Headquarters<br />
                  2847 Innovation Drive, Suite 320<br />
                  San Francisco, CA 94103<br />
                  United States
                </p>
              </div>

              <div>
                <h3 className="font-heading font-bold text-[#1E293B] mb-2">Office Hours</h3>
                <p className="text-[#64748B]">
                  Monday - Friday: 8:00 AM - 6:00 PM PST<br />
                  Saturday: 10:00 AM - 4:00 PM PST<br />
                  Sunday: Closed (Email support available)
                </p>
              </div>

              <div>
                <h3 className="font-heading font-bold text-[#1E293B] mb-2">Phone Support</h3>
                <p className="text-[#64748B]">
                  Sales Inquiries: +1 (415) 555-0147<br />
                  Technical Support: +1 (415) 555-0148<br />
                  Toll-Free: 1-800-VOICE-AI (1-800-864-2324)
                </p>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-8 bg-gray-200 h-64 rounded-lg flex items-center justify-center">
              <p className="text-[#64748B]">Map: 2847 Innovation Drive, San Francisco, CA 94103</p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-heading font-bold text-[#1E293B] mb-6">
              Send Us a Message
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-[#1E293B] font-medium mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-[#1E293B] font-medium mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@yourcompany.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-[#1E293B] font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(123) 456-7890"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-[#1E293B] font-medium mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your business name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="callVolume" className="block text-[#1E293B] font-medium mb-2">
                  Current Call Volume
                </label>
                <select
                  id="callVolume"
                  name="callVolume"
                  value={formData.callVolume}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent"
                >
                  <option value="">Select an option</option>
                  <option value="<50">Less than 50 calls/month</option>
                  <option value="50-200">50-200 calls/month</option>
                  <option value="200-500">200-500 calls/month</option>
                  <option value="500+">500+ calls/month</option>
                  <option value="not-sure">Not sure</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-[#1E293B] font-medium mb-2">
                  How Can We Help? *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  minLength={20}
                  maxLength={1000}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your business needs, questions about our services, or anything else you'd like to discuss..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-[#1E293B] font-medium mb-2">
                  Preferred Contact Method
                </label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="contactMethod"
                      value="email"
                      checked={formData.contactMethod === 'email'}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    Email
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="contactMethod"
                      value="phone"
                      checked={formData.contactMethod === 'phone'}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    Phone call
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="contactMethod"
                      value="either"
                      checked={formData.contactMethod === 'either'}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    Either is fine
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#3B82F6] text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-[#2563EB] transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Response Time Expectations */}
        <div className="mt-16 bg-[#E0F2FE] p-8 rounded-lg">
          <h2 className="text-2xl font-heading font-bold text-[#1E293B] mb-4 text-center">
            When Will I Hear Back?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[#64748B]">
            <div>
              <p className="mb-2">✓ <strong>General Inquiries:</strong> We respond to all contact form submissions within 4 business hours during office hours.</p>
              <p>✓ <strong>Sales Questions:</strong> Our sales team typically responds within 2 hours during business hours.</p>
            </div>
            <div>
              <p className="mb-2">✓ <strong>Technical Support:</strong></p>
              <ul className="ml-4">
                <li>- Standard customers: 4-hour response time</li>
                <li>- Professional plan: 2-hour response time</li>
                <li>- Enterprise customers: 1-hour response time with 24/7 availability</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
