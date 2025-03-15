"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

interface TimelineItem {
  year: string
  title: string
  company: string
  description: string
}

const timelineData: TimelineItem[] = [
  {
    year: "2023",
    title: "Server Developer",
    company: "XinCraft",
    description:
      "Worked under Xin69 for his yt minecraft server as a jr.developer",
  },
  {
    year: "2023",
    title: "Plugin Developer",
    company: "Hyperion",
    description: "Worked for SavoDemon's yt minecraft server with 2 man dev team.",
  },
  {
    year: "2023",
    title: "Server Developer",
    company: "Mcwars",
    description:
      "Managed and configured for the server as the sole developer of the server",
  },
  {
    year: "2022",
    title: "Head Developer",
    company: "GhostCraft",
    description: "Worked as a head developer managing workload for the server",
  },
  {
    year: "2022",
    title: "Minecraft Plugin, Server Developer",
    company: "XRGBCraft",
    description: "Worked as co-founder of the server with plugins and configurations",
  },
  {
    year: "2021",
    title: "Server Developer",
    company: "Vega network",
    description: "Developed and maintained Java applications with a focus on game server infrastructure.",
  },
  {
    year: "2020",
    title: "Plugin Development",
    company: "PlutoniumCraft",
    description: "Learned server-side Java development and Minecraft plugin creation fundamentals.",
  },
]

export function Timeline() {
  return (
    <div className="timeline-container">
      {timelineData.map((item, index) => (
        <motion.div
          key={index}
          className="timeline-item"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <div className="rounded-lg bg-card p-6 shadow-lg">
            <Badge className="mb-2 bg-primary/10 text-primary">{item.year}</Badge>
            <h3 className="font-minecraft mb-2 text-xl font-bold text-primary">{item.title}</h3>
            <p className="mb-2 text-sm font-medium text-secondary">{item.company}</p>
            <p className="text-muted-foreground">{item.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

