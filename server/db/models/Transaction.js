const db = require('../db')
const Sequelize = db.Sequelize

const Transaction = db.define('transaction', {
  price: {
    type: Sequelize.FLOAT,
    allowNull: false
  }
})

module.exports = Transaction
