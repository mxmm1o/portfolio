import styles from "./style.module.css";

type Props = {
    date: string;
    age: number;
    title: string;
    body: string;
}

export function TimelineCard({ date, age, title, body }: Props) {
    return (
        <div className={styles.card}>
            <div className={styles.cardLeft}>
                <p className={styles.cardDate}>{date}</p>
                <p className={styles.cardAge}>{age}歳</p>
            </div>
            <div className={styles.cardRight}>
                <p className={styles.cardTitle}>{title}</p>
                <p className={styles.cardBody}>{body}</p>
            </div>
        </div>
    );
}
