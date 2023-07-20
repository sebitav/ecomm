// src/utils/errorHandler.js

const errorDictionary = require('./errorDictionary');

// Función para obtener un mensaje de error personalizado
function getErrorMessage(errorType) {
  return errorDictionary[errorType] || 'Error desconocido';
}

module.exports = { getErrorMessage };
