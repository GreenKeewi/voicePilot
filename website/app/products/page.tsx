import Link from 'next/link';

export default function ProductsPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#E0F2FE] to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-heading font-bold text-[#1E293B] mb-4">
            AI Call Solutions Tailored to Your Business
          </h1>
          <p className="text-xl text-[#64748B] max-w-3xl mx-auto">
            Choose the perfect VoicePilot plan to match your business needs and scale as you grow
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* VoicePilot Starter */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-[#3B82F6] transition-colors">
              <h2 className="text-3xl font-heading font-bold text-[#1E293B] mb-4">
                VoicePilot Starter
              </h2>
              <p className="text-[#64748B] mb-6">
                Perfect for solo entrepreneurs and micro-businesses just getting started. VoicePilot Starter handles your basic call management needs with professional AI answering, message taking, and simple call routing.
              </p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-[#1E293B]">$49</span>
                <span className="text-[#64748B]">/month</span>
                <p className="text-sm text-[#64748B] mt-2">or $470/year (save $118 - 2 months free!)</p>
              </div>
              <h3 className="font-heading font-bold text-[#1E293B] mb-3">Key Features:</h3>
              <ul className="space-y-2 mb-6 text-[#64748B]">
                <li>✓ Up to 50 calls per month</li>
                <li>✓ Basic AI call answering with custom greetings</li>
                <li>✓ Message taking with email/SMS notifications</li>
                <li>✓ Simple call routing (up to 2 team members)</li>
                <li>✓ Business hours call handling</li>
                <li>✓ Monthly analytics dashboard</li>
              </ul>
              <p className="text-sm text-[#64748B] mb-6">
                <strong>Ideal For:</strong> Freelancers, solo practitioners, home-based businesses
              </p>
              <Link
                href="/trial"
                className="block text-center bg-[#3B82F6] text-white px-6 py-3 rounded-md hover:bg-[#2563EB] transition-colors font-medium"
              >
                Start Free Trial
              </Link>
            </div>

            {/* VoicePilot Professional */}
            <div className="bg-white border-2 border-[#3B82F6] rounded-lg p-8 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#3B82F6] text-white px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
              <h2 className="text-3xl font-heading font-bold text-[#1E293B] mb-4">
                VoicePilot Professional
              </h2>
              <p className="text-[#64748B] mb-6">
                Our most popular plan for growing small businesses. VoicePilot Professional delivers advanced AI capabilities including appointment scheduling, CRM integration, and after-hours support.
              </p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-[#1E293B]">$149</span>
                <span className="text-[#64748B]">/month</span>
                <p className="text-sm text-[#64748B] mt-2">or $1,430/year (save $358 - 2.4 months free!)</p>
              </div>
              <h3 className="font-heading font-bold text-[#1E293B] mb-3">Key Features:</h3>
              <ul className="space-y-2 mb-6 text-[#64748B]">
                <li>✓ Up to 200 calls per month</li>
                <li>✓ Advanced AI with natural language understanding</li>
                <li>✓ Automated appointment scheduling & calendar sync</li>
                <li>✓ Intelligent call routing (up to 5 team members)</li>
                <li>✓ 24/7 call coverage including weekends</li>
                <li>✓ CRM integration (Salesforce, HubSpot, Zoho)</li>
                <li>✓ Priority support & onboarding assistance</li>
                <li>✓ Detailed analytics & call recordings</li>
              </ul>
              <p className="text-sm text-[#64748B] mb-6">
                <strong>Ideal For:</strong> Retail shops, medical offices, consulting firms, service businesses
              </p>
              <Link
                href="/trial"
                className="block text-center bg-[#3B82F6] text-white px-6 py-3 rounded-md hover:bg-[#2563EB] transition-colors font-medium"
              >
                Start Free Trial
              </Link>
            </div>

            {/* VoicePilot Enterprise */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-[#3B82F6] transition-colors">
              <h2 className="text-3xl font-heading font-bold text-[#1E293B] mb-4">
                VoicePilot Enterprise
              </h2>
              <p className="text-[#64748B] mb-6">
                The ultimate call management solution for established businesses with high call volumes. VoicePilot Enterprise offers unlimited calls, advanced customization, multi-location support, and dedicated account management.
              </p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-[#1E293B]">Custom</span>
                <p className="text-sm text-[#64748B] mt-2">Starting at $499/month</p>
              </div>
              <h3 className="font-heading font-bold text-[#1E293B] mb-3">Key Features:</h3>
              <ul className="space-y-2 mb-6 text-[#64748B]">
                <li>✓ Unlimited calls</li>
                <li>✓ Fully customizable AI voice and personality</li>
                <li>✓ Multi-location & department support</li>
                <li>✓ Advanced workflow automation</li>
                <li>✓ API access for custom integrations</li>
                <li>✓ Dedicated account manager</li>
                <li>✓ White-label options available</li>
                <li>✓ Custom analytics & reporting</li>
                <li>✓ 99.9% uptime SLA</li>
                <li>✓ Priority 24/7 technical support</li>
              </ul>
              <p className="text-sm text-[#64748B] mb-6">
                <strong>Ideal For:</strong> Multi-location businesses, high-volume call centers, franchises
              </p>
              <Link
                href="/contact"
                className="block text-center bg-[#3B82F6] text-white px-6 py-3 rounded-md hover:bg-[#2563EB] transition-colors font-medium"
              >
                Contact Sales
              </Link>
            </div>

            {/* VoicePilot Industry Specialist */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-[#3B82F6] transition-colors">
              <h2 className="text-3xl font-heading font-bold text-[#1E293B] mb-4">
                VoicePilot Industry Specialist
              </h2>
              <p className="text-[#64748B] mb-6">
                Specialized AI call agents trained for specific industries including healthcare, legal, real estate, and hospitality. These domain-expert agents understand industry terminology, compliance requirements, and customer expectations.
              </p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-[#1E293B]">$199</span>
                <span className="text-[#64748B]">/month</span>
                <p className="text-sm text-[#64748B] mt-2">or $1,910/year (save $478 - 2.4 months free!)</p>
              </div>
              <h3 className="font-heading font-bold text-[#1E293B] mb-3">Industry Options:</h3>
              <ul className="space-y-2 mb-6 text-[#64748B]">
                <li>✓ <strong>Medical & Dental:</strong> HIPAA-compliant scheduling</li>
                <li>✓ <strong>Legal:</strong> Client intake, confidential handling</li>
                <li>✓ <strong>Real Estate:</strong> Property inquiries, showings</li>
                <li>✓ <strong>Hospitality:</strong> Reservations, guest services</li>
                <li>✓ Industry-specific AI training</li>
                <li>✓ Compliance with relevant regulations</li>
                <li>✓ All features from Professional plan</li>
              </ul>
              <p className="text-sm text-[#64748B] mb-6">
                <strong>Ideal For:</strong> Healthcare practices, law firms, real estate agencies, hotels & restaurants
              </p>
              <Link
                href="/trial"
                className="block text-center bg-[#3B82F6] text-white px-6 py-3 rounded-md hover:bg-[#2563EB] transition-colors font-medium"
              >
                Start Free Trial
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-[#E0F2FE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold text-[#1E293B] mb-8 text-center">
            Compare Plans to Find Your Perfect Fit
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left p-4 font-heading font-bold text-[#1E293B]">Feature</th>
                  <th className="text-center p-4 font-heading font-bold text-[#1E293B]">Starter</th>
                  <th className="text-center p-4 font-heading font-bold text-[#1E293B]">Professional</th>
                  <th className="text-center p-4 font-heading font-bold text-[#1E293B]">Enterprise</th>
                  <th className="text-center p-4 font-heading font-bold text-[#1E293B]">Industry Specialist</th>
                </tr>
              </thead>
              <tbody className="text-[#64748B]">
                <tr className="border-b border-gray-100">
                  <td className="p-4">Monthly Calls</td>
                  <td className="text-center p-4">50</td>
                  <td className="text-center p-4">200</td>
                  <td className="text-center p-4">Unlimited</td>
                  <td className="text-center p-4">200</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-4">Call Coverage</td>
                  <td className="text-center p-4">Business Hours</td>
                  <td className="text-center p-4">24/7</td>
                  <td className="text-center p-4">24/7</td>
                  <td className="text-center p-4">24/7</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-4">Team Members</td>
                  <td className="text-center p-4">2</td>
                  <td className="text-center p-4">5</td>
                  <td className="text-center p-4">Unlimited</td>
                  <td className="text-center p-4">5</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-4">Appointment Scheduling</td>
                  <td className="text-center p-4">✗</td>
                  <td className="text-center p-4">✓</td>
                  <td className="text-center p-4">✓</td>
                  <td className="text-center p-4">✓</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-4">CRM Integration</td>
                  <td className="text-center p-4">✗</td>
                  <td className="text-center p-4">✓</td>
                  <td className="text-center p-4">✓</td>
                  <td className="text-center p-4">✓</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-4">Industry Training</td>
                  <td className="text-center p-4">✗</td>
                  <td className="text-center p-4">✗</td>
                  <td className="text-center p-4">Optional</td>
                  <td className="text-center p-4">✓</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-4">Dedicated Support</td>
                  <td className="text-center p-4">✗</td>
                  <td className="text-center p-4">✗</td>
                  <td className="text-center p-4">✓</td>
                  <td className="text-center p-4">✗</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
