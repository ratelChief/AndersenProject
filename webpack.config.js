const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
  entry: __dirname + '/src/index.js', //что собирать
  output: {
    path: __dirname + '/public', // куда выводить
    filename: 'bundle.js', // имя файла
  },

  watch: NODE_ENV == 'development', //включаем вотчер, только если окружение - девелопмент

  watchOptions: {
    aggregateTimeout: 100
  },

  devtool: 'source-map', // соурс мэп работает только, если окружение - девелопмнт, если продакшн - то соурс мэп отсутствует

  plugins : [
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(NODE_ENV)
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ],

  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      include: [/src/],
      exclude: [/node_modules/],
      loader: 'babel-loader'
    }]
  }

};
