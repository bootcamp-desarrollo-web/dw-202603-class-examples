import { useEffect, useState } from "react"
import UserTicket from "./components/UserTicket"
import UserForm from "./components/UserForm"

function App() {
  const [apiData, setApiData] = useState()
  const apiUrl = 'https://6a146e4f6c7db8aac054842f.mockapi.io/api/users'

  const [pageNumber, setPageNumber] = useState(1)

  // console.log('==> apiData: ', apiData)

  function fetchData() {
    console.log('IN fetchData')
    // En esta URL NO funciona la paginación, es sólo para ver como incorporarla dentro de useEffect
    const pageSpecificUrl = `${apiUrl}?page=${pageNumber}` // https://6a146e4f6c7db8aac054842f.mockapi.io/api/users?page=1
    fetch(pageSpecificUrl)
      .then(response => {
        if (response.ok) {
          return response.json()

        } else {
          throw new Error(`Status code ${response.status}`)
        }

      })
      .then(data => {
        console.log(data)
        setApiData(data)
      })
      .catch(err => {
        console.error(`[ERROR] ${err}`)
      })
  }

  // ============== ¡MUY IMPORTANTE! ============================
  // Si no usamos useEffect, ocurre lo siguiente:
  //  1. Se llama la función fetchData()
  //  2. Tras recibir los datos del servidor, se actualiza la variable apiData (que es una variable tipo state)
  //  3. Al actualizar la variable apiData se vuelve a renderizar el componente
  //  4. LO IMPORTANTE - sin no esta encapsulada dentro de useEffect, la función fetchData() se vuelve a llamar, y
  //                     volvemos al punto (2)
  
  // Si quisieramos que fetchData se llamara al actualizar una variable (por ejemplo pageNumber),
  // deberíamos meterla en la lista de dependencias
  useEffect(() => {
    fetchData()
  }, [pageNumber])
  
  // ============== ================ ============================

  function addUser(newUser) {
    console.log('[addUser]', newUser)

    // Volvemos a llamar a fetchData para cargar los datos del servidor.
    // Otra posibilidad sería agredar newUser al array apiData
    fetchData()
  }

  function renderUsers(apiData) {
    return apiData.map(userObj => {
      return <UserTicket key={userObj.id} userData={userObj} />
    })
  }

  // Cuando renderizamos por primera vez, apiData es undefined. Sólo cuando se vuelve de la promesa es un array.
  // Por esta razón es importante usar el operador ternario mostrando 'loading...' (o un gif por ejemplo)
  // Para el bucle de map, podemos usar como key la misma id de los elementos que nos ha devuelto la api
  return (
    <>
    <h3>First React API app.</h3>
    <UserForm apiUrl={apiUrl} addUserCallback={addUser}/>
    { apiData ? renderUsers(apiData) : 'Loading....' }

    <hr />
    <p>
      La paginación NO funciona por no tener la api preparada,
      sin embargo está aquí para ver cómo funciona useEffect()
      (puedes observar el efecto dentro de la pestaña Network de la consola de desarrollador)
    </p>
    <button onClick={() => { setPageNumber(1)}}>1</button>
    <button onClick={() => { setPageNumber(2)}}>2</button>
    <button onClick={() => { setPageNumber(3)}}>3</button>

    <p>Viendo página: {pageNumber}</p>
    </>
  )
}

export default App
