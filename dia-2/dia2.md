# Día 2

## Maquetando nuestra Web

- Creamos una carpeta `src` y dentro un archivo `index.html` para que sea nuestra ruta principal de nustro proyecto.
- Vamos a instalar con npm el modulo `http-server` el cual es un servidor de estaticos y que sea mas cercano a producción.
  ```shell
  > npm install --save-dev http-server
  ```
  --save-dev: es para guardar como dependencia y -dev es una dependencia para el desarrollo.
  Esta lib se puede instalar de forma global se puede usarla de la siguiente forma `http-server .` PEro como lo instalamos de forma local en el proyecto debemos modificar el package.json para poder usarlo.

  Agrego el siguiente script para arrancar el servidor -c-1 es para desabilitar la cache.
  ```json
  "server": "./node_modules/.bin/http-server . -c-1"    
  ```
  Luego de guardar en el shel pongo:
  ```shell
  > npm run server
  ```

## Clonar Objetos
Con un json.parse con stringify es lo que haciamos, lo que explicaba es que tenia efectos secundarios es que los keys undefined desaparecian o las funciones o tipo infinito, la conclusion al final si es que se necesita clonar un objeto peculiar con valores undefined usar la libreria `lodash`. 

Si lo hiciera de otra manera y perdiera los `undefined` al acceder a la clave de un objeto que no existe, me va a devolver undefined que si accedo a esa key.
Por ejemplo si uso `object.keys({a: 234, b:234})`, esto lo que me devuelve es un array con las keys que tiene el objeto. Por lo tanto si hacemos un clon con json.parse, perderiamos las keys que son `undefined`, entonces si trabajamos con object.keys seria un problema y nos podría dar un error.
La conclusión es que si necesitamos un clonado muy complejo optar por una libreria o sino obtar por el REST OPERATOR que es el que mas se verá.

## Corrección importante sobre Rest Operator

Hay 2 cosas distintas:
- Uno es el `Spread Operator` que es para clonar objetos.

```js
// SPREAD OPERATOR
{ ...OBJETOPARACLONAR }
```

- El otro es el `Rest Operator` el resto que se refiere a los parámetros, para con un solo ...params poder recibir los parametros que se desee, o así mismo imprimir o usar los parametros que se desee.

```js
// REST OPERATOR
const foo = (...PARAMS) => {
  // valor de params es un array de  [1,2,3,4] que se pasa en foo
};
foo(1,2,3,4)
```

## DOM con JavaScript

Primero ejecutamos javascript en el DOM
```html
  <body>
    <h1>TVMaze</h1>
    <script>
      console.log('Hello world');
    </script>
  </body>
```
Para que usamos java script, para darle dinamismo a nuestra web y darle una mejor experiencia al usuario. Generar valor a nuestros usuarios.

Como habla JS con el DOM.

### Selectores

Es básicamente conectar nuestro javascript del Front con elementos del DOM y poder obtenerlos.

document.<Selector>

#### getElementById

ver ejemplo en `dia-2/src/index.html`

Como vemos para usar el getElementById usamos el ``document`, el cual es el DOM y tiene todo el arbol y tal, y lo que tiene es una serie de métodos para acceder a zonas del árbol, además tiene eventos.

```html
 <body>
    <h1>TVMaze</h1>
    <p id="my-p" class="texto" data-cy="selector-cypress">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint animi, culpa quas necessitatibus, amet nulla porro ipsa molestiae soluta dignissimos nostrum! Minima eveniet omnis enim provident ad debitis beatae praesentium.</<p>
    <script>
      console.log('Hello world');
      // Accediendo con el id a un párrafo con getElementById
      const myElement = document.getElementById('my-p');
      console.log(myElement);
    </script>
  </body>
```
Esto nos devuelve el elemento seleccionado `my-p`
```console.log
  Hello world
  (index):21 <p id=​"my-p" class=​"texto" data-cy=​"selector-cypress">​…​</p>​
