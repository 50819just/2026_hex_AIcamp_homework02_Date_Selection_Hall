import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/2026_hex_AIcamp_homework02_Date_Selection_Hall/' : '/',
  plugins: [react(), tailwindcss()],
}))
