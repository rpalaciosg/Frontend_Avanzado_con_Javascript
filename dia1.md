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

**Modelo Cliente servidor**, es una apliclacion distribuida que divide tareas entre los providers y luego los servicios requesters que son los clients.

- Los clientes pueden ser, un pc, linux, mac, una app android o ios, un raspberrypi.
- Tenemos que entender la diferencia que hay entre client side y server side, y luego meter cliente side renderind y server side renderind.

## Frontend Development
Conocido como cliente side developmet, producir html, css y javascript, en una web para que el usuario pueda interactuar con el usuario.
El frontend a cambiado mucho, ya no es lo mismo.
- cuando me enfrente a frontend hay un monton de deciciones que hacer.
  - Como se maneja ES6 (ECAM SCRIPT) dentro del DOM. BAse de javascript del frontend.
  - Como maneja el css reactjs, como maneja el css Angular, o backbone.

## Javascript

Lenguaje de alto nivel, intepretado de scripting, basado en ECMAScript specification. Node lo implemente de una manera, los navegadores lo implementan de otra manera. y tiene sus diferencias.
ECMAScript es el standard del lenguaje.
https://github.com/tc39/ecma262

**Babel.js** : es una libreria de javascript para transpilar javascript moderno es decir compilarlo a algo que los browsers lo entiendan.
https://babeljs.io 

## ¿Como funciona Javascript?
Como funcionaria nuestro código en el browser en el motor V8.

htpps://blog.sessionstack.com/how-does-javascript-actually-work-part-1-b0bacc073cf

La forma que funciona javascript lo podemos dividir en 2 partes:

- Memory Heap : creas una variable donde se almacena.
- Call Stacks : Donde se apilan las llamadas de nuestro código.

### Memory Heap
Cuando creas una variable se almacena en memory heap.
- Es donde se aloja la memoria.
- Aqui se puede entender cuando se hacen fugas de memoria, viendo el error o mensaje memory leak, js maneja su propio garbage collector.

### Call Stacks
Es donde se apilan las llamadas de nuestro código, es decir si yo pongo un console.log loq ue va a hacer es poner un console log en el Call stack, pinta en el navegador, y luego lo quita del call stack. JAva script era multihilo, es bueno ya que no hay problema para gestionar esos hilos, pero en el callstack si lo rompo, se para, es decir en el navegador deja de funcionar y de cargar los assets.

- Donde se apila la ejecución del código.

En la parte de Web tenemos 

#### WEB APIs

- DOM (document)
- AJAX (XMLHttpRequest) para hacer peticiones a APIs de bakends
- Timeout (setTimeout) son apis dentro del navegador

- Son APIS internas dentro del navegador. No vienen dadas por el motor sino que las da el DOM. Está ECMA pero luego está como lo interpreta cada uno.

La gracia de estos es que pueden enviar parte de su ejecuciòn a otra parte del motor de javascript en este caso el browser o motor V8, al `Callback Queue`
**Callback Queue** -> esto es toda la parte de callback o parte asincrona. Funciona en el eventloop. (onClick, onLoad, onDone)

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

Es importante que esl Callstack quede limpio, por que si se llena da un error de `Uncaught RangeError: MAximum call stack size exceeded`. Vamos a ver el sigueinte ejemplo que da ese error.

```js
function foo() {
    foo();
}

foo();
```

Esta es una función recursiva que se llama a si mismo, básicamente es un bucle infinito. Se va a llenar el callstack llamando demasiadas veces a una funciòn, o es una parte que esta renderizando html y llama a otra función.

> Incluso puede ser una pregunta de entrevista, ¿porque es importante mantener el callstack limpio? = Es porque no debemos bloquear al eventloop.

### Event Loop

Estas funciones que habiamos dicho que son como asincronas, se quedan en el `Callback Queue`. 
Y se ejecutan cuando el event loop se lo dice, y Cuando se lo dice? Cuando el `Call Stack` está limpio, el event loop puede decir venga estas limpio, timeout, y asi es como js va manejando esa asincronia, no se debe tener funciones muy grandes o pesadas como subbucles, operaciones matematicas muy pesadas que dejen el Call Stack lleno, sino mis funciones asincronas no se van a resolver correctamente o mi web va a correr muy lenta.

- Monitoriza el call stack y el callback queue. Si el primero està vacio toma el primer evento del callback queue y lo manda al call stack.

### Callback Queue

Donde se almacenan las ejecuciones de las Web APIs asincronas. Mas o menos lo que está detras de escena.

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
Lo que hace es tener uqe acceder a una variable sin vía punto (.)

Ejemplo:

```js
var data = { title: 'title', age: 26, info: {detail: 'more info'} };
```
Se puede acceder a detail usando lo siguiente:

```js
    data.info.detail
```
Pero hay otras formas o hay una manera mas nueva o no muy nueva y mas interesante, que se usa bastante.
ponemos {} a la izquierda e igualamos al objeto o data, y dentro de las llave nos quedamos con lo que queramos usar.

```js
var data = { title: 'title', age: 26, info: {detail: 'more info'} };
var { title, age } = data;
title
"title"
age
.>26
```
Luego si usamos la variable title o age, ps vemos que la podemos usar normal y correctamente.

