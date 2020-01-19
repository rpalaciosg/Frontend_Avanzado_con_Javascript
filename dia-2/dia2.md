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
### Json.parse o Json.stringify
Lo que haciamos para hacer un clonado interno de objetos es usando `json.parse` o `stringyfy` algo que no se comento es que ese clonado, tiene efectos secundarios, como que los keys undefined desaparecian o las funciones valores tipo infinito
La conclusion al final si es que se necesita clonar un objeto asi tan peculiar que tenga funciones con valores undefined usar la libreria `lodash` la cual usaremos en este curso.
ASí que si lo mejor era copiarlo.
### Lodash

Si lo hiciera de otra manera y perdiera los `undefined` al acceder a la clave de un objeto que no existe, me va a devolver `undefined` al igual que si accedo a esa key a esa misma clave.
El único porblema es que si por ejemplo estoy trabajando con un método de los objetos llamado object.keys que lo que hace es que me devuelve un array de las keys que tiene el objeto, Ejemplo

```html
<script>
object.keys({a: 234, b:234}) // ['a', 'b']
</script>
```

si uso `object.keys({a: 234, b:234})`, esto lo que me devuelve es un array con las keys que tiene el objeto como vemos a y b.

Por lo tanto si hacemos un clon con json.parse, para clonarnos los subniveles como hemos dicho perderiamos las keys que son `undefined`, entonces si trabajamos con `object.keys` seria un problema y ya que perderiamos una key por ejemplo la b y nos podría dar un error.

### Conclusion de clonar objetos
La conclusión es que si necesitamos un clonado muy complejo optar por una libreria como `lodash` o sino obtar por el `SPREAD OPERATOR` que es el que mas se verá.

## Corrección importante sobre Rest Operator sino SPREAD OPERATOR

Hay 2 cosas distintas:
- Uno es el `Spread Operator` que es para clonar objetos.

```js
// SPREAD OPERATOR
{ ...OBJETOPARACLONAR }
```

- El otro es el `Rest Operator` el resto que se refiere a los parámetros, rest parameters, para con un solo ...params poder recibir los parametros que se desee, o así mismo imprimir o usar los parametros que se desee.

```js
// REST OPERATOR
const foo = (...PARAMS) => {
  // valor de params es un array de  [1,2,3,4] que se pasa en foo
};
foo(1,2,3,4)
```

## Sprites
Dividiamos una imagen y luego con css lo dividiamos y nos quedabamos con una parte un otra.

## Imagenes Responsive

### srcset
Que teniamos la parte de `srcset` que en base al width y el ancho de nuestra pantalla si dividimos el ancho de nuesta pantalla entre el width que definimos eso nos va a dar un número cercano a 1 a 2 o 3 y dependiendo de la densidad de pixeles que tenga nuestro dispositivo va a escoger una u otra. Por ejemplo

- Si tenemos 320w de ancho /  320w lo definido = 1 .-> para las pantallas con densidad de 1 pixel mostraremos la imagen de 230
    img/yacht_race@mobile.jpg 320w, 320w / 320w = 1 pixel de densidad
    img/yacht_race@tabler.jpg 768w, 768w / 320w = 2 pixeles de densidad
### picture
Luego tenemos la version mas dopada que es `<picture>`tenemos y podemos usar cositas con los `source` y definir `mediaquerys` entonces ya jugamos con que una media query jugamos con una imagen con otra y además podemos ampliar esa condición de `mediaquery` con `srcset` osea todo lo anterior visto para mejorar la calidad de imagen, esto para a lo mejor para la versiones web, las mas pequeñas mas comprimidas para que sean para la version mobil y tablet y no gaste bateria y datos.

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

Es básicamente conectar nuestro codigo de javascript del Front con elementos del DOM y poder obtenerlos.

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

> Algo importante saber es que al momento de cargar la pàgina y aparece el boton en lugar del parrafo o div, lo que esta sirviendo al navegador en realidad es el div, sino que al llegar al script este lo cambia y renderiza visualmente.  A esto es lo que se le llama `Client side rendering`, y cuando usamos plantillas como en node con ejs es lo que se le llama `server side rendering` que ya viene cargado todo el html y tal.   Esto tampoco puede decir que no puedan convivir juntos, se puede hacer. Se puede tener una parte de server side rendering y client side rendering.

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

Es algo que se hace bastante y es bastante ùtil que se usa al día a día. Vamos a ver como modificar propiedades, aunque no es la mejor opcion vamos a ver como hacerlo correctamente.

En este ejemplo lo que vamos a hacer es oculatar un parafo cuando demos click en un botón.

```html
<body>
  <div>
    <p id="lorem-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid sed, distinctio et magnam corporis magni atque cumque qui. Unde earum doloribus animi esse architecto iste molestiae quae tenetur modi debitis.</p>
    <button id="hideButton">Hide</button>
  </div>

  <script>
 // Manejo de Css con Javascript
      // cuando presionemos el boton vamos a quitar el pàrrafo
      const loremText = document.querySelector('#lorem-text');
      const hideButton = document.querySelector('#hideButton');

      hideButton.addEventListener('click', () => {
        loremText.style.display = 'none';
      });
    </script>
  </body>
```

