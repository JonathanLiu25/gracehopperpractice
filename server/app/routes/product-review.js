const router = require('express').Router()
const db = require('../../db')
const ProductReview = db.models.productReview

module.exports = router

// Routes
router.get('/', (req, res, next) => {
  ProductReview.findAll()
    .then(allProductReview => res.json(allProductReview))
    .catch(next)
})

router.post('/', (req, res, next) => {
  ProductReview.create(req.body)
    .then(createdProductReview => res.json(createdProductReview))
    .catch(next)
})

router.param('productReviewId', (req, res, next) => {
  ProductReview.findById(req.params.productReviewId)
    .then(productReview => {
      if (!productReview) {
        res.sendStatus(404)
      }
      req.productReview = productReview
      next()
    })
    .catch(next)
})

router.get('/:productReviewId', (req, res, next) => {
  res.json(req.productReview)
})

router.put('/:productReviewId', (req, res, next) => {
  req.productReview.update(req.body)
    .then(updatedProductReview => res.json(updatedProductReview))
    .catch(next)
})

router.delete('/:productReviewId', (req, res, next) => {
  req.productReview.destroy()
    .then(() => res.sendStatus(204))
    .catch(next)
})
