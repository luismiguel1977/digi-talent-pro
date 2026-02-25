import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: '.',
  base: './', // Importante para rutas relativas
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    target: 'es2015', // Mayor compatibilidad
    minify: false, // Evitar errores de minificación
    sourcemap: false,
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]'
      }
    }
  },
  server: {
    host: true
  }
});