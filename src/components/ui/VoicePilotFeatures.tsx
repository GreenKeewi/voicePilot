import {
  RiPhoneFill,
  RiCalendarCheckFill,
  RiCustomerService2Fill,
  RiCheckDoubleLine,
  RiMoneyDollarCircleFill,
  RiUserVoiceFill,
  RiSettings4Fill,
} from "@remixicon/react"

export default function VoicePilotFeatures() {
  const features = [
    {
      icon: <RiPhoneFill className="size-8 text-teal-500" />,
      title: "24/7 Call Answering",
      description: "Never miss a customer call, day or night. Our AI agents are always ready to help.",
    },
    {
      icon: <RiCalendarCheckFill className="size-8 text-teal-500" />,
      title: "Smart Booking",
      description: "Automatically schedule appointments and sync with your calendar in real-time.",
    },
    {
      icon: <RiCustomerService2Fill className="size-8 text-teal-500" />,
      title: "Automated Customer Support",
      description: "Answer FAQs, provide information, and handle customer inquiries instantly.",
    },
  ]

  const benefits = [
    {
      icon: <RiCheckDoubleLine className="size-6 text-teal-500" />,
      text: "Cuts missed calls",
    },
    {
      icon: <RiMoneyDollarCircleFill className="size-6 text-teal-500" />,
      text: "Cheaper than hiring staff",
    },
    {
      icon: <RiUserVoiceFill className="size-6 text-teal-500" />,
      text: "Sounds natural and friendly",
    },
    {
      icon: <RiSettings4Fill className="size-6 text-teal-500" />,
      text: "Easy setup and management",
    },
  ]

  return (
    <div className="space-y-24">
      {/* What We Do Section */}
      <section aria-label="What We Do" className="relative mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-lg font-semibold tracking-tight text-teal-500 mb-2">
            What We Do
          </h2>
          <p className="text-3xl font-semibold tracking-tighter text-gray-900 md:text-4xl">
            Smart Call Solutions for Your Business
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-8 text-center rounded-lg border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-teal-50">
                {feature.icon}
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Small Businesses Love Us Section */}
      <section aria-label="Why Small Businesses Love Us" className="relative mx-auto max-w-6xl">
        <div className="rounded-xl bg-gradient-to-br from-teal-50 to-gray-50 p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-lg font-semibold tracking-tight text-teal-500 mb-2">
              Why Small Businesses Love Us
            </h2>
            <p className="text-3xl font-semibold tracking-tighter text-gray-900 md:text-4xl">
              Built for Your Success
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-3 rounded-lg bg-white p-6 shadow-sm"
              >
                <div className="shrink-0">
                  {benefit.icon}
                </div>
                <p className="text-lg font-medium text-gray-900">
                  {benefit.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
