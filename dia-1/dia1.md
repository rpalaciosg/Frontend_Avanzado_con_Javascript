# Frontend Avanzado con Javascript

**Profesor: ** Kevin Martinez
Trabaja en GuideSmiths

- En frontend Avanzado va a ser el lenguaje javascript orientado al navegador.
- LLevar el trabajo real con el que se enfrenta todos los dìas a un curso.
- Se va a usar vanilla Javascrit nada de frameworks ni Jquery para manejar el DOM.
- Solo se usará una libreria.

## Requisitos previos
Conocimientos medios de Javascript
Tener git instalado y conocimientos bàsicos.

## Repositorios

https://github.com/kevinccbsg/web-bootcamp-2019-frontend

https://gitlab.keepcoding.io/keepcoding-bootcamps/full-stack-web-bootcamp-iv/desarollo-frontend-con-javascript

## Link de la aplicación
https://tvmaze-keepcoding-2019.herokuapp.com/

## La app tendra o veremos
- busquedas
- validacion de formulario
- Como renderizar
- Manejar las esperas con la carga, un poco la asincronia
- Como llamar a un API
- Como desarrollador fronted llamar a un API para manejarla.

## Clien-server model

**Modelo Cliente servidor**, es una aplicacion distribuida que divide tareas entre los providers(SERVIDORES EN NODE, JAVA) y luego los servicios requesters que son los clients(raspberryPi, televisor, navegador).

- Los clientes pueden ser, un pc, linux, mac, una app android o ios, un raspberrypi.
- 
- Tenemos que entender la diferencia que hay entre 'client side' y server side, y luego meter cliente side renderind y server side renderind.

## Frontend Development
Conocido como cliente side developmet, producir html, css y javascript, en una web para que el usuario pueda interactuar con el ella.
El frontend a cambiado mucho, ya no es lo mismo.
- cuando me enfrente a frontend hay un monton de deciciones que hacer.
  - Como se maneja ES6 (ECAM SCRIPT) dentro del DOM. BAse de javascript del frontend.
  - Lo importante es conocer ECMAscript, como funciona dentro del DOM.
  - Como maneja el css reactjs, como maneja el css Angular, o backbone.

## Javascript

