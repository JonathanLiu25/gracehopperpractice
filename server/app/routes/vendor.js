const router = require('express').Router()
const db = require('../../db')
const Vendor = db.models.vendor

module.exports = router

// Routes
router.get('/', (req, res, next) => {
  Vendor.findAll()
    .then(allVendor => res.json(allVendor))
    .catch(next)
})

router.post('/', (req, res, next) => {
  Vendor.create(req.body)
    .then(createdVendor => res.json(createdVendor))
    .catch(next)
})

router.param('vendorId', (req, res, next) => {
  Vendor.findById(req.params.vendorId)
    .then(vendor => {
      if (!vendor) {
        res.sendStatus(404)
      }
      req.vendor = vendor
      next()
    })
    .catch(next)
})

router.get('/:vendorId', (req, res, next) => {
  res.json(req.vendor)
})

router.put('/:vendorId', (req, res, next) => {
  req.vendor.update(req.body)
    .then(updatedVendor => res.json(updatedVendor))
    .catch(next)
})

router.delete('/:vendorId', (req, res, next) => {
  req.vendor.destroy()
    .then(() => res.sendStatus(204))
    .catch(next)
})
