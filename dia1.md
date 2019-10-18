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
El call stack queda limpio y es importante que quede limpio.

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
Esto es un cocepto del lenguaje. ----->> Me quedé hasta aqui minuto 33:41

### Arrays

### Arrow functions

### Rest operator