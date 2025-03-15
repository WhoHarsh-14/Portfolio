import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { MainNav } from "@/components/main-nav"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Harshu | Java Dev | Plugin Dev",
  icons: "/favicon.png",
  description: "My personal portfolio website showcasing my projects and skills",
  openGraph: {
    title: "Personal Portfolio",
    description: "My personal portfolio website showcasing my projects and skills",
    url: "https://harshu.jshdevs.live/",
    type: "website",
    images: [
      {
        url: "/th.png",
        alt: "Personal Portfolio Preview",
      },
    ],
  },
    
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <MainNav />
          <div className="min-h-screen pt-16">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'