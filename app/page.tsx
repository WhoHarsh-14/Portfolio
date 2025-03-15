"use client"

import { useRef, useState } from "react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { ChevronDown, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { WorkTogether } from "@/components/work-together"

export default function Home() {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true)
  const contactRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.05], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.05], [1, 0.9])

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <main>
      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center pt-16 mb-5">
        <motion.div style={{ opacity, scale }} className="container relative z-10 px-4">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Badge className="mb-4 bg-primary px-3 py-1 text-black">Java Developer</Badge>
              <h1 className="font-minecraft mb-6 font-extrabold tracking-tight text-white md:text-7xl">
                Minecraft Plugin <span className="text-primary">Specialist</span>
              </h1>
              <p className="mb-8 text-xl font-bold text-white/80  ">
                Building innovative Minecraft plugins and server solutions with the Bukkit/Spigot API
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex justify-center space-x-4"
            >
              <Link href="/projects">
                <Button className="group bg-primary text-primary-foreground hover:bg-primary/90 rounded-full">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Button
                onClick={scrollToContact}
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 rounded-full"
              >
                Contact Me
              </Button>
            </motion.div>
          </div>
        </motion.div>

      </section>

      {/* Work Together Section */}
      <div ref={contactRef}>
        <WorkTogether />
      </div>
    </main>
  )
}

