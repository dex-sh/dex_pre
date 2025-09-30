import type React from "react"

export default function HeroGraphics() {
  return (
    <div className="tile-grid">
      <div className="tile col-span-3">
        <OrbitSVG />
      </div>
      <div className="tile col-span-3">
        <NodesSVG />
      </div>
      <div className="tile col-span-2">
        <HatchSVG />
      </div>
      <div className="tile col-span-4">
        <WaveSVG />
      </div>
      <div className="tile col-span-2">
        <DotsSVG />
      </div>
      <div className="tile col-span-6">
        <BracketSVG />
      </div>
    </div>
  )
}

function OrbitSVG() {
  return (
    <SVG viewBox="0 0 160 120">
      <defs>
        <radialGradient id="g1" cx="50%" cy="50%" r="70%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.1" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect x="0.5" y="0.5" width="159" height="119" rx="2" fill="url(#g1)" stroke="currentColor" opacity="0.25" />
      <g className="anim-orbit">
        <circle cx="80" cy="60" r="28" fill="none" stroke="currentColor" strokeWidth="1.25" />
        <ellipse cx="80" cy="60" rx="50" ry="22" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.8" />
        <ellipse cx="80" cy="60" rx="60" ry="30" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      </g>
      <circle cx="80" cy="60" r="3" className="ink-fill anim-pulse" />
      <circle cx="120" cy="60" r="3" className="ink-fill anim-pulse delay-1" />
      <circle cx="40" cy="60" r="2" className="ink-fill anim-pulse delay-2" style={{ opacity: 0.7 }} />
      <line x1="80" y1="60" x2="120" y2="60" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
    </SVG>
  )
}

function NodesSVG() {
  const nodes = [
    [28, 28],
    [80, 18],
    [130, 32],
    [30, 90],
    [86, 70],
    [130, 92],
  ]
  const links: Array<[number, number]> = [
    [0, 1],
    [1, 2],
    [0, 4],
    [4, 5],
    [3, 4],
    [2, 5],
  ]
  return (
    <SVG viewBox="0 0 160 120">
      {links.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a][0]}
          y1={nodes[a][1]}
          x2={nodes[b][0]}
          y2={nodes[b][1]}
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.7"
        />
      ))}
      {nodes.map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="7.5" fill="none" stroke="currentColor" strokeWidth="1.25" />
          <circle cx={x} cy={y} r="2.5" className="ink-fill anim-pulse" />
        </g>
      ))}
    </SVG>
  )
}

function HatchSVG() {
  const lines = Array.from({ length: 14 }, (_, i) => i * 12 - 20)
  return (
    <SVG viewBox="0 0 160 120">
      {lines.map((o, i) => (
        <line key={i} x1={o} y1={0} x2={o + 120} y2={120} stroke="currentColor" strokeWidth="1" opacity="0.35" />
      ))}
      <rect x="0.5" y="0.5" width="159" height="119" fill="none" stroke="currentColor" strokeWidth="1" />
    </SVG>
  )
}

function WaveSVG() {
  const path = Array.from({ length: 64 }, (_, i) => {
    const x = (i / 63) * 160
    const y = 60 + Math.sin((i / 63) * Math.PI * 4) * 24
    return `${i === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`
  }).join(" ")
  return (
    <SVG viewBox="0 0 160 120">
      <path d={path} className="anim-dash" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <g opacity="0.25">
        {Array.from({ length: 5 }, (_, i) => (
          <line key={i} x1="0" x2="160" y1={20 + i * 20} y2={20 + i * 20} stroke="currentColor" strokeWidth="1" />
        ))}
      </g>
    </SVG>
  )
}

function DotsSVG() {
  const dots = []
  for (let y = 10; y < 110; y += 10) {
    for (let x = 10; x < 150; x += 10) {
      dots.push([x, y])
    }
  }
  return (
    <SVG viewBox="0 0 160 120">
      {dots.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="1.5" fill="currentColor" opacity={y < 60 ? 0.2 + y / 120 : 0.2} />
      ))}
      <rect x="0.5" y="0.5" width="159" height="119" rx="1" fill="none" stroke="currentColor" strokeWidth="1" />
    </SVG>
  )
}

function BracketSVG() {
  return (
    <SVG viewBox="0 0 160 60" height="60">
      {/* label bar with corner brackets */}
      
    </SVG>
  )
}

function Corner({ x, y, flipX = false, flipY = false }: { x: number; y: number; flipX?: boolean; flipY?: boolean }) {
  const sX = flipX ? -1 : 1
  const sY = flipY ? -1 : 1
  return (
    <path
      d={`M ${x} ${y} h ${8 * sX} M ${x} ${y} v ${8 * sY}`}
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="square"
    />
  )
}

function SVG({
  children,
  viewBox,
  height,
}: {
  children: React.ReactNode
  viewBox: string
  height?: string | number
}) {
  return (
    <svg
      viewBox={viewBox}
      height={height}
      width="100%"
      role="img"
      aria-hidden="true"
      focusable="false"
      style={{ color: "var(--hero-ink)" }}
      className="tile-float"
    >
      {children}
    </svg>
  )
}
