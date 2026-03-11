import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from "../Workcard/style.module.css";
import { Link } from "react-router";
export function Workcard(props) {
    return (_jsx(Link, { to: `/works/${props.id}`, className: styles.link, children: _jsxs("div", { className: styles.card, children: [_jsx("img", { src: props.image, className: styles.img }), _jsx("div", { className: styles.overlay, children: _jsx("p", { children: props.title }) })] }) }, props.id));
}
