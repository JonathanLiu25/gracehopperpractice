const db = require('../db')
const Sequelize = db.Sequelize

const Inventory = db.define('inventory', {
  price: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  stock: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

module.exports = Inventory
