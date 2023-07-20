// src/dao/daoFactory.js
const UserDAO = require('./userDAO');
const ProductDAO = require('./productDAO');

class DAOFactory {
  static createDAO(entity) {
    switch (entity) {
      case 'user':
        return new UserDAO();
      case 'product':
        return new ProductDAO();
      // Agrega más casos para otras entidades si es necesario
      default:
        throw new Error(`Unsupported entity: ${entity}`);
    }
  }
}

module.exports = DAOFactory;
