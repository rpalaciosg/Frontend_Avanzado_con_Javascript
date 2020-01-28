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

Ademàs hacemos lo mismo pero para el div `navbar-logo`.

```js
const navbar = document.querySelector('#navbar');
const logo = document.querySelector('#navbar .navbar-log');

const toggle = elemento => (removeClass, addClass) =>{
    elemento.classList.remove(removeClass);
    elemento.classList.add(addClass);
};

const handleNavBar = toggle(navbar);

const handleLogClassName = toggle(logo);

setTimeout( () => handleNavBar('no-search', 'search'), 1000);

handleLogClassName('', 'test-class');
```

Tendriamos esto una funcion que se encarga de gestioanr las clases, y lo que mola de hacerla pagina más funcional es que cuando veamos testing es que podre darme cuenta que una funcion es muy facil de testear, es decir testear una entrada y un resultado. Y puedo decir vale tengo una funcion y debo testear que la función me garantiza que las `classList` se van a cambiar. Entonces yo se que eso va a ser perfecto, entonces si yo la dopo o le doy mas información entonces ya tengo otra función que permite recibir funciones que sé que me va a dejar jugar con el `classList` de esa manera. Esto es batante pontente y se usa bastante.

### Pasar una funcion como parámetro, funcino que retorna otra función
El típico ejemplo que el instrutor usa para explicar esto es:

```js
const data = [1,2,3,4];

const result = data.map(item => item * 2);

console.log(result); // me devuelve el resultado del array multiplicado x 2
```
Esto lo que me devuelve es el resultado del array multiplicado x 2

```sh
(4) [2, 4, 6, 8]
```

Pero claro si ahora pensamos en lo que hemos hecho en la funcion anterior usando closures, ps vamos a cambiarlo:

```js
const data = [1,2,3,4];

const multiplicarPor2 = item => {
  const result = item * 2;
  return result;
};

const result = data.map(multiplicarPor2);

console.log(result);
```
Entonces en la línea del map, yo puedo pasar la funcion `multiplicarPor2` y no pasa nada ya que js me permite pasar funciones como parámetros.

Esto funcionaría completamente igual. Y si queremos hacerlo más genérico como el toggle.

```js
onst data = [1,2,3,4];

const multiplicar = valor => item => {
  const result = item * value;
  return result;
};

const result = data.map(multiplicar);

console.log(result);
```
Y si es que yo pongo solo la funciona multiplicar sin pasar el value, me va a devolver solo f's que es la funcion que le estamos pasando en el map:

```sh
ui.js:10 (4) [ƒ, ƒ, ƒ, ƒ]
```
Lo que mola de esto es que a multiplicar le agrego multiplicar(2) ya va a funcionar igual.

```js
const data = [1,2,3,4];

const multiplicar = value => item => {
  const result = item * value;
  return result;
};

const result = data.map(multiplicar(2));

console.log(result);
```

Ahora si esto lo ponemos como más expresivo o declarativo podemos poner algo como esto:

```js
const data = [1,2,3,4];

const multiplicar = value => item => {
  const result = item * value;
  return result;
};

const multiplicarPor2 = multiplicar(2);
const multiplicarPor5 = multiplicar(5);

const result = data.map(multiplicarPor5);

console.log(result); 
```

Entonces aqui ya podríamos ver esta forma que sería más comodo tener las 2 funciones separadas. multiplicar por 2 x un lado y x 5 por otro y tener que añadirselas al map y de esta manera provechandome de estas 2 caracteristicas, closures (funcion que retorna otra funcion) y que lo puedo pasar como un parámetro puedo obtener este tipo de resultados. Y si queremos mermar mas el código y llevar esto al límite podríamos hacer esto:

```js
const data = [1,2,3,4];

const multiplicar = value => item => item * value;

const multiplicarPor2 = multiplicar(2);
const multiplicarPor5 = multiplicar(5);

const result = data.map(multiplicarPor5);

console.log(result);
```

Esto es más acostumbrar el ojo, xq al principio si es raro o un poco dificil al principio.

Tambien podemos ver aveces que hay algunos códigos que tienen como muchos parentesis:
```js
const multiplicarPor5 = multiplicar(5)()();
```
Lo que van haciendo es que a cada parentesis vas especificando a cada parentesis un poquito más, lo que tienes un funcion mas abstrabta o que la puedas usar mejor.

### Add nuestra funcion Toogle al evento click del incono search
Bueno tenemos una fucnion de UI que se llama `toggle` y queremos es hacer el cambio que cuando clicke en el icono de buscar me haga ese cambio.

Y vamos añadir nuestra fucnion de handleNavBar para hacer ese cambio, y luego lo que vamos a hacer es lelvar ese handle a otro sitio que tenga mas sentido en nuestro proyecto.

Cuando hagamos click en ` <button type="submit" class="button search">Search</button>`,se nos cambie la barra de navegacion:

Algo que debemos tener en cuenta es que debemos ayudarnos del querySelector()para seleccionar el elemento correcto, en este caso como el button no tiene id y tiene 2 clases la selección se la haría así.

