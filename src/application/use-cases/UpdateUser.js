class UpdateUser {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async execute(id, data) {
    const user = await this.userRepository.findById(id);
    if (!user) {
      throw new Error('User not found');
    }
    user.update(data);
    return await this.userRepository.update(id, user);
  }
}

module.exports = UpdateUser;
