import { useEffect, useState } from "react"
import { Link } from "react-router"
import styles from "./style.module.css"

function IconHome() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M4 10.5 12 3.8l8 6.7V20a1 1 0 0 1-1 1h-5.2v-6.2H9.2V21H5a1 1 0 0 1-1-1V10.5z" />
    </svg>
  )
}

function IconWorks() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3.6" y="3.6" width="7.2" height="7.2" rx="1.4" />
      <rect x="13.2" y="3.6" width="7.2" height="7.2" rx="1.4" />
      <rect x="3.6" y="13.2" width="7.2" height="7.2" rx="1.4" />
      <rect x="13.2" y="13.2" width="7.2" height="7.2" rx="1.4" />
    </svg>
  )
}

function IconAbout() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="8" r="3.15" />
      <path d="M5.4 19.2c.85-3.4 3.35-5.15 6.6-5.15s5.75 1.75 6.6 5.15" />
    </svg>
  )
}

const ITEMS = [
  { id: "home", label: "Home", Icon: IconHome },
  { id: "works", label: "Works", Icon: IconWorks },
  { id: "about", label: "About", Icon: IconAbout },
] as const

type Props = {
  /** false のときは別ページ用。各項目はトップの該当セクションへ戻るリンクになる */
  onHome?: boolean
  /** 別ページで強調する項目 */
  current?: string
}

export function FloatingNav({ onHome = true, current = "works" }: Props) {
  const [active, setActive] = useState(onHome ? "home" : current)
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    const onScroll = () => setExpanded(window.scrollY > 80)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    if (!onHome) return
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
      { rootMargin: "-35% 0px -50% 0px", threshold: [0, 0.15, 0.35, 0.6, 1] },
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [onHome])

  return (
    <header className={styles.wrap}>
      <nav className={`${styles.pill} ${expanded ? styles.pillExpanded : ""}`} aria-label="ページ内メニュー">
        {ITEMS.map(({ id, label, Icon }) =>
          onHome ? (
            <a
              key={id}
              href={`#${id}`}
              className={active === id ? styles.itemActive : styles.item}
              aria-current={active === id ? "location" : undefined}
              aria-label={label}
            >
              <Icon />
              <span className={styles.label}>{label}</span>
            </a>
          ) : (
            <Link
              key={id}
              to={{ pathname: "/", hash: `#${id}` }}
              className={active === id ? styles.itemActive : styles.item}
              aria-label={label}
            >
              <Icon />
              <span className={styles.label}>{label}</span>
            </Link>
          ),
        )}
      </nav>
      <a className={styles.cta} href="mailto:ishizunarumi@gmail.com">Contact</a>
    </header>
  )
}
