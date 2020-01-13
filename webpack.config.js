var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var webpack = require('webpack')


// 使用cross-env模块，动态地设置process.env环境变量
// console.log('===========',process.env.NODE_ENV)
var env = process.env.NODE_ENV

var config = {
  mode: 'production',
  entry: path.join(__dirname, './src/main.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist')
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './public/index.html')
    })
  ],
  module: {
    rules: [
      // 第一条规则
      {
        test: /\.(css|scss)$/,
        use: [
          // 这三个loader顺序，是固定的
          { loader: 'style-loader'}, // 将 JS 字符串生成为 style 节点
          { loader: 'css-loader'},  // 将 CSS 转化成 CommonJS 模块
          { loader: 'sass-loader'}  // // 将 Sass 编译成 CSS
        ]
      },
      {
        test: /\.(js|jsx)/,
        use: [
          { loader: 'babel-loader'}
        ],
        exclude: /node_modules/
      }
    ]
  }
}

if (env === 'development') {
  config.mode = 'development'
  config.output = {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './public')
  }
  config.devServer = {
    port: '8888',
    contentBase: path.join(__dirname, './public'),
    // 只能开发环境中启动HRM热更新
    // https://www.webpackjs.com/plugins/hot-module-replacement-plugin/
    hot: true
  }
  // 会生成对于调试的完整的.map文件，但同时也会减慢打包速度
  config.devtool = 'source-map'
  // 启用热更新
  config.plugins.push(new webpack.HotModuleReplacementPlugin())
}

// CommonJS模块
module.exports = config
