const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const autoprefixer = require('autoprefixer');
const postCssLoader = {
  loader: 'postcss-loader',
  options: {
    plugins: [
      autoprefixer({
        browsers: ['last 2 versions']
      })
    ]
  }
};
const cssLoader = {
  loader: 'css-loader',
  options: {
    camelCase: true,
    modules: true,
    localIdentName: '[name]__[local]___[hash:base64:5]'
  }
};

const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
  entry: `${__dirname }/src/index.js`, //что собирать
  output: {
    path: `${__dirname }/public`, // куда выводить
    filename: 'bundle.js' // имя файла
  },

  watch: NODE_ENV === 'development', //включаем вотчер, только если окружение - девелопмент

  watchOptions: {
    aggregateTimeout: 100
  },

  devServer: {
    hot: true,
    historyApiFallback: true,
    contentBase: './public'
  },

  devtool: 'source-map', // соурс мэп работает только, если окружение - девелопмнт, если продакшн - то соурс мэп отсутствует

  plugins: [
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
    },
    {
      test: /\.(css|less)$/,
      use: ['style-loader', cssLoader, postCssLoader, 'less-loader']
    }
    ] }
};
