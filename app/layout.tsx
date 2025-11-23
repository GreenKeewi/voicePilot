import type { Metadata } from "next";
import "./globals.css";
import PillNav from "../components/PillNav";

export const metadata: Metadata = {
  title: "VoicePilot - AI Call Management for Small Businesses",
  description: "Empowering Small Businesses with Intelligent Call Management",
};

const logo = "/logo.svg";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body className="antialiased font-body">
        <PillNav
          logo={logo}
          logoAlt="Company Logo"
          items={[
            { label: "Home", href: "/" },
            { label: "About", href: "/about" },
            { label: "Services", href: "/services" },
            { label: "Contact", href: "/contact" },
          ]}
          activeHref="/"
          className="custom-nav"
          ease="power2.easeOut"
          baseColor="#000000"
          pillColor="#ffffff"
          hoveredPillTextColor="#ffffff"
          pillTextColor="#000000"
        />
        {children}
      </body>
    </html>
  );
}
