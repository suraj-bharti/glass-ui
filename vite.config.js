import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  base: '/glass-ui/',
  build: {
    lib: {
      entry: 'src/index.js',
      name: 'GlassUI',
      fileName: (format) => `glass-ui.${format}.js`,
      formats: ['es', 'umd']
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        },
        exports: 'named',
        assetFileNames: (assetInfo) => {
          const name = assetInfo?.name || assetInfo?.filename || '';
          if (name === 'style.css' || name === 'glass-ui-vue.css') return 'glass-ui.css';
          return name;
        }
      }
    }
  },
})
