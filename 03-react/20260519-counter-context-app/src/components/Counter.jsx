import { useState } from "react"

function Counter() {
  const [counter, setCounter] = useState(0)

  function onBtnClick() {
    let newCounter = counter + 1
    setCounter(newCounter)
  }

  return (
    <>
    <p>Counter</p>

    <button onClick={onBtnClick} className="working-btn">
        {counter}
    </button>
    </>
  )
}

export default Counter
