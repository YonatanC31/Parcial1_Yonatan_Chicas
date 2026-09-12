# Mapeo de rúbrica — Primer Examen Parcial

## 1. Configuración del proyecto — 10 pts
- Vite configurado en `vite.config.ts`.
- TypeScript en `tsconfig.json`.
- Tailwind CSS v4 integrado con `@tailwindcss/vite`.
- Tres entradas HTML estáticas: Home, Resultados y Detalle.

## 2. Correspondencia con Figma — 20 pts
- Estructura, jerarquía, paleta, tarjetas, controles y espaciados trasladados desde el diseño de Figma.
- Referencias incluidas para Desktop 1440, Tablet 768 y Mobile 390.

## 3. Design Tokens mediante @theme — 15 pts
- `src/style.css` define tokens con `@theme`.
- Incluye colores semánticos, tipografía, spacing, radios y sombra.
- Se reutilizan con utilities de Tailwind como `bg-primary`, `text-text-secondary`, `px-md`, `rounded-lg` y `shadow-card`.

## 4. Tailwind CSS v4 — 15 pts
- Layout, spacing, typography, colors, borders, responsive y states se construyen con utility classes.
- Se evita CSS tradicional innecesario.

## 5. Responsive — 20 pts
- Mobile: una columna y controles apilados.
- Tablet: dos columnas y controles adaptados.
- Desktop: cuatro columnas y distribución equivalente al diseño principal de Figma.

## 6. Semántica — 8 pts
- Uso de `header`, `nav`, `main`, `section`, `article`, `dl` y `footer`.
- Labels, `aria-current`, `aria-label` y foco visible.

## 7. Recursos y referencias — 5 pts
- `public/assets/flags/` contiene los recursos gráficos de las banderas.
- `reference/figma/desktop.svg`, `tablet.svg` y `mobile.svg` contienen las tres referencias visuales solicitadas.

## 8. Repositorio — 7 pts
- Repositorio organizado con `.gitignore`.
- Commits separados para configuración, implementación, referencias y documentación.
- Workflow de GitHub Actions para ejecutar instalación y build automáticamente.
