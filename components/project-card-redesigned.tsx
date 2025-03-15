"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Github, ExternalLink, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Project {
  id: string
  title: string
  description: string
  content: string
  image: string
  technologies: string[]
  features: string[]
  githubUrl: string
  liveUrl: string
  liveSiteName?: string
  tags: string[]
}

interface ProjectCardProps {
  project: Project
}

export function ProjectCardRedesigned({ project }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false)

  const toggleExpanded = () => setExpanded(!expanded)

  return (
    <Card className="group overflow-hidden border-none bg-black/30 backdrop-blur-sm transition-all duration-300 hover:bg-black/40">
      <div className="relative aspect-video overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-105"
          style={{ backgroundImage: `url(${project.image})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

        <div className="absolute bottom-4 left-4 right-4 z-10">
          <h3 className="font-minecraft mb-2 text-2xl font-bold text-primary">{project.title}</h3>
          <p className="text-sm text-foreground">{project.description}</p>
        </div>
      </div>

      <CardContent className="p-6">
        <div className="mb-4 flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <Badge key={index} variant="outline" className="border-primary/20 bg-primary/10 text-primary">
              {tech}
            </Badge>
          ))}
        </div>

        <motion.div
          initial={{ height: 0 }}
          animate={{ height: expanded ? "auto" : 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <p className="mb-4 text-foreground">{project.content}</p>

          <div className="mb-2 mt-4">
            <h4 className="text-sm font-semibold text-foreground">Key Features:</h4>
            <ul className="mt-2 space-y-1">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start text-sm">
                  <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-primary"></div>
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <Button
          variant="ghost"
          size="sm"
          onClick={toggleExpanded}
          className="mt-2 w-full justify-center text-primary hover:bg-primary/10"
        >
          {expanded ? (
            <>
              <ChevronUp className="mr-1 h-4 w-4" />
              Show Less
            </>
          ) : (
            <>
              <ChevronDown className="mr-1 h-4 w-4" />
              Show More
            </>
          )}
        </Button>
      </CardContent>

      <CardFooter className="flex justify-between border-t border-white/10 p-6">
        <Button
          asChild
          variant="outline"
          size="sm"
          className="border-white/10 text-foreground hover:border-primary hover:text-primary"
        >
          <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4" />
            Code
          </Link>
        </Button>
        <Button asChild size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
          <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="mr-2 h-4 w-4" />
            {project.liveSiteName || "View Live"}
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

