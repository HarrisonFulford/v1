import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Harrison Fulford",
  description: "Machine Learning Engineer, currently interested in GPU optimization",
  generator: "v0.app",
  icons: {
    icon: "/portfolio-favicon.jpeg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-serif antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
