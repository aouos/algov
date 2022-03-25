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
      utils: resolve(__dirname, './src/utils'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            const str = id.toString().split('node_modules/')[1].split('/')[0];
            if (str.includes('echarts')) {
              return 'echarts';
            }
            if (str.includes('tdesign-react') || str.includes('tdesign-icons-react')) {
              return 'tdesign';
            }
            if (str.includes('react') || str.includes('react-router-dom')) {
              return 'react';
            }
            return 'vendor';
          }
        },
      },
    },
  },
});
