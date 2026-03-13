type PropsType = {
    src: string;
}
export function Googlemap(props: PropsType) {
    return <iframe
        src={props.src}
        width="100%"
        height="200"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
    />
}

