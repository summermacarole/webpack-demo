const path = require("path");
const webpack = require("webpack");
const resolvePath = dir => path.resolve(__dirname, dir);
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      template: resolvePath("public/index.html"),
      filename: "index.html",
      inject: "body",
      title: "Webpack App"
    })
  ]
};
