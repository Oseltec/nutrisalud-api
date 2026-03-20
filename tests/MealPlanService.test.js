const MealPlanServiceImpl = require('../src/infrastructure/services/MealPlanService');
const User = require('../src/domain/entities/User');

describe('MealPlanService', () => {
  let mealPlanService;

  beforeEach(() => {
    mealPlanService = new MealPlanServiceImpl();
  });

  test('should generate 7 days of meal plans', async () => {
    const user = User.create({
      name: 'John',
      age: 30,
      weight: 70,
      height: 175,
      goal: 'maintain'
    });

    const bmr = (10 * 70) + (6.25 * 175) - (5 * 30) + 5;
    const tdee = bmr * 1.2;
    const dailyCalories = tdee;

    const result = await mealPlanService.generateMealPlan(user, dailyCalories);

    expect(result.dailyMeals).toHaveLength(7);
    expect(result.dailyMeals[0].day).toBe('Monday');
  });

  test('should include 4 meals per day', async () => {
    const user = User.create({
      name: 'John',
      age: 30,
      weight: 70,
      height: 175,
      goal: 'maintain'
    });

    const result = await mealPlanService.generateMealPlan(user, 2000);

    expect(result.dailyMeals[0].meals).toHaveLength(4);
    expect(result.dailyMeals[0].meals[0].name).toBe('Breakfast');
    expect(result.dailyMeals[0].meals[1].name).toBe('Lunch');
    expect(result.dailyMeals[0].meals[2].name).toBe('Dinner');
    expect(result.dailyMeals[0].meals[3].name).toBe('Snack');
  });

  test('should include weekly totals', async () => {
    const user = User.create({
      name: 'John',
      age: 30,
      weight: 70,
      height: 175,
      goal: 'maintain'
    });

    const result = await mealPlanService.generateMealPlan(user, 2000);

    expect(result.weeklyTotals.totalCalories).toBeDefined();
    expect(result.weeklyTotals.avgDailyCalories).toBe(2000);
  });

  test('should have weekStartDate', async () => {
    const user = User.create({
      name: 'John',
      age: 30,
      weight: 70,
      height: 175,
      goal: 'maintain'
    });

    const result = await mealPlanService.generateMealPlan(user, 2000);

    expect(result.weekStartDate).toBeDefined();
  });
});
