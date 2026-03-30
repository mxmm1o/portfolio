import { Header } from "../components/Header";
import { useParams } from "react-router"
import { works } from "../data/works"
import styles from "./Workdeteil.module.css";

function getEmbedUrl(url: string) {
    const id = url.split("youtu.be/")[1]?.split("?")[0];
    return `https://www.youtube.com/embed/${id}`;
}

export function WorkDeteil() {
    const { workId } = useParams()
    const work = works.find((w) => w.id === Number(workId))
    if (!work) return <div>作品が見つかりません</div>
    return (
        <>
            <Header />
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
        </>
    )
}