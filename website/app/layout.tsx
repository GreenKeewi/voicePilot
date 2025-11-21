import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "VoicePilot - AI Call Management for Small Businesses",
  description: "Empowering Small Businesses with Intelligent Call Management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Raleway:wght@600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased font-body">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
