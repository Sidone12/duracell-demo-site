// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: ['@nuxtjs/tailwindcss', '@nuxt/image'],
    runtimeConfig: {
        public: {
            CLIENT_EMAIL: process.env.CLIENT_EMAIL,
            PRIVATE_KEY: process.env.PRIVATE_KEY,
        },
    },
})