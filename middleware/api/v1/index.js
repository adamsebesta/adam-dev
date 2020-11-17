const httpProxy = require('http-proxy')
const proxy = httpProxy.createProxyServer()
const API_URL = process.env.LOGIC_APP_URL.replace(/\\"/g, '"');

export default function(req, res, next) {
  console.log(API_URL)
  let res = await fetch(API_URL, {
    method: 'POST',
    body: JSON.stringify(req.body),
    headers: {
    'Content-Type': 'application/json'
    }
  });
}