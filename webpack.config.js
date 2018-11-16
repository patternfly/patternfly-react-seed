const path = require('path');
const srcDir = path.resolve(__dirname, 'src');
const distDir = path.resolve(__dirname, 'dist');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  entry: [
    path.join(srcDir, 'index.js')
  ],
  output: {
    path: distDir,
    filename: '[name].bundle.js'
  },
  devServer: {
    contentBase: distDir,
    historyApiFallback: true,
    compress: true,
    clientLogLevel: 'info',
    host: 'localhost',
    port: 9001
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(srcDir, 'index.html')
    })
  ]
}
