const AuthUser = require('../../domain/entities/AuthUser');

class Register {
  constructor(authRepository) {
    this.authRepository = authRepository;
  }

  async execute(userData) {
    const existingUser = await this.authRepository.findByEmail(userData.email);
    if (existingUser) {
      throw new Error('User with this email already exists');
    }

    const user = await AuthUser.create(userData);
    await this.authRepository.create(user);
    
    const userResponse = user.toJSON();
    delete userResponse.password;
    return userResponse;
  }
}

module.exports = Register;
