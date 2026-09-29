# Clínica Vitalis - Angular

Migración del sitio HTML/CSS/Bootstrap de Clínica Vitalis a componentes Angular standalone.

## Componentes
- `header`: barra superior de contacto y redes sociales.
- `navbar`: barra de navegación.
- `carousel`: carrusel de promociones (sección 1).
- `medicos`: sidebar de especialidades + listado de médicos (sección 2), con función para mostrar la descripción de la especialidad seleccionada.
- `registro`: formulario de registro (sección 3), con validaciones en TypeScript al perder el foco (blur) de cada campo y validación general al dar clic en "Registrar".
- `productos`: catálogo de productos (sección 4).
- `footer`: pie de página.

## Cómo ejecutar
```bash
npm install
npm start
```
Esto abrirá la aplicación en `http://localhost:4200`.

## Notas
- No se incluye la carpeta `node_modules` para que el paquete sea liviano; ejecuta `npm install` primero.
- El proyecto usa Angular 18 con componentes standalone (sin NgModule), Bootstrap 5 y Bootstrap Icons.
