# KATZE - Frontend

Frontend de la Fundación KATZE para rescate, cuidado y adopción de gatos. Construido con React, Vite y Tailwind CSS.

## 🚀 Tecnologías

- **React 19** - Biblioteca de UI
- **Vite** - Build tool y dev server
- **React Router** - Navegación
- **Tailwind CSS** - Estilos
- **Axios** - Cliente HTTP para API REST

## 📋 Requisitos Previos

- Node.js 18 o superior
- npm o yarn
- Backend API corriendo en `http://localhost:5000/api/v1` (configurable)

## 🛠️ Instalación

1. Clonar el repositorio:
```bash
git clone https://github.com/idapaza-dev/Front-KATZE.git
cd Front-KATZE
```

2. Instalar dependencias:
```bash
npm install
```

3. Configurar variables de entorno:
```bash
cp .env.example .env
```

Editar `.env` y configurar la URL de la API:
```
VITE_API_URL=http://localhost:5000/api/v1
```

## 🎯 Comandos Disponibles

### Desarrollo
Inicia el servidor de desarrollo:
```bash
npm run dev
```
La aplicación estará disponible en `http://localhost:5173`

### Build
Construye la aplicación para producción:
```bash
npm run build
```
Los archivos optimizados se generarán en la carpeta `dist/`

### Preview
Previsualiza la build de producción localmente:
```bash
npm run preview
```

### Lint
Ejecuta ESLint para verificar el código:
```bash
npm run lint
```

## 📁 Estructura del Proyecto

```
Front-KATZE/
├── public/              # Archivos estáticos
├── src/
│   ├── api/            # Cliente API y configuración
│   │   └── client.js   # Cliente Axios configurado
│   ├── components/     # Componentes reutilizables
│   │   ├── AdoptionFlow.jsx
│   │   ├── BlogCard.jsx
│   │   ├── Button.jsx
│   │   ├── CatCard.jsx
│   │   ├── CatGallery.jsx
│   │   ├── CatsGrid.jsx
│   │   ├── Chip.jsx
│   │   ├── ContactForm.jsx
│   │   ├── FAQ.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Input.jsx
│   │   ├── Loading.jsx
│   │   ├── MultiStepForm.jsx
│   │   ├── NavBar.jsx
│   │   ├── NotFound.jsx
│   │   └── Timeline.jsx
│   ├── pages/          # Páginas/Vistas
│   │   ├── AdoptConfirm.jsx
│   │   ├── AdoptList.jsx
│   │   ├── AdoptProcess.jsx
│   │   ├── Article.jsx
│   │   ├── Blog.jsx
│   │   ├── CatDetail.jsx
│   │   ├── CatsList.jsx
│   │   ├── Contact.jsx
│   │   ├── Donate.jsx
│   │   ├── FAQPage.jsx
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── NotFoundPage.jsx
│   │   └── Volunteer.jsx
│   ├── styles/         # Estilos adicionales (si es necesario)
│   ├── App.jsx         # Componente principal con rutas
│   ├── main.jsx        # Punto de entrada
│   └── index.css       # Estilos globales y Tailwind
├── .env.example        # Ejemplo de variables de entorno
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── README.md
└── vite.config.js
```

## 🔗 Rutas Principales

- `/` - Página de inicio
- `/adopt` - Lista de gatos en adopción con filtros
- `/adopt/process` - Formulario multi-paso de adopción
- `/adopt/confirm` - Confirmación de solicitud de adopción
- `/cats/:id` - Detalle de un gato específico
- `/blog` - Blog con artículos
- `/blog/:slug` - Artículo individual
- `/contact` - Formulario de contacto
- `/donate` - Información de donaciones
- `/volunteer` - Formulario de voluntariado
- `/faq` - Preguntas frecuentes
- `/login` - Login para administradores

## 🔌 Integración con API

El frontend se conecta a una API REST. Los endpoints principales son:

- `GET /cats` - Lista de gatos
- `GET /cats/:id` - Detalle de un gato
- `POST /adoptions` - Crear solicitud de adopción
- `POST /auth/login` - Autenticación de administradores

La configuración del cliente API se encuentra en `src/api/client.js`.

## 🎨 Estilización

Este proyecto usa **Tailwind CSS** para los estilos. El archivo de configuración principal es `src/index.css` que importa las directivas de Tailwind.

## 🤝 Contribuir

1. Hacer fork del repositorio
2. Crear una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit de tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir un Pull Request

## 📝 Licencia

Este proyecto es parte de la Fundación KATZE.

## 👥 Contacto

- Email: info@katze.org
- Teléfono: +56 9 1234 5678
- Ubicación: Santiago, Chile
