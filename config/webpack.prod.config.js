const path = require('path')
const { merge } = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpackConfigBase = require('./webpack.base.config')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const webpackConfigProd = {
  mode: 'production',
  plugins: [
    // 清除打包输出文件的历史纪录，避免打包文件的混淆冲突
    new CleanWebpackPlugin({
      protectWebpackAssets: true
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[fullhase:4].css'
    }),
    new HtmlWebpackPlugin({
      inject: 'body',
      title: 'React App',
      filename: 'index.html',
      template: path.join(__dirname, '../src/index.html')
    })
  ]
}

module.exports = merge(webpackConfigBase, webpackConfigProd)