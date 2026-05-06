// import Welcome from "./components/Welcome1"
// import Welcome from "./components/Welcome2"
import Welcome from "./components/Welcome3"

function App() {
  const users = [
    {
      name: 'John',
      gender: 'M'
    },
    {
      name: 'Diana',
      gender: 'F'
    },
    {
      name: 'Fernanda',
      gender: 'F'
    },
    {
      name: 'Lucas',
      gender: 'M'
    },
    {
      name: 'R2D2',
      gender: ''
    }
  ]

  return (
    <>
    { users.map((el, idx) => {
      return <Welcome key={idx} user={el} />
    }) }
    </>
  )
}

export default App
