import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// Ermittle die Basis-URL für die Anwendung
const BASE_URL = process.env.NODE_ENV === 'production' ? '/nytech/' : '/'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/nytech/", // Setze die Basis-URL hier
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
