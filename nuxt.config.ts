import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    css: [
        // '@fortawesome/fontawesome-svg-core/styles.css'
    ],
    buildModules: [
        // pinia plugin
        '@pinia/nuxt',
    ],
    
    plugins: [
        // {ssr: false, src: '~/plugins/fontawesome', mode:'client'}
    ]
})
