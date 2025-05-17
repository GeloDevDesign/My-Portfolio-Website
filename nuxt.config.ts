import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  app: {
   head: {
     title: 'GeloWebDev', // default fallback title
     htmlAttrs: {
       lang: 'en',
     },
     link: [
       { rel: 'icon', type: 'image/x-icon', href: '/gelowebdev.svg' },
     ],
       "script": [{
       src:"https://res.cloudinary.com/veseylab/raw/upload/v1684982764/magicmouse-2.0.0.cdn.min.js"
     },
    {
       src:"https://unpkg.com/aos@next/dist/aos.js"
     }],
   },
 },

  //  ssr: false,
  // spaLoadingTemplate: 'spa-loading-template.html',
  nitro: {
   preset: 'node-server'
 },

  modules: ['@nuxt/image'],
})