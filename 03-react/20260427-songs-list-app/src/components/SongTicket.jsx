function SongTicket({songObj}) {
    return (
        <div className="song-ticket">
            <b>Title:</b> {songObj.title} <br />
            <b>Author:</b> {songObj.author} <br />
            <b>Year:</b> {songObj.year} <br />
            <b>Video Url:</b> {songObj.videoUrl} <br />
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