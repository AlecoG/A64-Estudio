import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/A64-Estudio/',   // 👈 OBLIGATORIO para GitHub Pages
  plugins: [react()],
})

