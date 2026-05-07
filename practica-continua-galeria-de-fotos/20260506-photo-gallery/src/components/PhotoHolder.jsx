function PhotoHolder({imgObj, onImgClickCallback}) {
  return (
    <div className="item" onClick={ (e) => {onImgClickCallback(imgObj)} }>
        <img src={imgObj.src} alt="" />
    </div>
  )
}

export default PhotoHolder
