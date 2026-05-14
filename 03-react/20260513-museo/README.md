# Routing - página de museo

Tu misión es crear una estructura de páginas para un museo.  
El menú es el siguiente:

```
Inicio			    /
Exposiciones		/exposiciones
  Permanentes		/exposiciones/permanentes
  Temporales		/exposiciones/temporales
  Infantiles		/exposiciones/infantiles
Artistas		    /artistas
  Van Gogh		  /artistas/van-Gogh
  Frida Kahlo		/artistas/frida-kahlo
  Picasso		    /artistas/picasso
Contacto        /contacto
```

Tanto la página de exposición como de artista reciben una id del elemento a mostrar.
El menú de segundo nivel (exposición/artista concretos) tienen que aparecer dentro de la página relevante
(por ejemplo, una vez entrando a exposiciones, aparece un sub-menú)

En cada una de las URLs tiene que aparecer un título que corresponda a la URL (por ejemplo Inicio, Exposiciones Infantiles, Frida Kahlo, etc.)