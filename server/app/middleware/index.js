const middleware = function (app) {
  require('./logging')(app)
  require('./parsing')(app)
  require('./static')(app)
}

module.exports = middleware
