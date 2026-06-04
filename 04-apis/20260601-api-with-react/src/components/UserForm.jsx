import { useEffect, useState } from "react"

function UserForm({apiUrl, addUserCallback}) {

    // Esta variable se usa para 
    const [submittingForm, setSubmittingForm] = useState(false)

    // Una constante que contiene el objeto de un usuario vacío
    const initUserData = {
        name: '',
        email: '',
        avatar: ''
    }

    // Los datos que se van a usar en el formulario
    const [userData, setUserData] = useState(initUserData)
    
    // Función que se ejecuta cuando se envía el formulario
    function handleSubmit(ev) {
        // Evita que la página recargue al enviar el formulario
        ev.preventDefault()
        console.log('[handleSubmit]')

        // Se crea un objeto con los valores introducidos en el formulario
        const newUser = {
            name: userData.name.trim(),
            email: userData.email.trim(),
            avatar: userData.avatar.trim()
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

                // Limpiamos los campos del formulario
                setUserData(initUserData)
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

    function handleChange(e) {
        let currentPropName = e.target.name
        let currentPropValue = e.target.value

        setUserData((prev) => {
            let currentUserData = ({ ...prev, [currentPropName]: currentPropValue})

            // Guardar en el localStorage los datos del formulario
            localStorage.setItem('currentUserData', JSON.stringify(currentUserData))

            return currentUserData
        })
    }

    useEffect(() => {
        // Recuperar del localStorage los datos del formulario
        let currentUserData = JSON.parse(localStorage.getItem('currentUserData'))
        console.log(currentUserData)

        if (currentUserData) {
            setUserData(currentUserData)
        }
        
    }, [])

    return (
        <div className="user-form">
            {/* <pre>{JSON.stringify(userData)}</pre> */}
            <form
                onSubmit={handleSubmit}
            >
                <label>Username:
                    <input type="text" name="name"
                        placeholder="Nombre de usuario"
                        autoComplete="off"
                        disabled={submittingForm}
                        value={userData.name}
                        onChange={handleChange}
                    />
                </label>
                
                <label>email:
                    <input type="text" name="email"
                        placeholder="Correo electrónico"
                        autoComplete="off"
                        disabled={submittingForm}
                        value={userData.email}
                        onChange={handleChange}
                    />
                </label>

                <label>avatar:
                    <input type="text" name="avatar"
                        placeholder="URL del avatar"
                        autoComplete="off"
                        disabled={submittingForm}
                        value={userData.avatar}
                        onChange={handleChange}
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