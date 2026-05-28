/**
 * En este fichero se muestra cómo se puede crear un nuevo registro a través de la api.
 * Se puede usar este mismo fichero también para actualizar o eliminar registros,
 * siguiendo las indicaciones siguientes:
 * 
 * Manejo de Create / Update / Delete:
 * 1. En el campo 'method' hay que indicar el método que corresponde a la operación que queremos lanzar:
 *      Create - POST
 *      Update - PUT
 *      Delete - DELETE
 * 
 * 2. Para Update + Delete:
 *    Hay que indicar al final de la URL la id del registro que queremos actualizar/eliminar
 * 
 * 3. Para Create + Update:
 *    Hay que pasar EN FORMATO JSON el objeto que representa el registro que queremos crear/actualizar
 */

// URL de la API
const url = 'https://6a146e4f6c7db8aac054842f.mockapi.io/api/users'

// El nuevo registro que queremos enviar a la API
const newUser = {
    name: 'Amy Winehouse',
    avatar: '',
    email: 'amy_winehouse@gmail.com'
}

// Datos de la petición
const requestData = {
    method: 'POST', // Crear un nuevo registro
    body: JSON.stringify(newUser),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
}

// La llamada 'fetch' devuelve un objeto de promesa, que se maneja con 'then' o con 'catch'
fetch(url, requestData)
    .then((response) => {
        console.log(response)

        if (!response.ok) {
            throw new Error('An error occured: ' + response.status)
        }

        return response.json()
    })
    .then((data) => {
        console.log('**** data:', data)

    })
    .catch((err) => {
        console.log('[ERROR] ', err)

    })
