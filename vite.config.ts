const path = require('path')
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const pathSrc = path.resolve(__dirname, "./src");
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve:{
    alias: [
        {find: "@", replacement: path.resolve(__dirname, 'src')}
    ]
  },
css: {
    preprocessorOptions: {
      scss: {
        additionalData:`@import "${pathSrc}/assets/scss/main";`
      }
    }
  },

})