# Frontend Avanzado con Javascript

**Profesor: ** Kevin Martinez
Trabaja en GuideSmiths

- En frontend Avanzado va a ser el lenguaje javascript orientado al navegador.
- LLevar el trabajo real con el que se enfrenta todos los dìas a un curso.
- Se va a usar vanilla Javascrit nada de frameworks ni Jquery.

## Requisitos previos
Conocimientos medios de JAvascript
Tener git instalado y conocimientos bàsicos.

## Repositorios

https://github.com/kevinccbsg/web-bootcamp-2019-frontend

https://gitlab.keepcoding.io/keepcoding-bootcamps/full-stack-web-bootcamp-iv/desarollo-frontend-con-javascript

## Link de la aplicación
https://tvmaze-keepcoding-2019.herokuapp.com/

## Clien-server model

**Modelo Cliente servidor**, es una apliclacion distribuida que divide tareas entre los providers y luego los servicios requesters que son los clients.

- Los clientes pueden ser, un pc, linux, mac, un android o ios, un raspberrypi.
- Tenemos que entender la diferencia que hay entre client side y server side, y server side renderind.

## Frontend Development
Conocido como cliente side developmet, producir html, css y javascript, en una web para que el usuario pueda interactuar con el usuario.
El frontend a cambiado mucho, ya no es lo mismo.
- cuando me enfrente a frontend hay un monton de deciciones que hacer.
  - Como maneja el css reactjs, como maneja el css Angular, o backbone.

## Javascript

LEnguaje de alto nivel, de scripting, basado en ECMAScript specification. Node lo implemente de una manera, los navegadores lo implementan de otra manera.
ECMAScript es el standard del lenguaje.
https://github.com/tc39/ecma262

**Babel.js** : es una libreria de javascript para transpilar javascript moderno es decir compilarlo a algo que los browsers lo entiendan.
https://babeljs.io 

## ¿Como funciona Javascript?
Como funcionaria en el browser en el motor V8.

htpps://blog.sessionstack.com/how-does-javascript-actually-work-part-1-b0bacc073cf

La forma que funciona javascript lo podemos dividir en 2 partes:

- Memory Heap
- Call Stacks

### Memory Heap
Cuando creas una variable se almacena en memory heap

### Call Stacks
Es donde se apilan las llamadas de nuestro código, es decir si yo pongo un console.log loq ue va a hacer es poner un console log en el Call stack, pinta en el navegador, y luego lo quita del call stack. JAva scritp era multihilo, es bueno ya que no hay problema para gestionar esos hilos, pero en el callstack si lo rompo, se para, es decir en el navegador deja de funcionar y de cargar los assets.

En la parte de Web tenemos 

#### WEB APIs

- DOM (document)
- AJAX (XMLHttpRequest) para hacer peticiones a APIs de bakends
- Timeout (setTimeout) son apis dentro del navegador

La gracia de estos es que pueden enviar parte de su ejecuciòn a otra parte del motor de javascript en este caso el browser o motor V8, al `Callback Queue`
**Callback Queue** -> esto es toda la parte de callback o parte asincrona. Funciona en el eventloop.

*Ejemplo:*
```js

```

