import Link from 'next/link';

export default function BlogPage() {
  const blogPosts = [
    {
      title: "5 Customer Service Mistakes That Are Costing Your Small Business Sales (And How AI Can Fix Them)",
      date: "November 15, 2024",
      author: "Sarah Chen, Founder & CEO",
      category: "Customer Service Tips",
      excerpt: "Every missed call represents a lost opportunity. Every customer left on hold is a customer considering your competitor. In this comprehensive guide, we break down the five most common customer service mistakes small businesses make—from inconsistent availability to slow response times—and show you exactly how modern AI solutions like VoicePilot can eliminate these problems without breaking your budget.",
      readTime: "8 minutes",
      slug: "customer-service-mistakes"
    },
    {
      title: "AI vs. Human Receptionists: The Small Business Owner's Complete Comparison Guide",
      date: "November 8, 2024",
      author: "Michael Torres, Customer Experience Director",
      category: "AI & Technology",
      excerpt: "The debate is over: it's not about replacing humans with AI—it's about empowering your team with intelligent tools that handle routine tasks so your people can focus on what they do best. This in-depth comparison examines the real-world costs, benefits, and considerations of hiring human receptionists versus implementing AI call agents.",
      readTime: "12 minutes",
      slug: "ai-vs-human-receptionists"
    },
    {
      title: "From Missed Calls to Loyal Customers: A 90-Day Transformation Guide",
      date: "November 1, 2024",
      author: "Jennifer Park, Business Growth Strategist",
      category: "Small Business Growth",
      excerpt: "What would happen to your business if you never missed another customer call? This practical, actionable guide walks you through a complete 90-day transformation plan to revolutionize your customer communication strategy. Based on real success stories from VoicePilot customers, you'll learn how to audit your current call handling, identify gaps, implement AI solutions, measure results, and continuously optimize for growth.",
      readTime: "10 minutes",
      slug: "90-day-transformation"
    }
  ];

  const upcomingArticles = [
    { title: "Industry Spotlight: How Healthcare Practices Are Using AI to Improve Patient Experience", date: "November 22, 2024" },
    { title: "The Psychology of Customer Wait Times: What Science Tells Us About Hold Music and Response Expectations", date: "November 29, 2024" },
    { title: "Small Business Tech Stack Essentials: Building Your Customer Communication Infrastructure", date: "December 6, 2024" },
    { title: "Voice AI Security & Privacy: What Small Businesses Need to Know About HIPAA, GDPR, and Data Protection", date: "December 13, 2024" },
    { title: "Success Stories: 10 Small Businesses That Doubled Their Lead Capture With Smarter Call Management", date: "December 20, 2024" }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#E0F2FE] to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-heading font-bold text-[#1E293B] mb-4">
            The VoicePilot Insights Hub
          </h1>
          <p className="text-xl text-[#64748B] max-w-3xl mx-auto">
            Expert guidance on AI communication, customer service excellence, and small business growth strategies
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            <span className="px-4 py-2 bg-[#E0F2FE] text-[#3B82F6] rounded-full cursor-pointer hover:bg-[#3B82F6] hover:text-white transition-colors">🤖 AI & Technology</span>
            <span className="px-4 py-2 bg-[#E0F2FE] text-[#3B82F6] rounded-full cursor-pointer hover:bg-[#3B82F6] hover:text-white transition-colors">📞 Customer Service Tips</span>
            <span className="px-4 py-2 bg-[#E0F2FE] text-[#3B82F6] rounded-full cursor-pointer hover:bg-[#3B82F6] hover:text-white transition-colors">💼 Small Business Growth</span>
            <span className="px-4 py-2 bg-[#E0F2FE] text-[#3B82F6] rounded-full cursor-pointer hover:bg-[#3B82F6] hover:text-white transition-colors">📊 Industry Insights</span>
            <span className="px-4 py-2 bg-[#E0F2FE] text-[#3B82F6] rounded-full cursor-pointer hover:bg-[#3B82F6] hover:text-white transition-colors">🎯 Best Practices</span>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {blogPosts.map((post, index) => (
                <article key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-48 bg-gradient-to-r from-[#3B82F6] to-[#06B6D4]"></div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-[#64748B] mb-2">
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <span>{post.readTime}</span>
                      <span className="mx-2">•</span>
                      <span className="text-[#3B82F6]">{post.category}</span>
                    </div>
                    <h2 className="text-2xl font-heading font-bold text-[#1E293B] mb-3">
                      {post.title}
                    </h2>
                    <p className="text-[#64748B] mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-[#64748B]">By {post.author}</p>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-[#3B82F6] hover:text-[#2563EB] font-medium"
                      >
                        Read More →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Newsletter Signup */}
              <div className="bg-[#E0F2FE] p-6 rounded-lg">
                <h3 className="text-xl font-heading font-bold text-[#1E293B] mb-3">
                  Never Miss an Insight
                </h3>
                <p className="text-[#64748B] mb-4 text-sm">
                  Subscribe to receive our latest articles, small business tips, and exclusive AI communication strategies directly in your inbox.
                </p>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 mb-3"
                />
                <button className="w-full bg-[#3B82F6] text-white px-4 py-2 rounded-md hover:bg-[#2563EB] transition-colors">
                  Subscribe Now
                </button>
                <p className="text-xs text-[#64748B] mt-2">
                  Weekly digest every Tuesday morning
                </p>
              </div>

              {/* Popular Posts */}
              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-lg font-heading font-bold text-[#1E293B] mb-4">
                  Popular Posts
                </h3>
                <ul className="space-y-3">
                  {blogPosts.map((post, index) => (
                    <li key={index}>
                      <Link href={`/blog/${post.slug}`} className="text-[#3B82F6] hover:underline text-sm">
                        {post.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Categories */}
              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-lg font-heading font-bold text-[#1E293B] mb-4">
                  Categories
                </h3>
                <ul className="space-y-2 text-[#64748B]">
                  <li className="cursor-pointer hover:text-[#3B82F6]">All Posts (3)</li>
                  <li className="cursor-pointer hover:text-[#3B82F6]">AI & Technology (1)</li>
                  <li className="cursor-pointer hover:text-[#3B82F6]">Customer Service Tips (1)</li>
                  <li className="cursor-pointer hover:text-[#3B82F6]">Small Business Growth (2)</li>
                  <li className="cursor-pointer hover:text-[#3B82F6]">Industry Insights (0)</li>
                  <li className="cursor-pointer hover:text-[#3B82F6]">Best Practices (2)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Articles */}
      <section className="py-16 bg-[#E0F2FE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold text-[#1E293B] mb-8 text-center">
            Coming Soon
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingArticles.map((article, index) => (
              <div key={index} className="bg-white p-6 rounded-lg">
                <p className="text-sm text-[#64748B] mb-2">{article.date}</p>
                <h3 className="font-heading font-bold text-[#1E293B]">{article.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-heading font-bold text-[#1E293B] mb-4">
            Ready to Stop Missing Calls?
          </h2>
          <p className="text-xl text-[#64748B] mb-8">
            Join hundreds of small businesses using VoicePilot to deliver exceptional customer service 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/trial"
              className="bg-[#3B82F6] text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-[#2563EB] transition-colors"
            >
              Start Free Trial
            </Link>
            <Link
              href="/products"
              className="border-2 border-[#3B82F6] text-[#3B82F6] px-8 py-3 rounded-md text-lg font-medium hover:bg-[#E0F2FE] transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
