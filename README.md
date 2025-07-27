# 📚 Discworld API

Una RESTful API desarrollada con Node.js, Express y MongoDB que gestiona información sobre los personajes y libros del universo **Discworld**, la famosa saga de fantasía de Terry Pratchett.

---

## 📁 Estructura del proyecto

```text
discworld/
├── assets/ → Imágenes de portadas y personajes
├── src/
│ ├── api/
│ │ ├── controllers/ → Lógica de negocio de cada recurso
│ │ ├── models/ → Esquemas de Mongoose
│ │ └── routes/ → Endpoints de la API
│ ├── config/ → Configuración del servidor y entorno
│ ├── db/ → Conexión a MongoDB
│ └── utils/
│ └── seeds/ → Scripts para poblar la base de datos (recomendado no subir a Git)
├── .env → Variables de entorno (no subir a Git)
├── index.js → Punto de entrada del servidor
├── package.json → Scripts y dependencias
└── README.md → Documentación del proyecto
```

---

## 🚀 Tecnologías usadas

- **Node.js** Entorno de ejecución para JavaScript en servidor
- **Express.js** Framework para construir la API REST.
- **MongoDB Atlas** para la base de datos NoSQL en la nube.
- **Mongoose** ODM para interactuar con MongoDB.
- **Dotenv** para la gestión de variables de entorno.
- **Nodemon** para desarrollo en caliente.
- **Insomnia** cliente HTTP para testear endpoints de forma rápida y visual.

---

## 📦 Requisitos para el entorno

Tener **Node.js** instalado

Tener una cuenta en **MongoDB Atlas** (si se quiere conectar a la base de datos remota)

Recomendado: tener instalado **Insomnia** o **Postman** para testear las rutas

---

## 🔧 Instalación y uso

1. **Clona el repositorio**:

```bash
git clone https://github.com/PensadEnFlebas/Project-6-API-REST.git
cd Project-6-API-REST

Instala las dependencias:
npm install

Crea un archivo .env en la raíz del proyecto:
PORT=3000   # opcional
DB_URL=mongodb+srv://<usuario>:<contraseña>@<cluster>.mongodb.net/discworld

Ejecuta el servidor en modo desarrollo:
npm run dev

🌱 Poblar la base de datos
Utiliza los scripts de seeds para insertar datos iniciales:

npm run booksSeed
npm run charactersSeed

📡 Endpoints principales

Libros
GET /api/books — Lista todos los libros.

GET /api/books/:id — Obtiene un libro por su ID.

POST /api/books — Crea un nuevo libro.

PUT /api/books/:id — Actualiza un libro existente.

DELETE /api/books/:id — Elimina un libro.

Personajes
GET /api/characters — Lista todos los personajes.

GET /api/characters/:id — Obtiene un personaje por su ID.

POST /api/characters — Crea un nuevo personaje.

PUT /api/characters/:id — Actualiza un personaje existente.

DELETE /api/characters/:id — Elimina un personaje.

🖼️ Gestión de imágenes
Las portadas y fotos de personajes se almacenan en la carpeta /assets. Al crear o actualizar un recurso, la propiedad "cover" o "picture" debe tener un valor como:

"cover": "/assets/mort.jpg"

✅ Recomendaciones
Añade validaciones a los modelos para asegurar consistencia.

No subas el archivo .env al repositorio.

Usa populate() en Mongoose si quieres que los personajes incluyan el detalle de los libros referenciados.

📬 Autor
Creado por Juanma "Goblin" Martínez como proyecto 6 de Rock-The-Code.
```
