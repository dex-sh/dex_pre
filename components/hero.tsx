import "./hero.css"
import "./hero-anim.css"
import WaitlistForm from "./waitlist-form"
import HeroGraphics from "./hero-graphics"

export default function Hero() {
  return (
    <section className="brutalist-grid">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20 lg:py-24 relative z-10">
        <header className="mb-8">
          <div className="kicker reveal-up delay-0">dex — more dexterity to your workflow</div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Left: copy + CTA */}
          <div className="space-y-6">
            <h1 className="text-balance text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight">
              <span className="block reveal-up delay-1">Automate anything.</span>
              <span className="block reveal-up delay-2">Accelerate anything.</span>
            </h1>

            <p className="max-w-prose text-muted-foreground leading-6 reveal-up delay-3">
              Build, orchestrate, and ship AI workflows, agents, and automations in a single canvas. Designed for speed,
              reliability, and ruthless clarity.
            </p>

            <div className="reveal-up delay-4">
              <WaitlistForm />
            </div>

            <div className="grid grid-cols-2 gap-3 max-w-md">
              <div className="frame p-3 reveal-up delay-5">
                <p className="kicker">/01</p>
                <p className="mt-2 text-sm">Drag nodes, wire tools, deploy instantly.</p>
              </div>
              <div className="frame p-3 reveal-up delay-6">
                <p className="kicker">/02</p>
                <p className="mt-2 text-sm">Observe runs with precise traces and metrics.</p>
              </div>
              <div className="frame p-3 reveal-up delay-6">
                <p className="kicker">/03</p>
                <p className="mt-2 text-sm">Use DexBot to run tools with one prompt on the go.</p>
              </div>
               <div className="frame p-3 reveal-up delay-6">
                <p className="kicker">/04</p>
                <p className="mt-2 text-sm">Share your workflows with the community.</p>
              </div>
            </div>
          </div>

          {/* Right: custom graphics with motion */}
          <HeroGraphics />
        </div>

        <footer className="mt-10 flex items-center gap-3 text-xs reveal-up delay-7">
          <span className="kicker">Built for everyone</span>
          <span aria-hidden="true" className="text-muted-foreground">
            •
          </span>
          <span className="kicker">All systems nominal</span>
        </footer>
      </div>
    </section>
  )
}
