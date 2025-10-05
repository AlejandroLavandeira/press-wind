import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  cacheDir: './node_modules/.vite/press-wind-editor',
  build: {
    outDir: resolve(__dirname, 'dist'),
    emptyOutDir: false,
    manifest: false,
    rollupOptions: {
      input: resolve(__dirname, 'assets/css/styles.css'),
      output: {
        assetFileNames: 'style-editor.css',
      },
    },
  },
});