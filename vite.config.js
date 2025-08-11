import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// This repo has the app inside the 'furniture-by-amanda-site' subfolder.
// Tell Vite to use that as the root, but output the production build to ../dist
// so Netlify can publish it from the repo root.
export default defineConfig({
  root: 'furniture-by-amanda-site',
  plugins: [react()],
  publicDir: 'public', // resolves relative to 'root'
  build: {
    outDir: '../dist',   // write dist/ at the repo root
    emptyOutDir: true
  },
})
