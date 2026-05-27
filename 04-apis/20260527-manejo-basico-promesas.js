console.log('¡Comenzamos!')

fetch('https://6a146e4f6c7db8aac054842f.mockapi.io/api/users')
    .then((response) => {
        console.log('¡Tengo la respuesta!')
        // status más comunes:
        // 200 - OK
        // 404 - not found
        // 500 - Server Error

        if (response.status === 200) {
            // Manejamos la respuesta
            console.log(response)

            // Este return devuelve 
            return response.json()

        } else {
            console.log(`Error: ${response.statusText} (${response.status})`)
        }
    })
    .then((data) => {
        console.log('-------------------------------------')
        console.log(data)
    })

console.log('--- Fin ---')