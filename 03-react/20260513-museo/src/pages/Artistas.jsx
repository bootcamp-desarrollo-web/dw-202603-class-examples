import { Link, Outlet } from "react-router-dom"

function Artistas() {
    return (
        <>
        <h1>Artistas</h1>

        <nav className="secondary">
            <Link to="van-gogh">Van Gogh</Link>
            <Link to="frida-kahlo">Frida Kahlo</Link>
            <Link to="picasso">Picasso</Link>
        </nav>

        <Outlet />
        </>
    )
}

export default Artistas
