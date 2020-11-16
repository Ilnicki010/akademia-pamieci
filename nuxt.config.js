const webpack = require('webpack')
export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
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
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ]
  },
  webfontloader: {
    google: {
      families: [
        'Josefin+Sans:400,700&display=swap',
        'Open+Sans:300,400&display=swap'
      ]
    }
  },
  loading: {
    color: '#fff'
  },
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
  modules: ['nuxt-webfontloader', 'nuxt-facebook-pixel-module'],
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
