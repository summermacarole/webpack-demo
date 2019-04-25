const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const resolvePath = dir => path.resolve(__dirname, dir);

const parts = require("./webpack.parts");

const commonConfig = merge([
  {
    plugins: [
      new HtmlWebpackPlugin({
        template: resolvePath("public/index.html"),
        filename: "index.html",
        inject: "body",
        title: "Webpack App"
      })
    ]
  }
]);

const productionConfig = merge([]);

const developmentConfig = merge([
  parts.devServer({
    host: process.env.HOST,
    port: process.env.PORT
  })
]);

module.exports = mode => {
  console.log(mode);
  if (mode == "production") {
    return merge(commonConfig, productionConfig, { mode });
  }
  return merge([commonConfig, developmentConfig, { mode }]);
};
