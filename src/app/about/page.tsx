import { RiLightbulbFill, RiRocketFill, RiTeamFill } from "@remixicon/react"
import Image from "next/image"

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
              I built VoicePilot because I’ve seen how tough it is for small business owners to juggle everything—running the shop, serving customers, and answering nonstop phone calls. Since I’ve been coding since I was a kid, I’ve always looked for ways to use tech to solve real problems, and this felt like something I could genuinely help with.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-gray-700">
              VoicePilot is my way of giving business owners an AI call agent that’s affordable, easy to set up, and dependable. My goal is simple: help small businesses stay responsive 24/7 without hiring extra staff, stressing about missed calls, or stretching their budget. Every business deserves smooth customer communication, and I want VoicePilot to make that possible.
            </p>
          </div>
        </div>

        {/* Photo Section */}
        <div className="mb-16 flex justify-center">
          <div className="relative h-80 w-80 overflow-hidden rounded-xl shadow-lg">
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-teal-50 to-gray-100">
              <Image
                src="/images/pfp.jpg"
                width={500}
                height={500}
                alt="Picture of the author"
              />
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
              The newest AI technology made simple and accessible for everyone
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
              Dedicated to helping small businesses grow and succeed
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
      </div>
    </main>
  )
}
