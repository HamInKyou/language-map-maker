import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/language-map-maker/',
  plugins: [react()],
  resolve: {
    alias: {
      '@app': path.resolve(__dirname, './src/@app'),
      '@pages': path.resolve(__dirname, './src/@pages'),
      '@widgets': path.resolve(__dirname, './src/@widgets'),
      '@entities': path.resolve(__dirname, './src/@entities'),
      '@shares': path.resolve(__dirname, './src/@shares'),
    },
  },
});
