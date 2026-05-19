# Tarea - contador global

La aplicación inicial tiene el componente `App.jsx` y dentro 4 elementos del componente `Counter.jsx`.  
El componente `Counter.jsx` es un contador independiente que contiene un botón, y dentro de él un contador que se incrementa cada vez que se clica el botón.

## La tarea:
Añadir a `App.jsx` un contador global que se incremente **cada vez que se incrementa uno de los contadores**.  

**¡Importante!**  
Hay que usar contexto, no propiedades.

## Pasos:
1. Crear un fichero para el contexto (`contexts/GlobalCounterContext.jsx`)

2. En `App.jsx`:  
  2.1 Añadir un state para el contador global + mostrarlo en el html  
  2.2 Añadir un proveedor de contexto que envuelva los hijos (`Counter`) - ¿qué hay que pasar en `value`?  

3. En `Counter.jsx` consumir el contexto, y usar la función `set` para incrementar el contador global.
