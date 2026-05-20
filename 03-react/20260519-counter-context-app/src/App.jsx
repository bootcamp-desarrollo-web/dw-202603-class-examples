import { useState } from "react"
import Counter from "./components/Counter"
import { GlobalCounterContext } from "./contexts/GlobalCounterContext"

function App() {
  const [globalCounter, setGlobalCounter] = useState(0)

  return (
    <>
    <h1>Global counter: {globalCounter}</h1>

    <GlobalCounterContext.Provider value={{globalCounter, setGlobalCounter}}>
      <div className="box">
        <Counter />
      </div>

      <div className="box">
        <Counter />
      </div>

      <div className="box">
        <Counter />
      </div>

      <div className="box">
        <Counter />
      </div>
    </GlobalCounterContext.Provider>
    </>
  )
}

export default App
