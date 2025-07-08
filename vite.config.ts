import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: '.',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html')
      }
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './client/src'),
      '@/components': resolve(__dirname, './client/src/components'),
      '@/pages': resolve(__dirname, './client/src/pages'),
      '@/utils': resolve(__dirname, './client/src/utils')
    }
  },
  server: {
    host: true,
    port: 3000
  },
  preview: {
    port: 3000
  }
})