Aunque esto se puede hacer, el instructor recomienda o prefiere no hacerlo, porque al final si nos fijamos al final lo que esta haciendo es poner un estilo en línea, esto se puede poner, pero si tienes estilos a parte hace que no los tome en cuenta y solo tome en cuenta los estilos en línea.

Otro acercamiento que podriamos tener es jugar con las clases y tener estados en la UI, dependiendo de X clase mi UI se comporte de una manera y otra.

Una mejor forma de hacer esto o manejar los estilos con Javascript, es maquetar mi UI con CSS incluso con los eventos de como esta UI se va a comportar, para yo no hacer cambios de estilos en linea sino cambiar solo clases de los contenedores de los elementos que quiero cambiar, y además esto estará alineado a mi CSS sin agregar un estilo que no tiene que ver con mi css ya definido.

```html
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1, shrink-to-fit=no">
    <title>TVMaze shows</title>
    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">
    <!-- styles -->
    <style>
      .show p {
        display: block;
      }

      .hide p {
        display: none;
      }

    </style>
  </head>
  <body>
    <div id="text-container" class="show">
      <p id="lorem-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid sed, distinctio et magnam corporis magni atque cumque qui. Unde earum doloribus animi esse architecto iste molestiae quae tenetur modi debitis.</p>
      <button id="hideButton">Hide</button>
    </div>
    <script>
      // Manejo de Css con Javascript
      // cuando presionemos el boton vamos a quitar el pàrrafo
      const loremText = document.querySelector('#lorem-text');
      const hideButton = document.querySelector('#hideButton');

      hideButton.addEventListener('click', () => {
        // loremText.style.display = 'none';
        // loremText.style.backgroundColor = 'red';
        // loremText.style.color = 'blue';
        const container = document.querySelector('#text-container');
        console.log(container.className);
        container.className += 'hide';
      });
    </script>
  </body>
```
la propiedad `className` a la final es un string y podemos hacer esto `container.className += 'hide';` para concatener la clase, debemos tener en cuenta que si no le damos un espacio no va a funcionar la clase. Para esto la forma que vamos a usar es `classList` es otra propiedad que tendria container.

```html
<script>
  // Manejo de Css con Javascript
      // cuando presionemos el boton vamos a quitar el pàrrafo
      const loremText = document.querySelector('#lorem-text');
      const hideButton = document.querySelector('#hideButton');

      hideButton.addEventListener('click', () => {
        // loremText.style.display = 'none';
        // loremText.style.backgroundColor = 'red';
        // loremText.style.color = 'blue';
        const container = document.querySelector('#text-container');
        // console.log(container.className);
        // container.className += ' hide';
        console.log(container.classList);
      });
</script>
```

Lo que nos da esta `classList` es un array de tipo `DOMTokenList` con todas las clases que tenga mi container o el elemento html que este seleccionando del DOM, el resultado de un console log de esto seria:

```sh
DOMTokenList ["show", value: "show"]
0: "show"
length: 1
value: "show"
__proto__: DOMTokenList
```
Esto parece un poco raro de manejar pero js nos da una serie de métodos sobre `classList` para manejarlo que son:
- .classList.remove()
- .classList.add()
- .classList.toggle()

Antes lo teniamos en una sola línea pero el tema de `className` es que si tengo muchas mas clases voy a pisar todas las clases cuando solo quiero cambiar una lo que sí me da el classList que es mas declarativo. 

```html
<script>
        // Manejo de Css con Javascript
      // cuando presionemos el boton vamos a quitar el pàrrafo
      const loremText = document.querySelector('#lorem-text');
      const hideButton = document.querySelector('#hideButton');

      hideButton.addEventListener('click', () => {
        // loremText.style.display = 'none';
        // loremText.style.backgroundColor = 'red';
        // loremText.style.color = 'blue';
        const container = document.querySelector('#text-container');
        // console.log(container.className);
        // container.className += ' hide';
        // console.log(container.classList);
        container.classList.remove('show');
        container.classList.add('hide');
      });
    </script>

```

El class.List.toggle funcionaria igual que al tener el remove show y el add hide pero esto nos ayudaria ya que sin poner la clase show, ya el container tiene por defecto la propiedad `display:block` el toggle me permitirá hacer un show sin crear esa clase lo que me ahorraria una clase en sí, solo usando el `classList.toggle()`

```html

<body>
  <script>
      // Manejo de Css con Javascript
      // cuando presionemos el boton vamos a quitar el pàrrafo
      const loremText = document.querySelector('#lorem-text');
      const hideButton = document.querySelector('#hideButton');

      hideButton.addEventListener('click', () => {
        // loremText.style.display = 'none';
        // loremText.style.backgroundColor = 'red';
        // loremText.style.color = 'blue';
        const container = document.querySelector('#text-container');
        // console.log(container.className);
        // container.className += ' hide';
        // console.log(container.classList);
        //container.classList.remove('show');
        // container.classList.add('hide');
        container.classList.toggle('hide');
      });
    </script>
  </body>
```

