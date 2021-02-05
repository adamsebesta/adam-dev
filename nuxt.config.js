module.exports = {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Adam Sebesta Development',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Web and Mobile App Development.'
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://asdevelopment.ca'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: '/meta.png'
      },
    ],
    link: [{
        rel: 'icon',
        type: 'image/x-icon',
        href: '/logo.png'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700;800&family=Open+Sans:wght@400;600;700;800&display=swap'
      },
      {
        rel: 'stylesheet',
        href: "https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700;800&family=Crimson+Text:wght@400;600;700&display=swap"
      },
      // { rel: "stylesheet", href:"https://pro.fontawesome.com/releases/v5.10.0/css/all.css", integrity:"sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p", crossorigin:"anonymous" },
      {
        rel: "stylesheet",
        href: "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      },
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
    {
      src: '~/plugins/vue-awesome-swiper'
    },
    {
      src: './plugins/vue-slick-carousel.js'
    },
    {
      src: './plugins/vue-tooltip.js'
    },
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


  render: {
    bundleRenderer: {
      shouldPreload: (_, type) => {
        return type === 'image'
      }
    }
  },

  // Modules (https://go.nuxtjs.dev/config-modules)

  modules: [
    '@nuxtjs/style-resources'
  ],

  //You will have to add this new object if it doesn't exist already
  styleResources: {
    scss: ['./assets/scss/*.scss']
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {

  }
}
