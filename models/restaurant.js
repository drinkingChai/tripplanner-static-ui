const conn = require('./_db');


const Restaurant = conn.define('restaurant', {
  name: {
    type: conn.Sequelize.STRING,
    allowNull: false
  },
  cuisine: {
    type: conn.Sequelize.STRING
  },
  price: {
    type: conn.Sequelize.INTEGER,
    set(val) {
      if (!Number.isInteger(val) || val < 1 || val > 5) throw new Error('Invalid data or out of range');
      this.setDataValue('price', parseInt(val, 10));
    },
    get() { return this.getDataValue('price') }
  }
})

module.exports = Restaurant;
