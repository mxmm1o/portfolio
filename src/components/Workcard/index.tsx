import styles from "../Workcard/style.module.css"
import { Link } from "react-router"

type PropsType = {
    id: number;
    image: string;
    description: string;
    title: string;

}

export function Workcard(props: PropsType) {
    return (<Link key={props.id} to={`/works/${props.id}`} className={styles.link}>
        <div className={styles.card}>
            <img src={props.image} className={styles.img} />
            <div className={styles.overlay}>
                <p>{props.title}</p>
            </div>
        </div>
    </Link>)
}
