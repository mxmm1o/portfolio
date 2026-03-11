import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Link } from "react-router";
import styles from "./style.module.css";
export function MenuOverlay({ isOpen }) {
    return (_jsx(_Fragment, { children: _jsx("div", { className: `${styles.overlay} ${isOpen ? styles.overlayOpen : ""}`, children: _jsxs("ul", { children: [_jsx("li", { children: _jsx(Link, { className: styles.button, to: "/", children: "HOME" }) }), _jsx("li", { children: _jsx(Link, { className: styles.button, to: "/about", children: "ABOUT" }) }), _jsx("li", { children: _jsx("a", { className: styles.button, href: "mailto:ishizunarumi@gmail.com", children: "EMAIL" }) }), _jsx("li", { children: _jsx("a", { className: styles.button, href: "https://github.com/mxmm1o", children: "GITHUB" }) })] }) }) }));
}
