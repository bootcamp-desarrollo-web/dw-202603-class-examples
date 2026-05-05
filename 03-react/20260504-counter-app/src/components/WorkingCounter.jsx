import { useState } from "react"

function WorkingCounter() {
  // Imprimir a consola cuando se renderiza el componente
  console.log("Rendering WorkingCounter (hijo 2)...")
  
  // useState devuelve:
  // - la variable PARA MOSTRAR
  // - una función PARA MODIFICAR
  const [counter, setCounter] = useState(1)

  function onBtnClick() {
    let newCounter = counter + 1
    
    // Al usar la función que nos ha devuelto useState, ocurren dos cosas:
    //  1. El valor de la variable se actualiza
    //  2. React vuelve a renderizar ESTE componente
    setCounter(newCounter)

    console.log('[WorkingCounter:onBtnClick]: ', newCounter)
  }

  return (
    <>
    <p>WorkingCounter</p>
    <button onClick={onBtnClick} className="working-btn">{counter}</button>
    </>
  )
}

export default WorkingCounter
