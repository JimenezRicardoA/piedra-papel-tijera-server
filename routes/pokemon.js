var express = require('express');
var router = express.Router();
const axios = require('axios');
const equipo = require('../controllers/pokemon.controller').Seleccionarequipo;

/* GET users listing. */
router.get('/select-pokes', Seleccionarequipo);

module.exports = router;