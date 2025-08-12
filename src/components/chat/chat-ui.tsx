'use client'

import React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { SendHorizonal, Bot, User } from 'lucide-react'

type Message = {
  id: string
  role: "user" | "assistant"
  content: string
}

export default function ChatUI() {
  const [messages, setMessages] = React.useState<Message[]>([
    {
      id: "m1",
      role: "assistant",
      content:
        "Hi! I’m your farming assistant. Ask me about irrigation, seeds, weather alerts, or financial schemes.",
    },
  ])
  const [input, setInput] = React.useState("")

  const listRef = React.useRef<HTMLDivElement | null>(null)

  React.useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight
    }
  }, [messages])

  async function onSend(e: React.FormEvent) {
    e.preventDefault();
  const text = input.trim();
  if (!text) return;

  const userMsg: Message = { id: crypto.randomUUID(), role: "user", content: text };
  setMessages((prev) => [...prev, userMsg]);
  setInput("");

  // Add typing placeholder
  const typingId = crypto.randomUUID();
  setMessages((prev) => [
    ...prev,
    { id: typingId, role: "assistant", content: "..." }
  ]);

  // Simulate backend call delay (replace with real fetch)
  const res = await fetch("http://127.0.0.1:8000/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message:text }),
    });
    const data = await res.json();
  const simulatedResponse =
    data.answer;
  
  await new Promise((resolve) => setTimeout(resolve, 1200)); // Simulate waiting for backend

  // Replace the typing message with streaming effect
  setMessages((prev) => prev.filter((m) => m.id !== typingId)); // remove placeholder

  const assistantId = crypto.randomUUID();
  setMessages((prev) => [
    ...prev,
    { id: assistantId, role: "assistant", content: "" }
  ]);

  // Typing animation: append one character at a time
  let i = 0;
  const interval = setInterval(() => {
    i++;
    setMessages((prev) =>
      prev.map((m) =>
        m.id === assistantId
          ? { ...m, content: simulatedResponse.slice(0, i) }
          : m
      )
    );
    if (i >= simulatedResponse.length) clearInterval(interval);
  }, 20); 
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="flex flex-col h-[calc(100vh-4rem)] max-h-[1200px] rounded-2xl border bg-white/90 backdrop-blur shadow-xl"
    >
      <ScrollArea className="flex-1 p-4 md:p-6" ref={listRef as any}>
        <div className="space-y-4">
          {messages.map((m) => (
            <motion.div
              key={m.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className={`flex items-start gap-3 ${m.role === "user" ? "justify-end" : "justify-start"}`}
            >
              {m.role === "assistant" && (
                <div className="mt-1 h-8 w-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Bot className="h-5 w-5" />
                  <span className="sr-only">Assistant</span>
                </div>
              )}
              <div
                className={`max-w-[85%] md:max-w-[70%] rounded-2xl px-3 py-2 text-sm leading-relaxed ${
                  m.role === "user"
                    ? "bg-emerald-600 text-white rounded-br-sm"
                    : "bg-emerald-50 text-emerald-900 rounded-bl-sm"
                }`}
              >
                {m.content}
              </div>
              {m.role === "user" && (
                <div className="mt-1 h-8 w-8 rounded-full bg-neutral-200 text-neutral-700 flex items-center justify-center shrink-0">
                  <User className="h-5 w-5" />
                  <span className="sr-only">You</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </ScrollArea>

      <form onSubmit={onSend} className="p-3 md:p-4 border-t bg-white rounded-b-2xl">
        <div className="flex items-center gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask your AI farming assistant..."
            aria-label="Message input"
            className="bg-white"
          />
          <Button type="submit" className="bg-emerald-600 hover:bg-emerald-700">
            <SendHorizonal className="h-5 w-5" />
            <span className="sr-only">Send</span>
          </Button>
        </div>
        <p className="mt-2 text-[11px] text-neutral-500">
          Will connect to your local Phi-3 backend. This demo currently replies with a mock response.
        </p>
      </form>
    </motion.div>
  )
}
