import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/FinTech-Learning/',
  plugins: [
    tailwindcss(),
    react()
  ],
  build: {
    outDir: 'dist',
  },
  server: {
    historyApiFallback: true,   // 👈 Important for React Router
  }
})