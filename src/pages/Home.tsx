import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router"
import styles from "./Home.module.css"
import { works } from "../data/works"
import avatar from "../assets/avatar.webp"
import avatarBlink from "../assets/avatar-blink.webp"
import { FloatingNav } from "../components/FloatingNav"
import { SectionRail } from "../components/SectionRail"
import { ToolIcon } from "../components/ToolIcon"

const ROLES = ["Live Visuals", "Music Videos", "Commercials", "Exhibition Booths"] as const

const FILTERS = ["All", "Live", "MV", "CM", "Event"] as const
type Filter = (typeof FILTERS)[number]

const JOURNEY = [
  {
    period: "2026.07–2026.10",
    company: "株式会社チュパカブラ工藝社",
    title: "プロジェクトマネージャー",
    body: "光る展示会ブース「RAN²BOOTH」の提案、会場申請、中国工場への入稿と進捗管理、協力会社の手配、施工立ち会い、請求までを担当。16社の案件を管理。",
  },
  {
    period: "2024.07–2026.06",
    company: "フリーランス",
    title: "プロジェクトマネージャー",
    body: "ライブ映像演出、MV、ビジュアライザー、CMの制作進行。ディレクター、CG、撮影チームのスケジュール管理と、アーティストやクライアントとの調整。",
  },
  {
    period: "2021.04–2024.06",
    company: "株式会社KIDS-COASTER",
    title: "ディレクター・マーケティングディレクター",
    body: "2021.04にインターンとして参加し、2022.04に新卒で正社員入社。自社ブランド「tiit-tokyo」のEC運用、プレスリリース作成、ファッションショーのPR、インフルエンサーPR。",
  },
] as const

const STACK = ["Figma", "Photoshop", "Illustrator", "After Effects", "Blender", "Spline", "Canva", "Google Workspace", "Slack", "Notion", "Claude", "GitHub"] as const
const CERTIFICATIONS = [
  { name: "秘書技能検定 2級", date: "2018.06" },
  { name: "Microsoft Office Specialist Excel 2016", date: "2019.11" },
  { name: "Microsoft Office Specialist Word 2016", date: "2020.11" },
] as const
const LIKES = ["散歩", "IDM", "デグー", "横浜DeNAベイスターズ", "おもちエイリアン", "多肉植物", "アニメ", "シェーダー"] as const

const BIO =
  "1999年広島生まれ。広島修道大学商学部商学科卒。ファッションブランドでPRとマーケティングを担当したあと、フリーランスとして映像制作の進行管理に携わりました。音楽ライブやフェスでは10〜20名規模のチームをまとめ、その後は展示会ブースのPMとして、ヒアリングから施工、請求までを一貫して担当しました。本番日から逆算したスケジュールづくりと、関係者へのこまめな共有を大切にしています。"

function roleLabel(id: number) {
  return id === 1 ? "Project Assistant" : "Project Manager"
}

function yearLabel(description: string) {
  const years = description.match(/\d{4}/g) ?? []
  if (years.length >= 2 && years[0] !== years[1]) return `${years[0]}–${years[1]}`
  return years[0] ?? description
}


function RotatingRole() {
  const [index, setIndex] = useState(0)
  const [prev, setPrev] = useState<number | null>(null)
  const [reduce, setReduce] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    const apply = () => setReduce(mq.matches)
    apply()
    mq.addEventListener("change", apply)
    return () => mq.removeEventListener("change", apply)
  }, [])

  useEffect(() => {
    if (reduce) return
    const timer = window.setInterval(() => {
      setIndex((current) => {
        setPrev(current)
        return (current + 1) % ROLES.length
      })
    }, 2500)
    return () => window.clearInterval(timer)
  }, [reduce])

  return (
    <p className={styles.heroRole}>
      <span className={styles.roleSlot}>
        {prev !== null && !reduce && (
          <span
            className={styles.roleWordOut}
            onAnimationEnd={() => setPrev(null)}
            aria-hidden
          >
            {ROLES[prev]}
          </span>
        )}
        <span key={ROLES[index]} className={reduce ? undefined : styles.roleWord}>
          {ROLES[index]}
        </span>
      </span>
      <span className={styles.roleStatic}>Project Manager</span>
    </p>
  )
}

