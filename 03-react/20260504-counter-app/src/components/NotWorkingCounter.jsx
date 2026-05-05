function NotWorkingCounter() {
  // Imprimir a consola cuando se renderiza el componente
  console.log("Rendering NotWorkingCounter (hijo 1)...")

  let counter = 1

  function onBtnClick() {
    // Al modificar el valor de la variable React NO vuelve a renderizar este componente
    counter = counter + 1
    console.log('[NotWorkingCounter:onBtnClick]: ', counter)
  }

  return (
    <>
    <p>NotWorkingCounter</p>
    <button onClick={onBtnClick} className="not-working-btn">{counter}</button>
    </>
  )
}

export default NotWorkingCounter
