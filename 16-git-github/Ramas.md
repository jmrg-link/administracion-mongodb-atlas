# Ramas en git

# Visualizar ramas en git

```
git branch
```

# Crear ramas en git

```
git branch <nombre-rama>
```

# Mover a una determinada rama

```
git checkout <nombre-rama>
```

# Fusión entre ramas

Desde la rama a la que fusionaremos (la que recibe el código)

```
git merge <rama> // si no hay divergencia entre el código entrante y el de la rama principal se realiza la fusión
                 // en modalidad fast-forward
```

# Borrar la rama (una vez mergeada)

```
git branch -d <nombre-rama>
```

# Crear y mover a una rama en un solo paso

```
git checkout -b <nombre-nueva-rama>
```

# Merge manual

Si se producen conflictos o divergencias entre el código de la rama entrante y la rama que los recibe (normalmente main)
en ese caso tras merge hay que:

1.- Resolver los conflictos (de manera manual o con las opciones que proporciona git).
2.- Guardar los archivos involucrados.
3.- Realizar un commit definitivo con los cambios del merge.