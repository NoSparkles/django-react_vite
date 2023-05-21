import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        assetFileNames: 'assets/static[extname]',
        chunkFileNames: 'chunks/index.js',
        entryFileNames: 'assets/index.js',
      }
    }
  }
})
