module.exports = {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "Adam Sebesta Development",
    meta: [
      {
        charset: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        hid: "description",
        name: "description",
        content: "Web and Mobile App Development.",
      },

      {
        hid: "og:type",
        property: "og:type",
        content: "website",
      },
      {
        hid: "og:url",
        property: "og:url",
        content: "https://www.adamsebesta.dev/",
      },
      {
        hid: "twitter:card",
        property: "twitter:card",
        content: "summary_large_image",
      },
      {
        hid: "twitter:url",
        property: "twitter:url",
        content: "summary_large_image",
      },
      {
        hid: "twitter:url",
        property: "twitter:url",
        content: "https://www.adamsebesta.dev/",
      },
      {
        hid: "twitter:title",
        property: "twitter:title",
        content: "Adam Sebesta Development | Home",
      },
      {
        hid: "twitter:description",
        property: "twitter:description",
        content: "Web and Mobile App Development",
      },
    ],
    link: [
      // {
      //   rel: "icon",
      //   type: "image/x-icon",
      //   href: "/logo.png",
      // },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/favicon/apple-touch-icon.png",
      },
      {
        rel: "icon",
        sizes: "32x32",
        type: "image/x-icon",
        href: "/favicon/favicon-32x32.png",
      },
      {
        rel: "icon",
        sizes: "16x16",
        type: "image/x-icon",
        href: "/favicon/favicon-16x16.png",
      },
      {
        rel: "manifest",
        href: "/favicon/site.webmanifest",
      },
      {
        rel: "mask-icon",
        color: "#5bbad5",
        href: "/favicon/safari-pinned-tab.svg",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600;700&display=swap",
      },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ["@/assets/css/main.scss"],
  scss: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],
  // ||
  publicRuntimeConfig: {
    logicAppUrl:
      "https://adamdevapim.azure-api.net/contact/manual/paths/invoke",
  },

  target: "static",

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
  ],
  server: {
    host: "0.0.0.0",
  },

  /*
   ** Router configuration
   */
  router: {
    // scrollBehavior: async (to, from, savedPosition) => {
    //   if (savedPosition) {
    //     return savedPosition;
    //   }
    //   const findEl = async (hash, x) => {
    //     return (
    //       document.querySelector(hash) ||
    //       new Promise((resolve, reject) => {
    //         if (x > 50) {
    //           return resolve();
    //         }
    //         setTimeout(() => {
    //           resolve(findEl(hash, ++x || 1));
    //         }, 100);
    //       })
    //     );
    //   };
    //   if (to.hash) {
    //     let el = await findEl(to.hash);
    //     if ("scrollBehavior" in document.documentElement.style) {
    //       return window.scrollTo({ top: el.offsetTop, behavior: "smooth" });
    //     } else {
    //       return window.scrollTo(0, el.offsetTop);
    //     }
    //   }
    //   return { x: 0, y: 0 };
    // },
  },

  render: {
    bundleRenderer: {
      shouldPreload: (_, type) => {
        return type === "image";
      },
    },
  },

  // Modules (https://go.nuxtjs.dev/config-modules)

  modules: ["@nuxtjs/style-resources", "cookie-universal-nuxt"],

  //You will have to add this new object if it doesn't exist already
  styleResources: {
    scss: ["./assets/scss/*.scss"],
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
};
