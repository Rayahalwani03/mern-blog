import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:5000', // or whatever port your backend is running on
        changeOrigin: true,
        secure: false,
      }
    }
  }
}) 