// Small hand-drawn SVG flags. Each one takes a className (for size) and a title
// (read by screen readers).

function Flag({ viewBox, title, className, children }) {
  return (
    <svg viewBox={viewBox} className={`rounded-sm shadow-sm ring-1 ring-black/10 ${className}`} role="img" aria-label={title}>
      <title>{title}</title>
      {children}
    </svg>
  )
}

/** Points of a star (or sun ray ring) around a centre. */
function starPoints(cx, cy, outer, inner, points, rotation = -90) {
  const out = []
  for (let i = 0; i < points * 2; i++) {
    const r = i % 2 === 0 ? outer : inner
    const a = ((rotation + (i * 180) / points) * Math.PI) / 180
    out.push(`${(cx + r * Math.cos(a)).toFixed(2)},${(cy + r * Math.sin(a)).toFixed(2)}`)
  }
  return out.join(' ')
}

export function FlagKyrgyzstan({ className = '', title = 'Kyrgyzstan' }) {
  // Current (2023) flag of the Kyrgyz Republic, from /public/flags/kyrgyzstan.png
  return (
    <img
      src="/flags/kyrgyzstan.png"
      alt={title}
      width="250"
      height="150"
      className={`rounded-sm shadow-sm ring-1 ring-black/10 ${className}`}
    />
  )
}

export function FlagTurkiye({ className = '', title = 'Türkiye' }) {
  return (
    <Flag viewBox="0 0 150 100" title={title} className={className}>
      <rect width="150" height="100" fill="#E30A17" />
      <circle cx="50" cy="50" r="25" fill="#fff" />
      <circle cx="56.25" cy="50" r="20" fill="#E30A17" />
      <polygon points={starPoints(83.33, 50, 12.5, 5, 5, 180)} fill="#fff" />
    </Flag>
  )
}

export function FlagGermany({ className = '', title = 'Germany' }) {
  return (
    <Flag viewBox="0 0 5 3" title={title} className={className}>
      <rect width="5" height="1" fill="#000" />
      <rect y="1" width="5" height="1" fill="#DD0000" />
      <rect y="2" width="5" height="1" fill="#FFCE00" />
    </Flag>
  )
}

export function FlagFrance({ className = '', title = 'France' }) {
  return (
    <Flag viewBox="0 0 3 2" title={title} className={className}>
      <rect width="1" height="2" fill="#000091" />
      <rect x="1" width="1" height="2" fill="#fff" />
      <rect x="2" width="1" height="2" fill="#E1000F" />
    </Flag>
  )
}

export function FlagEU({ className = '', title = 'European Union' }) {
  const stars = Array.from({ length: 12 }, (_, i) => {
    const a = ((i * 30 - 90) * Math.PI) / 180
    return [150 + 66.67 * Math.cos(a), 100 + 66.67 * Math.sin(a)]
  })
  return (
    <Flag viewBox="0 0 300 200" title={title} className={className}>
      <rect width="300" height="200" fill="#003399" />
      {stars.map(([x, y], i) => (
        <polygon key={i} points={starPoints(x, y, 11.1, 4.3, 5)} fill="#FFCC00" />
      ))}
    </Flag>
  )
}
