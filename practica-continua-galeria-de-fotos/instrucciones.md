# Práctica contínua - galería de fotos

En esta práctica iremos desarrollando una galería de fotos, añadiendo diferentes funcionalidades.

## Paso 1 - estructura básica
Tu primera tarea es crear una estructura de cuadrados para mostrar las imágenes.
Las fotos tienen que aparecer dentro de un cuadrado de 200x200px, 4 fotos en línea, con un espacio de 25px entre ellas.
La distribución de los cuadrados debe adaptarse a la anchura de la pantalla.
Prueba con diferentes números de fotos (2, 4, 7, etc..)

Para reforzar los conceptos de diseño responsivo, comprueba jugar con:
* `justify-content` (center, space-between, space-around…)

* `align-items` (center, flex-start, flex-end)

* `flex-direction` (row, column)

* `flex-wrap` (wrap, nowrap)


## Paso 2 - añadir fotos estáticas
Incluye imágenes dentro de cada cuadrado.
Puedes usar el recurso `https://picsum.photos/<width>/<height>` para obtener enlaces de diferentes fotos.

Por ejemplo, el enlace https://picsum.photos/200/300 nos dará cada vez una imagen nueva con un enlace único (por ejemplo https://fastly.picsum.photos/id/110/200/300.jpg?hmac=IMeVMiaNHiAeyVJRyiLHVnYMW0UpSBDkkUtSO1gIidQ).  
Puedes hacer una de dos:
- guardar el enlace fijo (**permalink**) y usarlo dentreo del html
- guardar la imagen en tu ordenador y usar un enlace relativo


**¡Importante!**  
Procura de incluir imágenes en diferentes tamaños y orientacioes (cuadradas, horizontales, verticales).


### Pista para las fotos:
Para lograr que una foto rellene un cuadrado:
```
<div class="image-holder">
  <img src="foto.jpg" alt="">
</div>

.image-holder {
  width: 200px;
  height: 200px; /* cuadrado */
}

.image-holder img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* recorta sin deformar */
  object-position: center; /* centra el recorte */
}
```