- Que mas podemos hacer, podemos hacerlo un poco más anidado, pero eso ya e sun poco mas raro el instructor no lo suele usar tanto. Por ejemplo:

```js
    var { info: { detail } } = data;
detail
"more info"
```

Vemos que ya podemos usar la variable detail que está dentro de info haciendo `destructuring`.

Una cosa que le ha pasado al instructor aveces, con este ejemplo ya que nos es muy fan del `snakeCase` sino del `camelCase`.

```js
var data = { main_title: 'title', main_age: 26, info: { detail: 'more info' } };
```
Entonces aquí decimos si hago destructuring me tengo que quedar con el nombre. Aveces para cambiar estos formatos de nombre de variables es usar:
```js
    var mainTitle = data.main_title
```
##### Dando alias con destructuring
Pero con `destructuring` podemos hacer otra cosita dandole un alias como:

```js
    var { main_title: mainTitle2} = data;
    mainTitle2
    "title"
```

Asi podemos decir que si mi UI no esperaba recibir snakeCase,yo me puedo formatear con alias.

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

Aquí al darle el nombre es el nombre que tendrá la variable que voy a usar con el dato de la posición del array.

Pero que pasa si solo quiero el objeto que está en la 3ra posición y las demás me dan igual, entonces usando `destructuring` lo hago de la siguiente manera:

```js
    var [,,object] = data;
    object
    {title: "title"}
```

Lo que hago es saltarme con comas (,) las posiciones hasta llegar al dato que quiero.
```js
var [,,{ title }] = data;
```
##### Dando alias con destructuring en arrays
Incluso puedo ponerle un alias.

```js
    var [,,{ title: richard }] = data;
    richard
```

Así puedo usar destructuring en arrays o en objetos para acceder a sus variables. Es una forma de acceder mas senccilla a las variables de un array, o a las keys de un objeto.

Esto es un concepto del dìa a día.

### Object Mutability (Mutabilidad)
Esto es un cocepto del lenguaje. También es un tema del dìa a día.

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
```

Ejemplo 2:
```js

```
> Estos ejemplos no tienen nada que ver con var o let, se usa let para que el navegador luego no le diga de que ya esta definida y tal.

####  Que es mutable
Aquí es donde entran ya los objetos y los arrays y esto ya cambia la cosa, ya que al crear un objeto e igualar otro objeto a otro, si cambiamos el segundoobjeto que esta igualado al primero, el primer objeto que està referenciado también cambiará:

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

Esto es un problema, ya que si por alguna razòn se tenia referenciado un objeto al cambiar la variable que referencia a ese objeto ps se cambiaría todo.

Ejemplo mutabilidad en arrays:
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
#### Corregir la mutabilidad en los arrays y lso objetos.

La idea es clonar un objeto.

Hay dos maneras de hacer esto:

##### Primera forma de clonar un objeto o array y que no se mutable
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

##### Segunda forma de clonar un objeto o array y que no se mutable
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

Es la que mas se ha usado pero con la neuva feature de js llamada REST operator se usa cada vez menos:

#### REST operator

Con esta nueva feature de js hacemos lo mismo que el `Object.assign` pero ahora usamos un objeto en el que le pasaremos  { ...objeto_a_clonar }. 
Esto funcionar igual pero ya no es necesario escribir Object.assign

```js
// REST OPERATOR
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

Este REST OPERATOR se puede usar tanto para objetos, arrays o parametros de funciones.
Hay que tener en cuenta que es muy importante el orden en que se pasan los objetos, ya que si los objetos a pasarle usando `Object.assign` o `REST OPERATOR` tienen las mismas keys, esta se pisaran con la del último objeto que se le pase.

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

Hay que tener en cuenta tambien que al clonar un objeto que tiene objetos anidados los items u objetos anidados son mutables cuando se usa el `Object assing`, en cambio usando el `stringify` o `REST OPERATOR` esto si hace una copia profunda.
```js
    var b = { surname: 'surname', detail: { info: 1234} };
    undefined
    var a = Object.assign({} , b);
    undefined
    a
    {surname: "surname", detail: {…}}detail: {info: 1234}info: 1234__proto__: Objectsurname: "surname"__proto__: Objectconstructor: ƒ Object()hasOwnProperty: ƒ hasOwnProperty()isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ toLocaleString()toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()get __proto__: ƒ __proto__()set __proto__: ƒ __proto__()
    a.detail.info = 123123123
    123123123
    b
    {surname: "surname", detail: {…}}
```

Para evitar esto se puede usar el stringigy o el REST OPERATOR pero aumentando las keys de las llaves de objetos anidados: ```var a = { ...b, detail: { ...b.detail } };```

```js
    var b = { surname: 'surname', detail: { info: 1234} };
    undefined
    var a = { ...b };
    undefined
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
    var a = { ...b, detail: { ...b.detail } };
    undefined
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

##### Arreglar mutabilidad con REST OPERATOR en Arrays
Hay un equivalente de rest operator en arrays. igualmente enun array se pasa 3 puntos con el array a clonar  [...array_a_clonar]

```js
    // REST OPERATOR
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
