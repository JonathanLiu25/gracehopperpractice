const path = require('path')

const app = require('express').Router()

const middleware = require('./middleware')
const router = require('./routes')

module.exports = app

middleware(app)

app.use('/api', router)

/*
 This middleware will catch any URLs resembling a file extension
 for example: .js, .html, .css
 This allows for proper 404s instead of the wildcard '/*' catching
 URLs that bypass express.static because the given file does not exist.
 */
app.use(function (req, res, next) {

  if (path.extname(req.path).length > 0) {
    res.status(404).end();
  } else {
    next(null);
  }

});

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '../../browser/index.html'));
});

// Error catching endware.
app.use(function (err, req, res, next) {
  console.error(err, typeof next);
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});
