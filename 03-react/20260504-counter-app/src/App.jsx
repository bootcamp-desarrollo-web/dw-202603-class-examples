import { useState } from "react"

import NotWorkingCounter from "./components/NotWorkingCounter"
import WorkingCounter from "./components/WorkingCounter"

function App() {
  // Imprimir a consola cuando se renderiza el componente
  console.log("Rendering App (padre)...")

  return (
    <>
    <h1>Contador</h1>
    <h2>¡Abre la consola de desarrollador para revisar lo que ocurre!</h2>
    <div className="box">
      <NotWorkingCounter />
    </div>

    <div className="box">
      <WorkingCounter />
    </div>

    </>
  )
}

export default App
