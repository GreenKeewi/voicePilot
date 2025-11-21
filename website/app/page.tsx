import Link from 'next/link';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#E0F2FE] to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-[#1E293B] mb-6">
              Empowering Small Businesses with Intelligent Call Management
            </h1>
            <p className="text-xl text-[#64748B] mb-8 max-w-3xl mx-auto">
              Your AI Voice Partner for Seamless Customer Connections
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/products"
                className="bg-[#3B82F6] text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-[#2563EB] transition-colors"
              >
                Start Your Free Trial
              </Link>
              <Link
                href="/about"
                className="border-2 border-[#3B82F6] text-[#3B82F6] px-8 py-3 rounded-md text-lg font-medium hover:bg-[#E0F2FE] transition-colors"
              >
                See How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-heading font-bold text-[#1E293B] mb-6 text-center">
            Welcome to VoicePilot
          </h2>
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-[#64748B]">
            <p>
              In today's fast-paced business environment, every call matters. VoicePilot is your dedicated AI-powered call management solution designed specifically for small businesses who want to deliver exceptional customer service without the overhead of a full-time reception team. Our intelligent voice agents work around the clock to ensure you never miss an opportunity, turning every incoming call into a positive customer experience.
            </p>
            <p>
              Whether you're running a boutique retail shop, a busy dental practice, or a growing consulting firm, VoicePilot adapts to your unique business needs. Our AI technology doesn't just answer calls—it understands your customers, responds naturally to their questions, schedules appointments, takes messages, and routes urgent matters appropriately. With VoicePilot, you gain a professional virtual receptionist that learns and grows with your business.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-[#E0F2FE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-heading font-bold text-[#1E293B] mb-12 text-center">
            How VoicePilot Serves Your Business
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-[#3B82F6] rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-bold text-[#1E293B] mb-2">
                24/7 Intelligent Call Answering
              </h3>
              <ul className="text-[#64748B] space-y-2">
                <li>• Never miss a customer call, day or night</li>
                <li>• Natural, conversational AI that represents your brand professionally</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-[#06B6D4] rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-bold text-[#1E293B] mb-2">
                Smart Appointment Scheduling
              </h3>
              <ul className="text-[#64748B] space-y-2">
                <li>• Automated booking integrated with your calendar</li>
                <li>• Confirmation reminders sent automatically</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-[#3B82F6] rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-bold text-[#1E293B] mb-2">
                Message Taking & Call Routing
              </h3>
              <ul className="text-[#64748B] space-y-2">
                <li>• Detailed message capture with priority flagging</li>
                <li>• Intelligent routing to the right team member</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-[#06B6D4] rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-bold text-[#1E293B] mb-2">
                Customer Data Insights
              </h3>
              <ul className="text-[#64748B] space-y-2">
                <li>• Analytics on call patterns and customer needs</li>
                <li>• Actionable insights to improve your service</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-heading font-bold text-[#1E293B] mb-4">
            Ready to Transform Your Customer Calls?
          </h2>
          <p className="text-xl text-[#64748B] mb-8">
            Start your 14-day free trial today—no credit card required.
          </p>
          <Link
            href="/products"
            className="inline-block bg-[#3B82F6] text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-[#2563EB] transition-colors"
          >
            Get Started Now
          </Link>
        </div>
      </section>
    </div>
  );
}

