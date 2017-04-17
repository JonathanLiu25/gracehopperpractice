const router = require('express').Router()
const db = require('../../db')
const Product = db.models.product
const Inventory = db.models.inventory

module.exports = router

// Routes
router.get('/', (req, res, next) => {
  Product.findAll()
    .then(allProduct => res.json(allProduct))
    .catch(next)
})

router.post('/', (req, res, next) => {
  Product.create(req.body)
    .then(createdProduct => res.json(createdProduct))
    .catch(next)
})

router.get('category', (req, res, next) => {
  Product.findAll({
    attributes: ['category']
  })
    .then(categories => res.json(categories))
    .catch(next)
})

router.param('productId', (req, res, next) => {
  Product.findById(req.params.productId)
    .then(product => {
      if (!product) {
        res.sendStatus(404)
      }
      req.product = product
      next()
    })
    .catch(next)
})

router.get('/:productId', (req, res, next) => {
  Inventory.findAll({
    where: {
      productId: req.product.id
    }
  })
    .then(inventory => {
      req.product.inventory = inventory
      res.json(req.product)
    })
    .catch(next)
})

router.put('/:productId', (req, res, next) => {
  req.product.update(req.body)
    .then(updatedProduct => res.json(updatedProduct))
    .catch(next)
})

router.delete('/:productId', (req, res, next) => {
  req.product.destroy()
    .then(() => res.sendStatus(204))
    .catch(next)
})

router.get('/:productId/similar', (req, res, next) => {
  Product.findAll({
    where: {
      id: {
        $ne: req.params.productId
      },
      tags: {
        $overlap: req.product.tags
      }
    }
  })
    .then(products => res.json(products))
    .catch(next)
})
