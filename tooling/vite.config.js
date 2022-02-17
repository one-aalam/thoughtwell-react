import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslintPlugin from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
    root: 'src',
    build: {
      outDir: '../dist',
      emptyOutDir: true
    },
    plugins: [
        react(),
        eslintPlugin()
    ]
})
