const { Nuxt, Builder } = require('nuxt')
const express = require('express');
const app = express()
const path = require('path')
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000

app.set('port', port)

// Import and Set Nuxt.js options
let mobileConfig = require('../client/mobile/nuxt.config.js')
let desktopConfig = require('../client/desktop/nuxt.config.js')

mobileConfig.dev = !(process.env.NODE_ENV === 'production')
desktopConfig.dev = !(process.env.NODE_ENV === 'production')

// Init Nuxt.js
const nuxtMobile = new Nuxt(mobileConfig)
const nuxtDesktop = new Nuxt(desktopConfig)

// Build only in dev mode
if (mobileConfig.dev) {
  const builder = new Builder(nuxtMobile)
  builder.build()
}
if (desktopConfig.dev) {
  const builder = new Builder(nuxtDesktop)
  builder.build()
}
app.use(express.static(path.join(__dirname, 'static')));
// Give nuxt middleware to express
app.use(function (req, res, next) {
  const userAgent = req.headers[ 'user-agent' ]
  
  if (/mobile/i.test(userAgent)) {
    console.log('Mobile')
    nuxtMobile.render(req, res)
  } else {
    console.log('Desktop')
    nuxtDesktop.render(req, res)
  }
})

// Listen the server
app.listen(port, host)
console.log('Server listening on ' + host + ':' + port) 