"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <section className="relative py-24">
        <div className="container px-4">
          <div className="mx-auto max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-12 text-center"
            >
              <Badge className="mb-4 bg-primary px-3 py-1 text-black">About Me</Badge>
              <h2 className="font-minecraft mb-4 text-white/80 font-extrabold sm:text-4xl ">
                Java Developer with a Passion for Minecraft Development
              </h2>
              <div className="mx-auto h-1 w-20 bg-primary"></div>
            </motion.div>

            <div className="grid gap-12 md:grid-cols-2  ">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative aspect-square overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm"
              >
                <div className="absolute inset-0 bg-[url('/developer-avatar.png')] bg-cover bg-center bg-no-repeat transition-transform duration-500 hover:scale-105"></div>

                <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-3">
                  <Badge className="bg-background/80 px-3 py-1.5 text-sm font-medium text-foreground backdrop-blur-sm">
                    5+ Years Experience
                  </Badge>
                  <Badge className="bg-background/80 px-3 py-1.5 text-sm font-medium text-foreground backdrop-blur-sm">
                    50+ Plugins Developed
                  </Badge>
                  <Badge className="bg-background/80 px-3 py-1.5 text-sm font-medium text-foreground backdrop-blur-sm">
                    Java Expert
                  </Badge>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col justify-center space-y-6"
              >
                <div>
                  <h3 className="mb-3 text-xl font-bold text-primary ">My Journey</h3>
                  <p className="text-muted-foreground text-white  ">
                    Hello I'm Harsh a Java developer with over 5 years of experience specializing in Minecraft plugin
                    development using the Bukkit/Spigot API. My journey began with a love for the game and evolved into
                    creating custom solutions that enhance gameplay experiences for thousands of players.
                  </p>
                </div>

                <div>
                  <h3 className="mb-3 text-xl font-bold text-primary">What I Do</h3>
                  <p className="text-muted-foreground text-white">
                    I've worked with numerous Minecraft server networks to develop custom plugins that improve server
                    performance, add unique gameplay features, and create engaging player experiences. My expertise lies
                    in creating efficient, scalable, and maintainable code that can handle high-traffic Minecraft
                    servers.
                  </p>
                </div>

                <div>
                  <h3 className="mb-3 text-xl font-bold text-primary">Beyond Coding</h3>
                  <p className="text-muted-foreground text-white">
                    When I'm not coding, I am a gamer who loves exploring new games and immersing myself in different
                    gaming worlds. Sometimes, I grind a lot in Valorant, Brawlhalla, Minecraft, and a few story games.
                    Gaming is my way to unwind and challenge myself beyond the screen.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

