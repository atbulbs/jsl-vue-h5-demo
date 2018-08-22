const devServerConfig = {
  host: 'localhost',
  port: 8005,
  overlay: {
    errors: true
  },
  historyApiFallback: true,
  hot: true,
  open: true,
  openPage: 'jsl-vue-h5-demo/home'
}

module.exports = devServerConfig
