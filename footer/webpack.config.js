const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  output: {
    publicPath: "auto",
    clean: true,
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "footer",
      filename: "remoteEntry.js",
      exposes: {
        "./Footer": "./src/Footer"
      },
      shared: {
        react: { singleton: true, eager: false, requiredVersion: false },
        "react-dom": { singleton: true, eager: false, requiredVersion: false },
      }
    }),
    new HtmlWebpackPlugin({ template: "./public/index.html" })
  ],
  devServer: {
    port: 3002,
    historyApiFallback: true
  }
}