OTra cosa que podemos hacer, es como tenemos acceso al boton con el target del objeto evt podemos cambiar el nombre al boton.
Esto lo podemos hacer con `evt.target.textContent = 'hide'`, pero si queremos que cambie el texto segun el contenido del texto podemos hacer lo siguiente usando un if y la propiedad de string el includes. Algo muy común que suele ver en Javascript es que usan mucho el return, y remplazan el else por el return.
```html
<script>
      // Manejo de Css con Javascript
      // cuando presionemos el boton vamos a quitar el pàrrafo
      const loremText = document.querySelector('#lorem-text');
      const hideButton = document.querySelector('#hideButton');

      hideButton.addEventListener('click', (evt) => {
        const container = document.querySelector('#text-container');
        container.classList.toggle('hide');// usa la propiedad dislay:block por defecto del container y ya no es necesario hacer remove(show) y add(hide)
        // console.log(evt.target);
        if (evt.target.textContent.includes('show')) {
          return evt.target.textContent = 'hide';  // remplaza else por return
        }
        return evt.target.textContent = 'show';
      });
    </script>
```

Yo voy jugando con las clases del css de los contenedores de la UI en vez de agregar elementos en línea.



## Crear elementos en el DOM con CreateElement y appendChild

Para esto cambio de nombre a mi archivo index y le pongo ´dia-2\src\index-javascript-dom.html´ y me vuelvo a crear otro archivo ´dia-2\src\index.html´ con un nuevo template.

Lo que vamos a hacer es un setTimeout aplicado al DOM, que va a ir añadiendo párrafos al div a los 2 segundos.

Este ´createElement´ lo que va a hacer es crearnos un elemento del DOM. Además vamos a usar el setTimeout que lo que hace es esperar 2 segundos y ejecutar la funcion addP() que crea el párrado en nuestro div.

```html
<body>
  <div id="container">

  </div>
  <script>
    const container = document.querySelector('#container');

    const addP = () => {
      console.log('Add p');
      const para = document.createElement('p');
      const textNode = document.createTextNode('Super texto!!');
      para.appendChild(textNode);
      
      container.appendChild(para);

    };

    console.log('Hello');
    setTimeout( function (){
      addP();
    } ,2000);
  </script>
</body>
```

Ahora el mismo equivalente de una forma mas sencilla y facil de leer.

```html
<body>
  <div id="container">

  </div>
  <script>
    const container = document.querySelector('#container');

    const addP = () => {
      console.log('Add p');
      // innerHTML
      const para2 = '<p>Super texto 2!!</p>';
      container.innerHTML = para2;

    };

    console.log('Hello');
    setTimeout( function (){
      addP();
    } ,2000);
  </script>
</body>
```

Esto añadiria el párrafo de una manera mas sencilla al momento de leer.

Por lo general cuando se hace cosas en vanilla, en rollo template componente, se suele hacer con innerHTML en lugar de appendChild.

Pero viendo la realidad una manera facil de verlo en el punto de vista de programador es con el appendChild ya que una buena manera seria abstraerlo en una función que espera recibir unas propiedades como el texto o los atributos. O si quisieramos ir haciendo unos layouts esto se haria mas complejo. 
Pero si imaginamos que tenemos un div y tengamos un listado, innerHTML no seria lo mejor, ya que estarias repitando todo, por ejemplo tienen un array que se va repitando cada elemento del array caso contrario que si usamos el appendChild que solo se añadiría el último.

Tenemos que ver la necesidad de la aplicación. En el mayor de los casos al hacer templates con vanilla el innerHTML es suficiente, ahi es en lo que ayuda los frameworks o librerias como React.js.

Según una pregunta de un compañero, que si se esta quitando y poniendo elementos al finla eso afecta el rendimiento, es mejor aplicar innerHTML a que estar repintando cada elemento. Lo único que los frameworks hacen, es que si por ejemplo tenemos un arbol de un DOM, con vanilla es mas performante.

En el caso de react lo que ayuda es que si tengo una lista, ayuda a que solo se repinte un elemento de esa lista o demás y de forma más optima, ya que tiene algo que se llama virtual DOM que ayuda al reRender.
Esta dando el ejemplo con este artículo: https://indepth.dev/inside-fiber-in-depth-overview-of-the-new-reconciliation-algorithm-in-react/

Para el propósito de vanilla, hacerlo con innerHTML o appendChild nos vá de sobra.

Ahora lo que vamos a hacer es cambiar el ´setTimeout´ por ´setInterval´, este lo que va hacer es esperar los 2 segundos y dibujar el párrafo, esto lo va a ir ejecutando cada 2 segundos.

```html
<body>
  <div id="container">

  </div>
  <script>
    const container = document.querySelector('#container');

    const addP = () => {
      console.log('Add p');
      const para = document.createElement('p');
      const textNode = document.createTextNode('Super texto!!');
      para.appendChild(textNode);
      
      container.appendChild(para);

      // innerHTML
      // const para2 = '<p>Super texto 2!!</p>';
      // container.innerHTML = para2;

    };

    console.log('Hello');
    setInterval( function (){
      addP();
    } ,2000);
  </script>
</body>
```

Si cambiaramos la forma de repintar con el appendChild, nos podemos dar cuenta que el append achild solo pinta el nuevo elemento a añadir, lo contrario al innerHTML que lo que hace es repintar todos los elemento.

```js
   const addP = () => {
      console.log('Add p');
      const para = document.createElement('p');
      const textNode = document.createTextNode('Super texto!!');
      para.appendChild(textNode);
      
      container.appendChild(para);

      // innerHTML
      const para2 = '<p>Super texto 2!!</p>';
      container.innerHTML += para2;

    };
```

