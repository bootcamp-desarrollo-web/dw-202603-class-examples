import './PhotoModal.css'

function PhotoModal({imgObj}) {
    return (
        <div className="overlay">
            <img src={imgObj.src} />
            <button className="close-btn">✕</button>
        </div>
    )
}

export default PhotoModal