const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  mode: "dvelopment",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "build"),
    },
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: "/node_modules",
        use: ["babel-loader"],
      },
      {
        test: /\.html$/,
        use: [
          {
            // html파일을 읽었을 떄 html-loader를 실행하여 웹팩이 이해할 수 있게 한다.
            loader: "html-loader",
            options: { minimize: true },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", // public/index.html 파일을 읽는다.
      filename: "index.html",
    }),
    // 웹팩에서 제공하는 DefinePlugin은 모든 자바스크립트 코드에서 접근이 가능한 전역 변수를 선언하기 위해서 사용되는 플러그인입니다.
    // 현재 개발환경이 "development"임을 명시
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("development"),
    }),
    new MiniCssExtractPlugin({
      filename: "style-test.css",
    }),
    new CleanWebpackPlugin(),
  ],
};
