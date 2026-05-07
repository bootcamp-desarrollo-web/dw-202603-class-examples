import photosArr from "./data/photos"
import PhotoHolder from "./components/PhotoHolder"
import PhotoModal from "./components/PhotoModal"

function App() {
  function onImgClick(imgObj) {
    console.log('[App:onImgClick]', imgObj)
  }

  return (
    <>
    <PhotoModal imgObj={photosArr[0]} />
    <div className="container">
      { photosArr.map((el, idx) => {
        return <PhotoHolder key={idx} imgObj={el} onImgClickCallback={onImgClick} />
      })}
    </div>
    </>
  )
}

export default App
