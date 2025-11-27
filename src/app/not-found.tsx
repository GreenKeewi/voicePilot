import { Button } from "@/components/Button"
import Link from "next/link"
import { siteConfig } from "./siteConfig"


export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-teal-50 to-white p-6">
      <Link href={siteConfig.baseLinks.home}>
      </Link>

      <div className="mt-8 max-w-xl text-center">
        <p className="text-sm font-semibold text-teal-600">404</p>
        <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900">
          Page not found
        </h1>
        <p className="mt-3 text-sm text-gray-600">
          VoicePilot couldn&apos;t locate this page. The conversation or resource you
          requested might have moved or been renamed.
        </p>

        <div className="mt-6 flex justify-center gap-3">
          <Button asChild variant="primary" className="group">
            <Link href={siteConfig.baseLinks.home}>Return Home</Link>
          </Button>
        </div>
      </div>

      <p className="mt-8 text-xs text-gray-500">© {new Date().getFullYear()} VoicePilot</p>
    </div>
  )
}
