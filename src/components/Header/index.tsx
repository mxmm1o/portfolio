import { useState } from "react";
import { MenuOverlay } from "../MenuOverlay/index";
import styles from "./style.module.css";
export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = (): void => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <header className={styles.header}>
                <button className={styles.menubutton} onClick={handleClick}>{isOpen ? "CLOSE" : "MENU"}</button>
            </header>
            <MenuOverlay isOpen={isOpen} />
        </>
    );
}


