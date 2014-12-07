module.exports = function (dat, ready) {
  ready()
  require('heroku-self-ping')(process.env.HEROKU_URL)
}
