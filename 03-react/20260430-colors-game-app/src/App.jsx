import Button from "./components/Button"

const btnsArray = [
  {
    title: 'Red',
    color: 'ff0000',
  },
  {
    title: 'Blue',
    color: '00ff00',
  },
  {
    title: 'Green',
    color: '0000ff',
  },
]

function App() {
  return (
    <div className="container">
      { btnsArray.map((el, idx) => {
        return (
          <Button key={idx} btnData={el} />
        )
      }) }
    </div>
  )
}

export default App
