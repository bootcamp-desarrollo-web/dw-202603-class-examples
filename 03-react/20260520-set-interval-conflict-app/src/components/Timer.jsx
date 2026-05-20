import { useEffect, useState } from "react"

function Timer() {
    const [seconds, setSeconds] = useState(1)

    // Esta función incrementa el contador de segundos en 1
    function incrementSeconds() {
        setSeconds((s) => { return s+1 })
    }

    // Esta función inicia un intervalo que llama a la función 'incrementSeconds' cada segundo
    function initTimer() {
       setInterval(incrementSeconds, 1000) 
    }

    // ************************ ¡¡¡CUIDADO!!! ************************************
    // Esta línea es la que genera la fuga de memoria (duplicando los intervalos).
    // Intenta descomentarla, observa (rápidamente) qué ocurre en el navegador,
    // y cierra la pestaña.
    // useEffect(() => { setInterval(incrementSeconds, 1000) }, [])
    // ************************ ¡¡¡CUIDADO!!! ************************************

    // ************************** Aquí está la solución *********************************
    // useEffect, siendo el segundo parámetro un array vacío, se llama una única vez 
    // cuandio se monta el componente por primera vez.
    // A cambio de lo anterior, NO se vuelve a llamar cuando se actualiza el componente
    // por la actualización de la variable 'seconds'
    useEffect(initTimer, [])
    // ************************** Aquí está la solución *********************************

    return (
        <>
        <h1>Timer: {seconds}</h1>
        </>
    )
}

export default Timer