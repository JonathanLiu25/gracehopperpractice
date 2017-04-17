const router = require('express').Router()
const db = require('../../db')
const User = db.models.user

module.exports = router

// Routes
router.get('/', (req, res, next) => {
  User.findAll()
    .then(allUser => res.json(allUser))
    .catch(next)
})

router.post('/', (req, res, next) => {
  User.create(req.body)
    .then(createdUser => res.json(createdUser))
    .catch(next)
})

router.param('userId', (req, res, next) => {
  User.findById(req.params.userId)
    .then(user => {
      if (!user) {
        res.sendStatus(404)
      }
      req.user = user
      next()
    })
    .catch(next)
})

router.get('/:userId', (req, res, next) => {
  res.json(req.user)
})

router.put('/:userId', (req, res, next) => {
  req.user.update(req.body)
    .then(updatedUser => res.json(updatedUser))
    .catch(next)
})

router.delete('/:userId', (req, res, next) => {
  req.user.destroy()
    .then(() => res.sendStatus(204))
    .catch(next)
})
