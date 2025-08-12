'use client'

import { motion } from "framer-motion"
import React from "react"
import { Card } from "@/components/ui/card"

type Props = {
  title?: string
  description?: string
  Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>
  colorClass?: string
  delay?: number
}

export default function FeatureCard({
  title = "Feature",
  description = "Description",
  Icon,
  colorClass = "text-emerald-600",
  delay = 0,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay }}
    >
      <Card className="h-full p-6 bg-white/80 backdrop-blur border-emerald-100 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-start gap-4">
          <div className={`h-12 w-12 flex items-center justify-center rounded-xl bg-emerald-50 ${colorClass}`}>
            {Icon ? (
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
              >
                <Icon className="h-7 w-7" />
              </motion.div>
            ) : null}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-emerald-900">{title}</h3>
            <p className="mt-1 text-sm text-neutral-700">{description}</p>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}
