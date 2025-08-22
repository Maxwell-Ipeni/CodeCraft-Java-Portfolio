import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Portfolio - Full-Stack Developer & A Graphic Design",
  description:
    "Professional Fullstack web developer and graphic designer offering custom websites, web maintenance, logo design, and comprehensive digital solutions. We create, design, host, and maintain.",
  keywords:
    "web design, graphic design, responsive websites, portfolio designer, freelance web developer, logo design, website maintenance, UI/UX design",
  authors: [{ name: "Maxwell." }],
  openGraph: {
    title: "MG Creatives - Web Development & Graphic Design Services",
    description:
      "Professional fullstack developer and a graphic designer offering custom websites, web maintenance, logo design, and comprehensive digital solutions.",
    type: "website",
  },
  generator: 'Maxwell'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider defaultTheme="light" storageKey="mg-creatives-theme">
          <Navigation />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
