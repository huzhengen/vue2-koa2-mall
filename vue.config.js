module.exports = {
  //配置跨域请求
  devServer: {
    open: true,    //是否自动打开浏览器
    host: 'localhost',
    port: 8081,    //启动端口号
    https: false,    //是否开启https
    hotOnly: false,
    proxy: { // 配置跨域
      '/api': {
        target: 'https://dota1vod.com/mall/',
        ws: true,
        changOrigin: true,    //是否开启代理
        pathRewrite: {
          '^/api': ''
        }
      }
    },
    before: app => { }
  },
}