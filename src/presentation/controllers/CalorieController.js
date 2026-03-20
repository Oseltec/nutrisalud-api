class CalorieController {
  constructor(calculateCalories) {
    this.calculateCalories = calculateCalories;
  }

  async calculate(req, res) {
    try {
      const { userId, age, weight, height, goal, name } = req.body;
      
      if (!userId && (!age || !weight || !height || !goal)) {
        return res.status(400).json({ error: 'Either userId or age, weight, height, goal are required' });
      }
      
      const input = userId ? { userId } : { age, weight, height, goal, name };
      const result = await this.calculateCalories.execute(input);
      res.json(result.toJSON());
    } catch (error) {
      const status = error.message === 'User not found' ? 404 : 400;
      res.status(status).json({ error: error.message });
    }
  }
}

module.exports = CalorieController;
