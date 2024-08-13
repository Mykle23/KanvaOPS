# KanvaOPS

## 🚀 Descripción del Proyecto

<!-- ![Project Logo](https://example.com/logo.png) -->

<!--[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](https://example.com/build-status)
[![Version](https://img.shields.io/badge/version-1.0-blue)](https://example.com/version)
[![License](https://img.shields.io/badge/license-MIT-yellow)](https://opensource.org/licenses/MIT)-->

Bienvenidos al proyecto **KanvaOPS**. Este proyecto tiene como objetivo replicar la funcionalidad de la popular herramienta de gestión de proyectos, Trello, tanto en su frontend como en su API. El proyecto está estructurado como un monorepo, lo que facilita la gestión del código y permite un flujo de trabajo ágil y colaborativo.

## 📌 Tabla de Contenidos

- [📦 Estructura del Proyecto](#-estructura-del-proyecto)
- [🛠️ Requisitos Previos](#️-requisitos-previos)
- [🚀 Ejecución del Proyecto](#-ejecución-del-proyecto)
  - [🌐 API](#-api)
  - [🖥️ Frontend](#️-frontend)
  - [🗄️ Base de Datos](#️-base-de-datos)
- [🐳 Despliegue en Desarrollo con Docker Compose](#-despliegue-en-desarrollo-con-docker-compose)
- [🧪 Testing](#-testing)
  - [🌐 API](#-api-1)
  - [🖥️ Frontend](#%EF%B8%8F-frontend-1)
- [🗂️ Gestión del Proyecto](#️-gestión-del-proyecto)
- [🌳 Estrategia de Ramas en Git](#-estrategia-de-ramas-en-git)
- [🔮 Estado y Perspectivas](#-estado-y-perspectivas)
- [👥 Autores y Colaboradores](#-autores-y-colaboradores)
- [📜 Licencia](#-licencia)

---

## 📦 Estructura del Proyecto

Este proyecto está organizado como un monorepo que incluye las siguientes partes:

- **API**: Desarrollado con **Bootstrap** para una interfaz backend eficiente. ❓_**Pediente de decidir**_
- **Frontend**: Creado con **Angular** para una experiencia de usuario moderna.
- **Base de Datos**: Implementado con **MongoDB** para un almacenamiento de datos escalable. ❓_**Pediente de decidir**_
- **Despliegue**: Gestionado mediante **Docker** para un entorno de desarrollo y despliegue sencillo y coherente.

---

## 🛠️ Requisitos Previos

Antes de comenzar, asegúrate de tener las siguientes herramientas instaladas en tu máquina:

- [Node.js](https://nodejs.org/)
- [Docker y Docker Compose](https://www.docker.com/)

---

## 🚀 Ejecución del Proyecto

### 🌐 API

```bash
# Navega a la carpeta de la API
cd api

# Instala las dependencias
npm install

# Inicia el servidor de desarrollo
npm start
```

### 🖥️ Frontend
```bash
Copiar código
# Navega a la carpeta del frontend
cd frontend

# Instala las dependencias
npm install

# Inicia el servidor de desarrollo
ng serve
```

### 🗄️ Base de Datos

---

## 🐳 Despliegue en Desarrollo con Docker Compose

Para levantar todo el entorno (API, frontend y base de datos) usando Docker:

Desde la raíz del proyecto
```bash
docker-compose up --build
```
Esto levantará todos los servicios necesarios y expondrá la API y el frontend en los puertos configurados en el archivo docker-compose.yml.

---

## 🧪 Testing

Para ejecutar los tests de cada parte del proyecto:

### 🌐 API

Navega a la carpeta de la API
```bash
cd api
```

#### Ejecuta los tests
```bash
npm test
```

### 🖥️ Frontend

Navega a la carpeta del frontend
```bash
cd frontend
```

#### Ejecuta los tests
```bash
ng test
```
---

## 🗂️ Gestión del Proyecto

Utilizaremos **Trello** como herramienta principal para gestionar el flujo de trabajo. Se creará un tablero con las siguientes columnas:

- **Backlog**: Tareas pendientes de priorización.
- **En Proceso**: Tareas que se están desarrollando actualmente.
- **En Revisión**: Tareas que están siendo revisadas.
- **Completado**: Tareas terminadas.

---

## 🌳 Estrategia de Ramas en Git

Para mantener un flujo de trabajo ordenado, seguiremos estas convenciones de ramas:

- **main**: Rama principal con el código de producción estable.
- **develop**: Rama de integración donde se unen las nuevas funcionalidades y correcciones antes de ir a producción.
- **feature/nombre-de-la-feature**: Ramas para el desarrollo de nuevas funcionalidades.
- **hotfix/nombre-del-hotfix**: Ramas para corrección de errores críticos que deben ser aplicados directamente a la producción.

<!-- Recuerda siempre trabajar en una rama nueva para cada tarea o corrección, y realizar un **Pull Request** a la rama `develop` cuando termines.-->

---

## 🔮 Estado y Perspectivas

El proyecto se encuentra en una fase de desarrollo activo, con el objetivo de clonar la funcionalidad de una aplicación existente (Trello) como una herramienta de aprendizaje. Este proyecto no tiene fines de lucro y está destinado a la exploración y comprensión de cómo funcionan aplicaciones de gestión de proyectos.

Planeamos continuar el desarrollo agregando más funcionalidades para replicar la experiencia del usuario y aprender sobre las mejores prácticas en desarrollo de software. El proyecto servirá como base para experimentar con nuevas tecnologías y metodologías.

Este proyecto es únicamente para fines educativos y no está destinado para uso comercial.


---

## 👥 Autores y Colaboradores

- **Mykhaylo Lelgant** - [GitHub](https://github.com/Mykle23)
- **Rodrigo Martín Cerón** - [GitHub](https://github.com/Matorry)
- **Alejandro Marqués Guerrero** - [GitHub](https://github.com/AlejandroMarques)

---

## 📜 Licencia

Este proyecto está bajo la licencia [MIT](https://opensource.org/licenses/MIT).
