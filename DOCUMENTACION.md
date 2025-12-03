# Documentación del Proyecto Car One Tecnicentro

## Tabla de Contenidos
1. [Descripción General](#descripción-general)
2. [Estructura del Proyecto](#estructura-del-proyecto)
3. [Configuración y Despliegue](#configuración-y-despliegue)
4. [Componentes Principales](#componentes-principales)
5. [Páginas y Rutas](#páginas-y-rutas)
6. [Estilos y Temas](#estilos-y-temas)
7. [Integraciones](#integraciones)
8. [Optimizaciones](#optimizaciones)
9. [Guía de Contribución](#guía-de-contribución)
10. [Solución de Problemas](#solución-de-problemas)

## Descripción General

Car One Tecnicentro es un sitio web moderno y responsivo para un taller mecánico ubicado en Loja, Ecuador. El sitio está construido con Next.js 15.2.4, TypeScript, Tailwind CSS y utiliza componentes de UI de Radix UI.

## Estructura del Proyecto

```
car-one/
├── app/                    # Directorio principal de la aplicación
│   ├── api/               # Endpoints de la API
│   ├── blog/              # Páginas del blog
│   ├── contacto/          # Página de contacto
│   ├── servicios/         # Páginas de servicios
│   ├── globals.css        # Estilos globales
│   └── layout.tsx         # Layout principal
├── components/            # Componentes reutilizables
│   ├── ui/                # Componentes de UI personalizados
│   ├── header.tsx         # Componente de encabezado
│   └── ...
├── public/                # Archivos estáticos
│   ├── images/            # Imágenes del sitio
│   └── ...
├── lib/                   # Utilidades y configuraciones
├── hooks/                 # Custom hooks de React
├── styles/                # Archivos de estilos
├── .gitignore
├── next.config.js         # Configuración de Next.js
├── package.json
├── tailwind.config.ts     # Configuración de Tailwind CSS
└── vercel.json           # Configuración de Vercel
```

## Configuración y Despliegue

### Requisitos Previos
- Node.js 18.0.0 o superior
- npm o pnpm
- Cuenta en Vercel (para despliegue)

### Instalación

1. Clonar el repositorio:
   ```bash
   git clone [url-del-repositorio]
   cd car-one
   ```

2. Instalar dependencias:
   ```bash
   npm install
   # o
   pnpm install
   ```

3. Iniciar servidor de desarrollo:
   ```bash
   npm run dev
   # o
   pnpm dev
   ```

### Despliegue en Vercel

1. Instalar Vercel CLI globalmente:
   ```bash
   npm install -g vercel
   ```

2. Iniciar sesión en Vercel:
   ```bash
   vercel login
   ```

3. Realizar el despliegue:
   ```bash
   vercel --prod
   ```

## Componentes Principales

### Header
El componente de encabezado incluye:
- Barra superior con información de contacto
- Logo y dirección
- Navegación principal
- Menú desplegable de servicios
- Botón de reserva de turno
- Versión móvil con menú hamburguesa

### Formulario de Contacto
- Validación de campos
- Integración con servicio de correo
- Diseño responsivo
- Estados de carga y retroalimentación

## Páginas y Rutas

### Página de Inicio (`/`)
- Hero section con llamada a la acción
- Sección de servicios destacados
- Testimonios
- Información del taller
- Formulario de contacto simplificado

### Servicios (`/servicios`)
- Listado de todos los servicios
- Páginas individuales para cada servicio
- Galería de imágenes
- Formulario de cotización

### Blog (`/blog`)
- Listado de artículos
- Páginas individuales de artículos
- Categorías y etiquetas
- Búsqueda

### Contacto (`/contacto`)
- Formulario de contacto completo
- Información de contacto
- Mapa de ubicación
- Horarios de atención

## Estilos y Temas

El proyecto utiliza:
- **Tailwind CSS** para estilos utilitarios
- **CSS Modules** para estilos específicos de componentes
- Variables CSS personalizadas para colores y tipografía
- Diseño responsivo con breakpoints predefinidos

### Paleta de Colores
- Principal: `#00FF00` (verde neón)
- Fondo: `#000000` (negro)
- Texto: `#FFFFFF` (blanco) / `#A1A1AA` (gris claro)
- Superficies: `#111827` (gris oscuro)

## Integraciones

### Nodemailer
Para el envío de correos electrónicos a través del formulario de contacto.

### Google Maps
Para mostrar la ubicación del taller en la página de contacto.

### WhatsApp
Integración directa para chat y reserva de turnos.

## Optimizaciones

- **Imágenes**: Optimización con Next.js Image
- **Código**: División de código (Code Splitting)
- **Rendimiento**: Lazy loading de componentes
- **SEO**: Metadatos optimizados para motores de búsqueda

## Guía de Contribución

1. Hacer fork del repositorio
2. Crear una rama para la nueva característica (`git checkout -b feature/nueva-caracteristica`)
3. Hacer commit de los cambios (`git commit -am 'Añadir nueva característica'`)
4. Hacer push a la rama (`git push origin feature/nueva-caracteristica`)
5. Crear un Pull Request

## Solución de Problemas

### Problema: Error de compilación
```
Error: Unexpected token 'div'. Expected jsx identifier
```
**Solución**: Verificar que todos los componentes estén correctamente cerrados y que no haya conflictos de fusión sin resolver.

### Problema: Estilos no se aplican
**Solución**: Asegurarse de que los estilos se importen correctamente y que las clases de Tailwind estén escritas correctamente.

### Problema: Fallo en el envío del formulario
**Solución**: Verificar la configuración de Nodemailer y las variables de entorno.

---

**Última actualización**: 28 de julio de 2025
