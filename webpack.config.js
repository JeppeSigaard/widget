const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: "./app/client.js",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "public/")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
