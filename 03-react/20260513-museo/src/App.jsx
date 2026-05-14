import { Link, Outlet } from "react-router-dom"

function App() {

  return (
    <>
    <h1>Página del museo</h1>

    <nav className="primary">
      <Link to="">Inicio</Link>
      <Link to="exposiciones">Exposiciones</Link>
      <Link to="artistas">Artistas</Link>
      <Link to="contacto">Contacto</Link>
    </nav>

    <Outlet />
    </>

  )
}

export default App
