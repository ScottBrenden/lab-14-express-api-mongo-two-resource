'use strict';

// const Planet = require('../models/planet');
// const Universe = require('../models/universe');
// const createError = require('http-errors');
const PlanetCtrl = require('../controllers/planet-controller');

module.exports = function(router) {
  router.get('/planet/:id', (req,res) => {
    PlanetCtrl.fetchItem(req.params.id)
      .then(planet => {
        // console.log(planet);
        res.json(planet);
      })
      .catch(err => res.status(404).send(err.message));
  });

  // router.get('/api/planet', (req,res) => {
  //
  // });

  router.post('/universe/:id/planet', (req,res) => {
    PlanetCtrl.createP(req.params.id, req.body)
      .then(planet => res.json(planet))
      .catch(err => res.status(404).send(err.message));

    // PlanetCtrl.createItem(req.body)
    //   .then(planet => res.json(planet))
    //   .catch(err => res.status(400).send(err.message));
  });

  router.put('/planet/:id', (req,res) => {
    PlanetCtrl.updateItem(req.params.id, req.body)
      .then(planet => res.json(planet))
      .catch(err => res.status(404).send(err.message));

  });

  router.delete('/planet/:id', (req,res) => {
    // Planet.find({"_id" : `ObjectId("${req.params.id}")`})
    PlanetCtrl.deleteItem(req.params.id)
      .then(planet => {
        console.log(planet);
        res.json(planet);
      })
      .catch(err => res.status(404).send(err.message));
  });

  return router;
};
