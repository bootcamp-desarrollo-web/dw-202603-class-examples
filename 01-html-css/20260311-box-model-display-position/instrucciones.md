# Modelo de caja
Crea un `<div>` con:
- un ancho de 200px
- padding de 10px
- borde de 3px sólido rojo
- margen de 20px
- fondo amarillo (hexadecimal)

# Layout
Crea 4 divs 300x300 en la misma línea
 - 4 divs 300x300 en la misma línea
 - Texto largo en los 4
 - En cada uno otro overflow:  visible, hidden, scroll, auto

# Modelo de caja + layout
Tu objetivo es crear un recuadro con título y texto recortado.

1. Crea un `<div>` con clase caja que tenga:
    - un ancho de 220px
    - padding de 15px
    - margen de 20px
    - borde de 2px sólido (el color que quieras)
    - un fondo claro

2. Dentro del `<div>`, añade:
    - un `<span>` con clase titulo que diga "Título"
    - un `<p>` con clase texto que contenga un texto largo (3–4 frases)

3. Aplica a `.titulo`:
    - `display: block`
    - `font-weight: bold`
    - `margin-bottom: 10px`

4. Aplica a `.texto`:
    - una altura fija de 60px
    - `overflow: auto`
    - un borde de 1px
    - `padding: 5px`
    - un fondo blanco

# Posicionamiento
Crea dos cajas:
- La primera con `position: relative` desplazada 10px hacia abajo.
- La segunda con `position: absolute` colocada en la esquina superior derecha del documento.

# Ejercicio final
Crea una tarjeta como esta:
- Una caja principal con:
  - ancho fijo (por ejemplo, 250px)
  - padding, borde y margen visibles
  - fondo suave

- Dentro de la caja:
  - un título
  - un párrafo con texto largo y `overflow: auto`
  - un pequeño cuadrado decorativo colocado con `position: absolute`

- La caja principal debe tener `position: relative` para que el cuadrado se posicione dentro de ella.
