module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  productionSourceMap: false, // 生产源映射 如果不需要生产时的源映射，可以加速生产构建
  devServer: {
    port: 8090,
    host: 'localhost',
    proxy: {
      '/api': {
        target: 'http://42.120.7.54:8882/',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      },
      '/rbs': {
        target: 'https://mtest.picclife.cn/vp-policy-web/'
      }
    }

  }

}
