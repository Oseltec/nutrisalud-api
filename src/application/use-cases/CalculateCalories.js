const CalorieResult = require('../../domain/value-objects/CalorieResult');

class CalculateCalories {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async execute(input) {
    let user;
    
    if (input.userId) {
      user = await this.userRepository.findById(input.userId);
      if (!user) {
        throw new Error('User not found');
      }
    } else if (input.age !== undefined && input.weight !== undefined && input.height !== undefined && input.goal) {
      const User = require('../../domain/entities/User');
      user = User.create({
        name: input.name || 'Anonymous',
        age: input.age,
        weight: input.weight,
        height: input.height,
        goal: input.goal
      });
    } else {
      throw new Error('Either userId or age, weight, height, goal are required');
    }

    const bmr = this.calculateBMR(user);
    const tdee = bmr * 1.2;
    const dailyCalories = this.adjustForGoal(tdee, user.goal);
    const macros = this.calculateMacros(dailyCalories);

    return new CalorieResult({ bmr, tdee, dailyCalories, macros });
  }

  calculateBMR(user) {
    const weight = user.weight;
    const height = user.height;
    const age = user.age;
    return (10 * weight) + (6.25 * height) - (5 * age) + 5;
  }

  adjustForGoal(tdee, goal) {
    switch (goal) {
      case 'lose_weight':
        return tdee - 500;
      case 'maintain':
        return tdee;
      case 'gain_weight':
        return tdee + 500;
      default:
        return tdee;
    }
  }

  calculateMacros(dailyCalories) {
    return {
      protein: (dailyCalories * 0.30) / 4,
      carbs: (dailyCalories * 0.40) / 4,
      fat: (dailyCalories * 0.30) / 9
    };
  }
}

module.exports = CalculateCalories;
