const path = require("path");
const CleanPlugin = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/MyPlace.js",
  output: {
    filename: "MyPlace.js",
    path: path.resolve(__dirname, "dist", "assets", "scripts"),
    publicPath: "/dist/assets/scripts/",
  },
  devServer: {
    compress: true,
    port: 9001,
    contentBase: "./",
    watchContentBase: true,
    watchOptions: {
      poll: true,
    },
  },
  devtool: "cheap-module-eval-source-map",

  plugins: [new CleanPlugin.CleanWebpackPlugin()],
};
