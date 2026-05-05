import { useState } from "react"
import Button from "./components/Button"
import buttonsList from "./data/buttonsListPastel"

function App() {
  const [bgColor, setbgColor] = useState('123456')

  // Creamos una función (callback) para que el componente hijo la pueda llamar
  function onBtnClick(colorHex) {
    console.log("[App.jsx] Botton clicked: ", colorHex)
    setbgColor(colorHex)
  }

  return (
    <div className="container" style={{backgroundColor:bgColor}}>
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
