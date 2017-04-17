const db = require('../db')
const Sequelize = db.Sequelize

const Product = db.define('product', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  image: {
    type: Sequelize.TEXT
  },
  description: {
    type: Sequelize.TEXT
  },
  category: {
    type: Sequelize.STRING,
    allowNull: false
  },
  tags: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    defaultValue: [],
    set: function (tags) {
      tags = tags || [];

      if (typeof tags === 'string') {
        tags = tags.split(',').map(function (str) {
          return str.trim();
        });
      }

      this.setDataValue('tags', tags);
    }
  }
})

module.exports = Product
