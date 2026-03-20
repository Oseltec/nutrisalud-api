class GenerateShoppingList {
  constructor(generateMealPlan, mealPlanService) {
    this.generateMealPlan = generateMealPlan;
    this.mealPlanService = mealPlanService;
  }

  async execute(input) {
    const mealPlan = await this.generateMealPlan.execute(input);
    return this.mealPlanService.generateShoppingList(mealPlan);
  }
}

module.exports = GenerateShoppingList;
