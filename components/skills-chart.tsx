"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface Skill {
  name: string
  level: number
  category: string
  color: string
}

interface SkillsChartProps {
  skills: Skill[]
}

export function SkillsChart({ skills }: SkillsChartProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  const categories = Array.from(new Set(skills.map((skill) => skill.category)))

  const filteredSkills = activeCategory ? skills.filter((skill) => skill.category === activeCategory) : skills

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap justify-center gap-3">
        <button
          onClick={() => setActiveCategory(null)}
          className={cn(
            "rounded-full px-4 py-2 text-sm font-medium transition-colors",
            activeCategory === null
              ? "bg-emerald-500 text-white"
              : "bg-slate-200 text-slate-700 hover:bg-emerald-100 dark:bg-slate-700 dark:text-slate-300 dark:hover:bg-emerald-900/30",
          )}
        >
          All Skills
        </button>

        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition-colors",
              activeCategory === category
                ? "bg-emerald-500 text-white"
                : "bg-slate-200 text-slate-700 hover:bg-emerald-100 dark:bg-slate-700 dark:text-slate-300 dark:hover:bg-emerald-900/30",
            )}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {filteredSkills.map((skill) => (
          <div key={skill.name} className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-medium text-slate-900 dark:text-white">{skill.name}</span>
              <span className="text-sm text-slate-500 dark:text-slate-400">{skill.level}%</span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="h-full rounded-full"
                style={{ backgroundColor: skill.color }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

