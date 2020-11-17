const httpProxy = require('http-proxy')
const API_URL = process.env.LOGIC_APP_URL
const proxy = httpProxy.createProxyServer({
  target: API_URL,
  secure: true,
  changeOrigin: true
})
const qs = require("qs"); 

export default async function(req, res, next) {
  
  req.url = qs.stringify(req.query, {
    addQueryPrefix: true
  })
    proxy.web(req, res, {target: API_URL});
}