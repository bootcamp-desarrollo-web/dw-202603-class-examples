import { useState } from "react"
import ChildComponent from "./components/ChildComponent"
import { UserContext } from "./contexts/UserContext"

function App() {
  const [username, setUsername] = useState("John Doe")

  return (
    <>
      <h1>Ejemplo <code>useContext</code> </h1>
      username (padre): {username}

      <UserContext.Provider value={username}>
        <ChildComponent />
      </UserContext.Provider>

      <button onClick={() => { setUsername("John Doe 2") }}>Click</button>
    </>
  )
}

export default App
