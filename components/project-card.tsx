"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Github, ExternalLink, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
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

export function ProjectCard({ project }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false)

  const toggleExpanded = () => setExpanded(!expanded)

  return (
    <Card className="group h-full overflow-hidden border-none bg-white shadow-md transition-all duration-300 hover:shadow-lg dark:bg-slate-900">
      <div className="relative aspect-video overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-105"
          style={{ backgroundImage: `url(${project.image})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} className="bg-emerald-500 text-white">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      <CardHeader className="pb-2 pt-4">
        <h3 className="font-minecraft text-xl font-bold">{project.title}</h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">{project.description}</p>
      </CardHeader>

      <CardContent className="pb-2">
        <div className="mb-4 flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <Badge
              key={index}
              variant="outline"
              className="border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-900 dark:bg-emerald-900/20 dark:text-emerald-400"
            >
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
          <p className="mb-4 text-slate-600 dark:text-slate-300">{project.content}</p>

          <div className="mb-2 mt-4">
            <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Key Features:</h4>
            <ul className="mt-2 space-y-1">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start text-sm">
                  <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                  <span className="text-slate-600 dark:text-slate-300">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <Button
          variant="ghost"
          size="sm"
          onClick={toggleExpanded}
          className="mt-2 w-full justify-center text-emerald-500 hover:bg-emerald-50 hover:text-emerald-600 dark:hover:bg-emerald-900/20"
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

      <CardFooter className="flex justify-between pt-2">
        <Button
          asChild
          variant="outline"
          size="sm"
          className="border-slate-200 text-slate-700 hover:border-emerald-500 hover:text-emerald-500 dark:border-slate-700 dark:text-slate-300"
        >
          <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4" />
            Code
          </Link>
        </Button>
        <Button asChild size="sm" className="bg-emerald-500 text-white hover:bg-emerald-600">
          <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="mr-2 h-4 w-4" />
            {project.liveSiteName || "View Live"}
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

