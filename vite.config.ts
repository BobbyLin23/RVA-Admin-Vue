import * as path from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), AutoImport({ resolvers: [NaiveUiResolver()] }), Components({ resolvers: [NaiveUiResolver()] })],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    open: true,
    cors: true,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:1337/',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
