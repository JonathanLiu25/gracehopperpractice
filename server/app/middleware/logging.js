const logMiddleware = require('volleyball')

const loggingMiddleware = function (app) {
  app.use(logMiddleware)
}

module.exports = loggingMiddleware
