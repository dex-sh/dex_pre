"use client"

import type React from "react"

import { useState } from "react"
import { useToast } from "@/hooks/use-toast"

export default function WaitlistForm() {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!email) return
    try {
      setLoading(true)
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })
      if (!res.ok) throw new Error("Failed")
      setEmail("")
      toast({ title: "You're on the list.", description: "We'll reach out when invites open." })
    } catch {
      toast({ title: "Something went wrong", description: "Please try again.", variant: "destructive" as any })
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={onSubmit} className="w-full max-w-md">
      <div className="corners frame rounded-none p-2 sm:p-3 reveal-up delay-4">
        <span className="corner tl" />
        <span className="corner tr" />
        <span className="corner bl" />
        <span className="corner br" />

        <div className="flex items-stretch gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            aria-label="Email address"
            className="flex-1 bg-background text-foreground px-3 py-2 border border-border focus:outline-none focus:ring-2 focus:ring-[color:var(--color-ring)] input-soft"
            required
          />
          <button
            type="submit"
            aria-label="JOIN WAITLIST"
            className="bracket-btn cta-anim min-w-24 font-mono font-light"
            disabled={loading}
            data-busy={loading ? "true" : "false"}
          >
            <span className="dot tl" />
            <span className="dot tr" />
            <span className="dot bl" />
            <span className="dot br" />
            {loading ? "Joining…" : "JOIN WAITLIST"}
          </button>
        </div>
      </div>
      <p className="mt-3 text-sm text-muted-foreground leading-6 reveal-up delay-6">
        No spam. Early access and product updates only.
      </p>
    </form>
  )
}
