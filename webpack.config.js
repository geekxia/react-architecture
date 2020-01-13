var path = require('path')

// CommonJS模块
module.exports = {
  // mode: 'development',
  // 自定义入口文件
  entry: path.join(__dirname, './src/main.js'),
  // 输出
  output: {
    filename: 'xxxx.js',
    path: path.resolve(__dirname, './static')
  }
}
