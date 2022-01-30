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
    extensions: ['.js', '.jsx', '.tsx'],
    alias: {
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
      }
    ]
  }
}

module.exports = webpackBaseConfig