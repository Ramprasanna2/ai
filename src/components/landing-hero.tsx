'use client'

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export default function LandingHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Image
        src="/images/farm-hero.jpg"
        alt="Soft farm landscape background"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/70 to-white/90" />
      <motion.div
        initial={{ opacity: 0, scale: 0.98, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 text-center px-6"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-emerald-900">
          Smart Farming Assistant
        </h1>
        <p className="mt-4 text-base md:text-lg text-neutral-700 max-w-2xl mx-auto">
          Plan irrigation, choose seeds, get weather alerts, and make better financial decisions — all in one place.
        </p>
        <div className="mt-8">
          <Link
            href="#features"
            className="inline-flex items-center justify-center rounded-full bg-emerald-600 text-white px-6 py-3 text-sm md:text-base font-medium shadow-lg hover:bg-emerald-700 transition-colors"
          >
            Learn what it can do
          </Link>
        </div>
      </motion.div>
    </section>
  )
}
