const router = require('express').Router()
const db = require('../../db')
const Transaction = db.models.transaction

module.exports = router

// Routes
router.get('/', (req, res, next) => {
  Transaction.findAll()
    .then(allTransaction => res.json(allTransaction))
    .catch(next)
})

router.post('/', (req, res, next) => {
  Transaction.create(req.body)
    .then(createdTransaction => res.json(createdTransaction))
    .catch(next)
})

router.param('transactionId', (req, res, next) => {
  Transaction.findById(req.params.transactionId)
    .then(transaction => {
      if (!transaction) {
        res.sendStatus(404)
      }
      req.transaction = transaction
      next()
    })
    .catch(next)
})

router.get('/:transactionId', (req, res, next) => {
  res.json(req.transaction)
})

router.put('/:transactionId', (req, res, next) => {
  req.transaction.update(req.body)
    .then(updatedTransaction => res.json(updatedTransaction))
    .catch(next)
})

router.delete('/:transactionId', (req, res, next) => {
  req.transaction.destroy()
    .then(() => res.sendStatus(204))
    .catch(next)
})
