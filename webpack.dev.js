const path = require('path');
const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const HOST = process.env.HOST || "0.0.0.0";
const PORT = process.env.PORT || "9000";

module.exports = merge(common('development'), {
  mode: "development",
  devtool: "eval-source-map",
  devServer: {
    contentBase: "./dist",
    host: HOST,
    port: PORT,
    compress: true,
    inline: true,
    historyApiFallback: true,
    hot: true,
    overlay: true,
    open: true
  }
});
