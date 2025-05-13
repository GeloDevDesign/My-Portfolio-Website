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
     cdnURL: 'https://res.cloudinary.com/veseylab/raw/upload/v1684982764/magicmouse-2.0.0.cdn.min.js',
    head: {
      title: 'GeloWebDev',
       link: [
        { rel: 'icon', type: 'image/x-icon', href: '/gelowebdev.svg' },
      ], // default fallback title
      htmlAttrs: {
        lang: 'en',
      },
     
      "script": [{
        src:"https://res.cloudinary.com/veseylab/raw/upload/v1684982764/magicmouse-2.0.0.cdn.min.js"
      }],
    },
    
  },
   nitro: {
    preset: 'node-server'
  }
})