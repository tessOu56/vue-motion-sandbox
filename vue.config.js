const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // GitHub Pages 部署於 /vue-motion-sandbox/ 子路徑；本檔屬 repo-local meta，mirror sync 不覆蓋
  publicPath: process.env.NODE_ENV === 'production' ? '/vue-motion-sandbox/' : '/'
})
