import {
  RiPhoneFill,
  RiCalendarCheckFill,
  RiCustomerService2Fill,
  RiGlobalFill,
  RiCheckLine,
} from "@remixicon/react"

export default function Products() {
  const products = [
    {
      name: "Starter AI Agent",
      price: "$29",
      period: "/mo",
      description: "Basic call answering, FAQs, daily summaries.",
      features: [
        "Basic call answering",
        "FAQ responses",
        "Daily summaries",
        "Up to 100 calls/month",
        "Email support",
      ],
      icon: <RiPhoneFill className="size-8 text-teal-500" />,
      highlight: false,
    },
    {
      name: "Smart Booking Agent",
      price: "$59",
      period: "/mo",
      description: "Everything from Starter + appointment scheduling, calendar integration.",
      features: [
        "Everything in Starter",
        "Appointment scheduling",
        "Calendar integration",
        "Up to 300 calls/month",
        "SMS notifications",
        "Priority support",
      ],
      icon: <RiCalendarCheckFill className="size-8 text-teal-500" />,
      highlight: true,
    },
    {
      name: "Full Support Agent",
      price: "$99",
      period: "/mo",
      description: "Bookings + multilanguage support + lead capture + custom voice.",
      features: [
        "Everything in Smart Booking",
        "Multilanguage support",
        "Lead capture & CRM",
        "Custom voice options",
        "Up to 1000 calls/month",
        "Advanced analytics",
        "Dedicated support",
      ],
      icon: <RiCustomerService2Fill className="size-8 text-teal-500" />,
      highlight: false,
    },
    {
      name: "Enterprise Custom Agent",
      price: "$199-$499",
      period: "/mo",
      description: "Fully customized agent trained on business data, unlimited calls.",
      features: [
        "Everything in Full Support",
        "Custom training on your data",
        "Unlimited calls",
        "White-label options",
        "API access",
        "Custom integrations",
        "24/7 dedicated support",
        "SLA guarantee",
      ],
      icon: <RiGlobalFill className="size-8 text-teal-500" />,
      highlight: false,
    },
  ]

  return (
    <main className="relative mx-auto flex flex-col px-4 xl:px-0">
      <div className="mx-auto max-w-7xl pt-40 pb-24">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-semibold tracking-tighter text-gray-900 sm:text-6xl">
            Choose Your AI Agent
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-600">
            Select the perfect plan for your business. All plans include a 14-day free trial.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 mb-16">
          {products.map((product, index) => (
            <div
              key={index}
              className={`relative flex flex-col rounded-xl border p-8 ${
                product.highlight
                  ? "border-teal-500 bg-teal-50 shadow-lg ring-2 ring-teal-500"
                  : "border-gray-200 bg-white shadow-sm"
              }`}
            >
              {product.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center rounded-full bg-teal-500 px-4 py-1 text-sm font-semibold text-white">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="mb-6">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-teal-50">
                  {product.icon}
                </div>
                <h2 className="text-2xl font-semibold text-gray-900">
                  {product.name}
                </h2>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold text-gray-900">
                    {product.price}
                  </span>
                  <span className="ml-1 text-lg text-gray-600">
                    {product.period}
                  </span>
                </div>
                <p className="mt-4 text-sm text-gray-600">
                  {product.description}
                </p>
              </div>

              <ul className="mb-8 flex-1 space-y-3">
                {product.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <RiCheckLine className="size-5 shrink-0 text-teal-500 mt-0.5" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full rounded-md px-4 py-3 text-center font-semibold transition-all ${
                  product.highlight
                    ? "bg-teal-500 text-white hover:bg-teal-600"
                    : "bg-gray-900 text-white hover:bg-gray-800"
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>

        {/* Compare Plans CTA */}
        <div className="text-center">
          <button className="inline-flex items-center rounded-md border-2 border-teal-500 bg-white px-8 py-3 text-lg font-semibold text-teal-600 transition-all hover:bg-teal-50">
            Compare Plans
          </button>
        </div>
      </div>
    </main>
  )
}
