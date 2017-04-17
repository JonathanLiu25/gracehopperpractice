const db = require('../db')
const Sequelize = db.Sequelize

const ProductReview = db.define('productReview', {
  rating: {
    type: Sequelize.INTEGER
  },
  review: {
    type: Sequelize.TEXT
  }
})

module.exports = ProductReview
