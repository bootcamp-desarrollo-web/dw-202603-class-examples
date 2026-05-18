import { Link, Outlet } from "react-router-dom"

function App() {
  

  return (
    <>
      <h1>La familia Simson</h1>

      <nav>
        <Link to='homer-simpson'>Homer</Link>
        <Link to='marge-simpson'>Marge</Link>
        <Link to='lisa-simpson'>Lisa</Link>
        <Link to='bart-simpson'>Bart</Link>
      </nav>

      <Outlet />
    </>
  )
}

export default App
