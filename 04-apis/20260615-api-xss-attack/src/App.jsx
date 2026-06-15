import { useState } from "react"

function App() {
  const apiUrl = 'http://localhost:5173/api/'
  const [apiResponse, setApiResponse] = useState('')

  async function getApiResponse(fileName) {
    const response = await fetch(apiUrl + fileName)
    const htmlResult = await response.text()
    console.log(htmlResult)
    setApiResponse(htmlResult)
  }

  return (
    <>
    <h1>Mostrando respuesta de la API</h1>
    <p>
      Este ejemplo muestra el riesgo de usar <code>dangerouslySetInnerHTML</code> dentro de React,
      y la volnerabilidad ante <a href="https://es.wikipedia.org/wiki/Cross-site_scripting" target="_blank">ataque XSS</a>
    </p>

    <h3>Cargar HTML:</h3>
    <button onClick={() => {getApiResponse('safeHtml.txt')}}>seguro</button>
    <button onClick={() => {getApiResponse('maliciousHtml.txt')}}>malicioso</button>
    <div
      style={{ border: "1px solid black", padding: 10, margin: 10}}
      dangerouslySetInnerHTML={{ __html: apiResponse }}
    />

    <pre style={{ border: "1px solid black", padding: 10, margin: 10}}>
      {apiResponse}

    </pre>
    </>
  )
}

export default App
