import { useEffect, useState } from "react"

function App() {
  const [apiData, setApiData] = useState()

  console.log('==> apiData: ', apiData)

  function fetchData() {
    console.log('IN fetchData')
    fetch('https://6a146e4f6c7db8aac054842f.mockapi.io/api/users')
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

  
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
    <h3>First React API app.</h3>
    {apiData ? 'algo' : 'nada'}
    <p>{JSON.stringify(apiData)}</p>
    </>
  )
}

export default App
