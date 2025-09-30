"use client"

import type React from "react"

import { useState } from "react"
import { useToast } from "@/hooks/use-toast"

export default function WaitlistForm() {

  const [loading, setLoading] = useState(false)
  const { toast } = useToast()

  // No form submission needed, button will link to Tally form

  return (
    <div className="w-full max-w-md">
      <div className="corners frame rounded-none p-2 sm:p-3 reveal-up delay-4">
        <span className="corner tl" />
        <span className="corner tr" />
        <span className="corner bl" />
        <span className="corner br" />

        <div className="flex items-center justify-center">
          <a
            href="https://tally.so/r/wMBB7E"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="JOIN WAITLIST"
            className="bracket-btn cta-anim min-w-24 font-mono font-light text-center"
          >
            <span className="dot tl" />
            <span className="dot tr" />
            <span className="dot bl" />
            <span className="dot br" />
            JOIN WAITLIST
          </a>
        </div>
      </div>
      <p className="mt-3 text-sm text-muted-foreground leading-6 reveal-up delay-6">
        No spam. Early access and product updates only.
      </p>
    </div>
  )
}
