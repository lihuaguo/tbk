const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const bodyParser = require('body-parser')
var request = require('request')
const webpackConfig = require('./webpack.config')
const app = express()

const compiler = webpack(webpackConfig)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(webpackDevMiddleware(compiler, {
  stats: {
    colors: true
  }
}))

app.use(webpackHotMiddleware(compiler))

app.get('/search', function(req, res, next) {
  const keys = req.query.q
  getList(keys).then(function(data) {
    res.send(data)
  })
});

function getList(keys) {
  return new Promise(function(resolve, reject) {
    let timestamp = (new Date()).valueOf();
    let url = `http://pub.alimama.com/items/search.json?q=${keys}&_t=1499828994564&auctionTag=&perPageSize=40&shopTag=yxjh&t=1499829005604&pvid=10_10.103.34.87_4467_${timestamp}`;
    url = encodeURI(url)
    console.log(url)
    request(url, function (error, response, body) {
      if (response && response.statusCode == 200) {
        resolve( body )
      } else {
        reject(error)
      }
    })
  })
}

app.listen(8000, (err) => {
  console.log('running at http://localhost:8000')
})
