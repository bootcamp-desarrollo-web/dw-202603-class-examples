import { useState } from "react"
import { GlobalCounterContext } from "../contexts/GlobalCounterContext"
import { useContext } from "react"

function Counter() {
  const [counter, setCounter] = useState(0)

  const {globalCounter, setGlobalCounter} = useContext(GlobalCounterContext)

  function onBtnClick() {
    let newCounter = counter + 1
    setCounter(newCounter)

    let newGlobalCounter = globalCounter + 1
    setGlobalCounter(newGlobalCounter)
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
