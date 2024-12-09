import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    hmr: true, 
    port: 3000, 
    host: '0.0.0.0', 
    historyApiFallback: true, 
  },
  base: '/neg/',
  plugins: [react()],
})
