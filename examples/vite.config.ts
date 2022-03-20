import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  root: resolve(__dirname, './'),
  plugins: [react()],
  server: {
    open: "/base/index.html"
  }
})
