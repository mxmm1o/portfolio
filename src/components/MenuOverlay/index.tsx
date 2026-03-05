import styles from "./style.module.css";

export function MenuOverlay({ isOpen }: { isOpen: boolean }) {

    return (
        <>
            {isOpen &&
                <div className={styles.overlay}>
                    <ul>
                        <li><a className={styles.button} href="/">HOME</a></li>
                        <li><a className={styles.button} href="/">ABOUT</a></li>
                        <li><a className={styles.button} href="/">EMAIL</a></li>
                        <li><a className={styles.button} href="/">GITHUB</a></li>
                    </ul>
                </div>
            }
        </>
    );
}