import { RiLightbulbFill, RiTeamFill, RiRocketFill } from "@remixicon/react"

export default function About() {
  return (
    <main className="relative mx-auto flex flex-col px-4 xl:px-0">
      <div className="mx-auto max-w-4xl pt-40 pb-24">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-semibold tracking-tighter text-gray-900 sm:text-6xl">
            About VoicePilot
          </h1>
          <p className="mt-6 text-xl text-gray-600">
            Built by entrepreneurs, for entrepreneurs
          </p>
        </div>

        {/* Story Section */}
        <div className="mb-16 rounded-xl bg-white p-8 shadow-sm border border-gray-200 md:p-12">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed text-gray-700">
              I created VoicePilot to help small business owners who are overwhelmed with constant phone calls while trying to run their shops. I&apos;ve always loved building tools that solve real problems, so I designed an AI call agent that&apos;s affordable, simple, and reliable.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-gray-700">
              My goal is to help businesses stay connected 24/7 without needing extra staff. Every small business deserves to provide excellent customer service without breaking the bank or burning out.
            </p>
          </div>
        </div>

        {/* Photo Section */}
        <div className="mb-16 flex justify-center">
          <div className="relative h-80 w-80 overflow-hidden rounded-xl shadow-lg">
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-teal-50 to-gray-100">
              <div className="text-center">
                <div className="mb-4 text-6xl">👤</div>
                <p className="text-sm font-medium text-gray-600">Founder Photo</p>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="rounded-xl bg-white p-8 shadow-sm border border-gray-200 text-center">
            <div className="mb-4 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-teal-50">
                <RiLightbulbFill className="size-8 text-teal-500" />
              </div>
            </div>
            <h3 className="mb-3 text-xl font-semibold text-gray-900">Innovation</h3>
            <p className="text-gray-600">
              Cutting-edge AI technology made simple and accessible for everyone
            </p>
          </div>

          <div className="rounded-xl bg-white p-8 shadow-sm border border-gray-200 text-center">
            <div className="mb-4 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-teal-50">
                <RiTeamFill className="size-8 text-teal-500" />
              </div>
            </div>
            <h3 className="mb-3 text-xl font-semibold text-gray-900">Support</h3>
            <p className="text-gray-600">
              Dedicated to helping small businesses succeed and grow
            </p>
          </div>

          <div className="rounded-xl bg-white p-8 shadow-sm border border-gray-200 text-center">
            <div className="mb-4 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-teal-50">
                <RiRocketFill className="size-8 text-teal-500" />
              </div>
            </div>
            <h3 className="mb-3 text-xl font-semibold text-gray-900">Growth</h3>
            <p className="text-gray-600">
              Empowering businesses to scale without overwhelming overhead
            </p>
          </div>
        </div>

        {/* Optional Video Section */}
        <div className="mt-16 rounded-xl bg-gray-100 p-12 text-center">
          <div className="mb-4 text-4xl">🎥</div>
          <h3 className="mb-3 text-2xl font-semibold text-gray-900">
            Our Story (Video)
          </h3>
          <p className="text-gray-600">Video placeholder - Coming soon</p>
        </div>
      </div>
    </main>
  )
}