```
Que pasa cuando no existe el elemento o no existe el id?. Esto nos devuelve `null`. 

La constante creada para obtener el elemento en este caso `myElement` es un objeto del DOM, por lo cual tiene propiedades que puedo usar como por ejemplo:
- **innerHTML:** Lo cual nos devuelve el contenido del elemento que estamos seleccionando incluidas las etiquetas html. Puedo usarlo tambien para remplazar el html seleccionado.
```html
<script>
      console.log('Hello world');
      // Accediendo con el id a un párrafo con getElementById
      const myElement = document.getElementById('my-p');
      console.log(myElement.innerHTML);
      myElement.innerHTML = '<button>Send</button>';
    </script>
```
- **textContent:** Este nos devuelve el texto del elemento que seleccionamos pero sin mostrar las etiquetas html.

> Algo importante saber es que al momento de cargar la pàgina y aparece el boton en lugar del parrafo o div, lo que esta sirviendo al navegador en realidad es el div, sino que al llegar al script este lo cambia y renderiza visualmente.  A esto es lo que se le llama `Client side rendering`, y cuando usamos plantillas como en node con ejs es lo que se le llama `server side rendering` que ya viene cargado todo el html y tal.   Esto tampoco puede decir que no puedan convivir juntos, se puede hacer. 

Es importante saber esto xq si tengo una app React no va a funcionar el SEO.

### querySelector

Lo que hace este es seleccionar como se lo haría en CSS, por ejemplo si es el id con `#id_elemento` o con la clase `.class_elemento` ver en `dia-2/src/index.html`, en jQuery el `document.querySelector` equivale al signo de doalar `$`

```html
<body>
    <h1>TVMaze</h1>
    <div id="my-p" class="texto" data-cy="selector-cypress">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint animi, culpa quas necessitatibus, amet nulla porro ipsa molestiae soluta dignissimos nostrum! <span>Link</span> <button>Button</button></div>
    <script>
      console.log('Hello world');
      // Accediendo al id con querySelector
      const myElement = document.querySelector('#my-p');
      // console.log(myElement);
      myElement.innerHTML = '<button>Send</button>'

    </script>
  </body>      
```
También puedo acceder a la propiedad `data-cy` que es otro tipo de atributo que podemos agregar a nuestro html. La manera de acceder a estos atributos sería:

```html
<body>
    <h1>TVMaze</h1>
    <div id="my-p" class="texto" data-cy="selector-cypress">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint animi, culpa quas necessitatibus, amet nulla porro ipsa molestiae soluta dignissimos nostrum! <span>Link</span> <button>Button</button></div>
    <script>
      console.log('Hello world');
      // Accediendo al atributo data.cy con querySelector
      const myElement = document.querySelector('[data-cy=selector-cypress]');
      myElement.innerHTML = '<button>Send</button>'
    </script>
  </body>
```

Luego veremos esto del `data-cy` que son data sets y es informacion extra que podemos aportar a nuestros elementos de html. Lo importante de estos datasets, al tenerlos dentro del elemento ps podemos tener mas informacion y poder juar con ella, se usa por ejemplo en formularios y poner un dataset como `data-error="Completa el input"` y asì cuando el formulario envie y vea que no es vàlido el campo de ese formulario ps de ese elemento podemos obtener el valor del atributo `data-error` y con ese campo de texto podemos enviarlo a una función que se encargue de pintar el mensaje de error para el usuario.
Al mostrar con un console.log el dataset, podemos ver un mapa de los datasets del elemento seleccionado o información adicional que podemos usar.

```html
  <body>
    <h1>TVMaze</h1>
    <div id="my-p" class="texto" data-cy="selector-cypress" data-error="mi error">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint animi, culpa quas necessitatibus, amet nulla porro ipsa molestiae soluta dignissimos nostrum! <span>Link</span> <button>Button</button></div>
    <script>
      console.log('Hello world');

      // Accediendo al atributo data.cy con querySelector
      const myElement = document.querySelector('[data-cy=selector-cypress]');
      console.log(myElement.dataset);
      myElement.innerHTML = '<button>Send</button>'

    </script>
  </body>
```

