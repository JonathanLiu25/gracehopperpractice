const Sequelize = require('sequelize')

const DATABASE_URI = 'postgres://localhost:5432/ecommerce'

// create the database instance
const db = new Sequelize(DATABASE_URI, {
  // logging: false,
  native: true // lets Sequelize know we can use pg-native for ~30% more speed
})

module.exports = db
