'use client'

import { motion } from "framer-motion"
import React from "react"

type Props = {
  children?: React.ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "none"
}

export default function AnimatedSection({
  children = null,
  className = "",
  delay = 0,
  direction = "up",
}: Props) {
  const variants: Record<string, any> = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 24 : direction === "down" ? -24 : 0,
      x: direction === "left" ? 24 : direction === "right" ? -24 : 0,
      scale: direction === "none" ? 0.98 : 1,
    },
    show: { opacity: 1, x: 0, y: 0, scale: 1 },
  }

  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.section>
  )
}
