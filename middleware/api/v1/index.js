const httpProxy = require('http-proxy')
let API_URL = this.$config.logicAppUrl
const proxy = httpProxy.createProxyServer({
  target: API_URL,
  secure: true,
  changeOrigin: true
})
const qs = require("qs"); 
// const API_URL = process.env.LOGIC_APP_URL

export default async function(req, res, next) {
  req.url = qs.stringify(req.query, {
    addQueryPrefix: true
  })
    proxy.web(req, res, {target: API_URL});
}