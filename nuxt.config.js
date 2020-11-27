
module.exports = {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Adam Sebesta Development',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Web and Mobile App Development.' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://asdevelopment.ca'
      },
      { hid: 'og:image', property: 'og:image', content: '/meta.png' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/logo.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,600;1,700&display=swap' },
      { rel: "stylesheet", href:"https://pro.fontawesome.com/releases/v5.10.0/css/all.css", integrity:"sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p", crossorigin:"anonymous" }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/css/main.scss',
    'vue-slick-carousel/dist/vue-slick-carousel.css',
    'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
    
  ],
  scss: [
   'swiper/swiper.scss'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/vue-formulate',
    { src: '~/plugins/vue-awesome-swiper', mode: 'client' },
    { src: './plugins/vue-slick-carousel.js' },
  ],
  // ||
  publicRuntimeConfig: {
    logicAppUrl: process.env.LOGIC_APP_URL 
  },

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  server: {
    host: '0.0.0.0'
  },

  serverMiddleware: [
    {
      path: 'api/v1',
      handler: '~middleware/api/v1/index.js'
    }
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
      
  }
}
