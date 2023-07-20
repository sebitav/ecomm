// src/repositories/productRepository.js
const DAOFactory = require('../dao/daoFactory');

class ProductRepository {
  constructor() {
    this.dao = DAOFactory.createDAO('product');
  }

  async getAllProducts() {
    return this.dao.getAllProducts();
  }

  async getProductById(productId) {
    return this.dao.getProductById(productId);
  }

  async createProduct(productData) {
    return this.dao.createProduct(productData);
  }

  async updateProduct(productId, productData) {
    return this.dao.updateProduct(productId, productData);
  }

  async deleteProduct(productId) {
    return this.dao.deleteProduct(productId);
  }
}

module.exports = new ProductRepository();
