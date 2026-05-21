import { useEffect, useState } from "react"

function Clock() {
  const [time, setTime] = useState(new Date())

  // Este console.log podría mostrar la fase de actualización del componente
  // console.log("Updating clock")

  useEffect(() => {
    console.log('[Clock] Mounting')

    // Crear un intervalo nuevo y asignar su ID a una variable
    const intervalId = setInterval(() => {
      console.log("Tick…")
      setTime(new Date())
    }, 1000)
    console.log('  -> setInterval ' + intervalId)

    // Esta función se llama cuando se desmonta el componente 
    // para ejecutar limpieza
    // Se cancela el interavlo creado anteriormente
    return () => {
      console.log('[Clock] Unmouting')
      console.log('  -> clearInterval ' + intervalId)
      clearInterval(intervalId)
    }

  }, []);

  return <h2 className="clock">{time.toLocaleTimeString()}</h2>
}

export default Clock;
