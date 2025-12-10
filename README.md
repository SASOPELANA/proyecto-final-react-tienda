# Proyecto Final - React Tienda

## 📋 Descripción del Proyecto

Tienda online completa desarrollada como proyecto final del curso de React con Talento Tech. La aplicación integra autenticación de usuarios, carrito de compras, búsqueda de productos y consumo de API REST propia para gestión completa del catálogo.

### API REST Utilizada
- **Base URL:** `https://apis-rest-node-ts-firebase.vercel.app/api`
- **Documentación completa:** [apis-rest-node-ts-firebase](https://github.com/SASOPELANA/apis-rest-node-ts-firebase)
- **Tecnologías:** Node.js, TypeScript, Firebase, Express, JWT

---

## ✨ Características Implementadas

### ✅ Requerimiento #1: Gestión del Carrito y Autenticación

#### Carrito de Compras
- ✅ **CartContext** implementado con Context API
- ✅ Operaciones CRUD: agregar, eliminar, actualizar cantidad, vaciar carrito
- ✅ **Persistencia en localStorage** - el carrito se mantiene entre sesiones
- ✅ Cálculo automático de total
- ✅ Notificaciones con React Toastify al agregar/eliminar productos
- ✅ Página de carrito protegida por autenticación (`/carrito`)

#### Autenticación de Usuarios
- ✅ **AuthContext** implementado para gestionar estado de autenticación
- ✅ **Login** funcional con API (`POST /auth/login`)
- ✅ **Registro** de usuarios con validaciones (`POST /auth/register`)
- ✅ **Persistencia de sesión** en localStorage con token JWT
- ✅ **Headers de autorización** automáticos en peticiones protegidas
- ✅ **Rutas protegidas** con componente `RutasProtegidas`
- ✅ **Spinner de carga** mientras se restaura sesión del usuario
- ✅ Modal de confirmación al cerrar sesión

---

### ✅ Requerimiento #2: CRUD de Productos con API REST

#### Lectura (GET)
- ✅ `GET /api/products` - Listar todos los productos
- ✅ `GET /api/products/:id` - Obtener detalle de un producto
- ✅ `GET /api/products/search?name=...` - Búsqueda por nombre
- ✅ `GET /api/products?categories=...` - Filtro por categorías

#### Creación (POST)
- ✅ `POST /api/products` - Crear producto (requiere autenticación)
- ✅ Validación de campos en formulario

#### Actualización (PUT/PATCH)
- ✅ `PUT /api/products/:id` - Actualizar producto completo (requiere autenticación)
- ✅ `PATCH /api/products/:id` - Actualización parcial (requiere autenticación)

#### Eliminación (DELETE)
- ✅ `DELETE /api/products/:id` - Eliminar producto (requiere autenticación)

---

### ✅ Requerimiento #3: Optimización de Diseño y Responsividad

#### Diseño Responsivo con Tailwind CSS
- ✅ **Grid system** responsivo (1 col móvil → 2 col tablet → 3-4 col desktop)
- ✅ **Breakpoints:** sm, md, lg, xl configurados correctamente
- ✅ **Componentes adaptativos:** NavBar, Cards de productos, Formularios
- ✅ Estilos consistentes en toda la aplicación

#### React Icons
- ✅ Iconos en botones (agregar al carrito, eliminar, editar, etc.)
- ✅ Iconos en navegación (carrito con contador, búsqueda, menú hamburguesa)
- ✅ Iconos visuales para estados (spinner de carga, confirmaciones)

#### React Toastify
- ✅ Notificaciones de **éxito** (login, registro, agregar carrito)
- ✅ Notificaciones de **error** (fallos en API, validaciones)
- ✅ Notificaciones de **info** (carrito vacío, etc.)
- ✅ Integración global en la aplicación

#### React Helmet
- ✅ **Meta tags dinámicos** en todas las páginas
- ✅ **Títulos SEO** personalizados por página
- ✅ **Descripciones meta** para búsqueda
- ✅ Páginas con Helmet: Login, Register, Inicio, Carrito, DetallesProductos, About, Contacto, Review

#### Accesibilidad
- ✅ **aria-labels** en botones y elementos interactivos
- ✅ **aria-label** para contador del carrito
- ✅ **aria-modal** en modales de confirmación
- ✅ **Labels asociados** en formularios
- ✅ **Roles semánticos** HTML5 (nav, main, section, etc.)

---

### ✅ Requerimiento #4: Funcionalidades de Búsqueda y Paginación

#### Barra de Búsqueda
- ✅ **SearchContext** implementado con debounce (300ms)
- ✅ Búsqueda en tiempo real mientras escribe
- ✅ Filtrado por nombre, descripción y precio
- ✅ Componente `Search.jsx` reutilizable
- ✅ Búsqueda integrada en página de inicio

#### Filtro por Categorías
- ✅ Consumo de parámetro `?categories=...` de la API
- ✅ Posibilidad de filtrar por una o varias categorías

#### Paginación
- ⚠️ **No implementada** - El proyecto actual carga todos los productos de una vez
- ⚠️ **Recomendación:** Agregar paginación cliente o servidor con limit/offset

---

### ✅ Requerimiento #5: Preparación para el Despliegue

#### Estructura del Código
- ✅ Código limpio y modular
- ✅ Separación de concerns (contexts, pages, components)
- ✅ Configuración centralizada de API (`src/api/api.js`)
- ✅ No hay código muerto ni comentarios innecesarios

#### Optimizaciones
- ✅ **Lazy loading de rutas** (opcional con React.lazy)
- ✅ **Optimizaciones de renderizado** con Context API
- ✅ **Minificación automática** con Vite

#### Tests de Compatibilidad
- ⚠️ **No implementados** - Recomendación: Jest + React Testing Library
- ⚠️ **Verificar manualmente** en Chrome, Firefox, Safari, Edge

#### Despliegue
- ✅ **Build script:** `pnpm build`
- ✅ **Preview script:** `pnpm preview`
- ✅ **Linting:** `pnpm lint` (ESLint configurado)
- ✅ **Desplegado en Vercel:** https://proyecto-final-react-tienda.vercel.app/

---

## 🛠️ Tech Stack

| Tecnología | Versión | Propósito |
|---|---|---|
| **React** | 19.1.1 | Librería principal |
| **Vite** | 7.1.7 | Bundler rápido |
| **React Router DOM** | 7.9.4 | Navegación SPA |
| **Tailwind CSS** | 4.1.14 | Estilos responsivos |
| **Axios** | 1.13.2 | Cliente HTTP |
| **React Helmet** | 2.0.5 | Meta tags dinámicos |
| **React Icons** | 5.5.0 | Librería de iconos |
| **React Toastify** | 11.0.5 | Notificaciones |
| **React Leaflet** | 5.0.0 | Mapas interactivos |
| **ESLint** | 9.36.0 | Linting |

---

## 📦 Instalación

### Requisitos
- Node.js (v18 o superior)
- pnpm (se recomienda) o npm

### Pasos

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/SASOPELANA/proyecto-final-react-tienda.git
   cd proyecto-final-react-tienda
   ```

2. **Instalar dependencias**
   ```bash
   pnpm install
   ```

3. **Iniciar servidor de desarrollo**
   ```bash
   pnpm run dev
   ```
   La aplicación se abrirá en `http://localhost:5173`

---

## 🚀 Scripts Disponibles

```bash
# Desarrollo
pnpm run dev          # Inicia servidor dev con hot reload

# Build y Preview
pnpm run build        # Construye para producción
pnpm run preview      # Vista previa del build

# Calidad de código
pnpm run lint         # Ejecuta ESLint
```

---

## 📁 Estructura del Proyecto

```
src/
├── api/
│   └── api.js                 # Configuración de Axios con base URL
├── assets/
│   ├── fonts/                 # Fuentes (Montserrat)
│   └── icons/                 # Componentes de iconos customizados
├── components/
│   ├── NavBar.jsx             # Navegación principal
│   ├── Header.jsx             # Encabezado
│   ├── Footer.jsx             # Pie de página
│   ├── Productos.jsx          # Grid de productos
│   ├── Search.jsx             # Barra de búsqueda
│   ├── Carrito.jsx            # Carrito (componente)
│   ├── CerrarSession.jsx       # Modal de confirmación logout
│   ├── ToastAlert.jsx         # Alertas personalizadas
│   ├── Error404.jsx           # Página 404
│   └── staticReview/          # Componentes de reseñas
├── context/
│   ├── AuthContext.jsx        # Gestión de autenticación
│   ├── CartContext.jsx        # Gestión del carrito
│   └── SearchContext.jsx      # Gestión de búsqueda
├── pages/
│   ├── Inicio.jsx             # Página de inicio
│   ├── Login.jsx              # Página de login
│   ├── Register.jsx           # Página de registro
│   ├── Carrito.jsx            # Página del carrito (protegida)
│   ├── DetallesProductos.jsx  # Detalle de un producto
│   ├── Moda.jsx               # Categoría de moda/gamers
│   ├── About.jsx              # Acerca de
│   ├── Contacto.jsx           # Página de contacto
│   ├── Mapa.jsx               # Mapa de tienda
│   └── Review.jsx             # Reseñas
├── private/
│   └── RutasProtegidas.jsx    # HOC para proteger rutas
├── App.jsx                     # Componente raíz
├── main.jsx                    # Entry point
└── index.css                   # Estilos globales
```

---

## 🔐 Autenticación y Rutas Protegidas

### Flujo de Autenticación
1. Usuario se registra en `/register`
2. Sistema valida email y contraseña
3. API crea usuario y devuelve token JWT
4. Token se guarda en localStorage
5. En siguiente sesión, se restaura automáticamente
6. Header `Authorization: Bearer <token>` se añade automáticamente

### Rutas Protegidas
```javascript
<Route element={<RutasProtegidas />}>
  <Route path="/carrito" element={<Carrito />} />
</Route>
```

### Si no estás autenticado
- ❌ No puedes acceder a `/carrito`
- ❌ Se redirige automáticamente a `/login`
- ⏳ Spinner de carga mientras se verifica la sesión

---

## 🛒 Carrito de Compras

### Funcionalidades
- Agregar productos al carrito
- Actualizar cantidad de productos
- Eliminar productos individuales
- Vaciar carrito completo
- Cálculo automático de total
- Persistencia en localStorage

### Métodos del CartContext
```javascript
const { cart, addToCart, removeFromCart, clearCart, updateQuantity, total } = useCart();

// Ejemplos
addToCart(producto);              // Agregar producto
removeFromCart(productId);        // Eliminar por ID
updateQuantity(productId, 5);     // Actualizar cantidad
clearCart();                      // Vaciar todo
// total está disponible para calcular
```

---

## 🔍 Búsqueda y Filtros

### SearchContext
```javascript
const { busqueda, setBusqueda, filteredProducts, loadingFilter, errorFilter } = useSearch();
```

### Características
- Búsqueda con debounce (300ms) para optimizar peticiones
- Filtrado local en cliente de resultados
- Busca en: nombre, descripción, precio
- Integración con API para obtener productos

### Filtro por Categorías
```javascript
// API soporta: GET /api/products?categories=Consola,Gamer
```

---

## 📱 Responsividad

### Breakpoints Tailwind Utilizados
- **Mobile First:** Estilos base para móvil
- **sm:** 640px (tablets pequeñas)
- **md:** 768px (tablets)
- **lg:** 1024px (laptops)
- **xl:** 1280px (desktops grandes)

### Componentes Responsivos
- ✅ NavBar (hamburguesa en móvil, menú horizontal en desktop)
- ✅ Grid de productos (1 col → 2 → 3-4 según pantalla)
- ✅ Formularios (full width en móvil, centrados en desktop)
- ✅ Tablas (scroll horizontal en móvil)

---

## 🎨 Estilización

### Tailwind CSS
- Sistema de utilidades para estilos consistentes
- Variables de espaciado, colores y tipografía
- Animaciones con `tailwindcss-animated`

### Colores Principales
- **Primary:** Blue (sky-600)
- **Success:** Green
- **Error:** Red
- **Warning:** Yellow
- **Neutral:** Gray

---

## 📊 Lo que Falta (Mejoras Futuras)

### Paginación
- [ ] Implementar paginación servidor (limit/offset)
- [ ] Componente Paginator reutilizable
- [ ] Persistencia de página actual

### Testing
- [ ] Tests unitarios (Jest)
- [ ] Tests de componentes (React Testing Library)
- [ ] Tests de integración

### Características Adicionales
- [ ] Wishlist / favoritos
- [ ] Filtros avanzados (precio, rating, etc.)
- [ ] Sistema de reviews/comentarios
- [ ] Checkout y pago
- [ ] Historial de compras
- [ ] Perfil de usuario
- [ ] Notificaciones por email

### Performance
- [ ] Lazy loading de imágenes
- [ ] Code splitting automático
- [ ] Service Worker / PWA
- [ ] Caché de datos

---

## 🌐 Despliegue

### En Vercel (Recomendado)
1. Push el proyecto a GitHub
2. Conectar repo en Vercel
3. Vercel detecta Vite automáticamente
4. Configurar env variables si las hay
5. Deploy automático en cada push

### Variables de Entorno
Actualmente no hay `.env` necesario porque la API está en producción. Si cambias:
```
VITE_API_BASE_URL=https://apis-rest-node-ts-firebase.vercel.app/api
```

### URL de Producción
- 🔗 https://proyecto-final-react-tienda.vercel.app/

---

## 👤 Autor

- **Sergio Asopelana**
- GitHub: [@SASOPELANA](https://github.com/SASOPELANA)
- Proyecto Final - Talento Tech (Curso React)

---

## 📝 Licencia

Este proyecto está bajo licencia MIT. Ver archivo `LICENSE` para más detalles.

---

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:
1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

---

## ✅ Checklist de Entrega

### Requerimientos Completados ✓
- [x] Carrito de compras funcional
- [x] Autenticación de usuarios (login + register)
- [x] Rutas protegidas
- [x] CRUD de productos (consumo de API REST)
- [x] Búsqueda de productos
- [x] Diseño responsivo
- [x] React Icons implementado
- [x] React Toastify integrado
- [x] React Helmet para SEO
- [x] Accesibilidad (aria-labels)
- [x] Documentación (README)
- [x] Despliegue en Vercel

### No Completados ⚠️
- [ ] Paginación
- [ ] Tests automatizados
- [ ] PWA / Service Workers

---

## 📞 Soporte

Para reportar bugs o sugerencias, abre un issue en el repositorio.

---

**Última actualización:** 9 de Diciembre de 2025
