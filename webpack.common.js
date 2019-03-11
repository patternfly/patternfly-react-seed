const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.tsx'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(tsx|ts)?$/,
        use: [
          {
            loader: 'ts-loader'
          }
        ]
      },
      {
        test: /\.(svg|ttf|eot|woff|woff2)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'fonts/[name].[ext]',
            // Limit at 50k. larger files emited into separate files
            limit: 5000
          }
        },
        include: function(input) {
          // only process modules with this loader
          // if they live under a 'fonts' or 'pficon' directory
          return input.indexOf('fonts') > -1 || input.indexOf('pficon') > -1;
        }
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        use: [{ loader: 'url-loader', options: { limit: 10000, outputPath: 'images' } }, 'img-loader']
      },
      {
        test: /\.svg$/,
        use: {
          loader: 'svg-url-loader',
          options: {}
        },
        include: function(input) {
          // only process modules with this loader
          // if they live under an 'images' directory
          return input.indexOf('images') > -1;
        }
      }
    ]
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    plugins: [
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, './tsconfig.json')
      })
    ]
  },
};
