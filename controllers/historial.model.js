const moongose = require('mongoose');

const historialSchema = new mongoose.Schema({
    eleccionJugador: {
      type: String,
      required: true
    },
    eleccionMaquina: {
        type: String,
        required: true
      }
  });

  const HistorialModel = mongoose.model('Historial', historialSchema);

  module.exports = {
    HistorialModel
  }