const router = require('express').Router();
const models = require('../models');

router.get('/', (req, res, next)=> {
  return models.generateHomeView()
    .then(data=> {
      res.render('index', {
        activities: data.activities,
        hotels: data.hotels,
        restaurants: data.restaurants
      })
    }).catch(next);
})


module.exports = router;
