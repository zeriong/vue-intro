const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    // 불필요한 ESlint로 인한 화면 가림 방지
    client: {
      overlay: false
    }
  }
})
