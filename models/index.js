const conn = require('./_db');

const models = {
	activity: require('./activity'),
	hotel: require('./hotel'),
	place: require('./place'),
	restaurant: require('./restaurant')
}

// this function is to meet the seed spec
const model = (name)=> {
	return models[name];
}


models.hotel.belongsTo(models.place);
models.activity.belongsTo(models.place);
models.restaurant.belongsTo(models.place);

// place can have many hotels?
models.place.hasMany(models.activity);
models.place.hasMany(models.restaurant);


const sync = ()=> {
	return conn.sync();
}

module.exports = {
	sync,
	models,
	model
};
