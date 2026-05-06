import photosArr from "./data/photos"

function App() {
  return (
    <>
    <div className="container">
      { photosArr.map((el, idx) => {
        return (
          <div key={idx} className="item">
            <img src={el.src} alt="" />
          </div>
        )
      })}
    </div>
    </>
  )
}

export default App
