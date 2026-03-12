import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/postcss'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/', // Убедись, что здесь именно '/', а не название репозитория
})