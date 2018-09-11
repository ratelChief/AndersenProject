'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');

module.exports = {
  entry: "./home", //что собирать
  output: {
    path: __dirname + "/public", // куда выводить
    filename: "build.js", // имя файла
    library: "home"
  },

  watch: NODE_ENV == 'development', //включаем вотчер, только если окружение - девелопмент

  watchOptions: {
    aggregateTimeout: 100
  },

  devtool: NODE_ENV == 'development' ? "source-map" : null, // соурс мэп работает только, если окружение - девелопмнт, если продакшн - то соурс мэп отсутствует

  plugins : [
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(NODE_ENV)
    })
  ],

  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader'
    }]
  }

};
