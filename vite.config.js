import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],


  server : {
    port : 3000,
    allowedHosts : 'https://999bb9c434f6.ngrok-free.app/',
    proxy : {
      '/api' :{
        target : "http://localhost:3000/jobs",
        changeOrigin: true,
        rewrite : (path) => path.replace(/^\/api/,'') 
      }
    }
  },
})
