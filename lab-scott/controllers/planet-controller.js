'use strict';

// const mkdirp = require('mkdirp-promise');
// const createError = require('http-errors');
const Planet = require('../models/planet');
const Universe = require('../models/universe');


module.exports = exports = {};

exports.createP = function(id, planet) {
  Universe.findByIdAndAddPlanet(id, planet);

  // return new Planet(planet).save();
};

exports.fetchItem = function(id) {
  return Planet.findById(id);
};

exports.updateItem = function(id, planet){
  return Planet.findByIdAndUpdate(id, {
    $set: {
      name:planet.name,
      universe:planet.universe,
    },
  }, {new: true});
};

exports.deleteItem = function(schema, id){
  return Planet.findByIdAndRemove(id);
};
