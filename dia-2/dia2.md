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

### getElementByTagName
Funciona parecido que el `getElementByClassName` pero usando los nombres de los Tag's html

## Eventos en Javascript
Se refiere a eventos que pueden aparecer en el browser, como evento de click, de submit, de cuando se escribe en teclado, hay muchos tipos de evento, como drag, drop, resize de la pantalla. Conceptualmente es siempre parecido.
- Un compañero hace una pregunta si el copiar y pegar es un evento. Y dice que puedo pillar las teclas o el evento onCopy.

### Evento onclick

```html
<body>
    <h1>TVMaze</h1>
    
    <button id="my-input">Texto</button>
    
    <script>
      console.log('Hello world');

      const myButton = document.getElementById('my-input');
      myButton.addEventListener('click', function () {
        console.log('Execute');
      }); // Añade un escuchador de eventos      
      console.log(myButton);
    </script>
  </body>
```
Al seleccionar un elemento del DOM como por ejemplo un `input`, ese objeto obtenido sirve funciones como el escuchador de eventos como el `addEventLister`, el cuál añade un escuchador de eventos. Este recibe 2 parametros que es un array de strign con el evento a escuchar y un Callback o funcion que se ejecute cuando detecte ese evento.

Hay que tener en cuenta que este callback no se ejecutará hasta que el `CALLSTACK` esté libre, ya los eventos se envian al `CALBACK QUEUE` es decir se ejecutarán después de que esté libre el callstack, por eso cuando en una web se queda colgada o no responde sin que podamos hacer click o algo es porque el callstack está muy ocupado por un bucle infito o algo, por eso es mejor que esas funciones se las manejen con funciones asincronas.

La idea es localizar nustro elemento que este en el DOM, luego añadir un addEventListener pasandole los parametos como son el evento en sring y el callback.

Podemos darnos cuenta que en lugar de una function podemos usar un arrowFunction, pero debemos tener en cuenta que la diferencia al usar arrow function es que perdemos el contexto del this y estariamos obteniendo el primero que seria el del window, algo diferente al usar una function normal.
```html
<body>
    <h1>TVMaze</h1>
    
    <button id="my-button">Texto</button>
    
    <script>
      console.log('Hello world');

      const myButton = document.getElementById('my-button');
      myButton.addEventListener('click', () => console.log('Execute'));// Añade un escuchador de eventos      
      console.log(myButton);
    </script>
  </body>
```

En el caso de que queremos seguir modificando cosas del mismo boton por ejemplo o en el this del boton, podemos hacer esto. LA funcion lo que hace es que te exporta el propio evento, un  objeto evento. Ya verenis qye ese objeto evento tiene el target que es el propio elemento html.

```html
<body>
    <h1>TVMaze</h1>
    
    <button id="my-button">Texto</button>
    
    <script>
      console.log('Hello world');

      const myButton = document.getElementById('my-button');
      myButton.addEventListener('click', (evt.target) => console.log('Execute'));// Añade un escuchador de eventos      
      console.log(myButton);
    </script>
  </body>
```

Luego veremos este objeto `evt`.

### Evento focus, blur, keydown, copy

```html
  <body>
    <h1>TVMaze</h1>
    <div id="my-p" class="texto" data-cy="selector-cypress" data-error="mi error">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint animi, culpa quas necessitatibus, amet nulla porro ipsa molestiae soluta dignissimos nostrum! <span>Link</span> <button>Button</button></div>
    <div id="my-p" class="texto" data-cy="selector-cypress" data-error="mi error">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint animi, culpa quas necessitatibus, amet nulla porro ipsa molestiae soluta dignissimos nostrum! <span>Link</span> <button>Button</button></div>
    <div id="my-p" class="texto" data-cy="selector-cypress" data-error="mi error">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint animi, culpa quas necessitatibus, amet nulla porro ipsa molestiae soluta dignissimos nostrum! <span>Link</span> <button>Button</button></div>
    
    <button id="my-button">Texto</button>
    <input type="text" id="input">
    
    <script>
      const myButton = document.getElementById('my-button');
      const myInput = document.querySelector('#input');

      myButton.addEventListener('click', () => console.log('Execute'));// Añade un escuchador de eventos      

      myInput.addEventListener('focus', () => console.log('focus'));
      myInput.addEventListener('blur', () => console.log('Blur'));
      myInput.addEventListener('change', () => console.log('change'));
      myInput.addEventListener('copy', () => console.log('copy'));
      
      // console.log(myButton);
    </script>
  </body>
```

