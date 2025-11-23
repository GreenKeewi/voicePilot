import {
  RiCustomerService2Line,
  RiRobotLine,
  RiLineChartLine,
  RiSettings5Line,
} from "@remixicon/react"

export default function Blog() {
  const categories = [
    {
      name: "Customer Service",
      icon: <RiCustomerService2Line className="size-8 text-teal-500" />,
      description: "Best practices for excellent customer support",
    },
    {
      name: "AI Tools",
      icon: <RiRobotLine className="size-8 text-teal-500" />,
      description: "Latest AI technologies for business",
    },
    {
      name: "Small Business Growth",
      icon: <RiLineChartLine className="size-8 text-teal-500" />,
      description: "Tips and strategies to scale your business",
    },
    {
      name: "Automation",
      icon: <RiSettings5Line className="size-8 text-teal-500" />,
      description: "Streamline your operations with smart automation",
    },
  ]

  return (
    <main className="relative mx-auto flex flex-col px-4 xl:px-0">
      <div className="mx-auto max-w-6xl pt-40 pb-24">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-semibold tracking-tighter text-gray-900 sm:text-6xl">
            Behind the Call
          </h1>
          <p className="mt-6 text-xl text-gray-600">
            AI Tips for Small Business Owners
          </p>
        </div>

        {/* Categories */}
        <div className="mb-16">
          <h2 className="mb-8 text-center text-2xl font-semibold text-gray-900">
            Browse by Category
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {categories.map((category, index) => (
              <div
                key={index}
                className="group cursor-pointer rounded-xl bg-white p-6 shadow-sm border border-gray-200 transition-all hover:shadow-md hover:border-teal-500"
              >
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-teal-50 transition-all group-hover:bg-teal-100">
                  {category.icon}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-600">
                  {category.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Coming Soon Section */}
        <div className="rounded-xl bg-gradient-to-br from-teal-50 to-gray-50 p-12 text-center">
          <div className="mx-auto max-w-2xl">
            <div className="mb-6 text-6xl">📝</div>
            <h2 className="mb-4 text-3xl font-semibold text-gray-900">
              Blog Posts Coming Soon
            </h2>
            <p className="mb-8 text-lg text-gray-600">
              We&apos;re working on creating valuable content to help you make the most of AI call agents in your business. Check back soon for our latest articles and insights!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center rounded-md bg-teal-500 px-6 py-3 font-semibold text-white transition-all hover:bg-teal-600"
              >
                Get Notified
              </a>
              <a
                href="/products"
                className="inline-flex items-center rounded-md border-2 border-teal-500 bg-white px-6 py-3 font-semibold text-teal-600 transition-all hover:bg-teal-50"
              >
                Explore Products
              </a>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 rounded-xl bg-white p-8 shadow-sm border border-gray-200">
          <div className="mx-auto max-w-xl text-center">
            <h3 className="mb-3 text-2xl font-semibold text-gray-900">
              Subscribe to Our Newsletter
            </h3>
            <p className="mb-6 text-gray-600">
              Get the latest AI tips and small business insights delivered to your inbox
            </p>
            <form className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-md border border-gray-300 px-4 py-3 text-gray-900 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <button
                type="submit"
                className="rounded-md bg-teal-500 px-6 py-3 font-semibold text-white transition-all hover:bg-teal-600"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}
