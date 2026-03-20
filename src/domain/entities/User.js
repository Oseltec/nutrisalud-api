const crypto = require('crypto');

class User {
  constructor({ id = null, name, age, weight, height, goal, preferences = {}, restrictions = {}, createdAt = null }) {
    this.id = id || crypto.randomUUID();
    this.name = name;
    this.age = age;
    this.weight = weight;
    this.height = height;
    this.goal = goal;
    this.preferences = {
      preferredProteins: [],
      preferredCarbs: [],
      preferredVegetables: [],
      ...preferences
    };
    this.restrictions = {
      allergies: [],
      dislikedFoods: [],
      dietaryRestrictions: [],
      ...restrictions
    };
    this.createdAt = createdAt || new Date();
  }

  static VALID_GOALS = ['lose_weight', 'maintain', 'gain_weight'];

  static ALLERGY_CATEGORIES = {
    'gluten': ['tortilla de maiz', 'tortilla de harina', 'pasta', 'pan blanco', 'pan integral', 'avena', 'trigo'],
    'dairy': ['leche entera', 'leche descremada', 'yogur natural', 'yogur griego', 'queso fresco', 'queso oaxaca', 'queso manchego', 'mantequilla', 'crema'],
    'eggs': ['huevos'],
    'nuts': ['almendras', 'nueces', 'pistachos', 'cacahuates'],
    'seafood': ['pescado', 'atun', 'camaron'],
    'soy': ['tofu', 'edamame', 'salsa de soja'],
    'legumes': ['frijoles', 'frijoles negros', 'lentejas']
  };

  static DIETARY_RESTRICTIONS = ['vegetarian', 'vegan', 'pescatarian', 'keto', 'low-carb', 'halal', 'kosher'];

  static create(data) {
    if (!data.name || typeof data.name !== 'string') {
      throw new Error('Name is required');
    }
    if (typeof data.age !== 'number' || data.age < 1 || data.age > 120) {
      throw new Error('Age must be between 1 and 120');
    }
    if (typeof data.weight !== 'number' || data.weight < 1) {
      throw new Error('Weight must be a positive number');
    }
    if (typeof data.height !== 'number' || data.height < 1) {
      throw new Error('Height must be a positive number');
    }
    if (!User.VALID_GOALS.includes(data.goal)) {
      throw new Error(`Goal must be one of: ${User.VALID_GOALS.join(', ')}`);
    }
    return new User(data);
  }

  update(data) {
    if (data.name !== undefined) this.name = data.name;
    if (data.age !== undefined) this.age = data.age;
    if (data.weight !== undefined) this.weight = data.weight;
    if (data.height !== undefined) this.height = data.height;
    if (data.goal !== undefined) {
      if (!User.VALID_GOALS.includes(data.goal)) {
        throw new Error(`Goal must be one of: ${User.VALID_GOALS.join(', ')}`);
      }
      this.goal = data.goal;
    }
    if (data.preferences !== undefined) this.preferences = { ...this.preferences, ...data.preferences };
    if (data.restrictions !== undefined) this.restrictions = { ...this.restrictions, ...data.restrictions };
    return this;
  }

  getExcludedFoods() {
    const excluded = new Set();
    
    for (const allergy of this.restrictions.allergies) {
      const allergyLower = allergy.toLowerCase();
      if (User.ALLERGY_CATEGORIES[allergyLower]) {
        for (const food of User.ALLERGY_CATEGORIES[allergyLower]) {
          excluded.add(food.toLowerCase());
        }
      }
    }
    
    for (const food of this.restrictions.dislikedFoods) {
      excluded.add(food.toLowerCase());
    }
    
    for (const restriction of this.restrictions.dietaryRestrictions) {
      const restrictionLower = restriction.toLowerCase();
      if (restrictionLower === 'vegetarian') {
        excluded.add('pollo');
        excluded.add('carne de res');
        excluded.add('carne de cerdo');
        excluded.add('pescado');
        excluded.add('atun');
        excluded.add('camaron');
      } else if (restrictionLower === 'vegan') {
        excluded.add('pollo');
        excluded.add('carne de res');
        excluded.add('carne de cerdo');
        excluded.add('pescado');
        excluded.add('atun');
        excluded.add('camaron');
        excluded.add('huevos');
        excluded.add('leche');
        excluded.add('yogur');
        excluded.add('queso');
      } else if (restrictionLower === 'pescatarian') {
        excluded.add('pollo');
        excluded.add('carne de res');
        excluded.add('carne de cerdo');
      } else if (restrictionLower === 'keto' || restrictionLower === 'low-carb') {
        excluded.add('arroz');
        excluded.add('pasta');
        excluded.add('pan');
        excluded.add('tortilla');
        excluded.add('papa');
        excluded.add('platano');
      }
    }
    
    return excluded;
  }

  toJSON() {
    return {
      id: this.id,
      name: this.name,
      age: this.age,
      weight: this.weight,
      height: this.height,
      goal: this.goal,
      preferences: this.preferences,
      restrictions: this.restrictions,
      createdAt: this.createdAt.toISOString()
    };
  }
}

module.exports = User;
