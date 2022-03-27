import { defineConfig } from 'vite'
import * as path from 'path'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'
import dts from 'vite-plugin-dts'
import VueTypeImports from 'vite-plugin-vue-type-imports'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), eslintPlugin(), VueTypeImports(), dts()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'VueEasyMDE',
      fileName: (format) => `vue-easymde.${format}.js`
    },
    emptyOutDir: true,
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue', 'easymde'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
          easymde: 'EasyMDE'
        }
      }
    }
  }
})

