export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  router: {
    base: '/',
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Studio 256 | Разработка веб-сервисов',
    htmlAttrs: {
      lang: 'ru',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Мы создаём надёжные и красивые веб-сайты и сервисы!',
      },
      { name: 'format-detection', content: 'telephone=no' },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Studio 256 | Разработка веб-сервисов',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'Мы создаём надёжные и красивые веб-сайты и сервисы!',
      },
      { property: 'og:type', content: 'website' },
      { property: 'og:image:type', content: 'image/jpg' },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://studio256dev.github.io/images/og.jpg',
      },
    ],
    link: [
      {
        rel: 'icon',
        href: './favicon/favicon.ico',
        sizes: 'any',
      },
      {
        rel: 'icon',
        href: './favicon/favicon-32.svg',
        type: 'image/svg+xml',
      },
      { rel: 'apple-touch-icon', href: './favicon/favicon-180.png' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['./assets/scss/index.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources',
    '@nuxtjs/composition-api/module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/yandex-metrika'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  styleResources: {
    scss: ['./assets/scss/resources/_index.scss'],
  },

  yandexMetrika: {
    id: '90489811',
    webvisor: true,
    clickmap: true,
    trackLinks: true,
    accurateTrackBounce: true,
  },
}
