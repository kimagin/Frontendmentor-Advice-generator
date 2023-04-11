import { defineConfig } from 'vite'
import webfontDownload from 'vite-plugin-webfont-dl'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [webfontDownload()],
})
