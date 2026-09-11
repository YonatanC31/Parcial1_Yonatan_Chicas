import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'node:path'

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        home: resolve(process.cwd(), 'index.html'),
        resultados: resolve(process.cwd(), 'resultados.html'),
        detalle: resolve(process.cwd(), 'detalle.html'),
      },
    },
  },
})
