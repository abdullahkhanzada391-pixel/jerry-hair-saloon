import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import fs from 'fs';

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'generate-dist-index',
      closeBundle() {
        const src = resolve(__dirname, 'dist/index-vite.html');
        const dest = resolve(__dirname, 'dist/index.html');
        if (fs.existsSync(src)) {
          fs.copyFileSync(src, dest);
          console.log('✓ Successfully created dist/index.html for deployment');
        }
      }
    }
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index-vite.html')
      }
    }
  },
  server: {
    port: 3000,
    open: true
  }
});