El evento `focus` se activa cuando me posiciono en el input,
El evento `blur` se activa cuando el input pierde el foco, un ejemplo aqui es que cuando se active el blur mandar a validar el campo y poner en rojo si no se valida.
El evento `keydown` se activa cuando se escribe o cambia. Hay un keyup tambien que vemos mas adelante.

```html
    <script>
      const myButton = document.getElementById('my-button');
      const myInput = document.querySelector('#input');

      myButton.addEventListener('click', () => console.log('Execute'));// Añade un escuchador de eventos      

      myInput.addEventListener('focus', evt =>  {
        console.log(evt);
        console.log('focus');
      });
      myInput.addEventListener('blur', () => console.log('Blur'));
      myInput.addEventListener('change', () => console.log('change'));
      myInput.addEventListener('copy', () => console.log('copy'));
      
      // console.log(myButton);
    </script>
```

### Objeto FocusEvent
Como habiamos comentado el addEventlistener en el callback recibe un objeto `evt` el cual es un objeto tipo `FocusEvent`. Ademés este objeto tiene una propiedad que es el `target` qye es el propio elemento del DOm que se ha seleccionado.

```sh
FocusEvent {isTrusted: true, relatedTarget: null, view: Window, detail: 0, sourceCapabilities: InputDeviceCapabilities, …}bubbles: falsecancelBubble: falsecancelable: falsecomposed: truecurrentTarget: nulldefaultPrevented: falsedetail: 0eventPhase: 0isTrusted: truepath: (5) [input#input, body, html, document, Window]relatedTarget: nullreturnValue: truesourceCapabilities: InputDeviceCapabilities {firesTouchEvents: true}srcElement: input#inputtarget: input#inputaccept: ""accessKey: ""align: ""alt: ""assignedSlot: nullattributeStyleMap: StylePropertyMap {size: 0}attributes: NamedNodeMap {0: type, 1: id, type: type, id: id, length: 2}autocapitalize: ""autocomplete: ""autofocus: falsebaseURI: "http://localhost:3000/"checked: falsechildElementCount: 0childNodes: NodeList []children: HTMLCollection []classList: DOMTokenList [value: ""]className: ""clientHeight: 17clientLeft: 2clientTop: 2clientWidth: 150contentEditable: "inherit"dataset: DOMStringMap {}defaultChecked: falsedefaultValue: ""dir: ""dirName: ""disabled: falsedraggable: falseelementTiming: ""enterKeyHint: ""files: nullfirstChild: nullfirstElementChild: nullform: nullformAction: "http://localhost:3000/"formEnctype: ""formMethod: ""formNoValidate: falseformTarget: ""height: 0hidden: falseid: "input"incremental: falseindeterminate: falseinnerHTML: ""innerText: ""inputMode: ""isConnected: trueisContentEditable: falselabels: NodeList []lang: ""lastChild: nulllastElementChild: nulllist: nulllocalName: "input"max: ""maxLength: -1min: ""minLength: -1multiple: falsename: ""namespaceURI: "http://www.w3.org/1999/xhtml"nextElementSibling: scriptnextSibling: textnodeName: "INPUT"nodeType: 1nodeValue: nullnonce: ""offsetHeight: 21offsetLeft: 60offsetParent: bodyoffsetTop: 143offsetWidth: 154onabort: nullonauxclick: nullonbeforecopy: nullonbeforecut: nullonbeforepaste: nullonblur: nulloncancel: nulloncanplay: nulloncanplaythrough: nullonchange: nullonclick: nullonclose: nulloncontextmenu: nulloncopy: nulloncuechange: nulloncut: nullondblclick: nullondrag: nullondragend: nullondragenter: nullondragleave: nullondragover: nullondragstart: nullondrop: nullondurationchange: nullonemptied: nullonended: nullonerror: nullonfocus: nullonformdata: nullonfullscreenchange: nullonfullscreenerror: nullongotpointercapture: nulloninput: nulloninvalid: nullonkeydown: nullonkeypress: nullonkeyup: nullonload: nullonloadeddata: nullonloadedmetadata: nullonloadstart: nullonlostpointercapture: nullonmousedown: nullonmouseenter: nullonmouseleave: nullonmousemove: nullonmouseout: nullonmouseover: nullonmouseup: nullonmousewheel: nullonpaste: nullonpause: nullonplay: nullonplaying: nullonpointercancel: nullonpointerdown: nullonpointerenter: nullonpointerleave: nullonpointermove: nullonpointerout: nullonpointerover: nullonpointerrawupdate: nullonpointerup: nullonprogress: nullonratechange: nullonreset: nullonresize: nullonscroll: nullonsearch: nullonseeked: nullonseeking: nullonselect: nullonselectionchange: nullonselectstart: nullonstalled: nullonsubmit: nullonsuspend: nullontimeupdate: nullontoggle: nullontouchcancel: nullontouchend: nullontouchmove: nullontouchstart: nullonvolumechange: nullonwaiting: nullonwebkitfullscreenchange: nullonwebkitfullscreenerror: nullonwheel: nullouterHTML: "<input type="text" id="input">"outerText: ""ownerDocument: documentparentElement: bodyparentNode: bodypart: DOMTokenList [value: ""]pattern: ""placeholder: ""prefix: nullpreviousElementSibling: button#my-buttonpreviousSibling: textreadOnly: falserequired: falsescrollHeight: 17scrollLeft: 0scrollTop: 0scrollWidth: 150selectionDirection: "forward"selectionEnd: 0selectionStart: 0shadowRoot: nullsize: 20slot: ""spellcheck: truesrc: ""step: ""style: CSSStyleDeclaration {alignContent: "", alignItems: "", alignSelf: "", alignmentBaseline: "", all: "", …}tabIndex: 0tagName: "INPUT"textContent: ""title: ""translate: truetype: "text"useMap: ""validationMessage: ""validity: ValidityState {valueMissing: false, typeMismatch: false, patternMismatch: false, tooLong: false, tooShort: false, …}value: ""valueAsDate: nullvalueAsNumber: NaNwebkitEntries: []webkitdirectory: falsewidth: 0willValidate: true__proto__: HTMLInputElementtimeStamp: 20692.754999996396type: "focus"view: Window {parent: Window, postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, …}which: 0__proto__: FocusEvent

```

