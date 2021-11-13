# Github

Plataforma de repositorios remotos para git en la nube

[github](https://github.com)

- Registrarnos con nombre de usuario e email similar a las credendiales de git (local).

- Crear repositorio público con el mismo nombre del proyecto.

## Enlazar un repositorio remoto a nuestro repositorio local

```
git remote add <nombre-remoto> <url-repositorio> // Al repositorio remoto se le suele referir como origin
```

```
git remote -v // Devuelve los repositorios remotos enlazados
```

En el caso de github debemos tener la rama principal con el nombre main, en caso de que tengamos otro nombre
especialmente el antiguo (master), simplemente renombrar (desde la rama principal)

```
git branch -M main
```

## Añadir los commits de control en local al repositorio remoto

```
git push <nombre-remoto> <rama>
```

En el caso mas habitual será

git push -u origin main // con -u quedarán los valores 'origin' y 'main' como valores por defecto

git push // no será necesario indicar remoto y rama

## Clonar un repositorio de Github

```
git clone <url-del-repositorio-remoto>
```

## Actualizar un working directorio local desde un repositorio de Github (sería el proceso inverso a push)

```
git pull <nombre-remoto> <rama> \\ Importante realizar el pull desde la rama que traemos
```

En la mayoría de los casos será:

git pull origin main

La operación pull lo que hace es traer el código de la rama especificada y hacer un merge con esos cambios, lo
que dará lugar:

- o bien fast forward
- o bien conflicto => proceder igual que con el comando merge

## Actualizar un working directory local desde un repositorio de Github sin merge

```
git fetch <nombre-remoto> <rama>
```

La operación fetch lo que hace es traer el código de la rama especificada y esos cambios los lleva a la
etapa staging area para que posteriormente decidamos si los queremos integrar con uno o varios commit

## Pull request

Petición de integración de cambios en el código en un repositorio remoto.

- Deben estar en una rama distinta a la principal o dicho de otra manera si cuando hacemos un
push lo hacemos con una rama distinta a la principal, si esa rama no existe en el remoto se
crea la pull request.

- Como la rama no existe cuando se realize la operación push llevará esta opción:

git push --set-upstream origin <rama>

Esto genera la pull-request en Github la cual será gestionada por los miembros autorizados y en el momento en ek
que se mergea se fusiona en la rama principal.