export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#E0F2FE] to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-heading font-bold text-[#1E293B] mb-4">
            The Story Behind VoicePilot
          </h1>
          <p className="text-xl text-[#64748B] max-w-3xl mx-auto">
            Built by Small Business Owners, For Small Business Owners
          </p>
        </div>
      </section>

      {/* Founder's Story */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6 text-lg text-[#64748B]">
            <p>
              VoicePilot was born from a simple frustration experienced by our founder, Sarah Chen, during her decade of running a successful physical therapy practice. Like many small business owners, Sarah found herself constantly torn between providing excellent patient care and managing the never-ending stream of phone calls. Missing calls meant missing patients who needed help, but answering every call meant less time for the people already in her care.
            </p>
            <p>
              After trying various solutions—from hiring part-time receptionists to using basic answering services—Sarah realized that what small businesses truly needed was an intelligent, affordable solution that could understand context, represent the business professionally, and handle calls as thoughtfully as a trained human receptionist would.
            </p>
            <p>
              In 2022, Sarah partnered with AI technology experts and customer service professionals to create VoicePilot. Our team spent two years developing and refining AI call agents that don't just answer phones—they understand businesses, adapt to different situations, and genuinely help customers feel heard and valued.
            </p>
            <p>
              Today, VoicePilot serves hundreds of small businesses across diverse industries, helping them deliver exceptional customer service while focusing on what they do best. We're proud to be a small business serving small businesses, and we're committed to making enterprise-level call management accessible to everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-[#E0F2FE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-heading font-bold text-[#1E293B] mb-4" id="mission">
                Our Mission
              </h2>
              <p className="text-lg text-[#64748B]">
                To empower small businesses with intelligent, affordable call management technology that enhances customer relationships and drives growth, while freeing business owners to focus on their passion and expertise.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-heading font-bold text-[#1E293B] mb-4">
                Our Vision
              </h2>
              <p className="text-lg text-[#64748B]">
                We envision a future where every small business, regardless of size or budget, can deliver the same level of professional, responsive customer service as major corporations—without sacrificing the personal touch that makes small businesses special.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold text-[#1E293B] mb-12 text-center">
            What We Stand For
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#3B82F6] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-bold text-[#1E293B] mb-2">Professional</h3>
              <p className="text-[#64748B]">
                We take your business seriously and represent you with polish and expertise. Our technology is reliable, secure, and built to enterprise standards.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#06B6D4] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-bold text-[#1E293B] mb-2">Efficient</h3>
              <p className="text-[#64748B]">
                We respect your time and your customers' time. Our AI handles calls quickly without feeling rushed. Streamlined processes that eliminate bottlenecks.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#3B82F6] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-bold text-[#1E293B] mb-2">Sleek</h3>
              <p className="text-[#64748B]">
                We believe in elegant simplicity—technology that works seamlessly in the background. Our interfaces are clean, intuitive, and free of unnecessary complexity.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#06B6D4] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-bold text-[#1E293B] mb-2">Reliable</h3>
              <p className="text-[#64748B]">
                99.9% uptime means we're there when your customers call. Consistent, dependable service you can count on with transparent communication and responsive support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values List */}
      <section className="py-16 bg-[#E0F2FE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold text-[#1E293B] mb-8 text-center">
            Our Core Values
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl font-heading font-bold text-[#1E293B] mb-2">
                1. Customer-First Thinking
              </h3>
              <p className="text-[#64748B]">
                Every feature we build starts with the question: "How does this help our customers serve their customers better?"
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl font-heading font-bold text-[#1E293B] mb-2">
                2. Accessibility
              </h3>
              <p className="text-[#64748B]">
                Advanced technology shouldn't require an enterprise budget. We're committed to fair, transparent pricing.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl font-heading font-bold text-[#1E293B] mb-2">
                3. Continuous Improvement
              </h3>
              <p className="text-[#64748B]">
                We're never finished learning and refining. Our AI gets smarter, and our service gets better every day.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl font-heading font-bold text-[#1E293B] mb-2">
                4. Authenticity
              </h3>
              <p className="text-[#64748B]">
                We're real people building tools for real businesses. No corporate jargon, no smoke and mirrors.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