Hay varios métodos o formas con este appendChild, esta removeChild para quitarlos hay varios. Veremos que usaremos casi siempre innetHTML para la parte del curso.

Que pasa si por ejemplo yo noquiero que este intervalo esté siempre. Ejemplo, el feed de twitter, va cargando y por debajo tiene un intervalo que te va haciendo x peticiones cada x cierto tiempo, si llega una petición a lo mejor hay algo nuevo o a lo mejor no, lo que hace la UI lo que hace es pintarte en la interfaz hay 2 nuevos tweets. Pero que pasa cuando yo navego hacia otra parte de la pantalla donde el feed ya te da igual, y si cambio de ruta o navego a nivel de cleinte, que lo que hace es que no recargue otra vez la web que ya entraremos en detalle con eso. 

¿que pasa con ese intervalo? Si no se gestiona bien, ese intervalo va a estar ahí pan pan pan, y no me importa que ese intervalo haga eso si está afectando al usuario directamente, pero si ya no le esta afectando al usuario  y no lo está viendo, no queiro que ese intervalo moleste.
Entonces para arreglar eso debo llamar a ´clearInterval´

```html
  <script>
    const container = document.querySelector('#container');

    const addP = () => {
      console.log('Add p');
      const para = document.createElement('p');
      const textNode = document.createTextNode('Super texto!!');
      para.appendChild(textNode);
      
      container.appendChild(para);

      // innerHTML
      // const para2 = '<p>Super texto 2!!</p>';
      // container.innerHTML += para2;

    };

    console.log('Hello');
    const intervalo = setInterval( function (){
      addP();
    } ,500);

    setTimeout(() => {
      clearInterval(intervalo);
    }, 3000);
  </script>
```

## Cuidado con los eventos y nuevos renderizados

Si yo hago esto, con un setTimeout coy creando botones con id, y luego quiero agregar un evento con ese id del elemento creado, me va a salir que no puede leer la propiedad addEventlister de null.

```html
<body>
  <div id="container">

  </div>
  <script>
    const container = document.querySelector('#container');

    const addP = () => {
      console.log('Add p');
      const para = document.createElement('p');
      const textNode = document.createTextNode('Super texto!!');
      para.appendChild(textNode);
      
      // container.appendChild(para);

      // innerHTML
      const para2 = '<button id="texto">Super texto 2!!</button>';
      container.innerHTML += para2;

    };

    console.log('Hello');
    setTimeout( function (){
      addP();
    } ,0);

    const texto = document.querySelector('#texto');
    texto.addEventListener('click', () => console.log('click!!!'));
  </script>
</body>
```

Error
```console
Hello
index.html:39 Uncaught TypeError: Cannot read property 'addEventListener' of null
    at index.html:39
(anonymous) @ index.html:39
index.html:20 Add p
```

Hay que tener en mente mucho eso de cuando se renderiza una cosa si esta ya renderizado, entra en jeugo el tema de asincronia, de cuando puedo añadir un evento o no.

Básicamente yo no puedo hacer ese addEventListener antes de que este pintado ese botón. Así que donde debo poner el código es abajo de el innerHTML y asi estyo 100% seguro que el elemento ya está pintado en el DOM y ya puedo acceder a el.

```html
<body>
  <div id="container">

  </div>
  <script>
    const container = document.querySelector('#container');

    const addP = () => {
      console.log('Add p');
      const para = document.createElement('p');
      const textNode = document.createTextNode('Super texto!!');
      para.appendChild(textNode);
      
      // container.appendChild(para);

      // innerHTML
      const para2 = '<button id="texto">Super texto 2!!</button>';
      container.innerHTML += para2;

      const texto = document.querySelector('#texto');
      texto.addEventListener('click', () => console.log('click!!!'));

    };

    console.log('Hello');
    setTimeout( function (){
      addP();
    } ,0);

  </script>
</body>
```

## InnerText

Mostramos la diferencia del `textContent` con el `innerText`.

```html
<div id="app">    text    1   234   </div>
<script src="src/index.js">
  const text = document.getElementById("app");

  console.log('textContent:', text.textContent);

  console.log('innerText:', text.innerText);
</script>
```

## Codesandbox

Es una herramienta online, para hacer pruebas de concepto.
Hacer pruebas rápidas. 

```url
https://codesandbox.io/
```

Se pueden hacer pruebas, con react, con vue.js, angular, etc.

## Práctica
- Beerflix
- Cliente que tiene un APi a la cual debemos adaptarnos si o sí.
- Tenemos que ahce su UI
- Historias de usuario.
  - 

Notas del desarrollador:
- Sin frameworks javascript, pero podemos usar frameworks css como bootstrap, materialize, sematicUI (solo para los diseños, menos la parte de javascript), ejm si quiero hacer un carrusel tengo que gestionarlo yó con js no con el de bootstrap.
- Sera necesario buena documentación.
- Será necesario el uso del API de nuestro proveedor.
- Será necesario el uso de localStorage.
- Añadir workboz para tener soporte offline.
- se valorará que las especificaciones para parte del cliente sean correctas, la calidad del código al momento de leer, que sea reusable y facil de mantener.

Uso del API
- Las imagenes que devuelve el API no tienen fondo.

Extras
- ESLINT, usar el de AirBnb (pone reglas en el código)
- Deploy con now.sh o 

