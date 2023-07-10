// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    'nuxt-delay-hydration',
  ],
  delayHydration: {
    mode: "init",
  },
})
