import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Header } from '../components/Header';
import styles from "./Home.module.css";
import { works } from "../data/works";
import { Workcard } from "../components/Workcard";
export function Home() {
    return (_jsxs(_Fragment, { children: [_jsx(Header, {}), _jsx("div", { className: styles.grid, children: works.map((work) => (_jsx(Workcard, { id: work.id, title: work.title, image: work.image, description: work.description }, work.id))) })] }));
}
