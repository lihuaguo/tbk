const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const webpackConfig = require('./webpack.config')


const app = express()
const compiler = webpack(webpackConfig)

app.use(webpackDevMiddleware(compiler, {
  stats: {
    colors: true
  }
}))
app.use(webpackHotMiddleware(compiler))


app.listen(8000, (err) => {
  console.log('running at http://localhost:8000')
})
