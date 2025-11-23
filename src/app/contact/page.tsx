import {
  RiMailFill,
  RiMapPinFill,
  RiTimeFill,
} from "@remixicon/react"

export default function Contact() {
  return (
    <main className="relative mx-auto flex flex-col px-4 xl:px-0">
      <div className="mx-auto max-w-6xl pt-40 pb-24">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-semibold tracking-tighter text-gray-900 sm:text-6xl">
            Get in Touch
          </h1>
          <p className="mt-6 text-xl text-gray-600">
            We&apos;re here to help you get started with VoicePilot
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="rounded-xl bg-white p-8 shadow-sm border border-gray-200">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-teal-50">
                  <RiMailFill className="size-6 text-teal-500" />
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600">contact@callifyai.co</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-white p-8 shadow-sm border border-gray-200">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-teal-50">
                  <RiMapPinFill className="size-6 text-teal-500" />
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-gray-900">Office Address</h3>
                  <p className="text-gray-600">
                    125 King Street West<br />
                    Toronto, ON
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-white p-8 shadow-sm border border-gray-200">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-teal-50">
                  <RiTimeFill className="size-6 text-teal-500" />
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-gray-900">Business Hours</h3>
                  <div className="space-y-1 text-gray-600">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 10:00 AM - 4:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map Embed */}
            <div className="overflow-hidden rounded-xl shadow-sm border border-gray-200">
              <div className="h-64 bg-gray-100 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <RiMapPinFill className="size-12 mx-auto mb-2" />
                  <p>Google Map Embed Placeholder</p>
                  <p className="text-sm">125 King Street West, Toronto, ON</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-xl bg-white p-8 shadow-sm border border-gray-200">
            <h2 className="mb-6 text-2xl font-semibold text-gray-900">Send us a message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="mb-2 block text-sm font-medium text-gray-700">
                  Phone (optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Tell us about your business and how we can help..."
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-md bg-teal-500 px-6 py-3 font-semibold text-white transition-all hover:bg-teal-600"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}
