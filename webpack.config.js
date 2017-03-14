const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  },
  devtool: 'cheap-module-source-map',
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'webpack-introduction.js'
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader'
            },
            {
              loader: 'sass-loader'
            }
          ]
        })
      },
      {
        test: /\.(eot|ttf|woff)$/,
        use: {
          loader: 'file-loader'
        }
      }
    ]
  },
  node: {
    fs: 'empty'
  },
  plugins: [
    new ExtractTextPlugin('webpack-introduction.css'),
    new HtmlWebpackPlugin({
      title: 'webpack Introduction',
      template: 'src/index.ejs'
    })
  ],
  resolve: {
    extensions: ['.js', '.scss']
  }
};