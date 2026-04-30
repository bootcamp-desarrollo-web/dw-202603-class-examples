import Button from "./components/Button"
import buttonsList from "./data/buttonsList"

function App() {
  // Creamos una función (callback) para que el componente hijo la pueda llamar
  function onBtnClick(colorHex) {
    console.log("[App.jsx] Botton clicked: ", colorHex)
  }

  return (
    <div className="container">
      { buttonsList.map((el, idx) => {
        return (
          <Button key={idx}
              btnData={el}
              onBtnClickCallback={onBtnClick} // Aquí pasamos la función (callback) al hijo a través de la propiedad
          />
        )
      }) }
    </div>
  )
}

export default App
