const HtmlWebpackPlugin = require("html-webpack-plugin");
const HOST = process.env.HOST || "localhost";
const PORT = process.env.PORT || "9000";
const path = require("path");
const srcDir = path.resolve(__dirname, "src");
const distDir = path.resolve(__dirname, "dist");

module.exports = {
  mode: "development",
  devtool: "cheap-module-source-map",
  entry: [path.join(srcDir, "index.js")],
  output: {
    path: distDir,
    filename: "[name].bundle.js"
  },
  devServer: {
    host: HOST,
    port: PORT,
    compress: true,
    inline: true,
    historyApiFallback: true,
    hot: true,
    overlay: true,
    open: true
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "fonts/[name].[ext]"
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(srcDir, "index.html")
    })
  ]
};
