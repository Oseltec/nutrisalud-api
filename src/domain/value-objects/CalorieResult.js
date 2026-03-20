class CalorieResult {
  constructor({ bmr, tdee, dailyCalories, macros }) {
    this.bmr = bmr;
    this.tdee = tdee;
    this.dailyCalories = dailyCalories;
    this.macros = macros;
  }

  toJSON() {
    return {
      bmr: Math.round(this.bmr),
      tdee: Math.round(this.tdee),
      dailyCalories: Math.round(this.dailyCalories),
      macros: {
        protein: Math.round(this.macros.protein),
        carbs: Math.round(this.macros.carbs),
        fat: Math.round(this.macros.fat)
      }
    };
  }
}

module.exports = CalorieResult;
