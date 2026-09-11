# Parcial 1 — Explorer App

Implementación de una interfaz web estática responsiva basada en el diseño realizado previamente en Figma para la asignatura de Diseño Web Adaptable.

## Tecnologías

- Vite
- TypeScript
- Tailwind CSS v4

## Instalación

```bash
npm install
npm run dev
```

## Compilación

```bash
npm run build
npm run preview
```

## Vistas

- `/` — Home
- `/resultados.html` — Resultados
- `/detalle.html` — Detalle del país

## Responsive

La interfaz se adapta a tres referencias principales:

- Desktop: 1440 px
- Tablet: 768 px
- Mobile: 390 px

Las tarjetas se reorganizan de 4 columnas en Desktop, a 2 en Tablet y 1 en Mobile. Los controles de búsqueda, navegación, espacios e imágenes también se ajustan según el viewport.

## Design Tokens

Los Design Tokens definidos durante el proceso de diseño fueron trasladados a `src/style.css` mediante `@theme` de Tailwind CSS v4. Incluyen:

- colores semánticos;
- tipografía;
- escala de espaciado;
- radios;
- sombra de tarjeta.

La interfaz utiliza estos valores mediante utility classes de Tailwind, evitando estilos visuales hardcodeados innecesarios.

## Estructura semántica

La implementación utiliza elementos como `header`, `nav`, `main`, `section`, `article`, `dl` y `footer`, además de etiquetas y estados de foco visibles para mejorar la accesibilidad.

## Recursos

- `public/assets/flags/` contiene las banderas usadas por las tarjetas.
- `reference/figma/` contiene las referencias visuales para Desktop, Tablet y Mobile.

## Autor

Yonatan Chicas
