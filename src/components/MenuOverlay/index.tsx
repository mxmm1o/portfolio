import { Link } from "react-router";
import styles from "./style.module.css";

export function MenuOverlay({ isOpen }: { isOpen: boolean }) {

    return (
        <>

            <div className={`${styles.overlay} ${isOpen ? styles.overlayOpen : ""}`}>
                <ul>
                    <li><Link className={styles.button} to="/">HOME</Link></li>
                    <li><Link className={styles.button} to="/about">ABOUT</Link></li>
                    <li><a className={styles.button} href="mailto:ishizunarumi@gmail.com">EMAIL</a></li>
                    <li><a className={styles.button} href="https://github.com/mxmm1o">GITHUB</a></li>
                </ul>
            </div>

        </>
    );
}