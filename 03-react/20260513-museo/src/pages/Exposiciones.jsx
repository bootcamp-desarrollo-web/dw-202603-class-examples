import { Link, Outlet } from "react-router-dom"

function Exposiciones() {
    return (
        <>
        <h1>Exposiciones</h1>

        <nav className="secondary">
            <Link to="permanentes">Permanentes</Link>
            <Link to="temporales">Temporales</Link>
            <Link to="infantiles">Infantiles</Link>
        </nav>

        <Outlet />
        </>
    )
}

export default Exposiciones
