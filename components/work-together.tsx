"use client"

import { motion } from "framer-motion"
import { ArrowRight, Mail, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"

export function WorkTogether() {
  return (
    <section className="relative py-24">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl text-center"
        >
          <h2 className="font-minecraft mb-6 text-white font-extrabold sm:text-5xl drop-shadow-[0_0_10px_#ffffff]">Let's Work Together</h2>
          <p className="mb-12 text-lg text-muted-foreground">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>

          <div className="grid gap-8 sm:grid-cols-2">
            <Card className="group relative overflow-hidden bg-primary/5 p-6 transition-colors hover:bg-primary/10">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Mail className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Email Me</h3>
              <p className="mb-4 text-muted-foreground">Drop me a line for any inquiries or collaboration ideas.</p>
              <Button className="group/btn" variant="link" >
              <Link href="mailto:jshdevs4real@gmail.com">jshdevs4real@gmail.com</Link>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
              </Button>
            </Card>

            <Card className="group relative overflow-hidden bg-primary/5 p-6 transition-colors hover:bg-primary/10">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <MessageSquare className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Discord</h3>
              <p className="mb-4 text-muted-foreground">Let's chat about your Minecraft server needs.</p>
              <Link href="https://discord.gg/KxGuCr3r"><Button className="group/btn" variant="link">
                @harshuuu.for.u
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
              </Button></Link>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

