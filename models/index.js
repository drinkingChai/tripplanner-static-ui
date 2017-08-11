const Sequelize = require('sequelize');
const conn = new Sequelize(process.env.DATABASE_URL);


// Hotel
// name
// num_stars (float from 1-5)
// amenities (string of comma delimited items)
//
// Activity
// name
// age_range (data-type string)
//
// Restaurant
// name
// cuisine (comma delimited string list)
// price (integer from 1-5 for how many dollar signs)


conn.define('place', {
  address: {
    type: Sequelize.STRING,
    allowNull: false
  },
  city: {
    type: Sequelize.STRING,
    allowNull: false
  },
  state: {
    type: Sequelize.STRING,
    allowNull: false
  },
  phone: {
    type: Sequelize.STRING,
    allowNull: false
  },
  location: {
    type: Sequelize.ARRAY(Sequelize.DataTypes.FLOAT), // this array will only hold floats, location will be like 45.33, 234.33, array should have max of 2
    allowNull: false
  }
})


const sync = ()=> {
  return conn.sync({ force: true });
}

module.exports = {
  sync
}
