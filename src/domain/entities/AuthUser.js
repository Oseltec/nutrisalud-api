const bcrypt = require('bcryptjs');
const crypto = require('crypto');

class AuthUser {
  constructor({ id = null, email, password, name, age, weight, height, goal, preferences = {}, restrictions = {}, createdAt = null }) {
    this.id = id || crypto.randomUUID();
    this.email = email.toLowerCase();
    this.password = password;
    this.name = name;
    this.age = age;
    this.weight = weight;
    this.height = height;
    this.goal = goal;
    this.preferences = {
      preferredProteins: [],
      preferredCarbs: [],
      preferredVegetables: [],
      ...preferences
    };
    this.restrictions = {
      allergies: [],
      dislikedFoods: [],
      dietaryRestrictions: [],
      ...restrictions
    };
    this.createdAt = createdAt || new Date();
  }

  static async hashPassword(password) {
    return await bcrypt.hash(password, 10);
  }

  async comparePassword(password) {
    return await bcrypt.compare(password, this.password);
  }

  static VALID_GOALS = ['lose_weight', 'maintain', 'gain_weight'];

  static async create(data) {
    if (!data.email || typeof data.email !== 'string') {
      throw new Error('Email is required');
    }
    if (!data.password || typeof data.password !== 'string' || data.password.length < 6) {
      throw new Error('Password must be at least 6 characters');
    }
    if (!data.name || typeof data.name !== 'string') {
      throw new Error('Name is required');
    }
    if (typeof data.age !== 'number' || data.age < 1 || data.age > 120) {
      throw new Error('Age must be between 1 and 120');
    }
    if (typeof data.weight !== 'number' || data.weight < 1) {
      throw new Error('Weight must be a positive number');
    }
    if (typeof data.height !== 'number' || data.height < 1) {
      throw new Error('Height must be a positive number');
    }
    if (!AuthUser.VALID_GOALS.includes(data.goal)) {
      throw new Error(`Goal must be one of: ${AuthUser.VALID_GOALS.join(', ')}`);
    }
    
    const hashedPassword = await AuthUser.hashPassword(data.password);
    return new AuthUser({ ...data, password: hashedPassword });
  }

  toJSON() {
    return {
      id: this.id,
      email: this.email,
      name: this.name,
      age: this.age,
      weight: this.weight,
      height: this.height,
      goal: this.goal,
      preferences: this.preferences,
      restrictions: this.restrictions,
      createdAt: this.createdAt.toISOString()
    };
  }
}

module.exports = AuthUser;
