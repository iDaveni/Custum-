const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  plugins: [new MiniCssExtractPlugin()],

  entry: path.resolve(__dirname, "src/index.js"),
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bandle.js",
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    open: true,
    port: 3000,
    historyApiFallback: {
      index: "index.html",
    },
  },

  optimization: {
    emitOnErrors: true,
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ["babel-loader"],
      },
      {
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|mp4)$/i,
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, "src/components"),
      hoc: path.resolve(__dirname, "src/HOC"),
      asset: path.resolve(__dirname, "src/asset"),
      pages: path.resolve(__dirname, "src/pages"),
    },
  },
};
