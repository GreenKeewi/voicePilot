import type { Metadata } from "next";
import "./globals.css";

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
        
      </head>
      <body className="antialiased font-body">
        {children}
      </body>
    </html>
  );
}
