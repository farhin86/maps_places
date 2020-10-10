const path = require("path");
const CleanPlugin = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: { MyPlace: "./src/MyPlace.js" },
  output: {
    filename: "[name].js", // name refference
    path: path.resolve(__dirname, "dist", "assets", "scripts"),
    publicPath: "assets/scripts/", //publicpath will be from html file
  },
  devServer: {
    compress: true,
    port: 9001,
    contentBase: "./dist",
    watchContentBase: true,
    watchOptions: {
      poll: true,
    },
  },
  devtool: "cheap-module-eval-source-map",

  plugins: [new CleanPlugin.CleanWebpackPlugin()],
};
