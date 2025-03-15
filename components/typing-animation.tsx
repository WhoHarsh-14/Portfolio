"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface TypingAnimationProps {
  text: string
  delay?: number
  className?: string
}

export function TypingAnimation({ text, delay = 150, className }: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    let timeout: NodeJS.Timeout

    if (isPaused) {
      timeout = setTimeout(() => {
        setIsPaused(false)
      }, 1000) // Pause for 1 second before starting to delete
      return () => clearTimeout(timeout)
    }

    if (!isDeleting && currentIndex < text.length) {
      // Typing forward
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)

        if (currentIndex === text.length - 1) {
          setIsPaused(true)
          setTimeout(() => {
            setIsDeleting(true)
          }, 1000)
        }
      }, delay)
    } else if (isDeleting && displayedText.length > 0) {
      // Deleting
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1))

        if (displayedText.length === 1) {
          setIsDeleting(false)
          setCurrentIndex(0)
        }
      }, delay / 2)
    }

    return () => clearTimeout(timeout)
  }, [currentIndex, delay, displayedText.length, isDeleting, isPaused, text])

  return (
    <AnimatePresence>
      <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className={className}>
        {displayedText}
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 0.8 }}
          className="inline-block w-[2px] h-5 ml-[1px] bg-primary"
        />
      </motion.span>
    </AnimatePresence>
  )
}