## CB/Then/Async/Await

Vamos a hacer un ejemplo con supertexto con nuestro código asincrono.

Vamos a intentar simular un ejemplo un poco "real"

Ejemplo de como funciona la asincronia:

- Muestra como se gestiona un proceso asincrono.

```html
<script>

    console.log('Hello');
    setTimeout( () => {
      console.log('class');
    }, 0);
    console.log('Goodbye');
</script>
```

En este ejemplo voy a hacer una simulacion de una petición a un API usando callbacks, el tema usar callbacks es el callbacks hell.

```html
<body>
  <div id="container">

  </div>
  <script>
    const container = document.querySelector('#container');

    const getResource = cb => {
      setTimeout( () => {
        const info = 'Super texto pero desde API';
        cb(info);
      }, 3000);
    };

    getResource( function (info) {
      addP(info);
    });

    const addP = pValue => {      
      const para = document.createElement('p');
      const textNode = document.createTextNode(pValue);
      para.appendChild(textNode);
      
      // container.appendChild(para);      
      const para2 = `<p id="texto">${pValue}</p>`;
      container.innerHTML += para2;
    };
    
  </script>
</body>
```

Ejemplo del callback hell:
```html
<script>
    const container = document.querySelector('#container');

    const getResource = cb => {
        setTimeout( () => {
        const info = 'Super texto pero desde API';
        cb(info);
      }, 3000);      
    };

    //callbackhell
    getResource( function (info) {
      addP(`1. ${info}`);
      getResource( function (info) {
        addP(`2. ${info}`);
        getResource( function (info){
          addP(`3. ${info}`);
        });
      });
    });

    const addP = pValue => {      
      const para = document.createElement('p');
      const textNode = document.createTextNode(pValue);
      para.appendChild(textNode);
      
      // container.appendChild(para);
      
      const para2 = `<p id="texto">${pValue}</p>`;
      container.innerHTML += para2;

    };
    
  </script>
```

## Convertir un callback a una promesa

Cuando tenemos una funciona que no sabe de proemsas, lo que tengo que hacer es convertir un callback a una promesa.

Dentro de la nueva promesa voy a meter mi código asincrono.

```html
<script>
    const container = document.querySelector('#container');

    const getResource = cb => {
      return new Promise( (resolve) => {
        setTimeout( () => {
          const info = 'Super texto pero desde API';
          cb(info);
        }, 3000);      
      });
    };
</script>
```

Lo que tengo que hacer después es sustituir mi callback por resolve.

```html
<script>
    const container = document.querySelector('#container');

    const getResource = () => {
      return new Promise( (resolve) => {
        setTimeout( () => {
          const info = 'Super texto pero desde API';
          resolve(info);
        }, 3000);
      });
    };
</script>
```

Ahora `getResources()` es una función mismo pero que devuelve una promesa. 
Lo que hace una promesa es que retorna un then() y que hace el then es que hace una funcion que tienen un parametro.

```html
<script>
    const container = document.querySelector('#container');

    const getResource = () => {
      return new Promise( (resolve) => {
        setTimeout( () => {
          const info = 'Super texto pero desde API';
          resolve(info);
        }, 3000);      
      });
    };

    getResource()
      .then(info => {
        addP(`1. ${info}`);
        return getResource();
      })
      .then(info => {
        addP(`2. ${info}`);
        return getResource();
      })
      .then(info => {
        addP(`3. ${info}`);
      });
</script>
```

Lo bueno de las promesas es que se pueden encadenar, las puedo ir uniendo una tras otra.

La ventaja de esto es que la lectura es vertical y no horizontal o crecerá a la derecha.

Hay muchas formas de hacerlo, aveces veremos funciones mas o mneos así

```html
<script>
    getResource()
      .then(info => getResource())
      .then(info => getResource())
      .then(info => {
        addP(`3. ${info}`);
      });
</script>
```

O también hay otras veces que se puede escribir de esta manera:

```html
<script>
    getResource()
      .then(getResource)
      .then(getResource)
      .then(info => {
        addP(`3. ${info}`);
      });
</script>
```

Que es directamente a la función se le pase el info.

Y la forma que más le gusta al instructor es pasandole los parametros a la función, que es plan hacer como closures, de funciones que retornan funciones, pero esto lo veremos más cuando entremos al UI.
```html
<script>
    getResource()
      .then(getResource('qwe','qwer'))
      .then(getResource)
      .then(info => {
        addP(`3. ${info}`);
      });
</script>
```

## Async/Await

Es mas fácil de leer que las 2 formas anteriores, pero tiene que tener unas series de condiciones para poder usar. Siempre deben estar dentro de una funcion `async` 

Todo lo que tenga montado con `Promesas` le puedo poner el await adelante, que eso va a funcionar bien.

```html
  <script>
    const container = document.querySelector('#container');

    const getResource = () => {
      return new Promise( (resolve) => {
        setTimeout( () => {
          const info = 'Super texto pero desde API';
          resolve(info);
        }, 3000);      
      });
    };

    const initRender = async () => {
      const info1 = await getResource();
      addP(`1. ${info1}`);
      const info2 = await getResource();
      addP(`2. ${info2}`);
      const info3 = await getResource();
      addP(`3. ${info3}`);
    };

     initRender();

         const addP = pValue => {      
      const para = document.createElement('p');
      const textNode = document.createTextNode(pValue);
      para.appendChild(textNode);
      
      // container.appendChild(para);

      const para2 = `<p id="texto">${pValue}</p>`;
      container.innerHTML += para2;
    };
  </script>
```

