const db = require('../db')
const Sequelize = db.Sequelize

const VendorReview = db.define('vendorReview', {
  rating: {
    type: Sequelize.INTEGER
  },
  review: {
    type: Sequelize.TEXT
  }
})

module.exports = VendorReview
