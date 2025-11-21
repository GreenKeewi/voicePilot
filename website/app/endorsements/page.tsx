import Link from 'next/link';

export default function EndorsementsPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#E0F2FE] to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-heading font-bold text-[#1E293B] mb-4">
            What Our Customers Are Saying
          </h1>
          <p className="text-xl text-[#64748B] max-w-3xl mx-auto">
            Real businesses, real results. Discover how VoicePilot has transformed customer communication for small businesses like yours.
          </p>
        </div>
      </section>

      {/* Main Testimonials */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-[#3B82F6]">
              <div className="flex items-start mb-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-heading font-bold text-[#1E293B]">Maria Rodriguez</h3>
                  <p className="text-[#64748B]">Owner, Sunshine Dental Care</p>
                  <p className="text-sm text-[#64748B]">📍 Austin, Texas</p>
                </div>
              </div>
              <p className="text-lg text-[#64748B] mb-6">
                "Before VoicePilot, we were missing an average of 15-20 patient calls every week because our front desk team was overwhelmed. Patients would get frustrated with busy signals or long hold times, and we were losing new patient opportunities. Since implementing VoicePilot Professional six months ago, we haven't missed a single call. The AI handles appointment scheduling flawlessly, understands dental terminology, and even knows when to flag urgent situations for immediate attention. Our patient satisfaction scores have increased by 34%, and we've booked 40% more new patient appointments. The ROI was obvious within the first month. I honestly don't know how we functioned without it!"
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="bg-[#E0F2FE] p-4 rounded-lg">
                  <p className="text-2xl font-bold text-[#3B82F6]">0</p>
                  <p className="text-sm text-[#64748B]">Missed calls in 6 months</p>
                </div>
                <div className="bg-[#E0F2FE] p-4 rounded-lg">
                  <p className="text-2xl font-bold text-[#3B82F6]">+40%</p>
                  <p className="text-sm text-[#64748B]">New patient bookings</p>
                </div>
                <div className="bg-[#E0F2FE] p-4 rounded-lg">
                  <p className="text-2xl font-bold text-[#3B82F6]">+34%</p>
                  <p className="text-sm text-[#64748B]">Patient satisfaction</p>
                </div>
                <div className="bg-[#E0F2FE] p-4 rounded-lg">
                  <p className="text-2xl font-bold text-[#3B82F6]">&lt;30</p>
                  <p className="text-sm text-[#64748B]">Days to ROI</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-[#06B6D4]">
              <div className="flex items-start mb-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-heading font-bold text-[#1E293B]">James Mitchell</h3>
                  <p className="text-[#64748B]">Principal, Mitchell & Associates Legal Services</p>
                  <p className="text-sm text-[#64748B]">📍 Boston, Massachusetts</p>
                </div>
              </div>
              <p className="text-lg text-[#64748B] mb-6">
                "As a small law firm, client confidentiality and professionalism are paramount. I was skeptical about using AI for our phone calls—I thought it would feel impersonal or make mistakes with sensitive information. I was completely wrong. VoicePilot's legal industry specialist has been a game-changer. It handles initial client consultations with perfect discretion, performs conflict checks, and schedules appointments without ever compromising our strict confidentiality protocols. Our clients consistently tell us how impressed they are with our 'new receptionist,' and they have no idea it's AI. We've reduced our administrative overhead by $3,500 per month while actually improving our client intake process. For a firm our size, that's transformational."
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="bg-[#E0F2FE] p-4 rounded-lg">
                  <p className="text-2xl font-bold text-[#06B6D4]">$3,500</p>
                  <p className="text-sm text-[#64748B]">Monthly savings</p>
                </div>
                <div className="bg-[#E0F2FE] p-4 rounded-lg">
                  <p className="text-2xl font-bold text-[#06B6D4]">100%</p>
                  <p className="text-sm text-[#64748B]">Confidentiality compliance</p>
                </div>
                <div className="bg-[#E0F2FE] p-4 rounded-lg">
                  <p className="text-2xl font-bold text-[#06B6D4]">✓</p>
                  <p className="text-sm text-[#64748B]">Improved efficiency</p>
                </div>
                <div className="bg-[#E0F2FE] p-4 rounded-lg">
                  <p className="text-2xl font-bold text-[#06B6D4]">✓</p>
                  <p className="text-sm text-[#64748B]">Enhanced reputation</p>
                </div>
              </div>
            </div>

            {/* Celebrity Endorsement */}
            <div className="bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] p-8 rounded-lg shadow-lg text-white">
              <div className="flex items-start mb-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-heading font-bold">Marcus Chen</h3>
                  <p className="text-white/90">Tech Entrepreneur & Host of "The Small Business Revolution" Podcast</p>
                  <p className="text-sm text-white/80">⭐ 500K+ social media followers</p>
                </div>
              </div>
              <p className="text-lg mb-6">
                "As someone who interviews successful small business owners every week, I hear the same challenge over and over: 'I can't afford to miss customer calls, but I can't afford a full reception team either.' That's why I'm genuinely excited about VoicePilot. This isn't some gimmicky chatbot—it's actually intelligent technology that understands context and treats customers like humans should be treated. I've personally tested it with my own businesses, and I was blown away by how natural the conversations feel. If you're a small business owner trying to scale without losing that personal touch, you need to check out VoicePilot. They're not paying me to say this—I just believe in supporting solutions that actually solve real problems for real entrepreneurs."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brief Quotes */}
      <section className="py-16 bg-[#E0F2FE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-lg text-[#64748B] italic mb-4">
                "VoicePilot helped us capture 28% more leads without hiring additional staff."
              </p>
              <p className="text-[#1E293B] font-bold">— Patricia O'Brien</p>
              <p className="text-sm text-[#64748B]">Real Estate Broker, Denver</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-lg text-[#64748B] italic mb-4">
                "The 24/7 availability has been incredible for our international clients. We're doing business around the clock now."
              </p>
              <p className="text-[#1E293B] font-bold">— Raj Patel</p>
              <p className="text-sm text-[#64748B]">Consulting Firm Owner, Seattle</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-lg text-[#64748B] italic mb-4">
                "Setup took less than an hour, and we were handling calls professionally by the end of the day. Easiest business decision I've made."
              </p>
              <p className="text-[#1E293B] font-bold">— Tom Anderson</p>
              <p className="text-sm text-[#64748B]">Plumbing Service Owner, Miami</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-lg text-[#64748B] italic mb-4">
                "Our customers love the instant response. No more 'We'll call you back during business hours.' Just immediate, helpful service."
              </p>
              <p className="text-[#1E293B] font-bold">— Lisa Zhang</p>
              <p className="text-sm text-[#64748B]">Boutique Retail Owner, Portland</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-heading font-bold text-[#1E293B] mb-12">
            Trusted by Small Businesses Nationwide
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <p className="text-4xl font-bold text-[#3B82F6] mb-2">500+</p>
              <p className="text-[#64748B]">Active business customers</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-[#3B82F6] mb-2">4.8/5</p>
              <p className="text-[#64748B]">Average customer rating</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-[#3B82F6] mb-2">50,000+</p>
              <p className="text-[#64748B]">Calls handled monthly</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-[#3B82F6] mb-2">96%</p>
              <p className="text-[#64748B]">Customer retention rate</p>
            </div>
          </div>

          <div className="mt-12 space-y-4">
            <h3 className="text-2xl font-heading font-bold text-[#1E293B] mb-6">Industry Recognition</h3>
            <div className="flex flex-col md:flex-row justify-center gap-6 text-[#64748B]">
              <p>🏆 "Best AI Solution for Small Business 2024" - Small Business Tech Awards</p>
              <p>🏆 "Top Innovation in Customer Service" - Entrepreneur Magazine</p>
              <p>🏆 "Editor's Choice: Call Management" - Business Software Review</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#E0F2FE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-heading font-bold text-[#1E293B] mb-4">
            Ready to Transform Your Customer Calls?
          </h2>
          <p className="text-xl text-[#64748B] mb-8">
            Start your 14-day free trial today—no credit card required. Experience the VoicePilot difference for yourself.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/trial"
              className="bg-[#3B82F6] text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-[#2563EB] transition-colors"
            >
              Start Free Trial
            </Link>
            <Link
              href="/contact"
              className="border-2 border-[#3B82F6] text-[#3B82F6] px-8 py-3 rounded-md text-lg font-medium hover:bg-white transition-colors"
            >
              Schedule a Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
