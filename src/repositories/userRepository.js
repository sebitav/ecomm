// src/repositories/userRepository.js
const DAOFactory = require('../dao/daoFactory');

class UserRepository {
  constructor() {
    this.dao = DAOFactory.createDAO('user');
  }

  async getAllUsers() {
    return this.dao.getAllUsers();
  }

  async getUserById(userId) {
    return this.dao.getUserById(userId);
  }

  async createUser(userData) {
    return this.dao.createUser(userData);
  }

  async updateUser(userId, userData) {
    return this.dao.updateUser(userId, userData);
  }

  async deleteUser(userId) {
    return this.dao.deleteUser(userId);
  }
}

module.exports = new UserRepository();
