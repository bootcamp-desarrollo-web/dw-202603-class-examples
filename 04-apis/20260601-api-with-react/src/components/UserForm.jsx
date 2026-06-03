import { useState } from "react"

function UserForm({apiUrl, addUserCallback}) {

    // Esta variable se usa para 
    const [submittingForm, setSubmittingForm] = useState(false)
    
    // Función que se ejecuta cuando se envía el formulario
    function handleSubmit(ev) {
        // Evita que la página recargue al enviar el formulario
        ev.preventDefault()
        console.log('[handleSubmit]')

        // Se crea un objeto con los valores introducidos en el formulario
        const newUser = {
            name: ev.target.name.value.trim(),
            email: ev.target.email.value.trim(),
            avatar: ev.target.avatar.value.trim()
        }

        // Validación simple (y naive) de los campos
        if (newUser.name === '' || newUser.email === '') {
            alert('Campos name/email son obligatorios')
            return
        }

        // Configuración de la petición POST para enviar el nuevo usuario
        const requestData = {
            method: 'POST', // Crear un nuevo registro
            body: JSON.stringify(newUser), // Convertimos el objeto a JSON
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }

        // Deshabilitar el formulario
        setSubmittingForm(true)

        // Enviamos los datos al servidor usando fetch        
        fetch(apiUrl, requestData)
            .then(response => {
                if (response.ok) {
                    // Si la respuesta es correcta, convertimos a JSON                    
                    return response.json()

                } else {
                    // Si hay error, lanzamos un mensaje con el código de estado                    
                    throw new Error(`Status code ${response.status}`)
                }
            })
            .then(data => {
                // Llamamos al callback para añadir el usuario en el componente padre                
                addUserCallback(data)
            })
            .catch(err => {
                // Captura de errores en la petición                
                console.error(`[ERROR] ${err}`)
            })
            .finally(() => {
                // Volver a habilitar el formulario
                setSubmittingForm(false)
            })
    }

    return (
        <div className="user-form">
            <form
                onSubmit={handleSubmit}
            >
                <label>Username:
                    <input type="text" name="name"
                        placeholder="Nombre de usuario"
                        autoComplete="off"
                        disabled={submittingForm}
                    />
                </label>
                
                <label>email:
                    <input type="text" name="email"
                        placeholder="Correo electrónico"
                        autoComplete="off"
                        disabled={submittingForm}
                    />
                </label>

                <label>avatar:
                    <input type="text" name="avatar"
                        placeholder="URL del avatar"
                        autoComplete="off"
                        disabled={submittingForm}
                    />
                </label>

                <button type="submit" disabled={submittingForm}>
                    Enviar
                </button>
            </form>
        </div>
    )
}

export default UserForm