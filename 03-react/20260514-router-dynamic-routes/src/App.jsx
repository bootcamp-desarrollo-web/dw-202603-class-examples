import { Link, Outlet } from "react-router-dom"

function App() {
  

  return (
    <>
      <h1>La familia Simson</h1>

      <nav>
        <Link to='1'>Homer</Link>
        <Link to='2'>Marge</Link>
        <Link to='3'>Lisa</Link>
        <Link to='4'>Bart</Link>
      </nav>

      <Outlet />
    </>
  )
}

export default App
