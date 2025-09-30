"use client"

import { useEffect, useState } from "react"

function getInitialTheme(): "light" | "dark" {
  if (typeof window === "undefined") return "light"
  const stored = window.localStorage.getItem("dex-theme")
  if (stored === "dark" || stored === "light") return stored
  return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
}


export default function ModeToggle() {
  const [theme, setTheme] = useState<"light" | "dark" | undefined>(undefined)
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const initial = getInitialTheme();
    setTheme(initial);
  }, []);

  useEffect(() => {
    if (!theme) return;
    const root = document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
    try {
      window.localStorage.setItem("dex-theme", theme);
    } catch {}
  }, [theme]);

  return (
    <div className="fixed right-4 top-4 z-50">
      <button
        type="button"
        onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
        aria-pressed={theme === "dark"}
        aria-label="Toggle dark mode"
        className="group relative flex items-center gap-2 rounded-md border px-3 py-1.5 text-sm bg-card/70 backdrop-blur border-border text-foreground transition-colors hover:bg-accent active:scale-[0.98]"
      >
        <span className="relative inline-block h-4 w-4 rounded-full border border-border" aria-hidden="true">
          {/* sun/moon dot */}
          <span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground transition-all duration-300 ease-out group-aria-pressed:translate-x-[6px] group-aria-pressed:scale-75" />
          {/* orbit ring */}
          <span className="absolute inset-[-2px] rounded-full border border-border/60 animate-[spin_6s_linear_infinite] [animation-play-state:var(--dex-anim,running)]" />
        </span>
        {mounted && theme && (
          <span className="font-mono text-xs tracking-wider">{theme === "dark" ? "DARK" : "LIGHT"}</span>
        )}
      </button>
    </div>
  );
}
