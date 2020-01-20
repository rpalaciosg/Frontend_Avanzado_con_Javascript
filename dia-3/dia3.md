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
Lo que no estaba funcionando es la validación de formulario es el `evt.target.checkValidity()` y vamos tambien a añadir un selec() con varios options, y tambien otra condición que no sea solo require en un input, para ver el objeto `validity.valid` que nos devolvería las claves de true o false de si es vàlido o nò.

### checkValidity()
Lo que hace es hacer una validación del formulario.
¿En que sentido y como la hace? -> Si tiene màs inputs y almeos uno de llos no cumple las validaciones que hemos definido en este caso el `required` el `checkCalidity()' va a devolver un `false` o un `true` en caso de que sean exitosas.

```html
form class="form" id="form" novalidate>
    <div class="group-input>
      <label for="name">Name: </label>
      <input id="name" name="name" type="text" required data-error="Error en el input">
      <span class="error"></span>
      <span class="error"></span>
      <span class="error"></span>
      <span class="error"></span>
      <span class="error"></span>
      <span class="error"></span>
    </div>
    <button type="submit">submit</button>
  </form>
```

Es decir si copi el input que habia puesto y en vez de `name` le llamo 'surname:'  

```html
  <form class="form" id="form" novalidate>
    <div class="group-input>
      <label for="name">Name: </label>
      <input id="name" required name="name" type="text"  data-error="Error en el input">
      <span class="error"></span>
      <span class="error"></span>
      <span class="error"></span>
      <span class="error"></span>
      <span class="error"></span>
      <span class="error"></span>
    </div>
    <div class="group-input>
      <label for="surname">Surname: </label>
      <input id="surname" required name="surname" type="text">      
    </div>
    
    <button type="submit">submit</button>
  </form>
```

Entonces si voy al navegador, y pongo en la consola, si lleno solo un input el checkValidity() me va a devolver `false` y si relleno ambos me va a devolver `true`.
Recordemos que esta función la estoy tomando del event target `evt.target.checkValidity()`, del evento que le hemos puesto al elemento `form`, asi podemos poner un trigger para saber si el formulario esta validado.

Ahora vamos a cambiar el input `surname` por age y vamos a ponerle un validador `max="2"`.

```html
<form class="form" id="form" novalidate>
    <div class="group-input>
      <label for="name">Name: </label>
      <input id="name" required name="name" type="text"  data-error="Error en el input">
      <span class="error"></span>
      <span class="error"></span>
      <span class="error"></span>
      <span class="error"></span>
      <span class="error"></span>
      <span class="error"></span>
    </div>
    <div class="group-input>
      <label for="age">Age: </label>
      <input id="age" required max="2" name="age" type="number">
    </div>

    <button type="submit">submit</button>
  </form>
```

Al escribir un nùmero largo y darle a submit el `evt.target.checkValidity()`, va a devolver `false` debito a que pusimos en el input `age` la validación `max="2"`.

Lo que nos interesaba es ver el objeto validity

Lo que si es que veremos que esta forma de acceder a estos eventos con librerias o frameworks de js es diferente.

La forma en la uq estamos usando y validando el formulario, es que al usar el `evento.preventDefault()` no va a hacer el submit como tal, pero despues que sabemos que todos los campos del formulario estan valdiados, debemos llamar a otra función, la cual hará una request a un api y asì no recarga la pàgina y a la final hariamos que sea asincrono con fetch.

Al gestionar el formulario de esta forma, es buscar darle mas feedback al usuario con respecto a las valdiaciones y sea mas amigable. Que a lo mejor recargue y ya me salga el error arriba. Y poner queryParam para que el formulario se autocomplete, que es algo como serverside rendering.

## Continua Maquetación de TVMaze

Nos creamos un archivo llamado `TVMaze/src/js/ui.js`, y este archivo lo creamos para ejecutar el javascript fuera del html, para que nos sea luego facil organizar nuestro proyecto.

Para importar ese archivo en el html  antes de que termine el body creamos una etiqueta `<script>`.

Me quedé en 29_08 del dia 3