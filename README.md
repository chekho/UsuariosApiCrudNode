# API Gestión de Usuarios

## Descripción

Esta es una API RESTful para la gestión de usuarios, que incluye operaciones para crear, leer, actualizar y eliminar usuarios.

## Instalación

Sigue estos pasos para instalar las dependencias necesarias:

1. Clona este repositorio:

   ```bash
   git clone https://github.com/chekhor/UsuariosApiCrudNode.git

   ```

2. Navega al directorio del proyecto:
   ```bash
   cd UsuariosApiCrudNode

   ```
3. Instala las dependencias:
   ```bash
   npm install

   ```

## Ejecución del Servidor Localmente

Para ejecutar el servidor en tu máquina local, usa el siguiente comando:

```bash
node app.js
```

El servidor se ejecutará en http://localhost:3000.

## Acceso a la Documentación Swagger

Puedes acceder a la documentación Swagger de la API en la siguiente ruta una vez que el servidor esté en ejecución:

http://localhost:3000/api-docs

## Pruebas Básicas de la API

Aquí tienes algunas pruebas básicas que puedes realizar para comprobar el funcionamiento de la API:

### Obtener todos los usuarios:

```http
GET http://localhost:3000/usuarios
```

### Obtener un usuario por ID:

```http
GET http://localhost:3000/usuarios/{id}
```

### Crear un nuevo usuario:

```http
POST http://localhost:3000/usuarios
Content-Type: application/json

{
  "nombre": "Nuevo",
  "apellido": "Usuario",
  "email": "nuevo.usuario@example.com"
}

```

### Actualizar un usuario existente:

```http
PUT http://localhost:3000/usuarios/{id}
Content-Type: application/json

{
  "nombre": "Nombre Actualizado",
  "apellido": "Apellido Actualizado",
  "email": "usuario.actualizado@example.com"
}

```

### Eliminar un usuario::

```http
DELETE http://localhost:3000/usuarios/{id}

```

## Función Contadora

Se incluye una función contadora que se puede llamar desde cualquier parte del programa para contar las ejecuciones. No utiliza base de datos, localStorage o sessionStorage.

Para utilizar la función contadora, simplemente importa y llama a incrementarContador en cualquier parte del código:

```Javascript
import incrementarContador from "./utils/contador.js";

// Llama a la función donde la necesites
const veces = incrementarContador();
```
