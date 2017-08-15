const conn = require('./_db');


const Activity = conn.define('activity', {
  name: {
    type: conn.Sequelize.STRING,
    allowNull: false
  },
  age_range: {
    type: conn.Sequelize.STRING,
    default: 'all'
  }
})

module.exports = Activity;
