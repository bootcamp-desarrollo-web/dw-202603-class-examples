import { useState } from "react"
import ChildComponent from "./components/ChildComponent"
import { UserContext } from "./contexts/UserContext"

function App() {
  console.log("****** Starting App component *****")

  const [username, setUsername] = useState("John Doe")
  const [counter, setCounter ] = useState(1)

  return (
    <>
      <h1>Ejemplo <code>useContext</code> </h1>
      username (padre): {username}

      <UserContext.Provider value={{ username, setUsername, counter, setCounter }}>
        <ChildComponent />
      </UserContext.Provider>
    </>
  )
}

export default App
