import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      assets: resolve(__dirname, './src/assets'),
      pages: resolve(__dirname, './src/pages'),
      hooks: resolve(__dirname, './src/hooks'),
      common: resolve(__dirname, './src/common'),
      model: resolve(__dirname, './src/model'),
      components: resolve(__dirname, './src/components'),
      routes: resolve(__dirname, './src/routes'),
    },
  },
});
