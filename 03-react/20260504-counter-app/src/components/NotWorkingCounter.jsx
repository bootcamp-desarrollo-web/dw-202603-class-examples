function NotWorkingCounter() {
  let counter = 1

  function onBtnClick() {
    // Al modificar el valor de la variable React NO vuelve a renderizar este componente
    counter = counter + 1
    console.log('[onBtnClick]: ', counter)
  }

  return (
    <>
    <button onClick={onBtnClick} className="not-working-btn">{counter}</button>
    </>
  )
}

export default NotWorkingCounter
