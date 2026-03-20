const User = require('../../domain/entities/User');

class CreateUser {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async execute(userData) {
    const user = User.create(userData);
    return await this.userRepository.create(user);
  }
}

module.exports = CreateUser;
