import { jsx as _jsx } from "react/jsx-runtime";
export function Googlemap(props) {
    return _jsx("iframe", { src: props.src, width: "500", height: "500", style: { border: 0 }, allowFullScreen: true, loading: "lazy", referrerPolicy: "no-referrer-when-downgrade" });
}
