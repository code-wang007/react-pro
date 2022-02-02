const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const MODE = process.env.NODE_ENV !== 'prodction'

const webpackBaseConfig = {
  entry: path.join(__dirname, '../src/index.tsx'),
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].[fullhash:4].js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.tsx', '.ts'],
    alias: {
      "@src": path.join(__dirname, '../src'),
      "pages": path.join(__dirname, '../src/pages'),
      "@components": path.join(__dirname, '../src/components')
    }
  },
  module: {
    rules: [
      {
        test: /\.js[x]/,
        use: 'babel-loader'
      },
      {
        test: /\.ts[x]/,
        use: 'ts-loader'
      },
      {
        test: /\.(sc|c)ss$/,
        use: [
          MODE ? 'style-loader' : MiniCssExtractPlugin, 
          'css-loader', 
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            //当加载的图片小于limit时，会直接用url-loader将图片的格式编译成base64格式的
            //当加载图片大于limit时，需要使用file-loader来编译，并且打包到dist文件夹下面
            options: {
              limit: 16000,
              name: 'img/[name].[hash:8].[ext]' // 对打包后的图片命名进行相关的处理，表示在dist文件夹下建一个img文件夹保存图片，同时图片的名字是原来的名字加上8位hash值，再加上图片的扩展名
            }
          }
        ]
      }
    ]
  }
}

module.exports = webpackBaseConfig