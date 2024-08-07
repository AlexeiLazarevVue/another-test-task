import alias from '@rollup/plugin-alias'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'url'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), alias({
      entries: [
        { find: '/@src', replacement: '/src' },
      ],
    })],
  // resolve: {
  //   alias: {
  //     "/@src/": path.join(__dirname, "src/"),
  //   },
  // },
})
