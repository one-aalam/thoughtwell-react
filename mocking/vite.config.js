import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslintPlugin from 'vite-plugin-eslint'
import mix from 'vite-plugin-mix'

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        proxy: {
            '/api': {
              target: 'http://jsonplaceholder.typicode.com',
              changeOrigin: true,
              secure: false,
              rewrite: (path) => path.replace(/^\/api/, '')
            }
        },
    },
    plugins: [
        react(),
        eslintPlugin(),
        mix({
            handler: 'src/api/handler.js',
        }),
    ],
})
