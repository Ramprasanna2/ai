'use client'

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from 'lucide-react'

export default function StartChatCta() {
  return (
    <div className="flex justify-center py-16">
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        <Link
          href="/chat"
          className="group inline-flex items-center gap-3 rounded-full bg-emerald-600 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 transition-colors"
          aria-label="Start Chat"
        >
          Start Chat
          <motion.span
            initial={{ x: 0 }}
            animate={{ x: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowRight className="h-6 w-6" />
          </motion.span>
        </Link>
      </motion.div>
    </div>
  )
}
