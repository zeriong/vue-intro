const {defineConfig} = require("@vue/cli-service");
// import vuetify from "@/plugins/vuetify";
module.exports = defineConfig({
  // 특정 패키지만 Babel로 트랜스파일함
  publicPath: "./",

  assetsDir: "./",
  transpileDependencies: true,

  // contentBase: "./",
  // eslint 비활성화
  // lintOnSave: false,
  devServer: {
    open: true,
    client: {
      //데브서버가 멈추는 것을 방지 (에러 무시)
      overlay: false,
    },
    historyApiFallback: true,
    hot: true,
  },

  pluginOptions: {
    vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		}
  }
});