Lenguaje de alto nivel, intepretado de scripting, basado en ECMAScript specification. Node lo implemente de una manera, los navegadores lo implementan de otra manera. y tiene sus diferencias.
ECMAScript es el standard del lenguaje.
    
    [https://github.com/tc39/ecma262](https://github.com/tc39/ecma262)

**Babel.js** : es una libreria de javascript para transpilar javascript moderno es decir compilarlo a algo que los browsers lo entiendan.

[https://babeljs.io](https://babeljs.io)

## ¿Como funciona Javascript?

Como funcionaria nuestro código en el browser o en el motor V8.

[How JavaScript works: an overview of the engine, the runtime, and the call stack](htpps://blog.sessionstack.com/how-does-javascript-actually-work-part-1-b0bacc073cf)

La forma que funciona javascript lo podemos dividir en 2 partes:

- **Memory Heap** : creas una variable o referencia donde se almacena.
- **Call Stacks** : Donde se apilan las llamadas de nuestro código, es decir si pongo un console.log, lo pone en el callstack, lo pinta en el navegador y cuando haga esa accion lo va a quitar. Si nos acordamos en Node, el js es multihilo, pero en el callstack si yo lo rompo se para todo. En Node si se cae, sale el error con un mensaje chungo de leer. PEro en el navegador deja de funcionar y dejan de funcionar los assets.

Tiene un poquito mas es en donde esta la magia de JS.
Luego tenemos en la parte de webs APIS que iremos viendo como el DOM. AJAX para ahcer peticiones (XMLHttpRequest) APIs especificamente. Timeout (setTimeout) estas son APIs internas dentros del navegador. Y la gracia que tiene es que pueden enviar a otra parte de este browser o motor V8 JS parte de su ejecucion al `Callback Queue`.

### Memory Heap
Cuando creas una variable se almacena en memory heap.
- Es donde se aloja la memoria.
- Aqui se puede entender cuando se hacen fugas de memoria, viendo el error o mensaje `memory leak`, esto no pasa tanto, xq js maneja su propio garbage collector y m,aneja su propia memoria.

### Call Stacks
Es donde se apilan las llamadas de nuestro código, es decir si yo pongo un console.log loq ue va a hacer es poner un console log en el Call stack, pinta en el navegador, y luego lo quita del call stack. JAva script era multihilo, es bueno ya que no hay problema para gestionar esos hilos, pero en el callstack si lo rompo, se para, es decir en el navegador deja de funcionar y de cargar los assets.

- Donde se apila la ejecución del código.
 
#### WEB APIs

- DOM (document)
- AJAX (XMLHttpRequest) para hacer peticiones a APIs de bakends
- Timeout (setTimeout) son apis dentro del navegador

- Son APIS internas dentro del navegador. No vienen dadas por el motor sino que las da el DOM. Está ECMA pero luego está como lo interpreta cada uno.

La gracia de estos es que pueden enviar parte de su ejecuciòn a otra parte del motor de javascript en este caso el browser o motor V8, al `Callback Queue`
**Callback Queue** -> esto es toda la parte de callback o parte asincrona.  Esto en la parte de Node est toda la parte de callbacks y parte asincrona.
Por ejm. en el navegador cuando hago un click, se va a jecutar eso de manera sincrona y eventualmente se resolvera. 
Funciona en el eventloop. (onClick, onLoad, onDone)

No vienen dadas por el motor si no que las da el DOM. Esta ECMA que es la especificacion del lenguaje pero luego esta como lo interpreta cada uno.

*Ejemplo:* Como se vería en el Callstack

```js
function multiply(x,y) {
    return x * y;
}

function printSquare(x){
   var s =  multiply(x,x);
   console.log(s);
}

printSquare(5);
```
El call stack queda limpio y es importante que quede limpio.

Es importante que esl Callstack quede limpio, por que si se llena da un error de `Uncaught RangeError: MAximum call stack size exceeded`. Vamos a ver el sigueinte ejemplo que da ese error.

```js
function foo() {
    foo();
}

foo();
```

Esta es una función recursiva que se llama a si mismo, básicamente es un bucle infinito. Se va a llenar el callstack llamando demasiadas veces a una funciòn, o es una parte que esta renderizando html y llama a otra función.

> Incluso puede ser una pregunta de entrevista, ¿porque es importante mantener el callstack limpio? = **Es porque no debemos bloquear al eventloop.**

### Event Loop

Estas funciones que habiamos dicho que son como asincronas, se quedan en el `Callback Queue`. 
Y cuando el callback actua?. Este se ejecutan cuando el `event loop` se lo dice, y Cuando se lo dice? 
Ps cuando el `Call Stack` está limpio, el event loop puede decir venga estas limpio,  1er timeout o lo que sea, y asi es como js va manejando esa asincronia.
No se debe tener funciones muy grandes o pesadas como subbucles, operaciones matematicas muy pesadas que dejen el Call Stack lleno, sino mis funciones asincronas no se van a resolver correctamente o mi web va a correr muy lenta.

- Monitoriza el call stack y el callback queue. Si el primero està vacio toma el primer evento del callback queue y lo manda al call stack.

### Callback Queue

Donde se almacenan las ejecuciones de las Web APIs asincronas. Mas o menos lo que está detras de escena con JS.

## Creando un Proyecto

- Vamos a usar node para arrancar un proyecto con el package.json y crear un miniservidor.
- Yo voy a crear este proyecto dentro de la carpeta de clases con nombre Ejercicio1.
- 
```sh
> npm init -y
```
El npm init -y es para que lo haga todo.

## Conceptos del día a día.

Estos temas lo vamos a ver en el terminal del navegador directamente. con ctrl + shift + i

### Destructuring

#### Destructuracion de objetos

Es muy útil, y se ve todos los días sobre todo en react.js. 
Algo que se usa mucho es este destructuring. 
Lo que hace es tener que acceder a una variable pero sin vía punto (.)

Ejemplo:

```js
var data = { title: 'title', age: 26, info: {detail: 'more info'} };
```
Se puede acceder a detail usando lo siguiente:

```js
    data.info.detail
```
Pero hay otras formas o hay una manera mas nueva o no muy nueva y mas interesante, que se usa bastante.
Ponemos `var {}` a la izquierda e igualamos al objeto o data a la derecha, y dentro de las llaves de la izquierda nos quedamos con lo que queramos usar. Ejm

```js
  var data = { title: 'title', age: 26, info: {detail: 'more info'} };
  var { title, age } = data;
title
"title"
age
.>26
```

Luego si usamos la variable title o age, ps vemos que la podemos usar normal y correctamente.

- Que mas podemos hacer, podemos hacerlo un poco más anidado, pero eso ya es un poco mas raro el instructor no lo suele usar tanto. Por ejemplo:

```js
  var { info: { detail } } = data;
detail
"more info"
```

Vemos que ya podemos usar la variable detail que está dentro de info haciendo `destructuring`.

Una cosa que le ha pasado al instructor aveces, con este ejemplo ya que nos es muy fan del `snakeCase` sino del `camelCase`. 
O por ejemplo mi UI no esta preparada para recibir este tipo de nombre de variables.

```js
var data = { main_title: 'title', main_age: 26, info: { detail: 'more info' } };
```
Entonces aquí decimos si hago destructuring me tengo que quedar con el nombre. Aveces para cambiar estos formatos de nombre de variables es usar, entonces lo que se ha hecho es:

```js
  var mainTitle = data.main_title
```
Pero con object destructuring podemos hacer otra cosita:

##### Dando alias con destructuring
Pero con `destructuring` podemos hacer otra cosita dandole un alias como:

```js
    var { main_title: mainTitle2} = data;
    mainTitle2
    "title"
```

Asi podemos decir que si mi UI no esperaba recibir snakeCase,yo me puedo formatear mi data de esta manera usando con alias.

Tambien puedo hacerlo con arrays.

#### Destructuracion de Arrays
Esto es para objetos pero con arrays también se puede. Ejemplo:

```js
    var data = [1, 'a',{ title: 'title3' },4,5]
    var [position1, position2] = data;
    position1
    1
    position2
    "a"
```

Aquí al darle un nombre como `position1` ese sera el nombre que tendrá la variable que voy a usar con el dato de la posición del array.

Pero que pasa *si solo quiero el objeto que está en la 3ra posición* y las demás me dan igual, entonces usando `destructuring` lo hago de la siguiente manera:

```js
    var [,,object] = data;
    object
    {title: "title"}
```

Lo que hago es saltarme con comas (,) las posiciones hasta llegar al dato que quiero. En este caso como quiero llegar al 3ro pongo 2 comas (,,) y luego el nombre de la variable.
Quedo una notacion un poco rara pero funciona.

Pero a esto lo podemos hilar un poquito mas todavia, por ejemplo si no quiero todo el objeto, puedo especificar un key dentro del objeto, de la siguiente manera:

```js
  var [,,{ title }] = data;
```

Tambien puedo aun enraizarlo un poquito mas y a parte ponerle un alias:

```js
  var [,,{ title: richard }] = data;
  richard
  'title3'
```

##### Dando alias con destructuring en arrays
Incluso puedo ponerle un alias.

```js
    var [,,{ title: richard }] = data;
    richard
```

Así puedo usar destructuring en arrays o en objetos para acceder a sus variables. Es una forma de acceder mas senccilla a las variables de un array, o a las keys de un objeto.
Entonces ya tendria las 3 cosas completas:
- Destructuracion de Objetos 
- Destructuracion de Arrays
- Y luego si el array es un arrays de objetos destructurarlo tambien, para ccesder a sus variables ya sea de un array o un objeto, ese es nuestro objetivo.

Esto es un concepto del dìa a día.

### Object Mutability (Mutabilidad)
Esto es un concepto del lenguaje. También es un tema del dìa a día.
Hay que entender que es mutable y que no es mutable.

#### Que es inmutable

Las variables de tipo string, number y booleam son inmutables, es decir no pueden ser mutadas con una referencia a ellas.

Ejemplo 1 inmutable:
```js
    var a=2;
    undefined
    var b = a;
    undefined
    b=3
    3
    a
    2
```
En este ejm. `a` sigue siendo igual a 2 a pesar de que aunque era b=a luego iguale b=3 a no cambio. Esto quiere decir que las variables tipo number no son mutables, o son inmutables. Es decir no pueden ser mutadas por una referencia a ellas.

Tambien pasa con los strings. Si yo por ejm:

Ejemplo 2:
```js
  var a = 'qwerty';
  undefined
  var b = a;
  undefined
  b = 'richard';
  "richard"
  b
  "richard"
  a
  "qwerty"
```

En este ejemplo se ve algo parecido al anterior, b=a es decir v tiene una referencia de a, pero al igualar b a otra cosa en este caso 'richard', la variable a no cambia y sigue valiendo 'qwerty', es decir es inmutable.


Pero aqui es donde ya entran los objetos y los arrays.


####  Que es mutable
Aquí es donde entran ya los objetos y los arrays y esto ya cambia la cosa, ya que al crear un objeto e igualar otro objeto a otro, si cambiamos el segundoobjeto que esta igualado al primero, el primer objeto que està referenciado también cambiará:

> Estos ejemplos no tienen nada que ver con var o let, se usa let para que el navegador luego no le diga de que ya esta definida y tal.

Ejemplo mutabilidad en objetos:

```js
    var contact = {title: 'titulo 1'};
    undefined
    var contact2 = contact
    undefined
    contact2.number = 21
    21
    contact2
    {title: "titulo 1", number: 21}
    contact
    {title: "titulo 1", number: 21}
    contact.title = null
    null
    contact.title.a
    VM496:1 Uncaught TypeError: Cannot read property 'a' of null
        at <anonymous>:1:15
    (anonymous) @ VM496:1
```

Aqui en el ejm anterior vemos que al hacer `contact2.numer=21` aniadimos un nuevo key al objeto contact2. Pero si revisamos tambien el `contact` normal, vemos que tambien a cambiado.

>Esto es un problema, ya que si por alguna razòn se tenia referenciado un objeto al cambiar la variable que referencia a ese objeto ps se cambiaría todo.

Es decir si tenia la variable contact para otra parte del UI, ps le estoy aniadiendo una key demas.

Pero un problemas mas grande seria si yo asigno null a un key y este tiene referenciado a otro objeto:

```js
  contact2.title = null
  null
  contact
  {title: null, number: 21}
  contact.title.a
  VM1480:1 Uncaught TypeError: Cannot read property 'a' of null
      at <anonymous>:1:15
```
ESto si es un problema tipico de JS: ya que me daria el error `VM1480:1 Uncaught TypeError: Cannot read property 'a' of null at <anonymous>:1:15`

Con los **Arrays** pasa lo mismo, a lo mejor no es un problema, depende tambien de como este planteando el sistema, pero por lo general se intenta evitar:

Ejemplo mutabilidad en arrays:

Si por ejm defino un array que sea 
```js
    var data = [1,3,4]
    undefined
    var data2 = data
    undefined
    data2.push(5)
    4
    data2
    (4) [1, 3, 4, 5]
    data
    (4) [1, 3, 4, 5]
```
Si agregamos un nuevo elemento `5` al array data2, imprimirmos data2 y vemos el nuevo elemento, luego si imprimirmos el arraya data, vemos que tambien se agrego el elemento 5, esto por data2 tenia una referencia a data, y es mutable.


Un companiero hace una pregunta: Si yo quiero clonar un objeto sin tener que hacerlo manualmente haciendome una funcion o algo, existe algo de ECMAscript o alguna lib externa para clonar un objeto sin tener que modificar el original. 
Respuesta instructor: Si existe desde antes de ECMAscript 6 pero vamos a ver las 2 maneras ahora. Es sencillo. Al final talvez no es muy vistoso pero se puede hacer.



#### Corregir la mutabilidad en los arrays y lso objetos.

ASi que tenemos claro esto, que hay 2 problemas que hay que solucionar son:  la mutabilidad en los arrays y la mutabilidad en los objetos.

La idea es clonar un objeto.

Hay dos maneras de hacer esto:

##### Primera forma de clonar un objeto o array y que no sea mutable
La primera es tomando el objeto pasarlo a `string` usando el `JSON.stringify` luego ese objeto convertido a string parsearlo a JSON usando `JSON.parse`.


Esta forma no se usa mucho pero es una forma y si es que la preguntan en una entrevista:
```js
    var contact = {title: 'titulo 1'};
    undefined
    var contact2 = JSON.parse(JSON.stringify(contact));
    undefined
    contact2
    {title: "titulo 1"}
    contact2.name = 1
    1
    contact2
    {title: "titulo 1", name: 1}
    contact
    {title: "titulo 1"}
```
Aqui se clona el contact en contact2, y al agregar un elemento al contact2 usando JSON.parse(JSON.stringify(conctact)), este contact se hace inmutable. (Cogemos el objeto lo pasamos a un string y luego lo volvemos a pasar a objeto, esto como que limpiaria la referencia por asi decirlo).

Esta forma el instructor casi no la usa nunca pero la aniadido porque aveces la toman como preguntas de entrevistas, y te pueden preguntar a y como lo haces con lo que te da la especificacion ECMAscript 6.

Esto seria una buean forma de clonar un objeto y que sea inmutable:
```js
    var objetc1 = {data: 1, detail: { info: 'My info' } };
    var cleanCopy = JSON.parse(JSON.stringify(object1));
    cleanCopy
    {data:1, detail:{info: 'My info'}}
    object1
    {data:1, detail:{info: 'My info'}}
    cleanCopy.detail.info = 'Second info';
    cleanCopy
    {data:1, detail:{info: 'Second info'}}
    object1
    {data:1, detail:{info: 'My info'}}

    // lo hago un poco mas funcional
    const cleanCopy = obj => JSON.parse(JSON.stringify(object1));
```

Se puede hacer una copia limpia con este método. El cleanCopy es una funcion que me hara copias limpias de objetos.

##### Segunda forma de clonar un objeto o array y que no sea mutable
La manera mas usada hasta ahora es usar `Object.assign()` al cual se le pasa como parametro un objeto vacio `{}` y como segundo parametro el objeto que queremos clonar en este caso el objeto `contact`, es decir igualar en un objeto vacio lo que tiene el objeto contact.


```js
    var contact = {title: 'titulo 1'};
    undefined
    var contact2 = Object.assign({}, contact);
    undefined
    contact2
    {title: "titulo 1"}
    contact2.name = 1
    1
    contact2
    {title: "titulo 1", name: 1}
    contact
    {title: "titulo 1"}
```

Es la que mas se ha usado o por lo menos el instructor, pero con la nueva feature de JS llamada `SPREAD operator` ya se usa o la usa cada vez menos:

#### SPREAD operator (corrigio el tutor)

Con esta nueva feature de JS hacemos casi lo mismo que el `Object.assign` pero ahora usamos un objeto en el que le pasaremos  3 puntos seguidos y el nombre del objeto a clobnar `{ ...objeto_a_clonar }`.

Esto funciona igual pero ya no es necesario escribir `Object.assign`

Esta seria la forma que mas se va a ver o que mas voy a usar.

```js
// SPREAD OPERATOR
    var contact2 = { ...contact };
    undefined
    contact2.name = 1
    1
    contact2
    {title: "titulo 1", name: 1}
    conctact
    VM1429:1 Uncaught ReferenceError: conctact is not defined
        at <anonymous>:1:1
    (anonymous) @ VM1429:1
    contact
    {title: "titulo 1"}
```

Este `SPREAD OPERATOR` se puede usar tanto para objetos, arrays o parametros de funciones.

##### Sintaxis SPREAD para parametros de funciones Arrays literales o Strings


El SPREAD OPERATOR para los parametros de una funcion eso si es mas antiguo que ES6.

Lo bueno del SPREADOPERATOR es si tenemos estos 2 objetos a y b:

```js
  var a = { name: 'name'}
  var b = {surname: 'surname'}

```
Y ahora queremos crear un objeto 'c' que sea las 2 cosas, que tenga tanto a como b:

- Una forma no tan buena o bonita es hacerlo igualando las keys de cada objeto:

```js
  var c = {}
  c.name = a.name
  "name"
  c.surname = b.surname
  "surname"
```
- Otra forma mas rapida y mejor es hacerla con Object.assign():

```js
  var c = Object.assign({}, a, b);
  c
  {name: "name", surname: "surname"}
```

Ahora el mismo ejemplo con SPREAD OPERATOR:

```js
  var c = { ...a, ...b};
  c
  {name: "name", surname: "surname"}
```

Lo chevere del SPREAD OPERATOR es que puedo meter mas cosas, por ejm: le metos otros  keys, unos iteems, en este caso un array de items, y ahora 'c' vale todo eso:
```js
  var c = { ...a, ...b, phone: 123, items: [1,2] };
  c
  {name: "name", surname: "surname", phone: 123, items: Array(2)}
```

Es un manejo de objetos muy comodo, lo tengo ahi bien identado con un editor es muy comodo hacerlo de esta manera.

Pero me puedo estar preguntando que pasa si los 2 objetos tienen la misma key, que pasa ahi da un error?, no da error!, vamos aprobarlo cambiando el key de 'b' surname por name y comprobarlo:

```js
  var b = {name: 'surname'}
```

Si yo ahora hago la sentencia que hicimos aqui `var c = { ...a, ...b};` lo que va a pasar es que c solo va a tener una clave name y se va apisar con la de b, porque primero coge uno y luego el siguiente, y con Obvject.assign es exactmente lo mismo.

Por eso es muy importante el orden en que se pasan los objetos, ya que si los objetos a pasarle usando `Object.assign` o `SPREAD OPERATOR` tienen las mismas keys, esta se pisaran con la del último objeto que se le pase.

```js
    var a = { name : 'name' }
    undefined
    var b = { surname: 'surname'}
    undefined
    var c = {}
    undefined
    c.name = a.name
    "name"
    c.surname = b.surname
    "surname"
    var c = Object.assing({}, a, b );
    VM1727:1 Uncaught TypeError: Object.assing is not a function
        at <anonymous>:1:16
    (anonymous) @ VM1727:1
    var c = Object.assign({}, a, b );
    undefined
    c
    {name: "name", surname: "surname"}
    var c = { ...a, ...b }
    undefined
    c
    {name: "name", surname: "surname"}
    var c = { ...a, ...b, phone: 123, items: [1,2] };
    undefined
    var b = { name: 'surname'};
    undefined
    var c = { ...a, ...b }
    undefined
```

Aqui un companiero hace una pregunta: con Object.assign() solo copias el primer nivel de propiedades del objeto, es decir un subnivel del objeto seria mutable? Osea no hace un copiado profundo.

Y es correcto, hay que tener en cuenta que al clonar un objeto que tiene objetos anidados los items u objetos anidados son mutables cuando se usa el `Object assing` y `SPREAD OPERATOR` (corrigio tutor), en cambio usando el `stringify`  esto si hace una copia profunda y se hacen inmutables.
```js
    var b = { surname: 'surname', detail: { info: 1234} };
    var a = Object.assign({} , b);
    a
    {surname: "surname", detail: {…}}detail: {info: 1234}info: 1234__proto__: Objectsurname: "surname"__proto__: Objectconstructor: ƒ Object()hasOwnProperty: ƒ hasOwnProperty()isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ toLocaleString()toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()get __proto__: ƒ __proto__()set __proto__: ƒ __proto__()
    a.detail.info = 123123123
    123123123
    b
    {surname: "surname", detail: {…}}
```

Para evitar esto se puede usar el stringify o el SPREAD OPERATOR (corrigio el tutor) pero aumentando las keys de las llaves de objetos anidados, o funcionaria sin agregar las demas keys a menos que el objeto contenga solo valores primitivos para que sean `inmutables`: 
```var a = { ...b, detail: { ...b.detail } };```

```js
    var b = { surname: 'surname', detail: { info: 1234} };
    var a = { ...b };
    a.detail.info = 'erororor';
    "erororor"
    a
    {surname: "surname", detail: {…}}
    detail: {info: "erororor"}
    surname: "surname"
    __proto__: Object
    b
    {surname: "surname", detail: {…}}
    detail: {info: "erororor"}
    surname: "surname"
    __proto__: Object
    
```

Como vemos si clonamos el objeto solo con un SPREAD OPERATOR los demas niveles se hacen mutables, Pero si clono los objetos con SPREAD OPERATOR e incluyo SPREAD OPERATOR en sus keys o subniveles, evitamos esta mutabilidad. 
Nota debo probar que tan eficiente en codigo seria y probar con objetos sumamente grandes  y con varios subniveles, creo que seria demasiado codigo o keys que repetir con SPREAD OPERATOR.  

```js
    var a = { ...b, detail: { ...b.detail } };
    
    a.detail.info = 5678;
    5678
    b
    {surname: "surname", detail: {…}}
    detail: {info: "erororor"}
    surname: "surname"
    __proto__: Object
    a
    {surname: "surname", detail: {…}}
    detail: {info: 5678}
    surname: "surname"
    __proto__: Object
```

Aqui vemos un ejemplo con mas subniveles, y clonamos con SPREAD OPERATOR pero usandolo solo en los keys del primer subnivel:

```js
  var x = { name: 'name', detail: { second: 'xyz', dir: { calle: 'Calle1' } }, info: { tercero: 1234 } }
  var y = { ...x, detail: { ...x.detail }, info: { ...x.info } }
  y // imprimo y
  {name: "name", detail: {…}, info: {…}}
    name: "name"
    detail:
    second: "xyz"
    dir: {calle: "Calle1"}
    __proto__: Object
    info: {tercero: 1234}
    __proto__: Object

  // cambio la key calle
  x.detail.dir.calle = 'Gonzalo Pizarro'
  y // imprimo nuevamente y
  {name: "name", detail: {…}, info: {…}}
    name: "name"
    detail:
    second: "xyz"
    dir: {calle: "Gonzalo Pizarro"}
    __proto__: Object
    info: {tercero: 1234}
    __proto__: Object
```

Vemos que el 2do subnivel, el objeto dir, se ha hecho mutable.

Para corregir esto entonces debemos clonar el objeto pero usando el SPREAD OPERATOR incluso en los niveles necesarios para evitar la `mutabilidad` , lo que indica que debemos usar mas codigo y se hara menos legible:

```js
  var y = { ...x, detail: { ...x.detail, dir : {...x.detail.dir } }, info: { ...x.info } }
  y //imprimo y
  {name: "name", detail: {…}, info: {…}}
    name: "name"
    detail: {second: "xyz", dir: {…}}
      second: "xyz"
      dir: {calle: "Gonzalo Pizarro"}
      __proto__: Objectinfo: {tercero: 1234}__proto__: Object
  // cambio el key calle dentro del segundo subnivel
  x.detail.dir.calle = 'Bartolome Ruiz'
  y // vuelvo a imprimir y
  {name: "name", detail: {…}, info: {…}}
    name: "name"
    detail: 
    second: "xyz"
    dir: {calle: "Gonzalo Pizarro"}
    __proto__: Objectinfo: {tercero: 1234}__proto__: Object
```
Como vemos se logra la `INMUTABILIDAD` pero la sintaxis o codigo se hace mas compleja de entender.

Me quede aqui en el minuto 48:12, se explica porque el SPREAD OPERATOR y object.assign no hacen una copia profunda.

##### Corregir inmutabilidad en arrays
Ejemplo de como corregir la mutabilidad en arrays.

Una forma es usar `concat` para concatenar un array vacio con el array que se quiere clonar.

```js
var arr = [1,2,3,4,5]
undefined
var newArr = [].concat(arr);
undefined
newArr.push(2);
6
newArr
(6) [1, 2, 3, 4, 5, 2]
arr
(5) [1, 2, 3, 4, 5]
```

##### Arreglar mutabilidad con SPREAD OPERATOR (corrigio tutor) en Arrays
Hay un equivalente de rest operator en arrays. igualmente enun array se pasa 3 puntos con el array a clonar  [...array_a_clonar]

```js
    // SPREAD OPERATOR
    undefined
    var newArr = [...arr];
    undefined
    newArr
    (5) [1, 2, 3, 4, 5]
    newArr.push('asd')
    6
    newArr
    (6) [1, 2, 3, 4, 5, "asd"]
    arr
    (5) [1, 2, 3, 4, 5]
```


### Arrow functions

Aquí vamos a ver como se escriben y las diferentes maneras de escribirlas.

Ejemplo tìpico de Arrows functions
```js
    var foo = (a,b) => {
        return a + b;
    }
    undefined
    var foo = (a,b) => a + b;
    undefined
    foo(1,3)
    4
```
Ejemplo de arrow function para devolver un objeto:
```js
    var foo = (title) => {
        return {title}
    }
    undefined
    foo('123')
    {title: "123"}
    var foo = (title) => {title};
    undefined
    foo('123')
    undefined

```
Un problema que tenemos con las arrow functions es que al devolver un objeto y usar la forma minificada en una sola lìnea del arrow function, js entiende las llaves del objeto como si fueran las llaves de inicio de ejecuciòn, para corregir esto debemos poner el objeto a retornar entre parentesis,

```js
    var foo = (title) => ({title});
    undefined
    foo('123')
    {title: "123"}
```
Esto es muy común para hacer formateo de arrays con `map` y `filter`
```js
    var foo = title => (
        {title}
    );
```
Otra forma de cuando se tienen que hacer un return con llaves se puede tambien hacer esto, en lugar de poner las llaves se pone entre parentesis

Los parentesis tambien pueden vales para hacer la suma:
```js
    var foo = (a, b) => (
        a + b;
    );
```

### REST OPerators en funciones
Este REST OPERATOR se puede usar en los parametros de una funcion, independientemenete si es un arrow function o una function normal.

Debo poner el nombre de los paramtros con 3 puntos y entre parentesis (...params), y en este caso lo que nos devolvería es un array. Es decir podría tener acceso a ellos como si estuvieran en un array.

```js
    var foo = (...params) => {
        console.log(params)
    }
    foo(1, 2, 3)
    VM3765:2 (3) [1, 2, 3]
```

Otra cosa que puedo hacer tambien es:
Lo que hace es devolver o imprimir el primer parametro y el resto devuelve en un array
```js
    var foo = (first, ...rest) => {
        console.log(first, rest)
    }
    undefined
    foo(1,2,3,4)
    1 (3) [2, 3, 4]
```
Por ejemplo podria ser en el primer parametro le estoy pasando una `id` a mi UI y en el ...rest, todo lo que tiene que pintar.

Esto se usa bastante.

### Modificaciones en arrays usando map, filter y reduce.

#### Filter

**Ejemplo 1** : Del siguiente array obtener solo los valores que no son null. (usaremos la funcion `filter`)
```js
    var data = [null, 1, null, null, null, 2, 3]
    undefined
    var filterData = data.filter(function(item){
    })
    undefined
    var filterData = data.filter(function(item){
        return true;
    });
    undefined
    filterData
    (7) [null, 1, null, null, null, 2, 3]
    var filterData = data.filter(function(item){
        return false;
    });
    undefined
    filterData
    []
    var filterData = data.filter(function(item){
        return item !== null;
    });
    undefined
    filterData
    (3) [1, 2, 3]
    var filterData = data.filter((item) => item !== null);
    undefined
    filterData
    (3) [1, 2, 3]
    var filterData = data.filter(item => (
        item !== null
    ));
    undefined
    filterData
    (3) [1, 2, 3]
```

#### Map
Map me permite devolver un nuevo array pero aplicando algo o una funcion a cada item en la iteraciòn.

```js
    var mapValues = filterData.map(function(item) {
        return 1;
    });
    undefined
    mapValues
    (3) [1, 1, 1]
    var mapValues = filterData.map(function(item) {
        return item * 2;
    });
    undefined
    mapValues
    (3) [2, 4, 6]
    var mapValues = filterData.map( item => (
        item * 2
    ));
    undefined
    mapValues
    (3) [2, 4, 6]
    var mapValues = filterData.map( item => item * 2 );
    undefined
    mapValues
    (3) [2, 4, 6]
```

Estas funciones tambien las podemos unir, en lugar de hacerlo en un bucle for o while, ya que el lenguaje nos permite hacer estas cosas interesentes.
Es bueno primero filtrar los datos antes porque te quitas datosy se tienen que mapear menos datos.
Veremos que se usará mucho esto en nuestras vistas, lo que haremos es un mao de datos quenos llegan de un API y crearemos un template y eso lo pintaremos en el UI.

**Ejemplo uniendo filter y map**

```js
    var data = [null, 1, null, null, null, 2, 3]
    undefined
    var dataTotal = data
    .filter(item => item !== null)
    .map(item => item * 2)
    undefined
    dataTotal
    (3) [2, 4, 6]
```
#### Reduce

Toma un array y lo convierte en otra cosa.
El reduce recibe 2 parametros una function y el parametro inicial.
Lo que vamos a hacer es convertirlo en un objeto como este ```{ 'item-1': 1, 'item-2': 2, 'item-3':3 }```

```js
    var data = [1,2,3]
    var result = data.reduce(function (acumulado, item) {
        console.log(acumulado, item)
        return { [item]: item};
    }, 2);
```
Lo que hace [item] es que el item sera el key del objeto a retornar.

Ademas para obtener o acumular el resultado voy a hacer uso de REST OPERATOR  del objeto a retornar. { ...acumulado, [item]:item }

```js
    var result = data.reduce(function (acumulado, item) {
        return { ...acumulado, [`item-${item}`]: item };
    }, {});
    result
    {item-1: 1, item-2: 2, item-3: 3}
```

Podemos escribir esto tambien usando arrow functions:
```js
    var result = data.reduce( (acumulado, item) => ({ ...acumulado, [`item-${item}`]: item}), {});
```
Si quiero que se vea un poco mas legible puedo ponerlo así;

```js
    var result = data.reduce( (acumulado, item) => (
        { ...acumulado, [`item-${item}`]: item}
    ), {});
```

## Preguntas de entrevistas

### Variables

#### ¿Que es el Hoisting?
Basicamente es el mecanismo en el que las variables se declaran y son movidas a la parte de arriba del scope, y estan declaradas ya directamente.
El hoisting pasa tambien con las funciones.

**Ejemplo**
```js
    var data=1;
    console.log(data, message);
    1, undefined
    var message = 2;
```

Para corregir esto del hoisting llegan el let y const.
Entonces cuales son las diferencias entre var y let.
- Var: Puede ser accedido desde cualquier parte del código.
- Let: Solo en el scope que lo contiene y tambien despues de que se ha definido. Es chevere usar let y const para evitar `side effect` que nos pueda cambiar algo que no esperamos.

### Context
A que se refiere esto del contexto. Que es el contexto de una función?

#### Poque quiero hacer esto?
Podriamos crear una funciones mas generica donde cualquiera pueda decidir el contexto y que la funcion sea mas reusable. Esto no va a cambiar el contexto para siempre y me da ese tipo de flexibilidad.


#### ¿Como puedo cambiar el contexto a una funcion?
Si quiero cambiar el contexto puedo usar `bind`, `call` y `apply`

##### bind
- Envia el nuevo contexto a una funcion pero sin ejecutarse.
El bind lo que hace es devolver la función cambiada el contexto pero sin ejecutar. En el ejemplo anterior lo que hago es pasarle el contexto a la función `description()`, es decir le puedo pasar como contexto mi objeto dog, entonces lo que va a hacer description es añadir esas variables a mi contexto.

```js
    const dog = {
        name: 'Kasper',
        age: 3
    };
    const description = funtion () {
        const {name, age } = this;
        console.log(`This is ${name} and is age is ${age}`);
    };

    const foo = description.bind(dog);
    foo();
```

El contexto va a estar disponible para la funcion que hace la referencia al contexto.

SE puede crear funciones que en vez de recibir parametros reciba uno o varios contextos, entonces puedo tener diferentes description()

```js
const kasperDescription = description.bind(dog);
const otroperroDescription = description.bind(dog);
```
Se puede usar bastane en el rrollo funcional.

##### call
Ejecuta la funcion con el contexto seleccionado o pasado en el segundo parametro.
Es distinta a bind, lo que hace es recibir el contexto y los parametros necesarios y se ejecuta directamente la funcion.

```js
    const dog = {
        name: 'Kasper',
        age: 3
    };
    const description = funtion (...params) {
        const {name, age } = this;
        console.log(`This is ${name} and is age is ${age}`);
    };

    description.call(dog,1,2);
```
El call se puede usar, pasando el contextoy mas parametros, y lo que harà es devolver un array con los parametros y luego el contexto.

##### apply
La diferencia con call es que en lugar del contexto y los parametros, se le pasa el contexto y un array de los parametros. Aqui lo que tengo que introducir en este description( ...params ) son parametros.



```js
    const dog = {
        name: 'Kasper',
        age: 3
    };
    const description = funtion (...params) {
        const {name, age } = this;
        console.log(`This is ${name} and is age is ${age}`);
    };

    description.apply(dog, [1,2]);
```
Lo que recibo es un array  y luego el contexto.

SI quisiera obtener lo mismo que hice con call un array con cada parametro, como apply lo que recibe como 2do parametro es un array deberia pasar un array con otra array dentro con cada uno de sus parametros.
```js
      const description = funtion (firts) {
        const {name, age } = this;
        console.log(`This is ${name} and is age is ${age}`);
    };

    description.apply(dog, [[1,2]]);
```
Esto simularia lo que hace el call.
Esto ya depende si es que para los parametros quieres usar un array usas `apply` o si se quiere usar varias variables como parametros uso call.

### Arrow Functions Context
Las arrows functions no cambian el contexto, estas no son solo un sintantix sugar sino que el contexto influye.
Lo que hace el arrow funtcion es que toma el contexto en donde ella está, o el que le he pasado en este caso es `Window`.

HAy que tener cuidado con las arrow functions, que usa el contexto es el anterior.

```js
    const dog = {
        name: 'Kasper',
        age: 3
    };
    //const description = function () => {
    const description = () => {
        const {name, age } = this;
        console.log(this)
        console.log(`This is ${name} and is age is ${age}`);
    };

    description.call(dog);
```

Como podemos ver o probar esto es retornando una arrow functinn en el return, y nos daremos cuenta que retornará según el mismo contexto en el que esta o que le pasemos en este caso `dog`. 
> nota para ejecutar esto debemos usar otro par de parentesis ya que el return tambien es una función.
```js
    const dog = {
        name: 'Kasper',
        age: 3
    };
    //const description = function () => {
    const description = () => {
        const {name, age } = this;
        console.log('primero',this)
        console.log(`This is ${name} and is age is ${age}`);
        return () => {
            console.log('segundo',this);
        };
    };

    description.call(dog)(); // ejecuto la funcion que retorna
```

Lo contrario podemos ver si en el return retornamos una function normal, a pesar de modificarle o parsarle el contexto con con call. en este caso vemos que nos devuelve segun el contexto en el que está en este caso `window`

```js
    const dog = {
        name: 'Kasper',
        age: 3
    };
    //const description = function () => {
    const description = () => {
        const {name, age } = this;
        console.log('primero',this)
        this.text = 1;
        console.log(`This is ${name} and is age is ${age}`);
        return function () => {
            console.log('segundo',this);
        };
    };

    description.call(dog)();
```

Hay que tener en cuenta esto de las arrows functions, ya que el contexto influye.

### Clases

JS en su incio, antes de que saliese la palabra reservada `class` se hacia de una forma diferente que era hacer una función que hacia las de constructor y  luego se definian prototipos.

Ejemplo forma antigua:

```js
    function Persona(name) {
        this.name = name;
    }

    const kevin = new Persona('kevin');
    console.log(kevin);
```

Estariamos creando un objeto persoan el cual hereda de el objeto `Object`.

Como se le añadian métodos:
```js
    function Persona(name) {
        this.name = name;
    }

    Persona.prototype.description = function () {
        console.log(`This is: ${this.name}`);
    }

    const kevin = new Persona('kevin');
    kevin.description();
```
> Tener en cuenta que el orden de como se crean los `prototypes` importa, deben estar antes de que se los referencia o se los llame.

Entonces la equivalencia de esto anterior usando la palabra reservada `class`

Ejemplo usndo class:

```js
    class Persona {
        constructor (name) {
            this.name = name;
        }

        description() {
            console.log(`This is: ${this.name}`);
        }
    }

    const kevin = new Persona('kevin');
    kevin.description();
```

Si queremos hacer una herencia que extienda o herede de persona:

```js
    class Persona {
        constructor (name) {
            this.name = name;
        }
        description() {
            console.log(`This is: ${this.name}`);
        }
    }

    class Programador extends Persona {
        constructor(name) {
            super();
            this.name = name;
        }
        jobPosition() {
            console.log(`${this.name} is a developer`);
        }
    }

    const kevin = new Programador('kevin');
    kevin.jobPosition();
```

Esto en el UI no se usa mucho o no se suele ver mucho, lo que se hace es usar `Closures` en un tipo medio funcional, que es una funcion que retorna o devuelve una función. Esto se verá mas adelante con el código en el UI.

**Pregunta:** ¿SI a la llamada de super no hay que pasar su variables de parametros?

Lo que mas o menos se suele usar es algo como esto:

```js
    const Persona = (name, extraParameter = {jobPosition: () => 0 }) => {
        const name = name;
        return {
            description: () => console.log(`This is: ${this.name}`),
            ...extraParameter
        }
    };

    const kevin = Persona('kevin');
    console.log(kevin);
    kevin.description();
```
Esto es un metodo que recibe los parametros o variables,  se crean constantes y se igualan a esos parametros, y se retorna un objeto con los distintos métodos.
Aquí ya no se pone new, seria mas cómodo si lo ponemos dentro de un map o filter.

### ¿Que es el DOM?

DOM (Document Object Model), e suna cross platform, y lenguaje independiente de interfaces que trata un XML o documento HTML como una estructura de arbol, donde cada nodo es un objeto que representa una parte del documento.

Document no hay en html solo es a nivel del browser.

Si es que en una pagina en la consola del navegador escribimos document, podremos acceder al document y a todos sus nodos, por ejemplo, html, head, body, etc.

```js
document
#document<!doctype html><!--[if lt IE 10]><html lang="en" class="ie9"><![endif]--><!--[if lt IE 9]><html lang="en" class="ie8"><![endif]--><!--[if !IE]><!--><html lang=​"es" class=​"js svg wf-myriadpro1-n7-active wf-myriadpro1-i7-active wf-myriadpro1-i4-active wf-myriadpro1-n4-active wf-myriadpro1-n6-active wf-myriadpro1-i6-active wf-active translated-ltr">​<!--<![endif]--><head>​…​</head>​<body class=​"bsmq wireframes nbc targetTop top" id=​"wireframes">​…​</body>​</html>​
www-embed-player.js:382 GET https://googleads.g.doubleclick.net/pagead/id net::ERR_BLOCKED_BY_CLIENT
De @ www-embed-player.js:382
Ce @ www-embed-player.js:368
(anonymous) @ www-embed-player.js:644
L @ www-embed-player.js:254
Di @ www-embed-player.js:641
(anonymous) @ www-embed-player.js:658
```
Como vemos se abre la estructura del html.

Escribiendo en html estamos escribiendo en DOM, entonces lo que haremos con javascript lo que podemos hacer es acceder a este DOM, al html jugar con partes del DOM, acceder a las clases, jugar con sus propiedades, crear nuestros propios layouts.

Porque puedo acceder a document en la co nsola, es porque en el browser todo lo que venga de `window` es accesible. 
Document biene en realidad un nodo anterior que es window, que es de donde viene todo.

```js
    window.document
```

Para poder entender mejor de que podemos hacer, como lo podemos manipular o como lo podemos tratar, es hacer los primeros pasos en TVMaze, que es la aplicacion de practica del curso.

Cosas que deberia saber tambien un desarrollador frontend que son:
- Herramientas de diseño.
- Consejos de CSS

### Developers vs Designers
Los developers ven el diseño de otra manera, y los designers no ven la complejidad. Es muy importante que como desarrolladores saber comunicarnos con el equipo de diseño.
Debemso conocer y saber desemvolvernos con las herramientas con las que vamos a trabajar en la maquetacion o al desarrollar un prototipo sin tener que crear todo un sistema de diseño. Las herramientas mas famosas son:
    - Figma
    - Adobe Xd
    - Zeplin
    - Framer
    - Sketch
    - Stage & Gallery
    - ProtoPie
    - Adobe Ilustrator

Unas que nos pueden servir a nivel de frontend son:
    - balsamiq wireframes: es sencillo prototipar
    - Photoshop: Hay qgente que diseña con photoshop, es para experiencias mas para UI.
    - Adobe Xd: es parecido a sketch para la gente que no tiene mac
    - Framer: Es el favorito del instructor, se pueden animar, puedes validar la idea mucho mas rapido. Esta herramienta permite exportar los componentes en Reac.js por lo que en teoria podrias tener medio trabajo hecho con esos componentes. Tambien puedes traer tu componente en React.js y ponerlo con los demas componentes de Framer.
    - inVision: Es el que mas se verá, Hace mockups de animar, se puede construir y poner comentarios, feedback. Tiene modo de inspeccion, dice paddings, distancias, muestra el grid, muestra los estilos, los colores, etc.
    - Zeplin: Al instructor le gusta mas, porque el tema de medidas, y la forma de obtener los assets, es mas comod que invision, por ejem. te da un color pallete, que puedes descargar o exportar un archivo. Tiene mejor experiencia.

### Mobile First y Alcance
Algo muy importante es el mobile first, es una más, si me pasan un diseño que no es mobile first, devolverlo y que lo entreguen en mobile first. Es muy importante.
Por lo general es improtante porque genera valor a un cliente.

#### Alcance
Hay que tener presente el alcance, que plataforma voy a soportar. Es improtante tener claro a que alcance.
- Que plataformas voy a soportar, por ejem personas que solo quieran trabajar en IE 11 con suerte es como un dolor, es trabajar con tu chrome para no hacer nada, ya que va afuncionar distinto o incluso no funcionar, entonces hay que tener claro para luego no comerte el marron de todo lo que he hecho lo tengo que llenar de Polyfills, de parches y cosas que lo podemos haber evitado desde el principio.

### Consejos de CSS
PAginas o herramientas que van a servir para la practica:
    - coolors.co : Le gusta al instructor porque genera una paleta de colores con un color main, lo bloqueas y luego puedes ir generando una paleta con sentido que p uedas llevar a una web. Lo que suele hacer es tener un color main y uno secundario distintivo y d eahi ya colores grises eso nunca falla.
    - material.io: Es como una especie de layout. Se va jugando con tonalidades grises. [https://material.io/resources/color/#!/?view.left=0&view.right=0]

A pesar de que no tenermos módulo de Diseño, el instructor nos pasa unos links y post con las pautas que los developers deben saber sobre el diseño.
    - gerarquias,
    - consistencia
    - coloresalineados
    - espacios
Para tener claro eso.
Hay que trabajar el ojo, para un frontend lo bueno es consumir buen contenido, es decir consumir webs de calidad.
(https://www.cssdesignawards.com/)[https://www.cssdesignawards.com/] - Son webs que han ganado premios. Que tienen buen diseño.
Es una web muy chula que te ayuda a entrenarte, para ver sie staoy lelvando el diseño bien o nó, Te dice esta web esta bien diseñada o nó y vas votando.

- Con ilustrador de adobe creo tambien el UI y puedo exportar elementos directamente para usar.

#### Variables CSS

#### Sprites
Me quedé en Spirtes en el tiempo 2:34:49
Crearemos un ejemplo de sprites en la carpeta `dia-1/Ejercicios/css-examples/` para el ejemplo de sprites.
¿Que son los sprites?
Basicamente es una imagen, que tienen distintas imagnes e distintos pixeles. 
- Esto en la web de que me sirve, estas imagenes talvez pesen menos en diferentes imagenes que en una sola, y es verdad, pero la ventaja es que así hago menos peticiones al servidor.
- Lo que queremos conseguir es obtener estos diseños o hacer uno para la practica y saber como gestionarlos.
- Es importante que el tamaño de las imagenes sea parecido.
- Lo que generalmente se usa es un sprite generator `https://spritegen.website-performance.org/` (https://spritegen.website-performance.org/)[https://spritegen.website-performance.org/]
- Se puede pedir a los diseñadores, que todo el banco de iconos los pasen en un sprite.
- Lo que se hace en esta pagina es crear un sprite a partir de imagenes.
- Podemos exportar los settings.txt para tenerlos guardados
- Y tambien podemos descargar el png, el CSS y HTML.
  - El css lo que hace es generar un sprite
  - Ese css  y la imagene .png las exportamos y agregamos a la carpeta de nuestro proyecto.
  - Luego copiamos el html que nos dá y vemos que nos aparece como imagenes diferentes, pero vemos que solo hace una sola petición.
- Otra cosa que se suele hacer tambien es hacerlo como fuente, pero eso no lo vamos a hacer ahora.

#### Animaciones SVG
Como podemos poner el .svg en nuestra web:
1. La primera es usar la etiqueta <img/>, el problema al cargarlo como una imagen es que no puedo acceder a las clases o id's del svg.
2. Otra manera es importando el svg, es decir poner el còdgio dentro del archivo. O mejor es haciendo un include tipo template con ejs, para no tener que poner todo el código svg en el html. En el caso de cargarlo como svg, ya puedo acceder a sus propiedades.

En el css `sprite,css` hago los keyframes para animar el svg. 

Como no queremos cargar el svg de esa manera y como no disponesmos de un motor de templates y un servidor, vamos a usar la etiqueta `<object>`, el tema con esta etiqueta es que no está soportada por todos los navegadores y entonces se debe colocar un mensaje "Fallback Image logo", o la iamgen directamente en svg o en .png para que no falle en los navegadores que no lo soprotan.
```html
        <object data="tv.svg" type="image/svg+xml">
            Fallback Image logo
        </object>
```
Aqui al usar la etiqueta `objetc`, no puedo hacer las animaciones con el css. Entonces debo hacerlo dentro del svg.
Si abrimos el código del svg, en realidad es un xml pero al final es como un html, hay qetiquetas que debemos conocer, tenemos animaciones, tenemos estilos, tenemos clases, tenemos animaciones, y lo que vamos a ver ahora son animaciones. 
- Hay librerias que incluso ayudan a crear mi propio svg y a animarlo.
- En el svg que nos paso el instructor hay varias cosas que estan comentadas, son varios tipos de animacion.
- Aqui se puede esperar a eventos, o a que termine una animación. Esto ya es imaginacion de cada persona.
- Hya muchas librerias para hacer animaciones como:
  - svg js: [https://svgjs.com/docs/2.7/]

#### Selectores para navegadores

Esto viene un poco la necesidad de definir un alcance. Hay momentos en los que toca si o sí a diferentes anvegadores, o a no soportados como Internet explorer.
El instructor recomienda mucho usar [modernizr.com](https://modernizr.com/) la cual es muy útil para estos casos.
Debemos entender lo que hace `modernizr`, porque incluso nosotros podriamos hacer nuestro propio modernizr.
- Lo que hace es que cuando lo instalo puedo instalarlo de varias maneras. Loq ue hace es que el detecta para una serie de funcionalidades del lenguaje o css, si es que el navegador lo va a soportar o nó.

Ejemplo con algo de no soportado., como `Local Storage`  o `emoji` o `JSON`. Lo que hago es generar una build y esto me genera un archivo javascript y el cual lo pego en mi index.html.

Lo que ahce es que cuando el navegador no soporta algo, x ejemplo flex, modernizr.js poner una clase `.no-flex` y aqui pondremos el codigo css equivalente en la version de ese navegador.

Da un objeto global, para mis archivos javascript. Me da ese trigger de decidir y saber si esta soportado o no esta soportado.

#### Imagenes Responsive

Vamos a hacer un ejemplo de imagenes responsive. en el mismo directorio de `dia-1/Ejercicios/css-examples/responsive-images.html`

Esto de las imagenes responsive, es una manera de optimizar toda la experiencia a nivel UI como de performance, por ejemplo si yo hago mobile first, no tengo tantas media querys, y las media querys cargan para desktop lo que en teoria es un poco mejor y performante.

Siempre vamos a garantizar la mejor calidad de imagen para nuestros clientes.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Responsive Images</title>
    <style>
        img {
            max-width: 100%;
            width: 100%;
        }
    </style>
</head>
<body>
    <img 
        src="img/yacht_race@tablet.jpg"
        srcset="
            img/yacht_race@mobile.jpg 320w,
            img/yacht_race@tablet.jpg 768w
        "
    />
</body>
</html>
```
Luego hacemos una cosa, abrimos los devtools ctrl + shift + I y le damos en el icono del mobile.

El objetivo de esto es dar la mejor calidad a nuestro usuario
#### SRCSET
Es para jugar con la densidad de pixeles.
Como podemos manejar las iamgenes responsive con esto de la densidad de pixeles.
PAra ello debemos usar el atributo `srcset`, recordar que los navegadores que soprotan esto de iamgenes responsive tomarian por defecto la imagen del `srcset` en caso de abrir en un navegador no soportado tomaria el src.

Aquì entra el cálculo del ancho que hemos definido en este caso 320w y 768w y dividirlo entre el ancho que tiene el cliente que estoy usando para mostrar la página. Si yo lo divido loq ue va a hacer va a dividir eso y va a escoger el que mas se acerque a la densidad de pixeles que tenga el dispositivo cliente.

De esta manera estamos garantizando servir la img adecuada para la densidad de pixeles. Tambien se debe habalr con diseño y pedir las dimensiones para saber como manejarse con la densidad de pixeles.

Esto esta chevere porque podremos servir la mejro imagen posible, pero tambien hay que jugar con mas factores si tengo una densidad de 3 pixeles, me saldran las iamgenes de mayor calidad, pero esta mal en el sentido que es una imagen muy costosa por ejemplo en un movil.

#### PICTURE
LA etiqueta `<picture>` unido con la etiqueta `<source>`, nos va a permitir llevar el resposibe a otro nivel.

En el source si importa el orden en que definamos nuestros tags

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Responsive Images</title>
    <style>
        img {
            max-width: 100%;
            width: 100%;
        }
    </style>
</head>
<body>
    <!-- <img 
        src="img/yacht_race@tablet.jpg"
        srcset="
            img/yacht_race@mobile.jpg 320w, 320w / 320w = 1
            img/yacht_race@tablet.jpg 768w
        "
    /> -->
    <picture>
        <source srcset="img/obama-500.jpg" media="(min-width: 320px)">
        <source
        srcset="
        img/yacht_race@mobile.jpg 320w,
        img/yacht_race@tablet.jpg 768w 
        "
        media="(min-width: 768px)"
        >
        <img src="img/obama-100-art.jpg" alt="obama">
    </picture>

</body>
</html>
```
La regla de `srcset` es que segun el ancho que le definimos y dependiendo la densidad e pixeles, ejemp 320w / 320w = 1 entonces los dispositivos que tengan una densidad de pixeles de 1 usaran estaimagen. 

Luego con la version mas dopada es la parte `picture` con media query.


### Maquetando nuestra Web

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

  Termine aqui este día continuar en el día 2.