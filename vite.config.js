import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        brightColor:"#AB6B2E",
        backgroundColor:"#FDE9CC",
      },
    },
  },
  plugins: [react(),  tailwindcss(),],
})
