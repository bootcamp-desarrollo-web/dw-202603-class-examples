import { useContext } from "react"
import { UserContext } from "../contexts/UserContext"

function ChildComponent() {
  const { username, setUsername, counter, setCounter } = useContext(UserContext)

  return (
    <>
      <h3>Componente hijo</h3>
      <p>username: {username}</p>
      <p>counter: {counter}</p>

      <button
        onClick={() => {
          setCounter(counter + 1), setUsername("John Doe " + counter)
        }}
      >
        Click
      </button>
    </>
  );
}

export default ChildComponent;