Hay una forma de ejecutar el await sin tener que hacer o ejecutar una función aparte.

```html
<script>
  (async () => {
    ...
  })();
</script>
```

```html
  <script>
    ( async () => {
      const container = document.querySelector('#container');
      const getResource = () => {
        return new Promise( (resolve) => {
          setTimeout( () => {
            const info = 'Super texto pero desde API';
            resolve(info);
          }, 3000);      
        });
      };

        const addP = pValue => {      
          const para = document.createElement('p');
          const textNode = document.createTextNode(pValue);
          para.appendChild(textNode);
          
          const para2 = `<p id="texto">${pValue}</p>`;
          container.innerHTML += para2;
        };

        const info1 = await getResource();
        addP(`1. ${info1}`);
        const info2 = await getResource();
        addP(`2. ${info2}`);
        const info3 = await getResource();
        addP(`3. ${info3}`);          
    })();
    
  </script>
```

Al instructor le está gustando y volviendose más al `.then` a un estilo mas funcional, lo que en await seria ponern await()()() varios parentesis.

El instructor pregunta que preferimos más, callbacks, .then o async/await. la mayoria dice async/await pero el nos va a intentar convencer del .then.

Por ejemplo el método getResource podiamos haberlo puesto con () y sin el return y funcionaba igual

```html
<script>
const getResource = () => (
        return new Promise( (resolve) => {
          setTimeout( () => {
            const info = 'Super texto pero desde API';
            resolve(info);
          }, 3000);      
        });
      );
</script>
```

Con el .then lo que le engancha es el tema de esta función que deja, puedo hacer cosas muy chulas

```html
<script>
 getResource()
        .then(filterText('API'))// por ejemplo si quiero filtrar.
        .then(info => {
          addP(`1. ${info}`);
          return getResource();
        })
        .then(info => {
          addP(`2. ${info}`);
          return getResource();
        })
        .then(info => {
          addP(`3. ${info}`);
        })
        ;
</script>
```

Esto lo usaremos al momento de hacer el UI y maquetar.

## Validaciones de Formularios con JS

Este ejemplo se vera en el archivo `dia-2\src\index-form.html`

Creamos  un formulario:

```html
<body>
  <form id="form">
    <input input="name" name="name" type="text">
    <button type="submit">submit</button>
  </form>
</body>
```

Lo primero que va a pasar, cuando yo clique en submit la web va a recargar la página, pero si le pongo un label para que tome el valor del input.

```html
<body>
  <form id="form" method="GET">
    <label for="name">Name: </label>
    <input input="name" name="name" type="text">
    <button type="submit">submit</button>
  </form>
</body>
```

cuando le doy al submit escribiendo algo, En el url le pone un Query Param por el comportamiento por defecto de los formularios.

Lo que hace es renderiza otra vez la web, pero con estos query params, que lo que hace es una petición `GET` si es que no le pongo un método en el form. 

Si le pongo Post, se necesita tener algo en el servidor que nos gestione esto, pero esto no lo vamos a hacer. Nosotros vamos a hacerlo desde el cliente para ahcer una peticion AJAX.

Si yo le doy a submit vemos que no carga, por que tengo la propiedad `required` y el html me hace la validación por su cuenta.

```html
<body>
  <form id="form">
    <label for="name">Name: </label>
    <input input="name" required name="name" type="text">
    <button type="submit">submit</button>
  </form>
</body>
```

Si envarga la validación nos va a quedar corta y queremos darle otro rollo. Primero vamosa hacer un pequeño cambi del mensaje.

El mundo del custom validity se puede cambiar bastante, todas la validaciones que da por defecto html5, pero si trabajo con un borwser antiguo o hacer validaciones antiguas, talvez se nos pueda quedar corto.

Primero para que no nos pille debemos poner al formulacio la propiedad `novalidate`.

Esto aún asi no me va a validar y mostrar el mensaje, como podemos hacer para que nuestro formulario no se comporte como viene por defecto, esto lo hicimos con el `preventDefault`., cual es el evento que esta por defecto es el `submit`, entonces a partir de ahi ya podemos ir hilando y decir:

```html
  <form id="form" novalidate>
    <label for="name">Name: </label>
    <input id="name" required name="name" type="text">
    <button type="submit">submit</button>
  </form>
  
  <script>
    const nameInput = document.querySelector('#name');
    const form = document.querySelector('#form');
    nameInput.setCustomValidity("Error custom modificado!!!");    
    
    form.addEventListener('submit', () => {
      console.log('Submit!!!!');
    });
  </script>
```

El instructor tiene la consola configurada con `Preserve log`, lo que hace es que mantienen los log's incluso en las recargas o cambiando de ruta. 

Para evitar que haga la recarga por defecto el `form` debo agregarle la propiedad `preventDefault()`.

Aquí lo que podemos decir, esto ya lo tengo controlado, pero necesito ahora ver si esta validado el formulario, saber si los campos están bien o están mal.
Veremos un tipos de datos para ver como validar el formulario.