```sh
DOMStringMap {cy: "selector-cypress", error: "mi error"}
  cy: "selector-cypress"
  error: "mi error"
  __proto__: DOMStringMap
```
> Veremos esto de los data sets mas adelante.

### getElementByClassName
Esto me devuelve o selecciona los elementos del DOM por el ClassName y me devuelve es un objeto de tipo HTMLCOllection{} con un key que es el elemento seleccionado.

```html
  <body>
    <h1>TVMaze</h1>
    <div id="my-p" class="texto" data-cy="selector-cypress" data-error="mi error">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint animi, culpa quas necessitatibus, amet nulla porro ipsa molestiae soluta dignissimos nostrum! <span>Link</span> <button>Button</button></div>
    <script>
      console.log('Hello world');      
      // Accediendo con GetElementMyClassName
      const myElement = document.getElementsByClassName('texto');
      console.log(myElement);
    </script>
  </body>
```
  
**Resultado**

```js
  HTMLCollection [div#my-p.texto, my-p: div#my-p.texto]
  0: div#my-p.texto
  length: 1
  my-p: div#my-p.texto
  __proto__: HTMLCollection
```

Lo que nos devuelve esta propiedad si ponemos o seleccionamos otras clases o atributos de los elementos es un objeto vacío de tipo HTMLCollection[], ya que lo que hace es buscar los elementos por className no por otra atributo.
```html
  <body>
    <h1>TVMaze</h1>
    <div id="my-p" class="texto" data-cy="selector-cypress" data-error="mi error">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint animi, culpa quas necessitatibus, amet nulla porro ipsa molestiae soluta dignissimos nostrum! <span>Link</span> <button>Button</button></div>
    <script>
      console.log('Hello world');
      // Accediendo con GetElementMyClassName
      const myElement = document.getElementsByClassName('[data-cy=selector-cypress]');
      console.log(myElement);
    </script>
  </body>
```

Por ejemplo si yo multiplico el div que estoy seleccionando a 3, entonces el array que me devuelve getElementByClassName seria de 3.
```html
<body>
    <h1>TVMaze</h1>
    <div id="my-p" class="texto" data-cy="selector-cypress" data-error="mi error">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint animi, culpa quas necessitatibus, amet nulla porro ipsa molestiae soluta dignissimos nostrum! <span>Link</span> <button>Button</button></div>
    <div id="my-p" class="texto" data-cy="selector-cypress" data-error="mi error">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint animi, culpa quas necessitatibus, amet nulla porro ipsa molestiae soluta dignissimos nostrum! <span>Link</span> <button>Button</button></div>
    <div id="my-p" class="texto" data-cy="selector-cypress" data-error="mi error">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint animi, culpa quas necessitatibus, amet nulla porro ipsa molestiae soluta dignissimos nostrum! <span>Link</span> <button>Button</button></div>
    <script>
      console.log('Hello world');
      // Accediendo con GetElementMyClassName
      const myElement = document.getElementsByClassName('texto');
      console.log(myElement);
    </script>
  </body>
```

**Resultado**

```js
HTMLCollection(3) [div#my-p.texto, div#my-p.texto, div#my-p.texto, my-p: div#my-p.texto]
```

Si quisiera hacer la parte de modificar el elemento con `innerHTML` como se lo hizo con otros selectores, si lo hacemos directamente no va a funcionar ya que el `myElement` es un objeto lo que no tiene mucho sentido.
```js
myElement.innerHTML = '<button>Send</button>';
```

Para corregir esto que es por clase o byTagName entonces lo que debemos hacer es modificar cada uno de los items, keys o elementos del objeto.
```html
    <script>
      console.log('Hello world');
      // Accediendo con GetElementMyClassName
      const myElement = document.getElementsByClassName('texto');
      console.log(myElement);
      console.log(Object.keys(myElement)), // devuelve un array con las keys del objeto
      Object.keys(myElement).forEach(key => { 
        myElement[key].innerHTML = '<button>Send</button>';
      });
    </script>
```