import { useEffect } from "react"
import { Link, useParams } from "react-router"
import { FloatingNav } from "../components/FloatingNav"
import { works } from "../data/works"
import { ToolIcon } from "../components/ToolIcon"
import styles from "./Workdeteil.module.css";

function getEmbedUrl(url: string) {
    const id = url.split("youtu.be/")[1]?.split("?")[0];
    return `https://www.youtube.com/embed/${id}`;
}

export function WorkDeteil() {
    const { workId } = useParams()
    const index = works.findIndex((w) => w.id === Number(workId))
    const work = works[index]
    const next = works.length > 1 ? works[(index + 1) % works.length] : undefined

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [workId])

    if (!work) return <div>作品が見つかりません</div>
    return (
        <>
            <FloatingNav onHome={false} current="works" />
            {work.images.map((img, index) => (
                <img key={index} src={img} className={styles.img} />
            ))}
            {work.videoUrl && (
                <iframe
                    src={getEmbedUrl(work.videoUrl)}
                    className={styles.video}
                    allowFullScreen
                />
            )}
            <p className={styles.title}>{work.title}</p>
            <p className={styles.date}>{work.description}</p>
            {(work.detail || work.role) && <p className={styles.role}>{work.detail || work.role}</p>}

            {work.tools.length > 0 && (
                <div className={styles.tools}>
                    <p className={styles.toolsLabel}>Tools</p>
                    <ul className={styles.toolsList}>
                        {work.tools.map((tool) => (
                            <li key={tool}>
                                <ToolIcon name={tool} size="sm" />
                            </li>
                        ))}
                    </ul>
                </div>
            )}

<table className={styles.creditTable}>
    <tbody>
{work.credits.map((credit, index) => {
    const [role, ...rest] = credit.split(': ');
    return (
        <tr key={index}>
            <td className={styles.creditRole}>{role}</td>
            <td className={styles.creditName}>{rest.join(': ')}</td>
        </tr>
    );
})}
    </tbody>
</table>

            <nav className={styles.pager} aria-label="作品ナビゲーション">
                <Link className={styles.backButton} to={{ pathname: "/", hash: `#work-${work.id}` }}>
                    Back to Works
                </Link>
                {next && (
                    <Link className={styles.nextLink} to={`/works/${next.id}`}>
                        <span className={styles.nextLabel}>Next Work</span>
                        <span className={styles.nextTitle}>{next.title}</span>
                    </Link>
                )}
            </nav>
        </>
    )
}