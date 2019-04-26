const MiniCssExtractPlugin = require("mini-css-extract-plugin");
exports.extractCSS = ({ include, exclude, use = [] }) => {
  const plugin = new MiniCssExtractPlugin({
    filename: "[name].css"
  });
  return {
    module: {
      rules: [
        {
          test: /\.css$/,
          include,
          exclude,
          use: [MiniCssExtractPlugin.loader].concat(use)
        }
      ]
    },
    plugins: [plugin]
  };
};
exports.devServer = ({ host, port } = {}) => ({
  devServer: {
    stats: "errors-only",
    host,
    port,
    open: true,
    overlay: true
  }
});

exports.loadCss = ({ exclude, include } = {}) => ({
  module: {
    rules: [
      {
        test: /\.css$/,
        include,
        exclude,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              plugins: () => [require("postcss-cssnext"), require("precss")]
            }
          }
        ]
      }
    ]
  }
});
exports.loadLess = ({ exclude, include } = {}) => ({
  module: {
    rules: [
      {
        test: /\.less$/,
        include,
        exclude,
        use: ["style-loader", "css-loader", "less-loader"]
      }
    ]
  }
});
exports.loadSass = ({ exclude, include } = {}) => ({
  module: {
    rules: [
      {
        test: /\.scss$/,
        include,
        exclude,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  }
});