Luego una propiedad muy interesante que tiene que es util para los formularios es una función que se llama `preventDefault()`

```html
    <script>
      const myButton = document.getElementById('my-button');
      const myInput = document.querySelector('#input');

      myButton.addEventListener('click', () => console.log('Execute'));// Añade un escuchador de eventos      

      myInput.addEventListener('focus', evt =>  {
        console.log(evt.preventDefault); //preventDefault function
        console.log('focus');
      });
      myInput.addEventListener('blur', () => console.log('Blur'));
      myInput.addEventListener('keydown', () => console.log('keydown'));
      myInput.addEventListener('copy', () => console.log('copy'));
      
      // console.log(myButton);
    </script>
```

El preventDefault() lo que hace es prevenir el funcionamiento por defecto de un evento por ejemplo en el caso del focus, si a n input le damos click el focus es como que se sombrea el input, pero si es que tenemos un input con un css especial, no tiene porque funcionar igual entonces usamos el preventDefault() por que hay que distinguie ya que el focus significa que ya podemos escribir.

SE muestra un ejemplo con el evento `keyDown` y el evt.preventDefault(), al escribir este evento previene el funcionamiento por defecto no permitiendo escribir.

```html
    <script>
      const myInput = document.querySelector('#input');

      myInput.addEventListener('click', () => console.log('Execute'));// Añade un escuchador de eventos      

      myInput.addEventListener('focus', () => console.log('focus'));
      myInput.addEventListener('blur', () => console.log('Blur'));
      myInput.addEventListener('keydown', evt => {        
        evt.preventDefault();
        // console.log(evt.target);
        console.log(evt.target.className);
        console.log('keydown');
      });
      myInput.addEventListener('copy', () => console.log('copy'));
    </script>
```

