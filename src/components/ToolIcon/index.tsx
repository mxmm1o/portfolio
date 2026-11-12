import styles from "./style.module.css"
import { useId } from "react"
import { TOOLS } from "./icons"

/** Spline の公式ロゴ（グラデーションの球）を、色の帯ごとにグレーの濃淡で再現 */
function SplineOrb() {
  const uid = useId().replace(/:/g, "")
  const clip = `spline-clip-${uid}`
  const soft = `spline-soft-${uid}`
  const softer = `spline-softer-${uid}`
  return (
    <>
      <defs>
        <clipPath id={clip}>
          <circle cx="12" cy="12" r="11" />
        </clipPath>
        <filter id={soft} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="0.6" />
        </filter>
        <filter id={softer} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1.1" />
        </filter>
      </defs>
      <g clipPath={`url(#${clip})`}>
        {/* 青の部分（いちばん濃い） */}
        <circle cx="12" cy="12" r="11" fill="currentColor" />
        {/* 右のピンクの帯 */}
        <path filter={`url(#${softer})`} fill="#fff" fillOpacity="0.32" d="M15.2 -2 C16.2 6 14.6 14 16 26 L27 26 L27 -2Z" />
        <g filter={`url(#${soft})`}>
          {/* ミントの帯 */}
          <path fill="#fff" fillOpacity="0.55" d="M8.2 -1 C8.8 3.6 6.4 7.6 3.2 9.2 L-1 10.2 L-1 17 C4 16.6 7.4 12.6 9.4 9 C11 6 11.6 2.4 13.4 -1Z" />
          {/* 左上のオレンジ（いちばん薄い） */}
          <path fill="#fff" fillOpacity="0.75" d="M-1 -1 L7.4 -1 C7.6 2.8 6 6.8 2.4 8.4 L-1 9Z" />
        </g>
      </g>
    </>
  )
}

type Props = {
  name: string
  size?: "md" | "sm"
  showLabel?: boolean
}

export function ToolIcon({ name, size = "md", showLabel = true }: Props) {
  const def = TOOLS[name]
  if (!def) return null

  return (
    <span
      className={`${styles.item} ${size === "sm" ? styles.sm : styles.md}`}
      title={name}
      aria-label={showLabel ? undefined : name}
    >
      <span className={styles.glyph} aria-hidden>
        <svg viewBox={def.viewBox} focusable="false">
          {def.kind === "orb" ? (
            <SplineOrb />
          ) : def.kind === "multi" && def.parts ? (
            def.parts.map((part, i) => (
              <path key={i} d={part.d} fill="currentColor" fillOpacity={part.opacity} />
            ))
          ) : (
            <path d={def.path} fill="currentColor" fillRule={def.fillRule} clipRule={def.fillRule} />
          )}
        </svg>
      </span>
      {showLabel && <span className={styles.label}>{name}</span>}
    </span>
  )
}
