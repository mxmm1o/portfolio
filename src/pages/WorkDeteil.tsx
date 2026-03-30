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
            <p className={styles.text}>{work.title}</p>
            <p className={styles.text}>{work.description}</p>
            {work.credits.map((credit, index) => (  
                <p key={index} className={styles.credit}>{credit}</p>
            ))}
        </>
    )
}