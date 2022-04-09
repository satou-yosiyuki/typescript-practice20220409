// require→inport
const path = require("path");

module.exports = {
  entry: {
    // 起点になる
    bundle: "./src/index.ts",
  },
  output: {
    // __dirname
    path: path.join(__dirname, "dist"),
    filename: "[name].js",
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    open: true,
  },
  module: {
    rules: [
      {
        loader: "ts-loader",
        test: /\.ts$/,
      },
    ],
  },
};
