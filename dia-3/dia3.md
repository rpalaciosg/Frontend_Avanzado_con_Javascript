# Día 3 - Maquetando nuestra web

Vamos a centrarnos en maquetar y darle un poco de funcionalidad a nuestra web de tvmaze: 
    [] ver como hacer peticiones desde el browser a una api pública.
    [] como renderizar esas peticiones.
    [] poner en pràctica el manejo de UI con js, modificando el navbar, completando el formulario para buscar, 
    [] y si nos dà tiempo podemos ver local storage
    [] o como enrutar nuestra app con vanilla js y para esto usaremos page.js

- En el dìa 3 arreglo el esquema de directorios del Ejercicio `TVMaze`.

Estuvimos viendo como manejra el DOM, viendo los selectores, para elegir los elementos del DOM, recordar el querySelector, cuando se usaba con `#` es apra seleccionar por `id's` y cuando usamos `.clase` es para seleccionar por clases. Tenemos tambien el querySelectorALL que podemos usar para seleccionar varios elementos del DOM que tengan una clase especìfica por ejemplo.
```js
document.querySelector('#por-id');
document.querySelector('.por-clase);
doucment.querySelectorALL('.por-clases')
```

- Tambien vimos como manjerar eventos, tenemos que localizzar el evento del dom.
- Vimos como modificar las clases de html con .toggle
- vimos las partes del textContent y innerText
- Y vimos las sandbox y la diferencia el espacio que deja cada uno.
- Vimos eventos del input, el `keyup` y el `jeydown`.
- Vimos lo del bubbling, que hacia que se propaguen los eventos, y si queriamos evitar eso usamos el stopPropagation que es parte del objeto evento.
- hicimos un repaso de callbacks, pasamos a promesas, async/await.
- Vimos la forma de crear elementos con el `appendChild`
- Vimos tambien la parte de validaciòn de formularios, y usamos el preventDefault() porque en un formulario si no lo gestionamos con javascript por debajo lo que va hacer por ejemplo es hacer un get y pone los input con sus names en la url y si le ponemos un `post` lo que harà es un post al servidor, eso seria serverside rendering, entonces el servidor harìa sus operaciones de bases de datos lo que sea, devolverìa alguna info que se mandarìa en un template y se mostrarìa en el UI, esa es una forma de hacerlo pero no es la manera que lo haremos en el curso que es mas clientside, tendriamos un formulario que lo que hace es una peticiòn set.
- ¿Que es backend?, en la parte clientside haremos una peticiòn desde el frontend y no al servidor para que el servidor vuelva a renderizar todo el html, eso es lo que llaman el concepto de AJAX.

## Validaciòn de formularios
Lo que no estaba funcionando es la validacion de formulario es el `evt.target.checkValidity()` y vamos tambien a añadir un selec() con varios options, y tambien otra condicion que no sea solo require en un input, para ver el objeto `validity.valid` que nos devolverìa las claves de true o false de si es vàlido o nò.
