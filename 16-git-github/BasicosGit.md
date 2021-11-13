# Creación de directorio git

En el directorio raiz de proyecto, en la terminal escribimos

```
git init
```

# Control del estado de cambios

```
git status
```

# Añadir cambios del working directory al staging area

```
git add <opciones>
```

Por ejemplo archivos o directorios de manera individual

```
git add app.js
```
o varios del mismo tipo


```
git add *.json
```

Para añadir todos los cambios

```
git add -A  // Pasar todos los cambios, incluyendo archivos nuevos y cambios por borrado de archivos
```

```
git add . // Pasar todos los cambios (pero no incluye los cambios por archivos nuevos)
```

```
git add -u // Solo los cambios en archivos actualizados
``` 

# .gitignore y .gitkeep

En el archivo .gitignore incluiremos los archivos y directorios que por el motivo que fuere no queremos controlar
sus cambios.

Con .gitkeep le decimos a git que controle los cambios de directorios vacíos

# Revertir cambios del staging area a working directory

```
git reset <archivo>
```

# Paso de staging area a repository (commit)

```
git commit -m <mensaje>
```

# Logs de commits realizados

```
git log // abre en editor
```

```
git log --oneline
```

# Realizar paso de stating area y repository al mismo tiempo

```
git commit -am <mensaje>
```

# Deshacer el último commit

```
git reset --soft HEAD~1 // Deshace el último commit mantiendo los cambios de ese commit (quedarán el staging area)
```
```
git reset --hard HEAD~1 // Deshace el último commit sin mantener los cambios de ese commit (afecta al código del working directory)
```

# Alternativa a reset commit con la opción --hard

1er Paso

```
git reset --soft HEAD~1 
```

2º Paso trabajar en el staging area con los cambios que queremos eliminar de manera individualizada

```
git reset <archivos-a-mantener-cambios>
git reset --hard // de los que quieres eliminar los cambios
```

# Reponer el working directory a un determinado commit

```
git reset <hash-del-commit> // mantiene los cambios desde ese commit (los lleva al staging area)
```

