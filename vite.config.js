import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // Configuración base para el despliegue en GitHub Pages.
  // Debe coincidir con el nombre de tu repositorio: AlecoG/A64-Estudio
  base: './',
  plugins: [react()],
})
