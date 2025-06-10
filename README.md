

# Accessibility App 🌍🧑‍🦽

Una aplicación web de ejemplo centrada en **buenas prácticas de accesibilidad**, semántica HTML y experiencia de usuario.

El proyecto simula una plataforma de reservas de aventuras y viajes, con filtros avanzados y navegación inclusiva.

## ✨ Características

- Diseño responsive adaptado a dispositivos móviles y desktop.
- Navegación clara con elementos semánticos (`nav`, `main`, `aside`, `section`, `footer`).
- **Carrusel accesible** con controles de navegación.
- **Sistema de filtros** interactivo:
  - Por destino
  - Por actividad
  - Por alojamiento
  - Por rango de precios
- Componente de **popover/dialog accesible** para mostrar detalles.
- Uso adecuado de atributos ARIA (`aria-label`, `aria-expanded`, `aria-modal`).
- Compatibilidad con lectores de pantalla.
- Optimización en el uso de imágenes e iconografía.



## 🚀 Instalación y uso

Este proyecto utiliza [Vite](https://vitejs.dev/) como entorno de desarrollo.

### Clonar el repositorio

```bash
git clone https://github.com/jorge-r-rodriguez/accessibility-app.git
cd accessibility-app
```

### Instalar dependencias

```bash
npm install
```

### Ejecutar el proyecto en modo desarrollo

```bash
npm run dev
```

### Construir para producción

```bash
npm run build
```

## 🎨 Fuentes y diseño

- Tipografías utilizadas:
  - [Nunito](https://fonts.google.com/specimen/Nunito)
  - [Syne](https://fonts.google.com/specimen/Syne)
- Iconos e imágenes en la carpeta `/img`.

## ♿ Accesibilidad

- Uso adecuado de roles ARIA.
- Estructura semántica coherente.
- Contraste adecuado (pendiente de validación final con herramientas como Axe o Lighthouse).
- Navegación por teclado soportada (revisar `main.js` para focus management).


## 📝 Licencia

Este proyecto está publicado bajo la licencia [MIT](LICENSE).

---
