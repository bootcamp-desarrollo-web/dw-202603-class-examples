import Button from "./components/Button"
import buttonsList from "./data/buttonsList"

function App() {
  return (
    <div className="container">
      { buttonsList.map((el, idx) => {
        return (
          <Button key={idx} btnData={el} />
        )
      }) }
    </div>
  )
}

export default App
