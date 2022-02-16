import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// declare const __dirname: string;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'components': path.resolve(__dirname, 'src/components'),
      'service': path.resolve(__dirname, 'src/service')
    }
  },
  build: {
    rollupOptions: {
      input: {
        first: path.resolve(__dirname, 'src/pages/first/index.html'),
        second: path.resolve(__dirname, 'src/pages/second/index.html')
      }
    }
  }
})
