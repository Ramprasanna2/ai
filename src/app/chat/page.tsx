import Link from "next/link"
import ChatUI from "@/components/chat/chat-ui"
import { ArrowLeft } from 'lucide-react'

export default function ChatPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-emerald-50 via-lime-50 to-white">
      <header className="container mx-auto px-4 md:px-6 pt-6 md:pt-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-emerald-800 hover:text-emerald-900 transition-colors"
          aria-label="Back to landing"
        >
          <ArrowLeft className="h-5 w-5" />
          <span className="text-sm font-medium">Back</span>
        </Link>
        <h1 className="mt-4 text-2xl md:text-3xl font-bold text-emerald-900">
          Ask your AI farming assistant
        </h1>
        <p className="text-neutral-700 mt-1">
          Get help with irrigation, seeds, weather alerts, and financial decisions.
        </p>
      </header>

      <div className="container mx-auto px-4 md:px-6 py-6 md:py-8">
        <ChatUI />
      </div>
    </main>
  )
}
