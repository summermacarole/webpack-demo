const path = require("path");
const webpack = require("webpack");
const resolvePath = dir => path.resolve(__dirname, dir);
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "development",
  devServer: {
    contentBase: "dist",
    stats: "errors-only",
    host: "0.0.0.0",
    historyApiFallback: true,
    overlay: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolvePath("public/index.html"),
      filename: "index.html",
      inject: "body",
      title: "Webpack App"
    })
  ]
};
