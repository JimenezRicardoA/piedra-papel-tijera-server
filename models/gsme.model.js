const mongoose = require('mongoose');
const pokemonSchema = require('./pokemon.models').pokemonSchema;

const sesionSchema = new mongoose.Schema({
    nombreUsuario: {
      type: String,
      required: true
    },
    ganados: {
      type: Number,
      default: 0
    },
    perdidos: {
      type: Number,
      default: 0
    },
    empates: {
      type: Number,
      default: 0
    },
    historial:{
        type: [mongoose.Types.ObjectId],
        ref: "HistorialModel"
    },
    //historiaUsuario: {
    //  type: [String]
    //},
    //historiaCPU: {
    //  type: [String]
    //},
    pokemonelegido: {
      type: pokemonSchema,
      required: true
    }
  });
  
  const SessionModel = mongoose.model('Session', sesionSchema);

  module.exports = {
    SessionModel
  }