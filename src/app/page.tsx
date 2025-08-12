"use client"
import LandingHero from "@/components/landing-hero"
import AnimatedSection from "@/components/animated-section"
import FeatureCard from "@/components/feature-card"
import StartChatCta from "@/components/start-chat-cta"
import { Droplet, Sprout, CloudLightning, Landmark, LineChart } from 'lucide-react'

export default function Page() {
  const features = [
    {
      title: "Plan Irrigation Smartly",
      description:
        "Optimize watering schedules using local weather and soil conditions to save water and boost yield.",
      Icon: Droplet,
    },
    {
      title: "Seed Variety Recommendations",
      description:
        "Get seed recommendations tailored to your region’s climate and season for better crop performance.",
      Icon: Sprout,
    },
       {
      title: "Financial Help & Schemes",
      description:
        "Explore government schemes and make smarter financial decisions with quick, AI-guided insights.",
      Icon: Landmark,
    },
  ]

  return (
    <main className="bg-gradient-to-b from-emerald-50 via-lime-50 to-white">
      <LandingHero />

      <div id="features" className="relative">
        <AnimatedSection className="container mx-auto px-6 py-16 md:py-24" direction="none">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 text-center">
            What this site can do
          </h2>
          <p className="mt-3 text-neutral-700 text-center max-w-2xl mx-auto">
            Your AI assistant for better planning, decisions, and resilience on the farm.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {features.map((f, i) => (
              <FeatureCard
                key={f.title}
                title={f.title}
                description={f.description}
                Icon={f.Icon}
                delay={i * 0.05}
              />
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection className="container mx-auto px-6 py-16 md:py-24" direction="up">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl md:text-3xl font-semibold text-emerald-900">
                Make data-driven financial decisions
              </h3>
              <p className="mt-3 text-neutral-700">
                Compare costs, estimate returns, and find subsidies that match your crops and region.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <div className="rounded-2xl overflow-hidden shadow-md border bg-white">
                <img
                  src={"/placeholder.svg?height=400&width=600&query=farm%20finance%20analytics%20dashboard"}
                  alt="Illustration of farm finance analytics"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="container mx-auto px-6 py-16 md:py-24" direction="up">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="rounded-2xl overflow-hidden shadow-md border bg-white">
                <img
                  src={"/placeholder.svg?height=400&width=600&query=weather%20alerts%20for%20farmers%20mobile%20app"}
                  alt="Illustration of weather alerts on mobile"
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold text-emerald-900">
                Stay ahead of risky weather
              </h3>
              <p className="mt-3 text-neutral-700">
                Early alerts help you take action before storms, extreme heat, or frost can harm your crops.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="container mx-auto px-6 pb-24" direction="up">
          <StartChatCta />
          <p className="text-center text-sm text-neutral-600">
            Ready to ask a question? Tap Start Chat to talk to your AI assistant.
          </p>
        </AnimatedSection>
      </div>
    </main>
  )
}
