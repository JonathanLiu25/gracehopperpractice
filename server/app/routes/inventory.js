const router = require('express').Router()
const db = require('../../db')
const Inventory = db.models.inventory

module.exports = router

// Routes
router.get('/', (req, res, next) => {
  Inventory.findAll()
    .then(allInventory => res.json(allInventory))
    .catch(next)
})

router.post('/', (req, res, next) => {
  Inventory.create(req.body)
    .then(createdInventory => res.json(createdInventory))
    .catch(next)
})

router.param('inventoryId', (req, res, next) => {
  Inventory.findById(req.params.inventoryId)
    .then(inventory => {
      if (!inventory) {
        res.sendStatus(404)
      }
      req.inventory = inventory
      next()
    })
    .catch(next)
})

router.get('/:inventoryId', (req, res, next) => {
  res.json(req.inventory)
})

router.put('/:inventoryId', (req, res, next) => {
  req.inventory.update(req.body)
    .then(updatedInventory => res.json(updatedInventory))
    .catch(next)
})

router.delete('/:inventoryId', (req, res, next) => {
  req.inventory.destroy()
    .then(() => res.sendStatus(204))
    .catch(next)
})
