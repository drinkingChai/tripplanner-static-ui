const conn = require('./_db');


const Hotel = conn.define('hotel', {
  name: {
    type: conn.Sequelize.STRING,
    allowNull: false
  },
  num_stars: {
    type: conn.Sequelize.FLOAT,
    set(val) {
      if (val < 1 || val > 5) throw new Error('Out of range');
      this.setDataValue('num_stars', val);
    },
    get() { return this.getDataValue('num_stars') }
  },
  amenities: {
    type: conn.Sequelize.STRING
  }
})

module.exports = Hotel;
