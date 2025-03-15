"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { TechIcon } from "@/components/tech-icon"
import { Database, Server, Code, GitBranch, Package, Coffee } from "lucide-react"

export default function SkillsPage() {
  const techIcons = [
    {
      name: "Java",
      icon: <Coffee className="h-8 w-8" />,
      color: "yellow", // emerald-500
    },
    {
      name: "Bukkit/Paper API",
      icon: <Code className="h-8 w-8" />,
      color: "blue", // emerald-600
    },
    {
      name: "MySQL",
      icon: <Database className="h-8 w-8" />,
      color: "lightblue", // sky-500
    },
    {
      name: "MongoDB",
      icon: <Database className="h-8 w-8" />,
      color: "lightblue", // sky-500
    },
    {
      name: "Redis",
      icon: <Database className="h-8 w-8" />,
      color: "lightblue", // sky-500
    },
    {
      name: "Git",
      icon: <GitBranch className="h-8 w-8" />,
      color: "darkviolet", // violet-500
    },
    {
      name: "Maven/Gradle",
      icon: <Package className="h-8 w-8" />,
      color: "darkviolet", // violet-500
    },
    {
      name: "BungeeCord/Velocity",
      icon: <Server className="h-8 w-8" />,
      color: "darkgreen", // emerald-600
    },
  ]

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
              <Badge className="mb-4 bg-primary/10 px-3 py-1 text-primary">My Expertise</Badge>
              <h2 className="font-minecraft mb-4 text-white/80 font-extrabold sm:text-4xl ">Technical Skills</h2>
              <div className="mx-auto h-1 w-20 bg-primary"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4">
                {techIcons.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <TechIcon name={tech.name} icon={tech.icon} color={tech.color} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

