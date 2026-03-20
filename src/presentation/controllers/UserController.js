class UserController {
  constructor(createUser, getUser, updateUser) {
    this.createUser = createUser;
    this.getUser = getUser;
    this.updateUser = updateUser;
  }

  async create(req, res) {
    try {
      const user = await this.createUser.execute(req.body);
      res.status(201).json(user);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async getById(req, res) {
    try {
      const user = await this.getUser.execute(req.params.id);
      res.json(user.toJSON());
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  async update(req, res) {
    try {
      const user = await this.updateUser.execute(req.params.id, req.body);
      res.json(user);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }
}

module.exports = UserController;
