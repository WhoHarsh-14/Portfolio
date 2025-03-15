"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Code2, Github, Home } from "lucide-react"
import { cn } from "@/lib/utils"
import { TypingAnimation } from "./typing-animation"
import { Button } from "@/components/ui/button"

export function MainNav() {
  const pathname = usePathname()

  const links = [
    { href: "/", label: "Home", icon: Home },
    { href: "/about", label: "About" },
    { href: "/skills", label: "Skills" },
    { href: "/experience", label: "Experience" },
    { href: "/projects", label: "Projects" },
  ]

  return (
    <header className=" fixed top-0 z-50 w-full border-b border-green-300 bg-background/90 backdrop-blur-lg">
      <div className="container relative flex h-16 items-center px-4">
        {/* Logo on the left */}
        <div className="absolute left-4">
          <Link href="/" className="flex items-center space-x-2">
            <Code2 className="h-6 w-6 text-primary" />
            <TypingAnimation text="Harshu" className="font-minecraft text-xl font-extrabold w-24 text-white/80" />
          </Link>
        </div>

        {/* Navigation centered */}
        <nav className="mx-auto flex items-center space-x-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "relative text-sm font-bold capitalize transition-colors hover:text-primary",
                pathname === link.href ? "text-primary font-bold" : "text-foreground hover:text-primary",
              )}
            >
              {link.icon ? <link.icon className="h-4 w-4 sm:hidden" /> : null}
              <span className="hidden sm:inline">{link.label}</span>
            </Link>
          ))}
        </nav>

        {/* GitHub on the right */}
        <div className="absolute right-4">
          <Button
            variant="ghost"
            size="icon"
            asChild
            className="rounded-full text-foreground hover:bg-primary/10 hover:text-primary"
          >
            <Link href="https://github.com/WhoHarsh-14" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