Que mas tiene este event, comos e habia dicho antes es el `target`. Que como vemos al escribir se ejecuta el console log imprimiendo el target que en realidad es el elemento input obtenido del DOM.

Asì mismo ese target podriamos aplicarselo a lo de mas del elemento como por ejemplo su clase, y esto me devolveria el nombre de la clase del elemento imput.

Ademàs podemos acceder a los `datasets` que tiene un elemento, o todas las cosas que tenga un elemento las podemos aplicar con el `evt.target`

Tambien podemos obtener el valor de el elemento input por ejemplo usando `evt.target.value`. Es decir cada vez que escribamos dentro de nuestro input se ira impimiendo u obteniendo esos valores.

El evento  **keyup** tambien es muy importante.

## Event Bubbling

Es que los eventos van como burbujitas hacia arriba. El ejemplo lo podemos ver en `dia-2/src/index.html` en:

```html
<body>
   <div id="container">
      <button id="button">Texto</button>
    </div>
</body>
<script>
  const container = document.getElementById('container');
      const button = document.getElementById('button');

      container.addEventListener('click', () => alert('Click container'));
      button.addEventListener('click', () => alert('click button'));
</script>
```

Aquì nos podemos dar cuenta como los eventos se propagan hacia arriba es decir de antro hacia afuera, desde el hijo al padre. Lo que hace esto por debajo es que tiene una etapa de captura, de que haria hacia abajo buscando el elemento del DOM, lo encuentra lo captura y luego tiene la fase de bubbling dodne hace el click y lo va enviando luego hacia arriba. Es decir estos listener se irian propagando hacia arriba.

Hay veces que esto nos podria molestar. Ya veremos como lo podemos arreglar, aunque no siempre es habitual.

#### Solucionar el event bubbling
Para arreglar esto del event bubbling hacemos lo siguiente, es usar el evt Objetc el cual tiene el target y ademàs tiene un comando llamado `stopPropagation()` esto lo que hace es que detiene la propagacion de los eventos.

```html
<body>
   <div id="container">
      <button id="button">Texto</button>
    </div>
</body>
<script>
  const container = document.getElementById('container');
      const button = document.getElementById('button');

      container.addEventListener('click', () => alert('Click container'));
      button.addEventListener('click', (evt) => {
        evt.stopPropagation(); // detiene la propagación
        alert('click button');
      });
</script>
```
Tener en cuenta que si doy click al div, si se lanzarìa el evento click del container es decir se saltarìa ese `evt.stopPropagation()` del button ya que el div es mas grande y tiene area visible en el DOM ya que el `stopPropagation` solo estaria cubriendo al elemento button en sì mas que todo en evento click(). Es importante jugar con el css, a lo mejor el z-index, ya que siempre el DOM va apillar el que estè visible o el que este por encima. Lo que recomienda es que si se tiene problema es dar al inspector y ver cual està encima ya que aveces hay layouts que se esta sobreponiendo, otra cosa del z-index es que no pasa nada si no se le pone position.

> !Nota: En ciertos casos esta bien pero se recomienda no hacer esa parada de la propagación de los eventos.

## Manejo de CSS con Javascript

Es algo que se hace bastante y es bastante ùtil que se usa al día a día.

Me quedé en 1:17:15 Manejo de CSS con Javascript.