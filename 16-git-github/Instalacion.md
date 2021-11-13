# Instalación de GIT

Usar el paquete descargado desde [git](https://git-scm.com/)

## Establecimiento de credenciales
las credenciales de git no son las mismas necesariamente que las
de github pero es recomendable que lo sean

Desde la terminal

```
git config --global user.name <nombre-de-usuario>
git config --global user.email <correo-de-usuario>
```

Se pueden comprobar o modificar con

```
git config --global -e
```

Se puede cambiar el editor por defecto (por ejemplo VS Code)

```
git config --global core.editor "code"
```

