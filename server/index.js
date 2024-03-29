const express = require('express')
var router = express.Router();
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
// const contactRoutes = require("./app/routes/contact.routes");
const app = express()
const https = require('https')

//export logic app variable
const LOGIC_APP_URI = 'test'
module.exports = LOGIC_APP_URI;

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = process.env.NODE_ENV !== 'production'

async function start () {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const { host } = nuxt.options.server
  const port = process.env.port || 8080;

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)
  console.log(`Server listening on http://${host}:${port}`)
  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
  
}

start()