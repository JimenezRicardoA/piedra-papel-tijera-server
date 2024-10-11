const mongoose = require('mongoose');

const pokemonSchema = new mongoose.Schema({
    fire: {
      type: String,
      required: true
    },
    water: {
      type: String,
      required: true
    },
    grass: {
      type: String,
      required: true
    }
  });

  module.exports = {
    pokemonSchema
  }