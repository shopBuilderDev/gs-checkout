// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss', 
    '@nuxt/image', 
    'nuxt-icon', 
    '@nuxtjs/apollo',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt'
  ],

  image: {
    domains: ['https://cdn.shopify.com']
  },

  apollo: {
    clients: {
      default: {
        httpEndpoint: process.env.SHOPIFY_STOREFRONT_HOST,
        httpLinkOptions: {
          headers: {
            'X-Shopify-Storefront-Access-Token': process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN
          },
        }
      }
    },
  },

})
