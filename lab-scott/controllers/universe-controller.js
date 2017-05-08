'use strict';

const Universe = require('../models/universe');
const UniverseCtrl = require('../controllers/universe-controller');


module.exports = exports = {};

UniverseCtrl.createU = function(universe){
  return new Universe(universe).save();
};
