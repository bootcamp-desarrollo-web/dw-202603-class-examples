import photosArr from "./data/photos"
import PhotoHolder from "./components/PhotoHolder"
import PhotoModal from "./components/PhotoModal"
import { useState } from "react";

function App() {
  let [showModal, setShowModal] = useState(false)
  let [selectedImgObj, setSelectedImgObj] = useState(null);

  // ================================================================
  // Esta callback se llama cuando el usuario selecciona una foto
  function onImgClick(imgObj) {
    console.log('[App:onImgClick]', imgObj)

    // 1. actualizar la variable que contiene la foto seleccionada
    //    (para mostrarla en el modal)
    setSelectedImgObj(imgObj)

    // 2. Mostrar el modal
    //    --> Esto no funciona: showModal = true
    setShowModal(true)
  }
  // ================================================================

  return (
    <>
    {/* Mostramos el modal según el valor de la variable showModal usando el operador ternario */}
    { showModal ? <PhotoModal imgObj={selectedImgObj} /> : null }

    <div className="container">
      { photosArr.map((el, idx) => {
        return <PhotoHolder key={idx} imgObj={el} onImgClickCallback={onImgClick} />
      })}
    </div>
    </>
  )
}

export default App
