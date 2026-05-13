import { Link, Outlet } from "react-router-dom"

function App() {

  return (
    <>
    <h1>** HEADER **</h1>

    <nav>
      <Link to="/">Home</Link> | <Link to='/about'>About</Link>
    </nav>

    <hr />

    {/* Mostrar el contenido de los componentes hijos */}
    <Outlet />
    </>
  )
}

export default App
