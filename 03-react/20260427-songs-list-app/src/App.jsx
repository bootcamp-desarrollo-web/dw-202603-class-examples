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
      <h1>Lista de mis canciones favoritas</h1>

      {/* Iteramos sobre la información de las canciones usando la función 'map' */}
      { songsData.map((songObj, idx) => {
        // Cada instancia de SongTicket requiere una key única.
        // idx es el índice dentro del array, también podríamos usar (más correcto cuando trabajamos con BBDD)
        // songObj.id, que es la id del objeto en la base de datos.
        return (
          <SongTicket
            key={idx} // Otra opción sería usar songObj.id
            songObj={songObj}
          />
        )
      }) }
    </>
  )
}

export default App
