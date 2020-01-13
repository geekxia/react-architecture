weppack
webpack-cli
  webpack.config.js

入口配置
出口配置

使用 HtmlWebpackPlugin

使用 style-loader css-loader sass-loader

使用 webpack-dev-server 实现本地服务

启用HRM
  devServer.hot = true
  HotModuleReplacementPlugin：https://www.webpackjs.com/plugins/hot-module-replacement-plugin/

使用cross-env实现 生产环境与开发环境 的分离：https://www.npmjs.com/package/cross-env


babel-loader
babel-core babel-preset-env babel-preset-react
配置.babelrc文件
安装 react react-dom
配置热更新 module.hot


配置 @ 绝对路径：
config.resolve.alias = { '@': path.resolve()}