```js
const searchButton = document.querySelector('#navbar .button.search');
```

Algo que debemos recordar tambien que en un arrow fucntion si en lugar de {llaves} ponemos (parentesis), no es necesario poner `returns` ni nada pero que no podemos poner (;) punto y coma al final de la linea tampo:

```js
searchButton.addEventListener('click', () => (
  handleNavBar('no-search', 'search')
));
```

Esto es porque por ejemplo si pongo esta arrow function es una sola línea me quedaría muy larga y no muy facil de leer:

```js
searchButton.addEventListener('click', () => handleNavBar('no-search', 'search'));
```

Entonces yo para mejorar esto pongo con llaves el arrow function:

```js
searchButton.addEventListener('click', () => {
    handleNavBar('no-search', 'search')
});
```
Pero hay herramientas que me pondrian un error en el arrowFuction y me dirian que debo poner un return;

```js
searchButton.addEventListener('click', () => {
  return handleNavBar('no-search', 'search')
});
```

Pero entonces para mejorar esto, dejarlo mas facil de leer y en 2 líneas, yo usaría parentesis() en lugar de lalves{} para el arrow function y asi ya no tengo que poner el return:

```js
searchButton.addEventListener('click', () => (
  handleNavBar('no-search', 'search')
));
```

Y ya lo puedo tener en 2 líneas sin que esas herramientas que gestionan la consistencia del código entre equipos no me de un error. 

> esto lo veremos la semana que viene como instala una de estas herramientas para trabajar en equipo.

Entonces con este código ya tendriamos ese evento en la UI cuando clickemos en el icon-search:

```js
const navbar = document.querySelector('#navbar');
const logo = document.querySelector('#navbar .navbar-log');
const searchIcon = document.querySelector('#navbar-search');

const toggle = elemento => (removeClass, addClass) =>{
    elemento.classList.remove(removeClass);
    elemento.classList.add(addClass);
};

const handleNavBar = toggle(navbar);

const handleLogClassName = toggle(logo);

searchIcon.addEventListener('click', () => (
  handleNavBar('no-search', 'search'),
  console.log('click en search..')
));
```

### Modularizar el js

Lo que vamos hacer, pensar en este archivo se llama `ui.js` y bueno pienso aqui voy a meter todo el código que sea para la gestion de UI, ya tenemos el navabar luego vamos agregar el evento para darle click al icon-x para que regrese como estaba, pero luego esto podria crecer luego indefinidamente.

Lo que vamos a hacer es que todo la parte del navbar no este en este archivo y todo lo que este relacionado con gestion del UI, como seria el toogle se va a quedar aqui y luego eso lo vamos a usar fuera en otro archivo js.

Creamos un archivo llamado `TVMaze/src/js/navbar.js` e importamos este script al final del body de nuestro index.html

Tambien todo lo de navbar que este en ui.js me lo voy a llevar a navbar.js

llegados a este punto, ya tenemos las cosas separadas, pero vemos en en ui.js toggle no está definido, entonces la manera enq ue vamos a gestionar esto es muy parecida a Node de `ES6` pero distinta, que es con `imports` ya que en Node se usa `common.js` que es diferente.

Entonces en el archivo `navbar.js` agregamos un import para llamar a toggle.

```js
import toggle from './ui.js';
```

Lo que esta haciendo este import es que esta pillando lo que yo ponga en el archivo ui.js como `export default` en este caso toggle;

```js
export default toggle;
```
Entonces en teoria esto va a funcionar como estoy usando import de es6, y tengo el export default de toogle esto va a funcionar, pero que pasa si ejecutamos la página vemos que nos dá ciertos errores, 1 es que se esta quejando de la estructura de exports que estamos haciendo en navbar.js.
```sh
Uncaught SyntaxError: Unexpected token 'export'
```

Y bueno hay 2 formas de resolver esto, una que es lo que vamos a hacer aquì:
  - 1 que es la forma que vamos a hacer aquí, es que nuestros archivo de js en el index.html los debemos definir en nuestros scripts como modulos.
    ```js
    <script type="module" src="/src/js/ui.js"></script>
    <scrtip type="module" src="/src/js/navbar.js"></scrtip>
    ```
  - Y la segunda forma que la vamos a ver en el módulo de FRontend Pro, es con un compiler o con un empaquetador que será webpack, que loque hace es que coge todos los archivos y los convertirá en un solo javascript, entonces por debajo lo que hará es unir todos esos módulos, minificar y todas esas cosas. Aquí como no vamos a ver webpack, lo que vamos a usar es type="module".

Aquì si guardamos y recargamos vemos que mi barra de navbar sigue funcionando.

Que pasa si por ejemplo ejecito esto con `Open in browser` que el problema es el de las rutas, debido a que cuando se usa el type="module" si no se lo levanta con un servidor de estaticos, esto no va a funcionar y daria estos errores, asi que por eso lo del `http-server`

