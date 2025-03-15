"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { ProjectCardRedesigned } from "@/components/project-card-redesigned"
import { projects } from "@/data/projects"

export default function ProjectsPage() {
  // Only show the first 3 projects
  const featuredProjects = projects.slice(0, 3)

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
              <Badge className="mb-4 bg-primary/10 px-3 py-1 text-primary">My Work</Badge>
              <h2 className="font-minecraft mb-4 text-white/80 font-extrabold sm:text-4xl">Featured Projects</h2>
              <div className="mx-auto h-1 w-20 bg-primary"></div>
            </motion.div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ProjectCardRedesigned project={project} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

