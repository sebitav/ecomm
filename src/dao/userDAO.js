// src/dao/userDAO.js
const { MongoClient } = require('mongodb');
const { MONGO_URI } = process.env;

class UserDAO {
  constructor() {
    this.collection = null;
    this.connect();
  }

  async connect() {
    const client = new MongoClient(MONGO_URI);
    await client.connect();
    const db = client.db();
    this.collection = db.collection('users');
  }

  async getAllUsers() {
    return this.collection.find().toArray();
  }

  async getUserById(userId) {
    return this.collection.findOne({ _id: userId });
  }

  async createUser(userData) {
    return this.collection.insertOne(userData);
  }

  async updateUser(userId, userData) {
    return this.collection.updateOne({ _id: userId }, { $set: userData });
  }

  async deleteUser(userId) {
    return this.collection.deleteOne({ _id: userId });
  }
}

module.exports = UserDAO;
