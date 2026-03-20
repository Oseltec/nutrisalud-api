class GenerateMealPlan {
  constructor(userRepository, mealPlanService) {
    this.userRepository = userRepository;
    this.mealPlanService = mealPlanService;
  }

  async execute(input) {
    let user;
    let userId;
    let preferences = {};
    let restrictions = {};
    
    if (typeof input === 'string') {
      userId = input;
      user = await this.userRepository.findById(userId);
      if (!user) {
        throw new Error('User not found');
      }
      preferences = user.preferences || {};
      restrictions = user.restrictions || {};
    } else if (input.userId) {
      userId = input.userId;
      user = await this.userRepository.findById(userId);
      if (!user) {
        throw new Error('User not found');
      }
      preferences = user.preferences || {};
      restrictions = user.restrictions || {};
    } else if (input.age !== undefined && input.weight !== undefined && input.height !== undefined && input.goal) {
      const User = require('../../domain/entities/User');
      preferences = input.preferences || {};
      restrictions = input.restrictions || {};
      user = User.create({
        name: input.name || 'Anonymous',
        age: input.age,
        weight: input.weight,
        height: input.height,
        goal: input.goal,
        preferences,
        restrictions
      });
    } else {
      throw new Error('Either userId or age, weight, height, goal are required');
    }

    const bmr = this.calculateBMR(user);
    const tdee = bmr * 1.2;
    const dailyCalories = this.adjustForGoal(tdee, user.goal);
    const macros = this.calculateMacros(dailyCalories, user.goal, user.weight);

    const excludedFoods = user.getExcludedFoods ? user.getExcludedFoods() : this.getExcludedFoods(restrictions);

    return await this.mealPlanService.generateMealPlan(
      user, 
      dailyCalories, 
      macros, 
      user.goal,
      preferences,
      restrictions,
      excludedFoods
    );
  }

  getExcludedFoods(restrictions) {
    const excluded = new Set();
    const User = require('../../domain/entities/User');
    
    for (const allergy of (restrictions.allergies || [])) {
      const allergyLower = allergy.toLowerCase();
      if (User.ALLERGY_CATEGORIES[allergyLower]) {
        for (const food of User.ALLERGY_CATEGORIES[allergyLower]) {
          excluded.add(food.toLowerCase());
        }
      }
    }
    
    for (const food of (restrictions.dislikedFoods || [])) {
      excluded.add(food.toLowerCase());
    }
    
    for (const restriction of (restrictions.dietaryRestrictions || [])) {
      const r = restriction.toLowerCase();
      if (r === 'vegetarian') {
        ['pollo', 'carne de res', 'carne de cerdo', 'pescado', 'atun', 'camaron'].forEach(f => excluded.add(f));
      } else if (r === 'vegan') {
        ['pollo', 'carne de res', 'carne de cerdo', 'pescado', 'atun', 'camaron', 'huevos', 'leche', 'yogur', 'queso'].forEach(f => excluded.add(f));
      } else if (r === 'pescatarian') {
        ['pollo', 'carne de res', 'carne de cerdo'].forEach(f => excluded.add(f));
      } else if (r === 'keto' || r === 'low-carb') {
        ['arroz', 'pasta', 'pan', 'tortilla', 'papa', 'platano'].forEach(f => excluded.add(f));
      }
    }
    
    return excluded;
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
        return Math.max(tdee - 500, 1200);
      case 'maintain':
        return tdee;
      case 'gain_weight':
        return tdee + 500;
      default:
        return tdee;
    }
  }

  calculateMacros(dailyCalories, goal, weight) {
    const proteinMultiplier = {
      'lose_weight': 2.2,
      'maintain': 1.6,
      'gain_weight': 2.0
    };
    
    const proteinGrams = weight * proteinMultiplier[goal];
    const proteinCalories = proteinGrams * 4;
    
    const fatPercentage = {
      'lose_weight': 0.25,
      'maintain': 0.30,
      'gain_weight': 0.30
    };
    
    const fatCalories = dailyCalories * fatPercentage[goal];
    const fatGrams = fatCalories / 9;
    
    const carbsCalories = dailyCalories - proteinCalories - fatCalories;
    const carbsGrams = Math.max(carbsCalories / 4, 50);

    return {
      protein: Math.round(proteinGrams),
      carbs: Math.round(carbsGrams),
      fat: Math.round(fatGrams)
    };
  }
}

module.exports = GenerateMealPlan;
