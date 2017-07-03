const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin

module.exports = {
  context: path.resolve(__dirname, 'client'),
  entry: {
    index: [path.resolve(__dirname, 'client/index.js')],
    vendor: ['react', 'react-dom', 'prop-types'],
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].js',
  },
  resolve: {
    modules: [path.resolve(__dirname, 'client'), 'node_modules'],
    extensions: ['.js', '.jsx', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        loader: 'url-loader',
        options: {
          limit: 1000,
          name: 'assets/imgs/[name].[ext]',
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf|svg)$/i,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'assets/fonts/[name].[ext]',
        },
      },
    ],
  },
  plugins: [
    new CommonsChunkPlugin({
      names: ['vendor', 'manifest'],
      filename: '[name].js',
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'client/index.html'),
      filename: 'index.html',
      inject: 'body',
      chunks: ['manifest', 'vendor', 'index'],
    }),
  ],
}
