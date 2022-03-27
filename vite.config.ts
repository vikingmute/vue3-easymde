import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'
import VueTypeImports from 'vite-plugin-vue-type-imports'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), eslintPlugin(), VueTypeImports()],
  build: {
    outDir: './static',
    emptyOutDir: true
  },
})

