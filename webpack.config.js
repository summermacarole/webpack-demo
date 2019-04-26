const path = require("path");
const glob = require("glob");
const webpack = require("webpack");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const resolvePath = dir => path.resolve(__dirname, dir);

const PATHS = {
  app: resolvePath("src")
};

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
  // parts.loadCss({ exclude: /node_modules/ }),
  // parts.loadLess({ exclude: /node_modules/ }),
  // parts.loadSass({ exclude: /node_modules/ })
]);

const productionConfig = merge([
  parts.extractCSS({
    // use: "css-loader"
    use: ["css-loader", parts.autoprefix()]
  }),
  parts.purifyCss({
    paths: glob.sync(`${PATHS.app}/**/*.js`, { nodir: true })
  })
]);

const developmentConfig = merge([
  parts.devServer({
    host: process.env.HOST,
    port: process.env.PORT
  }),
  parts.loadCss({ exclude: /node_modules/ })
]);

module.exports = mode => {
  console.log(mode);
  if (mode == "production") {
    return merge(commonConfig, productionConfig, { mode });
  }
  return merge([commonConfig, developmentConfig, { mode }]);
};
