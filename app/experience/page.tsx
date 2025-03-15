"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Timeline } from "@/components/timeline"

export default function ExperiencePage() {
  return (
    <div className="min-h-screen">
      <section className="relative py-24">
        <div className="container px-4">
          <div className="mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-12 text-center"
            >
              <Badge className="mb-4 bg-primary/10 px-3 py-1 text-primary">Experience</Badge>
              <h2 className="font-minecraft mb-4 text-white font-extrabold sm:text-4xl">Work History</h2>
              <div className="mx-auto h-1 w-20 bg-primary"></div>
            </motion.div>

            <Timeline />
          </div>
        </div>
      </section>
    </div>
  )
}

