// import { defineConfig } from 'vite'
import {defineConfig as defineTestConfig} from "vitest/config"
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


export default  defineTestConfig({
  plugins: [react(), 
    tailwindcss()],
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './src/setup.ts',
    }
})
