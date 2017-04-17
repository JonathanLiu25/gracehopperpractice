const bodyParser = require('body-parser')

const parsingMiddleware = function (app) {
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))
}

module.exports = parsingMiddleware
