module.exports = {
  plugins: [
    require('precss')(),
    // require('postcss-cssnext')(),
    require('autoprefixer')(),
    require('cssnano')()
  ]
}
