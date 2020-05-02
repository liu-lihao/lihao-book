# 环境搭建

## 基础Webpack环境搭建

1. 初始化npm

在项目目录下：`npm init`

1. 安装webpack

在项目目录下：`yarn add webpack --dev`

1. 安装webpack-cli

> 在使用`webpack`打包时，会显示该提醒，这里先直接安装即可。

在项目目录下：`yarn add webpack-cli --dev`

1. 新建Webpack配置文件

在项目目录下：新建`webpack.config.js`，并复制官方文档的实例

```javascript
// webpack.config.js
const path = require('path');

module.exports = {
  // 入口文件，我们需要在入口处写个简单的【案例】
  entry: './src/index.js',
  // 输出配置
  output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'index.js'
  }
};
```

案例如下：

```javascript
// ./src/index.js
import { add } from './utils'

const count = add(1, 3);
console.log(count);

// ./src/utils.js
export const add = (a, b) => {
    return a + b
}
```

1. 简单打包一次

在项目目录命令行下输入：`npx webpack`

## 然后一顿操作，最终要区分2个环境的打包方式

> 一顿操作：参考别人用到的插件，然后百度插件的作用，并自己看该插件文档*，并自己引入*，有问题再看别人怎么用的。

### `webpack.common.config.js`

```javascript
// html文件模板
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  module: {
    rules: [
      {
        test: /\.jsx$/,
        // 这些文件不处理
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      // 图片的配置
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'resource/[name].[ext]'
            }
          }
        ]
      },
      // 字体图标的配置
      {
        test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'resource/[name].[ext]'
            }
          }
        ]
      }
    ]
  },
  stats: {
    children: false
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.ico'
    })
  ]
};
```

### `webpack.dev.config.js`

```javascript
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const webpackCommonConfig = require('./webpack.common.config');

const webpackDevConfig = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  devtool: 'cheap-module-source-map',
  plugins: [
    new webpack.DefinePlugin({
      MODE_ENV: JSON.stringify('development')
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
};

module.exports = webpackMerge([webpackCommonConfig, webpackDevConfig]);

```

### `webpack.prod.config.js`

```javascript
const path = require('path');
const webpack = require('webpack');
// 每次打包清除 dist
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// CSS独立成文件
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// 以树图的方式展示打包后的文件
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// 显示进程的完成进度
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
// 命令行样式工具，配合ProgressBarPlugin使用，实现彩色进度条。
const chalk = require('chalk');

const webpackMerge = require('webpack-merge');
const webpackCommonConfig = require('./webpack.common.config');

const webpackProdConfig = {
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: './',
    filename: 'js/main.js'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        // 这些文件不处理
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "sass-loader"]
        })
      }
    ]
  },
  /**
     * webpack中实现代码分割的两种方式：
     * 1.同步代码：只需要在webpack配置文件总做optimization的配置即可
     * 2.异步代码(import)：异步代码，无需做任何配置，会自动进行代码分割，放置到新的文件中
     */
  optimization: {
    splitChunks: {
      chunks: "all",          //async异步代码分割 initial同步代码分割 all同步异步分割都开启
      minSize: 30000,         //字节 引入的文件大于30kb才进行分割
      //maxSize: 50000,         //50kb，尝试将大于50kb的文件拆分成n个50kb的文件
      minChunks: 1,           //模块至少使用次数
      maxAsyncRequests: 5,    //同时加载的模块数量最多是5个，只分割出同时引入的前5个文件
      maxInitialRequests: 3,  //首页加载的时候引入的文件最多3个
      automaticNameDelimiter: '~', //缓存组和生成文件名称之间的连接符
      name: true,                  //缓存组里面的filename生效，覆盖默认命名
      cacheGroups: { //缓存组，将所有加载模块放在缓存里面一起分割打包
        vendors: {  //自定义打包模块
          test: /[\\/]node_modules[\\/]/,
          priority: -10, //优先级，先打包到哪个组里面，值越大，优先级越高
          filename: 'js/vendors.js',
        },
        default: { //默认打包模块
          priority: -20,
          reuseExistingChunk: true, //模块嵌套引入时，判断是否复用已经被打包的模块
          filename: 'js/common.js'
        }
      }
    }
  },
  plugins: [
    new ProgressBarPlugin({
      format: chalk.green('Webpack 正在打包：') + chalk.blue(':bar ') + chalk.green(':percent') + ' ' + chalk.magenta('(:elapsed s)') + chalk.yellow.bold(' :msg'),
      clear: false,
      complete: '█',
      incomplete: '_'
    }),
    new CleanWebpackPlugin(),
    new ExtractTextPlugin("css/[name].css"),
    new BundleAnalyzerPlugin(),
    new webpack.DefinePlugin({
      MODE_ENV: JSON.stringify('production')
    })
  ]
}

module.exports = webpackMerge([webpackCommonConfig, webpackProdConfig]);
```

### `package.json`

```json
{
  "name": "react-first-app",
  "version": "1.0.0",
  "description": "study React",
  "private": true,
  "scripts": {
    "dev": "cross-env NODE_ENV=development webpack-dev-server --config build/webpack.dev.config.js",
    "build:prod": "cross-env NODE_ENV=production webpack --config build/webpack.prod.config.js"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/liu-lihao/react-first-app.git"
  },
  "author": "liulihao",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/liu-lihao/react-first-app/issues"
  },
  "homepage": "https://github.com/liu-lihao/react-first-app#readme",
  "devDependencies": {
    "@babel/core": "^7.8.4",
    "@babel/preset-env": "^7.8.4",
    "@babel/preset-react": "^7.8.3",
    "babel-loader": "^8.0.6",
    "clean-webpack-plugin": "^3.0.0",
    "cross-env": "^7.0.0",
    "css-loader": "^3.4.2",
    "extract-text-webpack-plugin": "^4.0.0-beta.0",
    "file-loader": "^5.1.0",
    "html-webpack-plugin": "^3.2.0",
    "node-sass": "^4.13.1",
    "progress-bar-webpack-plugin": "^2.1.0",
    "sass-loader": "^8.0.2",
    "style-loader": "^1.1.3",
    "url-loader": "^3.0.0",
    "webpack": "^4.41.6",
    "webpack-bundle-analyzer": "^3.6.0",
    "webpack-cli": "^3.3.11",
    "webpack-dev-server": "^3.10.3",
    "webpack-merge": "^4.2.2"
  },
  "dependencies": {
    "react": "^16.12.0",
    "react-dom": "^16.12.0"
  }
}

```
