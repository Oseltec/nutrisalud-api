const AuthUser = require('../../domain/entities/AuthUser');

class InMemoryAuthRepository {
  constructor() {
    this.users = new Map();
    this.emailIndex = new Map();
  }

  async findByEmail(email) {
    const normalizedEmail = email.toLowerCase();
    const userId = this.emailIndex.get(normalizedEmail);
    if (!userId) {
      return null;
    }
    const userData = this.users.get(userId);
    return new AuthUser({
      ...userData,
      createdAt: new Date(userData.createdAt)
    });
  }

  async create(user) {
    this.users.set(user.id, {
      id: user.id,
      email: user.email,
      password: user.password,
      name: user.name,
      age: user.age,
      weight: user.weight,
      height: user.height,
      goal: user.goal,
      preferences: user.preferences,
      restrictions: user.restrictions,
      createdAt: user.createdAt
    });
    this.emailIndex.set(user.email, user.id);
    return user;
  }

  async findById(id) {
    const userData = this.users.get(id);
    if (!userData) {
      return null;
    }
    return new AuthUser({
      ...userData,
      createdAt: new Date(userData.createdAt)
    });
  }
}

module.exports = InMemoryAuthRepository;
