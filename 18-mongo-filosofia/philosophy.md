# Philosohpy and Features

Referencia certificación DBA

https://university.mongodb.com/exam/guide#application-and-server-administration-dba-only

Documentación de MongoDB (Server)

https://docs.mongodb.com/manual/

## Intro e Arquitecture Guide

En cuanto a Arquitecture Guide suele entrar una consulta sobre

- Alta disponibilidad => Replica Set
- Escalado horizontal => Sharding

## JSON

- Lo que ya vimos en JS

## BSON

https://docs.mongodb.com/manual/reference/bson-types/

Los documentos (registros) en MongoDB se almacenan en el formato BSON, se usa este formato
porque aumenta los tipos de datos disponibles en JSON. (Ojo pregunta)

Los driver de MongoDB parsean los documentos BSON con los tipos de datos BSON a los objetos de cada
lenguaje de esos drivers.

Por ejemplo

BSON <-> Java
BSON <-> JSON/JavaScript * Esto explica que la shell de mongo acepte tanto JSON como JavaScript

## ObjectID

- 4-byte timestamp value, representing the ObjectId's creation, measured in seconds since the Unix epoch
- 5-byte random value generated once per process. This random value is unique to the machine and process.
- 3-byte incrementing counter, initialized to a random value

Importante para certificación es saber que este tipo de dato prácticamente garantiza que no existan dos valores
iguales en escenarios de operaciones intensas de escritura.

## The Mongo Shell

La Shell de mongo esta disponible en

- El ejecutable mongo (CLI))

```
mongo --port <puerto> // se conecta a localhost 27017
```

- El ejecutable mongosh (CLI) (nueva shell desde 5.0)

idem mongo

- Mongo Compass (GUI)

Trae la shell integrada en la parte inferior de la pantalla

### Características fundamentales

- Acepta los comandos de shell
- Métodos para operaciones del lenguaje de consultas MongoDB
- Ejecuta JavaScript
- Dispone de ayudas habituales de shell (autocompletado y multilínea en mongo)

### Comandos básicos de la shell

```
show dbs // devuelve las bases de datos
```

```
use <nombre-base-datos>  // Crea o selecciona una base de datos mientras no tenga regitro lo único que hace es reservar el 
                          // identificar
```

```
db   // Para comprobar en qué base de datos estamos trabajando
```

```
show collections   // Devuelve las colecciones de la base de datos  (idem show tables)
```

### Operaciones básicas de administración

```
db.createCollection(<nombre-colección>)   // crea una colección recomendable que el nombre cumpla identificadores JS
                                           // si se incumple JS habrá que referir posteriormente con getCollection()
```

```
db.<nombre-colección>.drop() // Elimina la colección
```

```
db.dropDatabase() // Elimina la base de datos
``` 

```
use admin
db.shutdownServer()
```


### Operaciones básicas CRUD sobre colecciones

```
db.<nombre-coleccion>.insert(<documento-JSON-o-JS>) // Inserta un documento
```

```
db.<nombre-coleccion>.find(<documento-de-consulta>) // Devuelve los documentos de la colección según la consulta
```

### Permite JS

Por ejemplo

let nombres = ['Laura','Juan','Fernando','María']
let apellidos = ['Fernández','González','Pérez','López']
let pacientes = []
for (i=0; i < 100; i++) {
    pacientes.push({
        nombre: nombres[Math.floor(Math.random()*nombres.length)],
        apellido1: apellidos[Math.floor(Math.random()*apellidos.length)],
        apellido2: apellidos[Math.floor(Math.random()*apellidos.length)],
    })
}

use clinica
db.pacientes.insert(pacientes); // Tendremos en este caso 100 nuevos documentos

### Cursor

En las operaciones de consultas mongo devuelve los documentos de 20 en 20 en un cursor iterable

Por ejemplo

db.pacientes.find() // Devuelve todos los documentos

### Salir de la shell

CTRL + C
exit()

