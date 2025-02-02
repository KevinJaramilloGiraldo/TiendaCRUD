# Tienda CRUD

Esta es una aplicación CRUD para gestionar productos de una tienda. El proyecto integra un **backend** construido con **Node.js** y **Express** (con autenticación mediante JWT) y un **frontend** desarrollado en **React**. La base de datos se gestiona en **MongoDB** (puede ser MongoDB Atlas o una instancia local).

## Tabla de Contenidos

- [Características](#características)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Requisitos](#requisitos)
- [Instalación y Configuración](#instalación-y-configuración)
  - [1. Inicialización del Proyecto](#1-inicialización-del-proyecto)
  - [2. Configurar el Backend](#2-configurar-el-backend)
  - [3. Configurar el Frontend](#3-configurar-el-frontend)
- [Uso del Proyecto](#uso-del-proyecto)
- [Flujo del CRUD](#flujo-del-crud)

## Características

- **Autenticación:** Registro e inicio de sesión con correo y contraseña, utilizando JWT para proteger los endpoints.
- **CRUD de Productos:** Permite agregar, editar, eliminar y listar productos. Cada producto incluye: nombre, descripción, precio, categoría y cantidad en inventario.
- **Backend:** Implementado en Node.js con Express, organizado en controladores, rutas y middleware.
- **Frontend:** Interfaz gráfica creada con React, que se comunica con el backend mediante Axios.
- **Base de Datos:** MongoDB se utiliza para almacenar la información de usuarios y productos.

## Estructura del Proyecto

La estructura del proyecto es la siguiente:

tienda-crud/ ├── config/ # Configuración de MongoDB. ├── controllers/ # Lógica de negocio para cada endpoint. ├── middleware/ # Middleware, incluyendo autenticación con JWT. ├── models/ # Modelos de Mongoose como Product ├── routes/ # Rutas del API (autenticación, productos, etc.). ├── frontend/ # Aplicación React para la interfaz gráfica. ├── .env # Archivo de variables de entorno. ├── index.js # Archivo principal del servidor (backend). ├── package.json # Dependencias y scripts del backend. └── README.md # Este archivo.

> **Nota:** La carpeta `frontend` se encuentra al mismo nivel que las demás carpetas del backend.

## Requisitos

- [Node.js](https://nodejs.org/) v12 o superior.
- npm (se instala junto con Node.js) o yarn.
- Una cuenta en [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) o una instancia local de MongoDB.

## Instalación y Configuración

### 1. Inicialización del Proyecto

1. Abre una terminal (por ejemplo, Git Bash) y clona el repositorio:

   ```bash
   git clone https://github.com/KevinJaramilloGiraldo/tienda-crud.git
   cd tienda-crud
2. Inicializa el repositorio Git (si aún no lo has hecho):

   ```bash
   git init

3. Agrega y haz el commit inicial:

   ```bash
   git add .
   git commit -m "Initial commit"

4. Para configurar el bakcend crear archivo .env, en la raíz del proyecto, crea un archivo llamado .env y agrega las siguientes variables (reemplaza los valores según tu configuración):

PORT=5000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret

5. Instala las dependencias en el back con npm i y luego en una terminal npm run dev.
6. Para el front, ubicate en la carpeta respectiva, abre una nueva terminal y digita npm start.

Este proyecto tiene derechos de autor para Kevin Alexander Jaramillo G.
