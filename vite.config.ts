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
    port: 5173,  // Different port from your server
    proxy: {
      // Proxy API calls to your backend server
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true
      }
    }
  },
  preview: {
    port: 5173
  }
})
