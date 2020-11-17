const httpProxy = require('http-proxy')
let API_URL = process.env.LOGIC_APP_URL
const proxy = httpProxy.createProxyServer({
  target: endpoint,
  secure: false,
  changeOrigin: true
})

export default async function(req, res, next) {
  // await fetch(API_URL, {
  //   method: 'POST',
  //   body: JSON.stringify(req.body),
  //   headers: {
  //   'Content-Type': 'application/json',
  //   'Access-Control-Allow-Origin': 'https://localhost:3000'
  //   }
// })
    proxy.web(req, res, {});
}