```sh
styles.css:1 Failed to load resource: net::ERR_FILE_NOT_FOUND
index.html:1 Access to script at 'file:///src/js/ui.js' from origin 'null' has been blocked by CORS policy: Cross origin requests are only supported for protocol schemes: http, data, chrome, chrome-extension, https.
ui.js:1 Failed to load resource: net::ERR_FAILED
index.html:1 Access to script at 'file:///src/js/navbar.js' from origin 'null' has been blocked by CORS policy: Cross origin requests are only supported for protocol schemes: http, data, chrome, chrome-extension, https.
navbar.js:1 Failed to load resource: net::ERR_FAILED
```

Que pasa si ejecuto esto con `Open in browser`, esto no va a funcionar por necesita el http-server para funcionar.

Los `mòdulos` son ES6 pero distinto de como lo hacemos en webpack o con otros frameworks que ya llevan webpack por debajo y procesan el javascript en el import, la extensión no se añade.

```js 
import toggle from './ui';
```

Pero aqui en este caso si no pongo la extensión no lo encuentra al archivo entonces falla. Aqui la extensión del archivo la vamos a poner.

Lo importante en la forma de gestión de los módulos con Node y ES6 no es esa, es otra, que seria la siguiente, esta va a servir para cualquier framework moderno de fronted, el sistema de import va a ser exactamente igual.

La equivalencia del import y export en Node.

```js
//importa en node
const toggle = require('./ui.js');

//export en node
module.exports = toogle;
```

Hay diferentes maneras de exprotar en ambos sitemas de módulos en `common.js` y `es6` de hecho ya hay una propuesta abierta para ya usar solo `export default toogle;`

Un compañero pregunta que cual es mejor de usar, que a el y lo que enseño el profe de Node.js es que gustamas el de common.js con `module.export `, y este isntructor dice que para el es mejor el `export default toogle`.

Lo que pasa con node si queires usarlo con `export default tootle` necesitas montar un picfox con babel y bueno es mucha pereza mucha cosa, entonces entiende que le guste mas la de common.js y que bueno el tampoco lo haría, y lo que hace este instrrctor es que en backed esta o usa con la forma de common.js `module.exports` y en el frontend esta con la de es6 `export default..` ya que montarse un babel para el backend solo para esto ps parece un poco rollo, y si quieres usar algún typescript o alguna cosa de esas mas concreta ahi si tiene su gracai montarse un babel.js. Pero no es solo por eso que el instructor prefiere ese sino por otra cosa.

Tambien tenemos otra forma de exportar para ambas usando destructuring

```js
//es6
export {toogle};
//common.js
module.export = {export}
```
y la forma de importar sería, hay que hacer destructuring porque a la final estamos importando un objeto que tiene adentro una función.
```js
import { toogle } from './ui.js'
```

Vamos a ver la última forma de hacer import y export:
```js
export const toogle = elemento => (removeClass, addClass) => {
  elemento.classList.remove(removeClass);
  elemento.clasddList.add(addClass);
};

// con modulos de ES6
const NOMBRE = 'nombre';
export default NOMBRE;
// equivalencia con common.js no hay ninguna
//modeule.exports = { toogle };
```

la forma de importar sería:

```js
// modulos  ES6
import NOMBRE, { toogle } from './ui.js';
//common.js :( no se puede
//const { toogle } = require('./ui.js');
```

Por eso al instructor le gusta mas la forma de es6.

Un matíz importante es que los que pille de `destructuring` no puedo liarla con el nombre, por ejemplo esto
```js
import NOMBRE, { toogl } from './ui.js';
```

Esto no va a funcionar y me va a dar error diciendo que no exportado `toggl`
```bash
Uncaught SyntaxError: The requested module './ui.js' does not provide an export named 'toggl'
```

El nombre tiene que matachear, y si lo exporto como `export.default` da igual porque va a seguir saliendo:

```js
import NAAA, { toggle } from './ui.js';

console.log(NAAA);
```
Esto hay que tener en cuenta.

Y si es que esto no te mola o este nombre lo estás usando en mas imports, lo que puedo hacer es un señor alias y esto esta ya resuelto.

```js
//alias en ES6
import NOMBRE, { toggle as changeClassName} from './ui.js';
//alias en common.js
const { toogle: className } = require('./ui.js');
```

Esto pasa siempre, aveces te lias porque hay funciones que se llaman igual entonces les pones un alias.

Pues hemos hecho la importanción desde nuetro archivo `ui.js` y ya sabemos que podemos hacer este tipo de modularización.

Antes de seguir hechando código es ver en la parte de `network` que está pasando y vamos a recargar.

Aqui pasa lo mismo que en css, ya que como estamos haciendo imports, en network nos aparece los 2 archivos ui.js y navbar.js y cada uno de ellos tiene Waiting(WTTF). Este es el precio que hay que pagar para que nuestro código se vea mas legible y facil de leer. PEro en el siguiente módulo, con webpack esto cambiará y lo tendremos un archivo super comprimido, mas optimizado, etc.