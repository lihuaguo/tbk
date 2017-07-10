const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const webpackConfig = require('./webpack.config')
const tbSdk = require('./tbsdk')

const app = express()
const compiler = webpack(webpackConfig)

TopClient = tbSdk.ApiClient;

const client = new TopClient({
  'appkey': '24522433',
  'appsecret': '046a236e9b14a44072d7d2d3dfbb2ff3',
  'REST_URL': 'http://gw.api.taobao.com/router/rest'
});

app.use(webpackDevMiddleware(compiler, {
  stats: {
    colors: true
  }
}))
app.use(webpackHotMiddleware(compiler))

app.listen(8000, (err) => {
  console.log('running at http://localhost:8000')
})
