import Counter from "./components/Counter"

function App() {
  return (
    <>
    <h1>Global counter: 4</h1>
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
    </>
  )
}

export default App
