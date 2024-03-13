const { defineConfig } = require("@vue/cli-service");
const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}

const port = 9004;

module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: "dist",
  assetsDir: "static",
  filenameHashing: true, // 打包出来的文件，会带有hash信息
  publicPath: "http://localhost:9004",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    hot: false,
    disableHostCheck: true,
    port,
    headers: {
      "Access-Control-Allow-Origin": "*", // 本地服务的跨域内容
    },
  },
  configureWebpack: {
    output: {
      libraryTarget: "umd",
      filename: "vue2.js",
      library: "vue2",
      jsonpFuncion: `webpackJsonp_${name}`,
    },
  },
});
