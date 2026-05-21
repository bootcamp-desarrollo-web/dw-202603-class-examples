import Timer from "./components/Timer"
import Clock from "./components/Clock"
import { useEffect, useState } from "react"

function App() {
  const [showClock, setShowClock] = useState(true)

  return (
    <>
    <button onClick={ () => { setShowClock(!showClock) } }>
      { showClock ? 'Hide' : 'Show' }
    </button>

    { showClock ? <Clock /> : null }
    </>
  )
}

export default App
