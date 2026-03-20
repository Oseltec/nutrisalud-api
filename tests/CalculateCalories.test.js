const CalculateCalories = require('../src/application/use-cases/CalculateCalories');
const InMemoryUserRepository = require('../src/infrastructure/repositories/InMemoryUserRepository');
const User = require('../src/domain/entities/User');

describe('CalculateCalories Use Case', () => {
  let repository;
  let calculateCalories;

  beforeEach(() => {
    repository = new InMemoryUserRepository();
    calculateCalories = new CalculateCalories(repository);
  });

  test('should calculate calories correctly for weight loss', async () => {
    const user = User.create({
      name: 'John',
      age: 30,
      weight: 80,
      height: 180,
      goal: 'lose_weight'
    });
    await repository.create(user);

    const result = await calculateCalories.execute(user.id);
    const json = result.toJSON();

    const bmr = (10 * 80) + (6.25 * 180) - (5 * 30) + 5;
    const tdee = bmr * 1.2;
    const expectedDaily = tdee - 500;

    expect(json.bmr).toBe(Math.round(bmr));
    expect(json.tdee).toBe(Math.round(tdee));
    expect(json.dailyCalories).toBe(Math.round(expectedDaily));
  });

  test('should calculate calories correctly for weight maintenance', async () => {
    const user = User.create({
      name: 'John',
      age: 30,
      weight: 70,
      height: 175,
      goal: 'maintain'
    });
    await repository.create(user);

    const result = await calculateCalories.execute(user.id);
    const json = result.toJSON();

    const bmr = (10 * 70) + (6.25 * 175) - (5 * 30) + 5;
    const tdee = bmr * 1.2;

    expect(json.dailyCalories).toBe(Math.round(tdee));
  });

  test('should calculate macros correctly', async () => {
    const user = User.create({
      name: 'John',
      age: 30,
      weight: 70,
      height: 175,
      goal: 'maintain'
    });
    await repository.create(user);

    const result = await calculateCalories.execute(user.id);
    const json = result.toJSON();

    const bmr = (10 * 70) + (6.25 * 175) - (5 * 30) + 5;
    const tdee = bmr * 1.2;
    const daily = tdee;

    expect(json.macros.protein).toBe(Math.round((daily * 0.30) / 4));
    expect(json.macros.carbs).toBe(Math.round((daily * 0.40) / 4));
    expect(json.macros.fat).toBe(Math.round((daily * 0.30) / 9));
  });

  test('should throw error for non-existent user', async () => {
    await expect(calculateCalories.execute('invalid-id')).rejects.toThrow('User not found');
  });
});
