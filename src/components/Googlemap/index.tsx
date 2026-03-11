type PropsType = {
    src: string;
}
export function Googlemap(props: PropsType) {
    return <iframe
        src={props.src}
        width="500"
        height="500"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
    />
}

