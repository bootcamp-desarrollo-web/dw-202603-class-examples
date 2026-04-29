function SongTicket({songObj}) {

    // Esta función no espera a ningún parametro
    function sayHello() {
        alert('¡Hola!')
    }

    // Esta función recibe un evento
    function handleClick(e) {
        console.log(e)
    }

    // Esta función espera a un parametro - el nombre de la canción1
    function onLikeBtnClick(songName) {
        console.log('Evento: ', e)
        alert('Me gusta la canción ' + songName)
    }

    return (
        <div className="song-ticket">
            <b>Title:</b> {songObj.title} <br />
            <b>Author:</b> {songObj.author} <br />
            <b>Year:</b> {songObj.year} <br />
            <b>Video Url:</b> {songObj.videoUrl} <br />

            {/* El evento no necesita ningún parámetro */}
            <button onClick={sayHello}>Di hola</button>

            {/* El evento no necesita ningún parámetro */}
            <button onClick={handleClick}>Click here</button>

            {/* Para pasar un parámetro a la función del evento necesitamos usar una función flecha */}
            <button onClick={() => { onLikeBtnClick(songObj.title) }}>Me gusta</button>
        </div>
    )
}

// function SongTicket({title, author, year, videoUrl}) {
//     return (
//         <div className="song-ticket">
//             Title: {title} <br />
//             Author: {author} <br />
//             Year: {year} <br />
//             Video Url: {videoUrl} <br />
//         </div>
//     )
// }

// function SongTicket(props) {
//     return (
//         <div className="song-ticket">
//             Title: {props.title} <br />
//             Author: {props.author} <br />
//             Year: {props.year} <br />
//             Video Url: {props.videoUrl} <br />
//         </div>
//     )
// }

export default SongTicket