'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function TrialPage() {
  const [selectedPlan, setSelectedPlan] = useState('professional');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for signing up! We will send you an email with instructions to get started.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
            Start Your Free 14-Day Trial
          </h1>
          <p className="text-xl text-[#64748B] max-w-3xl mx-auto">
            No credit card required. Experience the full power of VoicePilot risk-free.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Plan Selection */}
          <div>
            <h2 className="text-3xl font-heading font-bold text-[#1E293B] mb-6">
              Choose Your Plan
            </h2>
            
            <div className="space-y-4">
              <div 
                onClick={() => setSelectedPlan('starter')}
                className={`p-6 border-2 rounded-lg cursor-pointer transition-all ${
                  selectedPlan === 'starter' ? 'border-[#3B82F6] bg-[#E0F2FE]' : 'border-gray-200 hover:border-[#3B82F6]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-heading font-bold text-[#1E293B]">VoicePilot Starter</h3>
                  <input
                    type="radio"
                    name="plan"
                    checked={selectedPlan === 'starter'}
                    onChange={() => setSelectedPlan('starter')}
                    className="w-5 h-5"
                  />
                </div>
                <p className="text-2xl font-bold text-[#3B82F6] mb-2">$49/month</p>
                <p className="text-sm text-[#64748B]">Up to 50 calls/month • Business hours coverage</p>
              </div>

              <div 
                onClick={() => setSelectedPlan('professional')}
                className={`p-6 border-2 rounded-lg cursor-pointer transition-all ${
                  selectedPlan === 'professional' ? 'border-[#3B82F6] bg-[#E0F2FE]' : 'border-gray-200 hover:border-[#3B82F6]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-heading font-bold text-[#1E293B]">VoicePilot Professional</h3>
                    <span className="text-xs bg-[#3B82F6] text-white px-2 py-1 rounded-full">Most Popular</span>
                  </div>
                  <input
                    type="radio"
                    name="plan"
                    checked={selectedPlan === 'professional'}
                    onChange={() => setSelectedPlan('professional')}
                    className="w-5 h-5"
                  />
                </div>
                <p className="text-2xl font-bold text-[#3B82F6] mb-2">$149/month</p>
                <p className="text-sm text-[#64748B]">Up to 200 calls/month • 24/7 coverage • CRM integration</p>
              </div>

              <div 
                onClick={() => setSelectedPlan('industry')}
                className={`p-6 border-2 rounded-lg cursor-pointer transition-all ${
                  selectedPlan === 'industry' ? 'border-[#3B82F6] bg-[#E0F2FE]' : 'border-gray-200 hover:border-[#3B82F6]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-heading font-bold text-[#1E293B]">Industry Specialist</h3>
                  <input
                    type="radio"
                    name="plan"
                    checked={selectedPlan === 'industry'}
                    onChange={() => setSelectedPlan('industry')}
                    className="w-5 h-5"
                  />
                </div>
                <p className="text-2xl font-bold text-[#3B82F6] mb-2">$199/month</p>
                <p className="text-sm text-[#64748B]">Industry-specific AI • Compliance features • 200 calls/month</p>
              </div>
            </div>

            <div className="mt-8 bg-[#E0F2FE] p-6 rounded-lg">
              <h3 className="font-heading font-bold text-[#1E293B] mb-3">What's Included in Your Trial:</h3>
              <ul className="space-y-2 text-[#64748B]">
                <li>✓ Full access to all features of your selected plan</li>
                <li>✓ No credit card required to start</li>
                <li>✓ Personal onboarding session with our team</li>
                <li>✓ 24/7 technical support during trial</li>
                <li>✓ Cancel anytime with no obligation</li>
                <li>✓ Keep your setup if you continue after trial</li>
              </ul>
            </div>
          </div>

          {/* Right Column - Sign Up Form */}
          <div>
            <h2 className="text-3xl font-heading font-bold text-[#1E293B] mb-6">
              Your Information
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-[#1E293B] font-medium mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-[#1E293B] font-medium mb-2">
                  Business Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@yourcompany.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-[#1E293B] font-medium mb-2">
                  Company Name *
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your business name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-[#1E293B] font-medium mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(123) 456-7890"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#3B82F6] text-white px-8 py-4 rounded-md text-lg font-medium hover:bg-[#2563EB] transition-colors"
              >
                Start Your Free Trial
              </button>

              <p className="text-xs text-[#64748B] text-center">
                By starting your trial, you agree to our{' '}
                <Link href="#" className="text-[#3B82F6] hover:underline">Terms of Service</Link>
                {' '}and{' '}
                <Link href="#" className="text-[#3B82F6] hover:underline">Privacy Policy</Link>
              </p>
            </form>

            <div className="mt-8 border-t border-gray-200 pt-8">
              <h3 className="font-heading font-bold text-[#1E293B] mb-4">
                Need help choosing?
              </h3>
              <p className="text-[#64748B] mb-4">
                Our team is here to help you find the perfect plan for your business needs.
              </p>
              <Link
                href="/contact"
                className="inline-block border-2 border-[#3B82F6] text-[#3B82F6] px-6 py-2 rounded-md hover:bg-[#E0F2FE] transition-colors"
              >
                Talk to Sales
              </Link>
            </div>
          </div>
        </div>

        {/* Trust Signals */}
        <div className="mt-16 text-center">
          <p className="text-sm text-[#64748B] mb-4">Trusted by 500+ small businesses nationwide</p>
          <div className="flex flex-wrap justify-center gap-8 text-[#64748B]">
            <div>⭐⭐⭐⭐⭐ 4.8/5 Rating</div>
            <div>🔒 Enterprise-grade Security</div>
            <div>✓ No Credit Card Required</div>
            <div>📞 24/7 Support</div>
          </div>
        </div>
      </div>
    </div>
  );
}
