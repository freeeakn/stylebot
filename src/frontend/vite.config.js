import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: '../../public_html',
  },
  server: {
    proxy: {
      "/api": {
        target: "http://192.168.0.115:8000/",
        changeOrigin: true,
        secure: false,
        ws: true,
      },
    },
  },
})
