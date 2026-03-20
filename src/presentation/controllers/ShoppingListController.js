class ShoppingListController {
  constructor(generateShoppingList) {
    this.generateShoppingList = generateShoppingList;
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
      
      const shoppingList = await this.generateShoppingList.execute(input);
      res.json(shoppingList);
    } catch (error) {
      const status = error.message === 'User not found' ? 404 : 400;
      res.status(status).json({ error: error.message });
    }
  }
}

module.exports = ShoppingListController;
