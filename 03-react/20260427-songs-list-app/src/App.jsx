import SongTicket from "./components/SongTicket"
import songsData from "./data/songs"

function App() {
  /************************************************************************ */
  // Para comprobar que hemos logrado importar los datos de las canciones,
  // imprimimos la lista a consola

  // Opción 1 - bucle for con índice
  // for (let idx = 0; idx < songsData.length; idx++) {
  //   let currentSong = songsData[idx]
  //   console.log('song: ', currentSong)
  // }

  // Opción 2 - bucle for usando 'of'
  // for (let currentSong of songsData) {
  //   console.log('song: ', currentSong)
  // }
  /************************************************************************ */

  return (
    <>
      <h1>Hello World</h1>

      {/* Iteramos sobre la información de las canciones usando la función 'map' */}
      { songsData.map((songObj) => {
        return (
        <SongTicket
          author={songObj.author}
          title={songObj.title}
          year={songObj.year}
          videoUrl={songObj.videoUrl}
        />          
        )
      }) }
    </>
  )
}

export default App
