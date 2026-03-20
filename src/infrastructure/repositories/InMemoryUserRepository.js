const User = require('../../domain/entities/User');

class InMemoryUserRepository {
  constructor() {
    this.users = new Map();
  }

  async create(user) {
    const userData = user.toJSON();
    this.users.set(user.id, userData);
    return userData;
  }

  async findById(id) {
    const userData = this.users.get(id);
    if (!userData) {
      return null;
    }
    return new User({
      ...userData,
      createdAt: new Date(userData.createdAt)
    });
  }

  async update(id, user) {
    const userData = user.toJSON();
    this.users.set(id, userData);
    return userData;
  }

  async findAll() {
    return Array.from(this.users.values()).map(data => 
      new User({ ...data, createdAt: new Date(data.createdAt) })
    );
  }
}

module.exports = InMemoryUserRepository;
