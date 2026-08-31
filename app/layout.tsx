import type React from "react"
import type { Metadata, Viewport } from "next"
import { Analytics } from "@vercel/analytics/next"
import { Fraunces, IBM_Plex_Mono, Inter } from "next/font/google"
import "./globals.css"

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
})

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.pranavbalaji.org"),
  title: "Pranav Balaji | Software Engineer & Applied AI Builder",
  description:
    "Pranav Balaji is a Purdue Computer Engineering student building reliable software systems, AI tools, and full-stack products.",
  keywords: [
    "Pranav Balaji",
    "Software Engineer",
    "Applied AI",
    "Computer Engineering",
    "Purdue University",
    "Full-stack developer",
  ],
  authors: [{ name: "Pranav Balaji" }],
  creator: "Pranav Balaji",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Pranav Balaji | Software Engineer & Applied AI Builder",
    description: "Reliable software systems, applied AI, and full-stack products.",
    url: "/",
    siteName: "Pranav Balaji",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pranav Balaji | Software Engineer & Applied AI Builder",
    description: "Reliable software systems, applied AI, and full-stack products.",
  },
}

export const viewport: Viewport = {
  themeColor: "#F4F0E8",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${fraunces.variable} ${inter.variable} ${ibmPlexMono.variable}`}>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
