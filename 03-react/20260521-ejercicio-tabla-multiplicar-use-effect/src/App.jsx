import { useEffect, useState } from "react"

function App() {
  const [baseNumber, setBaseNumber] = useState(1)

  useEffect(() => {
    document.title = 'Mult.' + baseNumber
  }, [baseNumber])

  return (
    <>
    <h1>Tabla de Multiplicar</h1>
    <button onClick={() => { setBaseNumber((val) => { return val - 1 } )}}>-</button>
    <span> ... {baseNumber} ... </span>
    <button onClick={() => { setBaseNumber(val => val + 1 )}}>+</button>
    <hr />
    {baseNumber} x 1 = {baseNumber * 1} <br />
    {baseNumber} x 2 = {baseNumber * 2} <br />
    {baseNumber} x 3 = {baseNumber * 3} <br />
    {baseNumber} x 4 = {baseNumber * 4} <br />
    </>
  )
}

export default App
