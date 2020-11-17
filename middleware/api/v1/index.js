const httpProxy = require('http-proxy')
let API_URL = process.env.LOGIC_APP_URL
const proxy = httpProxy.createProxyServer({
  target: API_URL,
  secure: false,
  changeOrigin: true
})

export default async function(req, res, next) {
  console.log(API_URL);
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