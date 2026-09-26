import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/sumit-portfolio/',
  plugins: [react()],
});