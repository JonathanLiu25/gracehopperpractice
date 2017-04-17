const router = require('express').Router()
const inventory = require('./inventory')
const product = require('./product')
const productReview = require('./product-review')
const transaction = require('./transaction')
const user = require('./user')
const vendor = require('./vendor')
const vendorReview = require('./vendor-review')

module.exports = router

// Routes
router.use('/inventory', inventory)
router.use('/product', product)
router.use('/productreview', productReview)
router.use('/transaction', transaction)
router.use('/user', user)
router.use('/vendor', vendor)
router.use('/vendorreview', vendorReview)

// Sends 404 if no routes match
router.use((req, res, next) => {
  res.status(404).end()
})