Para esto vamso a usar `evt.target` para saber cual es el form en el que hemos dado o activado el submit y vamos a ver si está validado con la propiedad `checkValidity()`.

```html
  <script>
    const nameInput = document.querySelector('#name');
    const form = document.querySelector('#form');
    nameInput.setCustomValidity("Error custom modificado!!!");    
    
    form.addEventListener('submit', evt => {
      evt.preventDefault();
      console.log(evt.target.checkValidity());
    });
  </script>
```

Vamos al navegadro para probar y si vemos la consola, nos devuelve un `false`, xq false, porque yo puse un campo que es `required`  en mi html y en ningún momento lo he rellenado.


El instructor usa algo mas que el checkValidity().

Lo que podemos hacer es ver la validez de este input con la propiedad `.validity`

```html
  <script>
    const nameInput = document.querySelector('#name');
    const form = document.querySelector('#form');
    // nameInput.setCustomValidity("Error custom modificado!!!");    
    
    form.addEventListener('submit', evt => {
      // console.log(evt.target.checkValidity());
      evt.preventDefault();
      console.log(nameInput.validity);
    });
  </script>
```

Este objeto validity lo que tiene es una serie de propiedades, de si es válido (valid) el cual está en falso.

```log
ValidityState {valueMissing: true, typeMismatch: false, patternMismatch: false, tooLong: false, tooShort: false, …}
valueMissing: true
typeMismatch: false
patternMismatch: false
tooLong: false
tooShort: false
rangeUnderflow: false
rangeOverflow: false
stepMismatch: false
badInput: false
customError: false
valid: false
__proto__: ValidityState
```

 Pero podriamos llegar al fomulario y decir que si valid es false que pinte un error:

 ```html
  <script>
    const nameInput = document.querySelector('#name');
    const form = document.querySelector('#form');
    // nameInput.setCustomValidity("Error custom modificado!!!");    
    
    form.addEventListener('submit', evt => {
      // console.log(evt.target.checkValidity());
      evt.preventDefault();
      console.log(nameInput.validity);
      if(!nameInput.validity.valid) {
        return showError('Name not valid');
      }
    });
  </script>
 ```

 Si uso las validaciones de `tooLong` o `tooShort` cuando sean verdaderas es que se esta dando el error, cuando el string es muy largo o muy corto. O si es requerido. Y así podemos ir poniendo un popup tipo bootstrap el valor es requerido. O tambien lo que podemos hacer es lo que hicimos antes con los data sets como el `data-error` y agregarlo en el input, y luego obtenermos el valor del dataset.

 ```html
 <body>
  <form id="form" novalidate>
    <label for="name">Name: </label>
    <input id="name" name="name" type="text" required data-error="Error en el input">>
    <button type="submit">submit</button>
  </form>
  
  <script>
    const nameInput = document.querySelector('#name');
    const form = document.querySelector('#form');
    // nameInput.setCustomValidity("Error custom modificado!!!");    
    
    form.addEventListener('submit', evt => {
      // console.log(evt.target.checkValidity());
      evt.preventDefault();
      console.log(nameInput.validity);    
      console.log(nameInput.dataset.error);    
      if(!nameInput.validity.valid) {
        return showError('Name not valid');
      }
    });
  </script>
</body>
 ```

 Esto me devolveria el valor de el data ser si lo quiero usar o nó.

 Ahora vamos a hacer la función de showError()


Un copañero le pregunta, si el instructor alguna vez hace una función usando la palabra `function` o siempre usa const? El instructor responde, que casi siempre usa `const nombreFuncion =() => {};` a menos que tenga prototipos o necesite algo de contextos o usar el `this` es decir que tena internamente el tipo de propiedades.

```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <style>
    .group-input {
      display: flex;
      flex-direction: column;
    }
    .error {
      display: none;
      color: red;
    }

    .form.invalid .error {
      display: block;
    }
    .block {
      display: block;
    }
  </style>
</head>
<body>
  <form class="form" id="form" novalidate>
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
  
  <script>
    const nameInput = document.querySelector('#name');
    const form = document.querySelector('#form');
    // nameInput.setCustomValidity("Error custom modificado!!!");    
    
    const showError = message => {
      const error = document.querySelectorAll('form .error');
      error.forEach((error, index) => {
        error.innerText = `${message} ${index}`;
      });
      console.log(error);
      error.innerText = message;
      form.classList.add('invalid');
    };

    nameInput.addEventListener('keyup', () => {
      form.classList.remove('invalid');
    });

    form.addEventListener('submit', evt => {
      // console.log(evt.target.checkValidity());
      evt.preventDefault();
      
      if(!nameInput.validity.valid) {
        return showError(nameInput.dataset.error);
      }
    });
  </script>
</body>
```

 > querySelector lo que hace solo toma o pilla un solo selector que enceuntra al recorrer el arbol de dom, pero recordar que siempre lo podemos especializar usandolo como selector de css.

 > Además si tenemos por ejemplo varios elementos y para que no solo seleccione uno, podemos usar `querySelectorAll`

 Al final uno acaba usando mucho librerias para las validaciones., ya que es raro terminar manejando las validaciones por nuestra cuenta.

 Las validaciones en el front son a nivel de UX (user experience) son sobre todo de una persperctiva de experiencia de usuario.

 Merece la pena validar mejor en el backend. Aunque si merece la pena hacerlo en el frontend.

 ```html
  <title>Document</title>
<style>
    .group-input {
      display: flex;
      flex-direction: column;
    }
    .error {
      display: none;
      color: red;
    }

    .form.invalid .error {
      display: block;
    }
    .block {
      display: block;
    }
  </style>
</head>
<body>
  <form class="form" id="form" novalidate>
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
  
  <script>
    const nameInput = document.querySelector('#name');
    const form = document.querySelector('#form');
    // nameInput.setCustomValidity("Error custom modificado!!!");    
    
    const showError = message => {
      const errors = document.querySelectorAll('form .error');
      errors.forEach((error, index) => {
        error.innerText = `${message} ${index}`;
      });      
      form.classList.add('invalid');
    };

    nameInput.addEventListener('keyup', () => {      
      form.classList.remove('invalid');
      console.log('quita el invalid!!!!');
    });

    form.addEventListener('submit', evt => {
      // console.log(evt.target.checkValidity());
      evt.preventDefault();
      
      if(!nameInput.validity.valid) {
        return showError(nameInput.dataset.error);
      }
    });
  </script>
</body>
 ```

