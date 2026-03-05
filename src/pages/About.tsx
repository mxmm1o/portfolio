import { Header } from "../components/Header";
import styles from "./about.module.css";
import photo from "../assets/IMG_7858.webp"

export function About() {
    return (
        <>

            <div className={styles.background}>
                <Header />
                <div className={styles.content}>
                    <div className={styles.photo}>
                        <img src={photo} className={styles.photo} alt="narmy" />
                    </div>
                    <div className={styles.text}>
                        <p> Narumi Ishizu 石津 成海</p>
                        <p>べんきょうがんばります</p>

                    </div>
                </div>
            </div >

        </>
    );
}