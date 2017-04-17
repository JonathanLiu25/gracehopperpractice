const path = require('path')
const express = require('express')

const staticMiddleware = function (app) {
  const rootPath = path.join(__dirname, '../../../')
  // const npmPath = path.join(rootPath, './node_modules')
  const publicPath = path.join(rootPath, './public')
  const browserPath = path.join(rootPath, './browser')

  // app.use(express.static(npmPath))
  app.use(express.static(publicPath))
  app.use(express.static(browserPath))
}

module.exports = staticMiddleware