## Maquetar nuestra Web TVMaze

Vamos a ir creando la estructura de carpetas que va a llevar nuestro proyecto.

Creo 2 carpetas debtro de src para el css `dia-2\src\css` y js `dia-2\src\js`

Para el tema de los estilos para la app, el instructor nos va a pasar todos los estilos, ya que no es contenido de esta parte del curso.

Los estilos que nos pasa el instructor, se ve un poco raro porque está hecho con sass, algo que veremos en el siguiente módulo pero que se lee mucho mejor.

Una cosa del css, el archivo `dia-2\src\css\styles.css` que es el principal donde hay imports ya que todo lo tiene separados en archivos o secciones de componentes, botnes, cards, etc. De esta forma organiza todo, pero esto tienen aún mas sentido cuando trabajamos con herramientas de preprocesado de CSS que veremos en el siguiente módulo.

Como en el `dia-2\src\index.html` los estilos los ha puesto con barra tengo que ejecutarlo con el `http-server`

Ejecutamos el servidor desde el terminal con `npm run server` 


- Si vamos a la consola de chrome y en network vemos los css que se están cargando, vemos que se están cargando todos y uno en cada archivo diferente, lo que no es bueno del todo, por lo que cada una de estas request tiene el Waiting(TTFB) que es el tiempo que cargan en hacer el `handshide`, osea en hacer la conexión con el server o abrir la conexión con el server.   Esto con http2 no pasa pero con lo que se está haciendo ahora si pasa y es lo más habitual, entonces eso no mola, tener un monton de archivos css así separados
- ¿y esto porque és? porque yo los estoy importando de esta manera.
```css
@import "variables.css";
@import "reset.css";
@import "button.css";
@import "loader.css";
@import "input.css";
@import "card.css";
@import "icon.css";
@import "detail.css";
@import "mainSection.css";
@import "navbar.css";

* {
  font-family: 'Roboto', Verdana;
}

a {
  color: initial;
  text-decoration: none;
}
```

Y se lo hace así porque queremos tener organizado nuestro css si o si, y para esto tengo que pagar el coste de tenerlo separado en varios archivos y que me haga varias request. 

Pero eso es un problema cuando está montado el css asi en plan vanilla, pero en el siguiente módulo esto va a cobrar mucho más sentido porque se va a importar de una manera en que todo va a ser un solo archivo y eso significa que todo va a estar en el `styles.css` cada uno de los css cargados se van poner en orden por importación y luego vamos a poder minificarlo, etc.

Esta vez como no estamos usando preprocesadores, va a dar un coste en el rendimiento.
Tener en cuenta que como esto esta sin preprocesadores, y saber que el tenerlo separado tiene un coste en el rendimiento.

Ahora agregamos el navbar:
```html
<!-- navbar -->
    <navbar id="navbar" class="app-navbar no-search">
      <div class="navbar-logo">
        <a href="/">TVMAZE</a>
      </div>
      <div class="navbar-right-actions">
        <div class="filter-container">
          <form id="search-form" class="filter-input" novalidate>
            <input data-pattern-mismatch="Input invalid" required placeholder="search your serie" class="input search" type="text">
            <button type="submit" class="button search">Search</button>
          </form>
        </div>
        <div class="navbar-icon">
          <i id="navbar-search" class="fas fa-search"></i>
          <i id="navbar-close" class="fas fa-times"></i>
        </div>
      </div>
    </navbar>
    <!-- navbar-end -->
```

Si vemos la consola del navegador y cambiamos el tamaño vemos que el navbar cambia si está en tamaño mobiles mostrando un ícono de buscar, o tamaño escritorio que muestra el input para buscar.

Trabajamos con la key o clase css `no-search` y si es que le cambio el `no-search` por `search` esta navbar cambia al layout con el input para ingresar búsqueda. 
La idea es jugar con esta clase para ahcer esta animaciòn al cambiar de pantalla mobiles a pantallas de escritorio.

Luego jugaremos con el formulario y tambien jugaremos a escribir y que cuando mandemos la petición haga la query filtrada y que nos devuelva ya los shows y los empecemos a pintar.