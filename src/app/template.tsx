import React from "react"
import MotionTemplate from "@/components/motion-template"

// Templates are recreated on navigation, ideal for enter/exit animations [^1]
export default function Template({ children }: { children: React.ReactNode }) {
  return <MotionTemplate>{children}</MotionTemplate>
}
