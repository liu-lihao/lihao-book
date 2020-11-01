const path = require('path');
const autoSidebar = require('./tool/autoSidebar.js');
const customSidebar = require('./tool/customSidebar.js');
const utils = require('./tool/utils.js');

const getFirstFilename = (str) => {
  return `/${str}/` + utils.getDirChildFilenameByIndex(path.join(__dirname, `../${str}`), 0);
}

module.exports = {
  title: '笔记', // TODO 改个标题~
  description: '在这里记下我的所有笔记，方便查阅', // TODO 给个描述~
  port: 8888,
  head: [
    // 此处可以使用 script 引用 js
    ['link', { rel: 'icon', href: '/images/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#d49400' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
    ['script', { src: 'https://cdn.bootcdn.net/ajax/libs/medium-zoom/1.0.5/medium-zoom.min.js' }]
  ],
  base: '/lihao-book/', // TODO 如果你项目放在域名的根目录，请清空，否则请加上路径~
  // TODO 例如：https://liu-lihao.github.io/lihao-book/index.html
  // TODO 则 base: '/lihao-book/'
  locales: {
    '/': {
      lang: 'zh-CN',
    }
  },
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    // 你的 Git 项目地址，添加后会在导航栏的最后追加
    //  repo: 'liu-lihao/node',
    // 启用编辑
    //  editLinks: true,
    // 编辑按钮的 Text
    //  editLinkText: '编辑文档！',
    // 编辑文档的所在目录
    //  docsDir: 'docs',
    // 假如文档放在一个特定的分支下：
    // docsBranch: 'master',
    sidebarDepth: 2,
    smoothScroll: true, // 启用页面滚动效果
    displayAllHeaders: false, // 默认为false ， 侧边栏是否仅显示当前激活的子选项。
    logo: '/images/logo.png', // TODO 这个路径可以不用改，直接去换张图片吧
    lastUpdated: '上次更新',
    nav: [ // TODO 这里定制你的顶部导航~
      { text: '首页', link: '/' },
      {
        text: '笔记集合', items: [
          { text: 'JavaScript', link: getFirstFilename('JavaScript') },
          { text: 'Vue', link: getFirstFilename('Vue') },
          { text: 'React', link: getFirstFilename('React') },
          { text: 'Nodejs', link: getFirstFilename('Nodejs') },
          { text: 'Koa', link: getFirstFilename('Koa') },
          { text: 'Webpack', link: getFirstFilename('Webpack') },
          { text: 'CSS', link: getFirstFilename('CSS') },
          { text: '前端', link: getFirstFilename('前端') },
          { text: '数据结构和算法', link: getFirstFilename('数据结构和算法') }
        ]
      },
      {
        text: '收藏好书', items: [
          { text: 'ES6 阮一峰', link: getFirstFilename('ES6-阮一峰') },
          { text: 'TypeScript xcatliu', link: getFirstFilename('TypeScript-xcatliu') },
        ]
      },
      {
        text: '站点', items: [
          { text: 'GitHub', link: 'https://liu-lihao.github.io/lihao-book/' },
          { text: 'Gitee', link: 'https://liu-lihao.gitee.io/lihao-book/' },
        ]
      },
      { text: 'GitHub', link: 'https://github.com/liu-lihao' },
    ],
    sidebar: {
      ...autoSidebar,
      ...customSidebar,
      '/': [], // TODO 根据你的喜好，可以来给首页添加侧边导航
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@img': path.join(__dirname, '../assets/images'), // TODO 使用~@img来引用这个目录下的图片。
      }
    }
  },
  // 插件
  plugins: {
    // '@vuepress/medium-zoom': {
    //   selector: '.theme-default-content :not(a) > img',
    //   // medium-zoom options here
    //   // See: https://github.com/francoischalifour/medium-zoom#options
    //   options: {
    //     margin: 16
    //   }
    // }
  },
  // 为 false 表示：不转为 ES5，不考虑对 IE 的 polyfills
  evergreen: false
}


/**
 * docs/.vuepress: 用于存放全局的配置、组件、静态资源等。
 * docs/.vuepress/components: 该目录中的 Vue 组件将会被自动注册为全局组件。
 * docs/.vuepress/theme: 用于存放本地主题。
 * docs/.vuepress/styles: 用于存放样式相关的文件。
 * docs/.vuepress/styles/index.styl: 将会被自动应用的全局样式文件，会生成在最终的 CSS 文件结尾，具有比默认样式更高的优先级。
 * docs/.vuepress/styles/palette.styl: 用于重写默认颜色常量，或者设置新的 stylus 颜色常量。
 * docs/.vuepress/public: 静态资源目录。
 * docs/.vuepress/templates: 存储 HTML 模板文件。
 * docs/.vuepress/templates/dev.html: 用于开发环境的 HTML 模板文件。
 * docs/.vuepress/templates/ssr.html: 构建时基于 Vue SSR 的 HTML 模板文件。
 * docs/.vuepress/config.js: 配置文件的入口文件，也可以是 YML 或 toml。
 * docs/.vuepress/enhanceApp.js: 客户端应用的增强。
 */