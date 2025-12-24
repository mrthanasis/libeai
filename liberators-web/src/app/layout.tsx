import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Optimized font loading with display swap for better performance
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false, // Only preload main font
  fallback: ["monospace"],
});

export const metadata: Metadata = {
  title: "Liberators AI - Build Your AI Workforce",
  description: "Cognitive teams that multiply strategic capacity, work 24/7, and evolve with your business. Where algorithms become art.",
  keywords: ["AI workforce", "cognitive teams", "business automation", "AI transformation", "strategic capacity"],
  authors: [{ name: "Liberators AI" }],
  openGraph: {
    title: "Liberators AI - Build Your AI Workforce",
    description: "Cognitive teams that multiply strategic capacity, work 24/7, and evolve with your business.",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
