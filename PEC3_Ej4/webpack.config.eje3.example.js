const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CheckerPlugin } = require("awesome-typescript-loader");
const webpack = require("webpack");
const path = require("path");

const basePath = __dirname;

module.exports = {
  mode: 'development', // or 'production' as needed,
  context: path.join(basePath, "./src"),
  resolve: {
    alias: {
      views: path.resolve(__dirname, "./views/todoT.views.ts"),
      services: path.resolve(__dirname, "./services/todoT.service.ts"),
      controller: path.resolve(__dirname, "./services/todoT.controller.ts"),
      model: path.resolve(__dirname, "./services/todoT.model.ts"),
    },
    extensions: [".js", ".ts", ".tsx"]
  },
  entry: ['babel-polyfill', "./app.js"],
  devtool: "source-map",
  devServer: {
    contentBase: "./dist", 
    inline: true, 
    host: "localhost",
    port: 8080,
    stats: "errors-only"
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: "awesome-typescript-loader",
        options: {
          useBabel: true,
          useCache: true,
          babelCore: "@babel/core"
        }
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: "file-loader",
        options: {
          name: "assets/img/[name].[ext]?[hash]"
        }
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: "all",
          name: "vendor",
          test: /[\\/]node_modules[\\/]/,
          enforce: true
        }
      }
    }
  },
  plugins: [
    //Generate index.html in /dist => https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: "index.html", 
      template: "index.html" 
    }),
    new CheckerPlugin()
  ]
};