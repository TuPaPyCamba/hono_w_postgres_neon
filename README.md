# 🏗️ **Hono test** - Hono + Neon + Drizzle ORM

Bienvenido a **Hono test**, un backend minimalista construido con **Hono** y **NeonDB**, utilizando **Drizzle ORM** para interactuar con PostgreSQL en la nube. Este proyecto explora cómo integrar estas tecnologías de manera eficiente.

## 🚀 **Tecnologías usadas**

- 🔥 **Hono** - Framework web ultra ligero para servidores en Node.js.
- 🐘 **NeonDB** - PostgreSQL Serverless con conexiones optimizadas.
- 🌧️ **Drizzle ORM** - ORM TypeScript moderno para consultas SQL declarativas.
- 📦 **pnpm** - Manejador de paquetes rápido y eficiente.
- 🛠️ **TypeScript** - Tipado estático para mayor seguridad en el código.

## 📦 **Instalación**

### **1️⃣ Clona el repositorio**

```sh
git clone https://github.com/tuusuario/honotest.git
cd honotest
```

### **2️⃣ Instala las dependencias**

Usamos `pnpm` como gestor de paquetes:

```sh
pnpm install
```

### **3️⃣ Configura las variables de entorno**

Crea un archivo `.env` y agrega la conexión a Neon:

```env
DATABASE_URL=postgresql://usuario:contraseña@host.dominio.com/dbname
```

### **4️⃣ Ejecuta el servidor en modo desarrollo**

```sh
pnpm dev
```

## 🎯 **Endpoints disponibles**

Este backend permite realizar operaciones CRUD sobre usuarios. Algunos de los endpoints incluyen:

### **📌 Obtener todos los usuarios**

```http
GET /users
```

```json
[{ "id": 1, "name": "Fernando", "email": "fernando@example.com" }]
```

### **📌 Crear un usuario**

```http
POST /users
```

```json
{
  "name": "Nuevo Usuario",
  "email": "nuevo@example.com"
}
```

### **📌 Actualizar un usuario**

```http
PUT /users/:id
```

### **📌 Eliminar un usuario**

```http
DELETE /users/:id
```

## 🛠️ **Comandos útiles**

- **`pnpm dev`** → Inicia el servidor en modo desarrollo.
- **`pnpm build`** → Compila TypeScript a JavaScript.
- **`pnpm start`** → Corre el servidor en producción.

## 📜 **Estructura del proyecto**

```
honotest/
│── src/
│   ├── index.ts      # Punto de entrada del servidor
│   ├── db/
│   │   ├── schema.ts # Definiciones de tablas con Drizzle
│   │   ├── tables/
│   │   │   ├── User.ts # Modelo de usuario
│   ├── routes/
│   │   ├── users.ts  # Rutas de usuarios
│── package.json
│── .env
│── README.md
```

## 🎯 **Objetivo del proyecto**

Este proyecto sirve como **experimento** para probar la integración de Hono con Neon y Drizzle ORM, simplificando la conexión de PostgreSQL con un servidor backend minimalista en Node.js.

## 📩 **Contacto**

Si tienes preguntas, abre un issue o envíame un mensaje. ¡Feliz coding! 🚀
