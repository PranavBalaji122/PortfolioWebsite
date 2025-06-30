import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Pranav Balaji - Computer Science Student & AI Engineer",
  description:
    "Personal portfolio of Pranav Balaji, Computer Science student at Purdue University specializing in AI and machine learning.",
  keywords: "Pranav Balaji, Computer Science, AI Engineer, Machine Learning, Purdue University, Software Developer",
  authors: [{ name: "Pranav Balaji" }],
  openGraph: {
    title: "Pranav Balaji - Computer Science Student & AI Engineer",
    description: "Personal portfolio showcasing projects in AI, machine learning, and full-stack development.",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
