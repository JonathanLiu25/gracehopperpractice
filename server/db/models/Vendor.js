const db = require('../db')
const Sequelize = db.Sequelize

const Vendor = db.define('vendor', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  },
  password: {
    type: Sequelize.TEXT,
    allowNull: false
  }
})

module.exports = Vendor
