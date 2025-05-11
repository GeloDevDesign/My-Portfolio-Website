// nuxt.config.ts
export default defineNuxtConfig({
  app: {
    head: {
      title: 'GeloWebDev', // default fallback title
      htmlAttrs: {
        lang: 'en',
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/gelowebdev.svg' },
      ]
    }
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  
  // Replace the vite-specific tailwind configuration with the Nuxt module
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  
  vite: {
    build: {
      sourcemap: true, // Enable sourcemaps for the build
    }
  }
})