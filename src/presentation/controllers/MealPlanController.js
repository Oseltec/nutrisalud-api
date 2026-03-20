class MealPlanController {
  constructor(generateMealPlan) {
    this.generateMealPlan = generateMealPlan;
  }

  async generate(req, res) {
    try {
      const { userId, age, weight, height, goal, name, preferences, restrictions } = req.body;
      
      if (!userId && (!age || !weight || !height || !goal)) {
        return res.status(400).json({ error: 'Either userId or age, weight, height, goal are required' });
      }
      
      const input = userId 
        ? { userId } 
        : { age, weight, height, goal, name, preferences: preferences || {}, restrictions: restrictions || {} };
      const mealPlan = await this.generateMealPlan.execute(input);
      res.json(mealPlan);
    } catch (error) {
      const status = error.message === 'User not found' ? 404 : 400;
      res.status(status).json({ error: error.message });
    }
  }
}

module.exports = MealPlanController;
