import {
  RiMailFill,
  RiTimeFill
} from "@remixicon/react";
import ContactForm from "../../components/ContactForm";

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

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="rounded-xl bg-white p-8 shadow-sm border border-gray-200">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-teal-50">
                  <RiMailFill className="size-6 text-teal-500" />
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600">contact@voicepilot.co</p>
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
          </div>

          {/* Contact form (right column) */}
          <div className="rounded-xl bg-white p-8 shadow-sm border border-gray-200">
            <h3 className="mb-4 text-lg font-semibold text-gray-900">Send us a message</h3>
            <ContactForm />
          </div>

        </div>
      </div>
    </main>
  );
}
