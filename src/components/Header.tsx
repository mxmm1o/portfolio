import { Link } from "react-router";
import styles from "./Header.module.css";

export function Header() {
    return (<header className={styles.header}>
        <Link to="/works">works</Link>
        <Link to="/about">about</Link>
        <Link to="/contact">contact</Link>
        <Link to="/">home</Link>
    </header>
    )
}

