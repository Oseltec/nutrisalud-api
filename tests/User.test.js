const User = require('../src/domain/entities/User');

describe('User Entity', () => {
  test('should create a valid user', () => {
    const userData = {
      name: 'John Doe',
      age: 30,
      weight: 75,
      height: 175,
      goal: 'maintain'
    };
    const user = User.create(userData);
    
    expect(user.name).toBe('John Doe');
    expect(user.age).toBe(30);
    expect(user.weight).toBe(75);
    expect(user.height).toBe(175);
    expect(user.goal).toBe('maintain');
    expect(user.id).toBeDefined();
  });

  test('should throw error for invalid name', () => {
    const userData = {
      name: '',
      age: 30,
      weight: 75,
      height: 175,
      goal: 'maintain'
    };
    expect(() => User.create(userData)).toThrow('Name is required');
  });

  test('should throw error for invalid age', () => {
    const userData = {
      name: 'John',
      age: -5,
      weight: 75,
      height: 175,
      goal: 'maintain'
    };
    expect(() => User.create(userData)).toThrow('Age must be between 1 and 120');
  });

  test('should throw error for invalid goal', () => {
    const userData = {
      name: 'John',
      age: 30,
      weight: 75,
      height: 175,
      goal: 'invalid_goal'
    };
    expect(() => User.create(userData)).toThrow('Goal must be one of');
  });

  test('should update user fields', () => {
    const user = User.create({
      name: 'John',
      age: 30,
      weight: 75,
      height: 175,
      goal: 'maintain'
    });
    
    user.update({ weight: 70, goal: 'lose_weight' });
    
    expect(user.weight).toBe(70);
    expect(user.goal).toBe('lose_weight');
  });

  test('should convert to JSON', () => {
    const user = User.create({
      name: 'John',
      age: 30,
      weight: 75,
      height: 175,
      goal: 'maintain'
    });
    
    const json = user.toJSON();
    
    expect(json.name).toBe('John');
    expect(json.createdAt).toBeDefined();
  });
});
