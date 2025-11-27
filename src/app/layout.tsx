import { GeistSans } from "geist/font/sans"
import type { Metadata } from "next"
import "./globals.css"

import Footer from "@/components/ui/Footer"
import { NavBar } from "@/components/ui/Navbar"
import { siteConfig } from "./siteConfig"

export const metadata: Metadata = {
  metadataBase: new URL("https://voicepilot.ai"),
  title: "VoicePilot — AI Call Agents for Small Businesses",
  description: "Smart AI call agents that answer calls, book appointments, and provide customer support 24/7.",
  keywords: ["AI call agent", "small business phone automation", "booking AI", "customer support AI"],
  authors: [
    {
      name: "VoicePilot",
      url: "https://voicepilot.ai",
    },
  ],
  creator: "VoicePilot",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: "VoicePilot — AI Call Agents for Small Businesses",
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "VoicePilot — AI Call Agents for Small Businesses",
    description: siteConfig.description,
    creator: "@voicepilot",
  },
  icons: {
    icon: "/favicn.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${GeistSans.className} min-h-screen overflow-x-hidden scroll-auto bg-gray-50 antialiased selection:bg-teal-100 selection:text-teal-600`}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
