import { Link, Outlet } from "react-router-dom"

function About() {
    return (
        <>
        <h1>About</h1>

        <nav>
            <Link to="alonso">Alonso</Link> | <Link to="beatriz">Beatriz</Link> | <Link to="carlos">Carlos</Link>
        </nav>

        <Outlet />
        </>
    )
}

export default About