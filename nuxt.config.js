const webpack = require('webpack')
export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Akademia Pamięci Gdynia',
    htmlAttrs: {
      lang: 'pl-PL'
    },
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      },
      {
        name: 'keywors',
        content:
          'zajęcia pamięciowe, ortografia, zajęcia dla dzieci, zajęcia dla seniorów'
      },
      {
        name: 'msapplication-TileColor',
        content: '#2b5797'
      },
      {
        property: 'og:title',
        content:
          'Akademia Pamięci Gdynia - Dołącz do grona ludzi świadomie korzystających z możliwości swojego umysłu'
      },
      {
        property: 'og:description',
        content:
          'Seniorów zapraszamy na trening umysłu, dawkę pozytywnej energii i świetną zabawę. Dzieci zapraszamy na zajęcia z ortografii, trening czytania i notowania, techniki pamięciowe, oraz autoprezentację.'
      },
      {
        property: 'og:site_name',
        content: 'Akademia Pamięci Gdynia'
      },
      {
        property: 'og:url',
        content: 'https://akademiapamiecigdynia.pl'
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png'
      },
      {
        rel: 'mask-icon',
        href: '/safari-pinned-tab.svg',
        color: '#000'
      }
    ]
  },
  loading: '~/components/loader.vue',
  /*
   ** Global CSS
   */
  css: ['@/assets/style/global.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js modules
   */
  modules: ['nuxt-facebook-pixel-module'],
  facebook: {
    /* module options */
    pixelId: '288177178840337',
    autoPageView: true
  },
  /*
   ** Build configuration
   */
  build: {
    extend: config => {
      const svgRule = config.module.rules.find(rule => rule.test.test('.svg'))

      svgRule.test = /\.(png|jpe?g|gif|webp)$/

      config.module.rules.push({
        test: /\.svg$/,
        loader: 'vue-svg-loader'
      })
    }
  }
}
