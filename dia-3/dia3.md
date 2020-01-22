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

Hasta ahora hemos realizado el javascript dentro del html, pero ahora lo vamos a realizar desde afuera, desde otro archivo para que nos sea mas facil organizar nuestro còdigo. Para importar ese archivo en el html  antes de que termine el body creamos una etiqueta `<script>`.

```html
<script src="/src/js/ui.js"></script>
```

El tema de las barras, en la ruta `src="/src/js/ui.js"` si yo abro con `open in browser`, esto se rompe, y esto porque si vamos a Network en la consola de chrome, vemos que tanto el `styles.css` lo como el `ui.js` da un error, y fijémonos porque da un error, es porque va a buscar a `file:///src/css/stykes.css` y es porque al poner la barra iriamos a la ruta de origen o ruta absoluta.

Si por ejemplo no le pongo "/" barra o slash, al importar el css en el html, el css me va a funcionar, porque al no poner el barra està yendo o tomando desde donde yo tengo mi archivo `Request URL: file:///home/richard/Fullstack_web_bootcamp_keepcoding/Frontend_Avanzado_con_Javascript/TVMaze/src/css/styles.css` al igual que si pongo `./` o `./../`, pero esto seria muy redundante. 

> Pero cual usar? Recomienda siempre barra, pero porque cuando levanto con el server funciona? Porque va al origen de mi servidor `Request URL: http://127.0.0.1:8080/src/css/styles.css` justo la ruta origen. Siempre se pondría barra, porque cuando se hacen transformaciones con algùn preprocesador como `webpack` o algo por el estilo, luego es un lío gestionar eso, y si ponemos solo "/" sabemos que esta viniendo de un solo origen y si no està cargando algo es porque no esta puesto correctamente en base al origen de mi carpeta, luego veremos que cuando hagamos `serverside rendering` cambiaremos un poquito esto de aquí. Recordar que para probar esto necesitamos el paquete `http-server`.

Alquien pregunta sobre donde poner el `<script>` de donde ponerlo si en el head o al final del body, el profesor dice que depende de como este el còdigo, pero que suele ponerlo al final porque suele dar error si se quiere usar un elemento y el javascritp carga antes de que exista el elemento suele dar error.
Las libreria como `jquery` o librerias que dan algunos frameworks js los suele poner en la parte de arriba del head pero el instructor los archivos de script los pone al final. 
Alguien tambien pregunta que si se puede poner una validaciòn con el evento `DOMContentLoaded` y el instructor dice que si se puede poner cuando esta cargado, y ahi si mandar todo el código.

Los preprocesadores ya no ponen estilos css ni js y luego por debajo tu haces tus cosas de js con imports, con async/await, usando todo lo más nuevo, todo lo más chulo con preprocesadores de css o con plugins y luego ellos el js lo añaden al final `hasheado`  con un identificador por un tema de caché y el css te lo añaden en el head pero lo añaden al final, esto para que cuando añadas links o cosas externas no pisen a tus estilos, ahi entonces el instructor sigue la convenciòn de los preprocesadors de poner los scripts al final.

Para modificar nuestra `navbar` vamos a hacer algo rollo muy js que es hacer un `closure` que es una función que retorne a otra función, para modificar este navbar, que recordemos era jugar con estas clases.

Primero en el archivo `ui.js` vamos a crear un closure para agregar y quitar clases de css a nuestro navbar.

```js
const navbar = document.querySelector('#navbar');

const handleNavBar = (removeClass, addClass) => {
  navbar.classList.remove(removeClass);
  navbar.classList.add(addClass);
};

setTimeout( () => handleNavBar('no-search', 'search'), 1000);
```

Para probar ponemos un timeout que ejecute la funcion `handleNavBar()` y que cambie la clase `no-search` por `search`.

Pero esto lo podemos hacer de otra manera, lo que podemos hacer aquí es crearnos un función a la que le llamaremos `toggle`, y lo que vamos a ahcer es esperar que nos pasen un `elemento` y este elemento nos retorne una función.

Se va a escribir con function que se entiende mejor que con arros

```js
function toggle(elemento) {
  return function (removeClass, addClass) {
    navbar.classList.remove(removeClass);
    navbar.classList.add(addClass);
  };
}
```

Aqui estamos haciendo una función que a su vez retorna otra function que hace ya cosas. La cosa es que ya puedo pasar o dejar de usar solo navbar y puedo ponerle el `elemento` que yo quiera.

```js
const navbar = document.querySelector('#navbar');

function toggle(elemento) {
  return function (removeClass, addClass) {
    elemento.classList.remove(removeClass);
    elemento.classList.add(addClass);
  };
}
```
Entonces ya podria hacer otro tipo de còdigo estilo el `handleNavBar` que sea igual a la function `toggle(navbar)` y le paso el `navbar`.

Entonces la funcion `toggle` dentro de  `handleNavBar` se ejecute que va hacer?, me va a devolver  esta función:

```js
function (removeClass, addClass) {
    elemento.classList.remove(removeClass);
    elemento.classList.add(addClass);
  };
```
Y si nos fijamos es exactamente lo mismo que teniamos antes, con la ventaja que mi `toggle` ya no es solo para navbar sino que podria poner mas elementos y tener una funcion muy descriptiva que se encargue de esa responsabilidad que es hacer ese toogle, podriamos decir que es un creador de toggles, una especie de factoria por asì decirlo, que lo me crea son funciones que hacen toggle en base a un elemento que yo decido cual es. 
Es un aproach que vamos a ver mucho hacerlo de esta manera, con funciones que especializan, pero con arrow function que siempre se escribe menos.

```js
const toggle = elemento => (removeClass, addClass) =>{
    elemento.classList.remove(removeClass);
    elemento.classList.add(addClass);
};
```

vemos que funciona igual, al segundo cambia la clase `no-search` por `search`.
