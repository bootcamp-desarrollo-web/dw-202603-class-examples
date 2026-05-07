import photosArr from "./data/photos"
import PhotoHolder from "./components/PhotoHolder"

function App() {
  function onImgClick(imgObj) {
    console.log('[App:onImgClick]', imgObj)
  }

  return (
    <>
    <div className="container">
      { photosArr.map((el, idx) => {
        return <PhotoHolder key={idx} imgObj={el} onImgClickCallback={onImgClick} />
      })}
    </div>
    </>
  )
}

export default App
