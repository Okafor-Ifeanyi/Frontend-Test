// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  alias: {
    "@": resolve(__dirname, './'),
  },
  css: [
    'bootstrap/dist/css/bootstrap.min.css',
    '@/assets/main.css',
  ],
  plugins: [
    './plugins/vue-toast-notification.client.ts'
  ],
})
