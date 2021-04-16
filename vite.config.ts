const path = require('path')
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

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
        additionalData:`$g1: hsl(200, 80%, 50%); $g2: hsl(185, 80%, 50%); $g3: hsl(160, 80%, 50%); $g4: hsl(145, 80%, 50%); $grey: hsl(220, 20%, 20%);`
      }
    }
  }
})
