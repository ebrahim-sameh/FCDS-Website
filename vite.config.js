import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  // Project site on GitHub Pages: https://USER.github.io/FCDS-Website/
  base: mode === 'production' ? '/FCDS-Website/' : '/',
  plugins: [react()],
}))
