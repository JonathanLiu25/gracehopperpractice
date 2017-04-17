const User = require('./User')
const Vendor = require('./Vendor')
const Product = require('./Product')
const Inventory = require('./Inventory')
const Transaction = require('./Transaction')
const ProductReview = require('./ProductReview')
const VendorReview = require('./VendorReview')


// Associations
Transaction.hasOne(ProductReview)
Transaction.hasOne(VendorReview)
Product.hasMany(Transaction)
Product.hasMany(Inventory)
User.hasMany(Transaction, { as: 'buyer' })
Vendor.hasMany(Transaction, { as: 'seller' })
Vendor.hasMany(Inventory)

module.exports = {
  User,
  Vendor,
  Product,
  Inventory,
  Transaction,
  ProductReview,
  VendorReview
}
