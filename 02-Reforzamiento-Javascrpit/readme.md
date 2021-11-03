# Introducción a JavaScript
**[Volver al indice](../readme.md#listado):arrow_left:**

## Sintaxis básica
```javascript
/*
comentario multilinea
*/

// comentario en una linea  

// - Ignora espacios en blanco
// -Es case sensitive 
// - Las instrucciones finalizan con ; (opcional) ASI

console.log('Hola universo')

let paciente = {
    name: 'Yo'
}

```
**[Volver al indice](../readme.md):arrow_left:**

## Declaraciones de variables y constantes

```javascript
// Variables y constantes en JavaScript

// Identificadores (nombre)

// - Tienen que comenzar por letra o el símbolo _ ó $
// - No se pueden usar las palabras reservadas 
// - (Buena práctica) utilizar camelCase o DobleCamelCase
// - Las constantes a veces se declaran con MAYÚSCULAS
// - (Clean code) utilizar siempre nombres semánticos

// Declaración de variables

// A partir de ECMA6 con la palabra reservada let

let surname; // no se define el tipo de dato

// Versión clásica con la palabra reservada var

var email; 

// Variables globales (mala práctica)

phone = '+3491876453';

// Declaración de constantes

// versión clásica (anterior a ECMA6)

var URL = 'https://...';

// A partir de ECMA6 con la palabra reservada const

const vendorURL = 'https://...';

// Se pueden declarar varias variables o constantes a la vez separando por , los
// identificadores

let postalCode, 
    city, 
    address;

console.log(phone);

```
**[Volver al indice](../readme.md):arrow_left:**

## Tipos de datos

```javascript
// Tipos de datos en JS

// Tipos primitivos

// string o cadenas de texto (comillas simples o dobles)

let email = 'juan@gmail.com';

// Tienen una serie de secuencias de escape

let city = 'Villa de \nMadrid';
console.log(city);

let address = 'Avenida de O\'Donell';
console.log(address);

// number  (*bigint reciente y aun no hay compatibilidad 100%)

let result = 8.65; // Los flotantes usan el punto

// boolean (true | false)

let loading = false;

// undefined (tipo-valor)

let brand; // Cuando declaramos pero no inicializamos una variable tiene el valor undefined

console.log(typeof brand);

// null (tipo-valor)

let postalCode = null; // 'Sirve' para inicializar una variable cuando no tenemos un valor por defecto

// Tipos compuestos

// Arrays

let fruits = ['oranges','apples','grapes'];

console.log(typeof fruits); // Devuelve object

// Objetos

let player = {
    name: 'Cristiano',
    surname: 'Ronaldo',
    goals: 0
}

// El tipado de datos en JS es débil y dinámico

// Es débil porque recibe el tipo de dato por inferencia del valor

let url = 'https://google.com'; // El valor infiere el tipo string

// Es dinámico porque puede cambiar de tipo en cualquier momento

url = 12e8;
```
**[Volver al indice](../readme.md):arrow_left:**