export function Home() {
  const [filter, setFilter] = useState<Filter>("All")
  const { hash } = useLocation()

  // 案件ページから戻ったとき、#works や #work-3 の位置までスクロールする
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0)
      return
    }
    const el = document.getElementById(decodeURIComponent(hash.slice(1)))
    if (el) el.scrollIntoView({ block: hash.startsWith("#work-") ? "center" : "start" })
  }, [hash])
  const counts: Record<Filter, number> = {
    All: works.length,
    Live: works.filter((work) => work.category === "Live").length,
    MV: works.filter((work) => work.category === "MV").length,
    CM: works.filter((work) => work.category === "CM").length,
    Event: works.filter((work) => work.category === "Event").length,
  }
  const visible = filter === "All" ? works : works.filter((work) => work.category === filter)

  return (
    <>
      <FloatingNav />
      <SectionRail />
      <div className={styles.guides} aria-hidden>
        <span className={styles.guide} />
        <span className={styles.guideRight} />
      </div>
      <div className={styles.page}>

      <section id="home" className={styles.hero}>
        <div className={styles.heroLeft}>
          <RotatingRole />
          <div className={styles.heroLinks}>
            <a className={styles.pill} href="#about">About me</a>
            <a className={styles.pill} href="#works">See my work</a>
          </div>
        </div>

        <div className={styles.heroIcon}>
          <img src={avatar} alt="Narumi Ishizu のイラスト" />
          {/* 目を閉じたコマを数秒おきに一瞬だけ重ねて瞬きさせる */}
          <img src={avatarBlink} className={styles.heroBlink} alt="" aria-hidden />
        </div>

        <div className={styles.heroRight}>
          <p className={styles.heroHello}>Narumi Ishizu</p>
          <p className={styles.heroCatch}>映像と空間の制作進行をしています</p>
          <p className={styles.heroText}>
            ライブ映像演出、MV、CM、展示会ブースの現場で、クリエイターとクライアントの間に立ってきたプロジェクトマネージャーです。
          </p>
        </div>
      </section>

      <section id="works" className={styles.works}>
        <div className={styles.worksHead}>
          <h2 className={styles.sectionTitle}>Works</h2>
          <div className={styles.filters} role="tablist" aria-label="実績の種類">
            {FILTERS.map((item) => (
              <button
                key={item}
                type="button"
                role="tab"
                aria-selected={filter === item}
                className={filter === item ? styles.filterActive : styles.filterBtn}
                onClick={() => setFilter(item)}
              >
                {item}
                <span className={styles.filterCount}>{counts[item]}</span>
              </button>
            ))}
          </div>
        </div>

        <div className={styles.workList}>
          {visible.map((work) => (
            <Link key={work.id} to={`/works/${work.id}`} className={styles.workCard} id={`work-${work.id}`}>
              <header className={styles.workHead}>
                <h3 className={styles.workTitle}>{work.title}</h3>
                <p className={styles.workMeta}>
                  <span>#{work.category}</span>
                  <span>{work.description}</span>
                </p>
              </header>
              <div className={styles.workBody}>
                <div className={styles.workImageWrap}>
                  <img src={work.images[0]} alt="" className={styles.workImage} />
                  <span className={styles.workYear}>Year: {yearLabel(work.description)}</span>
                </div>
                <div className={styles.workPanel}>
                  <div className={styles.workPanelBody}>
                    <p className={styles.workRoleText}>{work.role}</p>
                    {work.tools.length > 0 && (
                      <div className={styles.workTools}>
                        <p className={styles.workToolsLabel}>Tools</p>
                        <ul className={styles.workToolsList}>
                          {work.tools.map((tool) => (
                            <li key={tool}>
                              <ToolIcon name={tool} size="sm" showLabel={false} />
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                  <div className={styles.workPanelFoot}>
                    <p className={styles.workRoleLabel}>Role: {roleLabel(work.id)}</p>
                    <span className={styles.workView}>View</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section id="about" className={styles.about}>
        <p className={styles.aboutLabel}>About me</p>
        <h2 className={styles.aboutHeadline}>段取りでつくる人を支える。</h2>
        <p className={styles.aboutBio}>{BIO}</p>

        <h3 className={styles.subhead}>Journey</h3>
        <ol className={styles.journey}>
          {JOURNEY.map((item) => (
            <li key={item.period} className={styles.journeyItem}>
              <div className={styles.journeyRow}>
                <p className={styles.journeyTitle}>{item.title}</p>
                <p className={styles.journeyCompany}>{item.company}</p>
                <p className={styles.journeyPeriod}>{item.period}</p>
              </div>
              <p className={styles.journeyBody}>{item.body}</p>
            </li>
          ))}
        </ol>

        <h3 className={styles.subhead}>Skill</h3>
        <ul className={styles.stack}>
          {STACK.map((item) => (
            <li key={item} className={styles.stackItem}>
              <ToolIcon name={item} />
            </li>
          ))}
        </ul>

        <h3 className={styles.subheadSm}>Certifications</h3>
        <ul className={styles.certs}>
          {CERTIFICATIONS.map((item) => (
            <li key={item.name} className={styles.certItem}>
              <span className={styles.certName}>{item.name}</span>
              <span className={styles.certDate}>{item.date}</span>
            </li>
          ))}
        </ul>

        <h3 className={styles.subheadSm}>Likes</h3>
        <ul className={styles.likes}>
          {LIKES.map((item) => (
            <li key={item} className={styles.likeItem}>{item}</li>
          ))}
        </ul>
      </section>

      <section id="contact" className={styles.contact}>
        <h2 className={styles.sectionTitle}>Contact</h2>
        <dl className={styles.contactList}>
          <div>
            <dt>email</dt>
            <dd>
              <a href="mailto:ishizunarumi@gmail.com">ishizunarumi@gmail.com</a>
            </dd>
          </div>
        </dl>
      </section>
      </div>
    </>
  )
}
