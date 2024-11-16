import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    host: true
  },
  base: '',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        wdrozenie: resolve(__dirname, 'wdrozenie-erp/index.html'),
        koszt: resolve(__dirname, 'koszt-wdrozenia-erp/index.html'),
        systemy: resolve(__dirname, 'systemy-erp/index.html')
      },
      output: {
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
            return `[name][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        }
      }
    }
  }
});