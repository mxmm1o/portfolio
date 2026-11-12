import { useEffect, useState } from "react"
import styles from "./style.module.css"

const ITEMS = [
  { id: "home", label: "Home" },
  { id: "works", label: "Works" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
] as const

export function SectionRail() {
  const [active, setActive] = useState("home")

  useEffect(() => {
    const els = ITEMS
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null)
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) setActive(visible[0].target.id)
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: [0, 0.15, 0.35, 0.6, 1] },
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <nav className={styles.rail} aria-label="セクション位置">
      {ITEMS.map(({ id, label }) => (
        <a
          key={id}
          href={`#${id}`}
          className={active === id ? styles.itemActive : styles.item}
          aria-current={active === id ? "location" : undefined}
          aria-label={label}
        >
          <span className={styles.tick} />
          <span className={styles.label}>{label}</span>
        </a>
      ))}
    </nav>
  )
}
