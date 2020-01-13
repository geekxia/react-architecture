var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')

// CommonJS模块
module.exports = {
  mode: 'development',
  // 自定义入口文件
  entry: path.join(__dirname, './src/main.js'),
  // 输出
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './public')
  },
  devServer: {
    port: '8888',
    contentBase: path.join(__dirname, './public'),
    hot: true
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
      }
    ]
  }
}
