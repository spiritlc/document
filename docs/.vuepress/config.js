const path = require('path');
const locales = require('./config/locales.json')
 
module.exports = {
  base: '/',
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/zh/': {
      lang: '中文',
      title: 'VuePress',
      description: 'Vue 驱动的静态网站生成器'
    },
    '/en/': {
      lang: 'Engulish', // 将会被设置为 <html> 的 lang 属性
      title: 'VuePress',
      description: 'Vue-powered Static Site Generator'
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@img': 'path/assets/img'
      }
    }
  },
  themeConfig: {
      logo: '/logo.svg',
      algolia: {
        apiKey: '<API_KEY>',
        indexName: '<INDEX_NAME>'
      },
      locales
  }
}
  