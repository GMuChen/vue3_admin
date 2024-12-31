import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import AutoImport from 'unplugin-auto-import/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({ imports: ["vue", "vue-router"] })
  ],
  resolve: { // 配置路径的别名 @ -> src路径的别名
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
