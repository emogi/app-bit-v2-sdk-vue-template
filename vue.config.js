module.exports = {
  configureWebpack: {
    devtool: 'source-map'
  },
  publicPath: process.env.NODE_ENV === 'development' ? '/' : `/${process.env.VUE_APP_HOLLER_APP_BIT_ID}/${process.env.VUE_APP_HOLLER_APP_BIT_VERSION}`
}
