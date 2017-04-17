const express = require('express')

const db = require('./db')
const app = require('./app')

const server = express()

const syncDatabase = function () {
  const forceSync = false
  return db.sync({ force: forceSync })
}

const createApp = function () {
  server.use(app)
}

const startServer = function () {
  const port = 3000

  server.listen(port, function () {
    console.log('Listening on port:', port)
  })
}

syncDatabase()
  .then(createApp())
  .then(startServer())
  .catch(function (err) {
    console.log(err)
    process.exit(1)
  })
