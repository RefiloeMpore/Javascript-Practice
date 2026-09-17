import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Allows connections from outside the container
    port: 5173,
    strictPort: true,
    hmr: {
      // This tells the browser to connect to the live-reload server via the Codespaces proxy
      host: process.env.CODESPACE_NAME
        ? `${process.env.CODESPACE_NAME}-5173.app.github.dev`
        : 'localhost',
      clientPort: 443, // Use the secure HTTPS port
      protocol: 'wss', // Use secure WebSockets
    },
  },
})