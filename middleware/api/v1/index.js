const httpProxy = require('http-proxy')
const LOGIC_APP_URI = 'https://prod-57.eastus.logic.azure.com:443/workflows/f50c9b5ca3a14edc88a4910085747591/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=V0WsnUByfGtKvlhwwn-RcwueeFwnxn2FWV_r8FnNqPM'

const proxy = httpProxy.createProxyServer({
  target: LOGIC_APP_URI,
  secure: true,
  changeOrigin: true
})
const qs = require("qs"); 
// console.log(LOGIC_APP_URI)
export default async function(req, res, next) {
  // console.log(env.logicAppUrl);
  req.url = qs.stringify(req.query, {
    addQueryPrefix: true
  })
  proxy.web(req, res, {target: LOGIC_APP_URI});
}
