# Proyecto Final - React Tienda

## Descripción

Tienda online completa desarrollada como proyecto final del curso de React con Talento Tech. La aplicación integra autenticación de usuarios, carrito de compras, búsqueda de productos y consumo de API REST propia para gestión completa del catálogo.

## Pre requisitos

- Node.js (v18 o superior)
- pnpm

## Instalación

1. Clonar el repositorio.

2. Instalar dependencias.

```shell
pnpm install
```

## Uso

### Ejecutar en modo desarrollo

```shell
pnpm run dev
```

### Ejecutar en modo producción

```shell
# Compilar el proyecto
pnpm run build

# Vista previa del build
pnpm run preview
```

## Tecnologías Utilizadas

- **React** (v19)
- **Vite**
- **Tailwind CSS**
- **React Router DOM**
- **Axios**
- **React Context API**
- **React Toastify**
- **Leaflet**
- **React Icons**
- **Tailwindcss-animated**
- **Vercel**

## Características Principales

### Gestión del Carrito

- Persistencia en localStorage.
- Operaciones completas: agregar, eliminar, actualizar cantidad y vaciar carrito.
- Cálculo de totales automático.

### Autenticación

- Login y Registro integrados con la API.
- Persistencia de sesión mediante JWT en localStorage.
- JWT en la Apis Rest para autenticación.
- Rutas protegidas para usuarios autenticados.

### Productos

- Consumo de API REST propia.
- Búsqueda en tiempo real con debounce.
- Filtrado por categorías.
- Detalle de producto individual.

### Diseño

- Interfaz completamente responsiva (Mobile - Desktop - Tablet ).
- Notificaciones de estado (Toast).
- Feedback visual de carga.

## Configuración de API

El proyecto consume una API REST externa.

- **Base URL:** `https://apis-rest-node-ts-firebase.vercel.app/api`
- **Documentación de API:** [apis-rest-node-ts-firebase](https://github.com/SASOPELANA/apis-rest-node-ts-firebase)

## Despliegue

La aplicación está optimizada para su despliegue en Vercel.

- **URL de Producción:** [https://proyecto-final-react-tienda.vercel.app/](https://proyecto-final-react-tienda.vercel.app/)

## Estructura del Proyecto

```bash
src/
├── api/           # Configuración de Axios
├── components/    # Componentes reutilizables
├── context/       # Estados globales (Auth, Cart, Search)
├── pages/         # Vistas principales de la aplicación
├── private/       # Componentes de protección de rutas
└── assets/        # Recursos estáticos
```

## Licencia

Este proyecto está bajo la Licencia MIT.

## Autor

- **Sergio Asopelana** ([@SASOPELANA](https://github.com/SASOPELANA))
