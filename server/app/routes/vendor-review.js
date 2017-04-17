const router = require('express').Router()
const db = require('../../db')
const VendorReview = db.models.vendorReview

module.exports = router

// Routes
router.get('/', (req, res, next) => {
  VendorReview.findAll()
    .then(allVendorReview => res.json(allVendorReview))
    .catch(next)
})

router.post('/', (req, res, next) => {
  VendorReview.create(req.body)
    .then(createdVendorReview => res.json(createdVendorReview))
    .catch(next)
})

router.param('vendorReviewId', (req, res, next) => {
  VendorReview.findById(req.params.vendorReviewId)
    .then(vendorReview => {
      if (!vendorReview) {
        res.sendStatus(404)
      }
      req.vendorReview = vendorReview
      next()
    })
    .catch(next)
})

router.get('/:vendorReviewId', (req, res, next) => {
  res.json(req.vendorReview)
})

router.put('/:vendorReviewId', (req, res, next) => {
  req.vendorReview.update(req.body)
    .then(updatedVendorReview => res.json(updatedVendorReview))
    .catch(next)
})

router.delete('/:vendorReviewId', (req, res, next) => {
  req.vendorReview.destroy()
    .then(() => res.sendStatus(204))
    .catch(next)
})
