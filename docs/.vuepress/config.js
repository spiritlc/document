const path = require('path');

module.exports = {
  base: '/',
  configureWebpack: {
    resolve: {
      alias: {
        '@img': 'path/assets/img'
      }
    },
    module: {
      rules: [
        {
          test: /\.md$/,
          use: [
            {
              loader: 'vue-loader',
              options: {
                compilerOptions: {
                  preserveWhitespace: false
                }
              }
            },
            {
              loader: path.resolve(__dirname, './md-loader/index.js')
            }
          ]
        }
      ]
    }
  },
  themeConfig: {
      logo: '/logo.svg',
      algolia: {
        apiKey: '<API_KEY>',
        indexName: '<INDEX_NAME>'
      },
      nav: [
          { text: '指南', link: '/' },
          { text: '组件', link: '/components/ChangeLog.html' },
          { text: '字体', link: 'https://google.com' },
          { text: '资源', link: 'https://baidu.com' },
      ],
      sidebar: [
          {
            title: '更新日志',   // 必要的
            path: '/components/ChangeLog.html',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: false, // 可选的, 默认值是 true,
            sidebarDepth: 0,    // 可选的, 默认值是 1
          },
          {
            title: '开发指南',   // 必要的
            collapsable: false, // 可选的, 默认值是 true,
            sidebarDepth: 1,    // 可选的, 默认值是 1
            children: [
              {
                title: '安装',
                path: '/components/guide/installation',
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 0,    // 可选的, 默认值是 1
              },
              {
                title: '快速上手',
                path: '/components/guide/quickstart',
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 0,    // 可选的, 默认值是 1
              }
            ]
          },
          {
            title: '组件',
            children: [
              {
                title: 'input',
                path: '/components/input',
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 0,    // 可选的, 默认值是 1
              }
            ],
            initialOpenGroupIndex: -1 // 可选的, 默认值是 0
          }
      ]
  }
}
  