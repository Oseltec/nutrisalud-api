const jwt = require('jsonwebtoken');

class Login {
  constructor(authRepository) {
    this.authRepository = authRepository;
    this.jwtSecret = process.env.JWT_SECRET || 'nutrisalud-secret-key-2024';
    this.tokenExpiry = process.env.JWT_EXPIRES_IN || '7d';
  }

  async execute(email, password) {
    const user = await this.authRepository.findByEmail(email);
    if (!user) {
      throw new Error('Invalid email or password');
    }

    const isValidPassword = await user.comparePassword(password);
    if (!isValidPassword) {
      throw new Error('Invalid email or password');
    }

    const token = jwt.sign(
      { userId: user.id, email: user.email },
      this.jwtSecret,
      { expiresIn: this.tokenExpiry }
    );

    return {
      token,
      user: user.toJSON()
    };
  }
}

module.exports = Login;
