import { Header } from "../components/Header";
import { useParams } from "react-router"
import { works } from "../data/works"
import styles from "./Workdeteil.module.css";




export function WorkDeteil() {
    const { workId } = useParams()
    const work = works.find((w) => w.id === Number(workId))
    if (!work) return <div>作品が見つかりません</div>
    return (
        <>
            <Header />
            <img src={work.image} className={styles.img} />
            <p className={styles.text}>{work.title}</p>
            <p className={styles.text}>{work.description}</p>

        </>
    )
}