import { Link } from "react-router";

export function Header() {
    return (<header>
        <Link to="/works">works</Link>
        <Link to="/about">about</Link>
        <Link to="/contact">contact</Link>
        <Link to="/">home</Link>
    </header>
    )
}

