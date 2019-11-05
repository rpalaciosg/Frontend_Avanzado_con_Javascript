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
Me quedé en video dia 2 tiempo 10:57