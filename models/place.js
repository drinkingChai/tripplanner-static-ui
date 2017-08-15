const conn = require('./_db');


const Place = conn.define('place', {
  address: {
    type: conn.Sequelize.STRING,
    allowNull: false
  },
  city: {
    type: conn.Sequelize.STRING,
    allowNull: false
  },
  state: {
    type: conn.Sequelize.STRING,
    allowNull: false
  },
  phone: {
    type: conn.Sequelize.STRING
  },
  location: {
    type: conn.Sequelize.ARRAY(conn.Sequelize.FLOAT), // this array will only hold floats, location will be like 45.33, 234.33, array should have max of 2
    defaultValue: [0, 0],
    set(val) {
      this.setDataValue('location', val);
    }
  }
})

module.exports = Place;
