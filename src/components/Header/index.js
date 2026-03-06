import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { MenuOverlay } from "../MenuOverlay/index";
import styles from "./style.module.css";
import { Link } from "react-router";
export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen(!isOpen);
    };
    return (_jsxs(_Fragment, { children: [_jsxs("header", { className: styles.header, children: [_jsx(Link, { className: styles.name, to: "/", children: "Narumi Ishizu" }), _jsx("button", { className: styles.menubutton, onClick: handleClick, children: isOpen ? "CLOSE" : "MENU" })] }), _jsx(MenuOverlay, { isOpen: isOpen })] }));
}
