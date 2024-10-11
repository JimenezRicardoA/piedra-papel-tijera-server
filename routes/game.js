var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const {
  jugar,
  regresarpartida,
  validarsesion,
  verhistorial
} = require('../controllers/game.controller');

router.post('/jugar', validarsesion, jugar);

router.get('/regresar-partida', regresarpartida);

router.get('/historial', validarsesion, verhistorial);


module.exports = router;