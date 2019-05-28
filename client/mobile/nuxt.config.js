const sharedConfig = require('../shared/nuxt.config.js')
const path = require('path')

module.exports = {
  ...sharedConfig,
  srcDir: __dirname,
  buildDir: '.nuxt/mobile',
  build: {
    extend(config, ctx) {
      config.resolve.alias[ '~shared' ] = path.join(__dirname, '../shared')
    }
  },
  dir: {
    store: '../shared/store',
    middleware: '../shared/middleware'
  }
}