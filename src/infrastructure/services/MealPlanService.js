class MealPlanServiceImpl {
  constructor() {
    this.foods = {
      proteins: [
        { name: 'Pollo (Chicken Breast)', caloriesPer100g: 165, proteinPer100g: 31, carbsPer100g: 0, fatPer100g: 3.6, fiberPer100g: 0, sodiumPer100g: 74 },
        { name: 'Huevos', caloriesPer100g: 155, proteinPer100g: 13, carbsPer100g: 1.1, fatPer100g: 11, fiberPer100g: 0, sodiumPer100g: 142 },
        { name: 'Carne de Res (Lean Beef)', caloriesPer100g: 250, proteinPer100g: 26, carbsPer100g: 0, fatPer100g: 15, fiberPer100g: 0, sodiumPer100g: 72 },
        { name: 'Carne de Cerdo (Pork)', caloriesPer100g: 242, proteinPer100g: 27, carbsPer100g: 0, fatPer100g: 14, fiberPer100g: 0, sodiumPer100g: 62 },
        { name: 'Pescado (Fish)', caloriesPer100g: 136, proteinPer100g: 20, carbsPer100g: 0, fatPer100g: 5, fiberPer100g: 0, sodiumPer100g: 54 },
        { name: 'Atun', caloriesPer100g: 130, proteinPer100g: 29, carbsPer100g: 0, fatPer100g: 1, fiberPer100g: 0, sodiumPer100g: 400 },
        { name: 'Camaron (Shrimp)', caloriesPer100g: 99, proteinPer100g: 24, carbsPer100g: 0.2, fatPer100g: 0.3, fiberPer100g: 0, sodiumPer100g: 111 },
        { name: 'Frijoles (Beans)', caloriesPer100g: 127, proteinPer100g: 8.9, carbsPer100g: 22.8, fatPer100g: 0.5, fiberPer100g: 6.4, sodiumPer100g: 1 },
        { name: 'Lentejas (Lentils)', caloriesPer100g: 116, proteinPer100g: 9, carbsPer100g: 20, fatPer100g: 0.4, fiberPer100g: 7.9, sodiumPer100g: 2 },
        { name: 'Queso Fresco', caloriesPer100g: 264, proteinPer100g: 18, carbsPer100g: 3, fatPer100g: 21, fiberPer100g: 0, sodiumPer100g: 413 }
      ],
      carbohydrates: [
        { name: 'Arroz (White Rice)', caloriesPer100g: 130, proteinPer100g: 2.7, carbsPer100g: 28, fatPer100g: 0.3, fiberPer100g: 0.4, sodiumPer100g: 1 },
        { name: 'Arroz Integral (Brown Rice)', caloriesPer100g: 111, proteinPer100g: 2.6, carbsPer100g: 23, fatPer100g: 0.9, fiberPer100g: 1.8, sodiumPer100g: 5 },
        { name: 'Tortilla de Maiz', caloriesPer100g: 218, proteinPer100g: 5.5, carbsPer100g: 45, fatPer100g: 2.8, fiberPer100g: 6.3, sodiumPer100g: 46 },
        { name: 'Tortilla de Harina', caloriesPer100g: 312, proteinPer100g: 8.2, carbsPer100g: 52, fatPer100g: 7.8, fiberPer100g: 3.2, sodiumPer100g: 588 },
        { name: 'Frijoles Negros', caloriesPer100g: 132, proteinPer100g: 8.9, carbsPer100g: 24, fatPer100g: 0.5, fiberPer100g: 8.7, sodiumPer100g: 1 },
        { name: 'Pasta', caloriesPer100g: 131, proteinPer100g: 5, carbsPer100g: 25, fatPer100g: 1.1, fiberPer100g: 1.8, sodiumPer100g: 1 },
        { name: 'Pan Blanco', caloriesPer100g: 265, proteinPer100g: 9, carbsPer100g: 49, fatPer100g: 3.2, fiberPer100g: 2.7, sodiumPer100g: 491 },
        { name: 'Pan Integral', caloriesPer100g: 247, proteinPer100g: 13, carbsPer100g: 41, fatPer100g: 4.2, fiberPer100g: 6.8, sodiumPer100g: 400 },
        { name: 'Papa (Potato)', caloriesPer100g: 77, proteinPer100g: 2, carbsPer100g: 17, fatPer100g: 0.1, fiberPer100g: 2.2, sodiumPer100g: 6 },
        { name: 'Platano (Banana)', caloriesPer100g: 89, proteinPer100g: 1.1, carbsPer100g: 23, fatPer100g: 0.3, fiberPer100g: 2.6, sodiumPer100g: 1 },
        { name: 'Manzana (Apple)', caloriesPer100g: 52, proteinPer100g: 0.3, carbsPer100g: 14, fatPer100g: 0.2, fiberPer100g: 2.4, sodiumPer100g: 1 },
        { name: 'Avena', caloriesPer100g: 389, proteinPer100g: 16.9, carbsPer100g: 66, fatPer100g: 6.9, fiberPer100g: 10.6, sodiumPer100g: 2 }
      ],
      vegetables: [
        { name: 'Jitomate (Tomato)', caloriesPer100g: 18, proteinPer100g: 0.9, carbsPer100g: 3.9, fatPer100g: 0.2, fiberPer100g: 1.2, sodiumPer100g: 5 },
        { name: 'Cebolla (Onion)', caloriesPer100g: 40, proteinPer100g: 1.1, carbsPer100g: 9, fatPer100g: 0.1, fiberPer100g: 1.7, sodiumPer100g: 4 },
        { name: 'Aguacate (Avocado)', caloriesPer100g: 160, proteinPer100g: 2, carbsPer100g: 9, fatPer100g: 15, fiberPer100g: 6.7, sodiumPer100g: 7 },
        { name: 'Chile (Bell Pepper)', caloriesPer100g: 31, proteinPer100g: 1, carbsPer100g: 6, fatPer100g: 0.3, fiberPer100g: 2.1, sodiumPer100g: 4 },
        { name: 'Zanahoria (Carrot)', caloriesPer100g: 41, proteinPer100g: 0.9, carbsPer100g: 10, fatPer100g: 0.2, fiberPer100g: 2.8, sodiumPer100g: 69 },
        { name: 'Brocoli', caloriesPer100g: 34, proteinPer100g: 2.8, carbsPer100g: 7, fatPer100g: 0.4, fiberPer100g: 2.6, sodiumPer100g: 33 },
        { name: 'Espinacas', caloriesPer100g: 23, proteinPer100g: 2.9, carbsPer100g: 3.6, fatPer100g: 0.4, fiberPer100g: 2.2, sodiumPer100g: 79 },
        { name: 'Lechuga (Lettuce)', caloriesPer100g: 15, proteinPer100g: 1.4, carbsPer100g: 2.9, fatPer100g: 0.2, fiberPer100g: 1.3, sodiumPer100g: 28 },
        { name: 'Calabaza (Squash)', caloriesPer100g: 26, proteinPer100g: 1, carbsPer100g: 6, fatPer100g: 0.1, fiberPer100g: 0.5, sodiumPer100g: 2 },
        { name: 'Ejotes (Green Beans)', caloriesPer100g: 31, proteinPer100g: 1.8, carbsPer100g: 7, fatPer100g: 0.1, fiberPer100g: 2.7, sodiumPer100g: 6 },
        { name: 'Champinones (Mushrooms)', caloriesPer100g: 22, proteinPer100g: 3.1, carbsPer100g: 3.3, fatPer100g: 0.3, fiberPer100g: 1, sodiumPer100g: 5 },
        { name: 'Ajo (Garlic)', caloriesPer100g: 149, proteinPer100g: 6.4, carbsPer100g: 33, fatPer100g: 0.5, fiberPer100g: 2.1, sodiumPer100g: 17 },
        { name: 'Elote (Corn)', caloriesPer100g: 86, proteinPer100g: 3.3, carbsPer100g: 19, fatPer100g: 1.4, fiberPer100g: 2.7, sodiumPer100g: 15 },
        { name: 'Nopal (Cactus)', caloriesPer100g: 16, proteinPer100g: 1.3, carbsPer100g: 3.3, fatPer100g: 0.1, fiberPer100g: 2.2, sodiumPer100g: 20 },
        { name: 'Cilantro', caloriesPer100g: 23, proteinPer100g: 2.1, carbsPer100g: 3.7, fatPer100g: 0.5, fiberPer100g: 2.1, sodiumPer100g: 45 },
        { name: 'Limon', caloriesPer100g: 25, proteinPer100g: 0.7, carbsPer100g: 9, fatPer100g: 0.2, fiberPer100g: 2.8, sodiumPer100g: 2 },
        { name: 'Apio', caloriesPer100g: 16, proteinPer100g: 0.7, carbsPer100g: 3, fatPer100g: 0.2, fiberPer100g: 1.6, sodiumPer100g: 80 }
      ],
      fats: [
        { name: 'Aceite de Oliva', caloriesPer100g: 884, proteinPer100g: 0, carbsPer100g: 0, fatPer100g: 100, fiberPer100g: 0, sodiumPer100g: 2 },
        { name: 'Aceite Vegetal', caloriesPer100g: 884, proteinPer100g: 0, carbsPer100g: 0, fatPer100g: 100, fiberPer100g: 0, sodiumPer100g: 0 },
        { name: 'Mantequilla', caloriesPer100g: 717, proteinPer100g: 0.9, carbsPer100g: 0.1, fatPer100g: 81, fiberPer100g: 0, sodiumPer100g: 11 },
        { name: 'Crema', caloriesPer100g: 195, proteinPer100g: 2.7, carbsPer100g: 3.7, fatPer100g: 19, fiberPer100g: 0, sodiumPer100g: 35 },
        { name: 'Queso Oaxaca', caloriesPer100g: 356, proteinPer100g: 22, carbsPer100g: 2, fatPer100g: 29, fiberPer100g: 0, sodiumPer100g: 430 },
        { name: 'Queso Manchego', caloriesPer100g: 376, proteinPer100g: 25, carbsPer100g: 1, fatPer100g: 30, fiberPer100g: 0, sodiumPer100g: 600 },
        { name: 'Aguacate', caloriesPer100g: 160, proteinPer100g: 2, carbsPer100g: 9, fatPer100g: 15, fiberPer100g: 6.7, sodiumPer100g: 7 }
      ],
      dairy: [
        { name: 'Leche Entera', caloriesPer100g: 61, proteinPer100g: 3.2, carbsPer100g: 4.8, fatPer100g: 3.3, fiberPer100g: 0, sodiumPer100g: 43 },
        { name: 'Leche Descremada', caloriesPer100g: 34, proteinPer100g: 3.4, carbsPer100g: 5, fatPer100g: 0.1, fiberPer100g: 0, sodiumPer100g: 40 },
        { name: 'Yogur Natural', caloriesPer100g: 61, proteinPer100g: 3.5, carbsPer100g: 4.7, fatPer100g: 3.3, fiberPer100g: 0, sodiumPer100g: 46 },
        { name: 'Yogur Griego', caloriesPer100g: 97, proteinPer100g: 9, carbsPer100g: 3.6, fatPer100g: 5, fiberPer100g: 0, sodiumPer100g: 35 }
      ],
      snacks: [
        { name: 'Almendras', caloriesPer100g: 579, proteinPer100g: 21, carbsPer100g: 22, fatPer100g: 50, fiberPer100g: 12.5, sodiumPer100g: 1 },
        { name: 'Nueces', caloriesPer100g: 654, proteinPer100g: 15, carbsPer100g: 14, fatPer100g: 65, fiberPer100g: 6.7, sodiumPer100g: 2 },
        { name: 'Pistachos', caloriesPer100g: 560, proteinPer100g: 20, carbsPer100g: 28, fatPer100g: 45, fiberPer100g: 10, sodiumPer100g: 1 },
        { name: 'Cacahuates', caloriesPer100g: 567, proteinPer100g: 26, carbsPer100g: 15, fatPer100g: 49, fiberPer100g: 8.5, sodiumPer100g: 18 },
        { name: 'Frutos Secos', caloriesPer100g: 462, proteinPer100g: 8, carbsPer100g: 45, fatPer100g: 29, fiberPer100g: 6, sodiumPer100g: 10 }
      ]
    };

    this.mealTemplates = {
      breakfast: [
        { name: 'Huevos Revueltos con Tortilla', base: 'huevos', additions: ['tortilla de maiz', 'aguacate', 'queso fresco'] },
        { name: 'Huevos con Frijoles y Tortilla', base: 'huevos', additions: ['frijoles negros', 'tortilla de maiz'] },
        { name: 'Avena con Leche y Platano', base: 'leche', additions: ['platano'] },
        { name: 'Tortilla con Huevo y Queso', base: 'tortilla de maiz', additions: ['huevos', 'queso fresco'] },
        { name: 'Yogur con Fruta', base: 'yogur natural', additions: ['platano', 'manzana'] },
        { name: 'Omelette de Huevo con Verduras', base: 'huevos', additions: ['espinacas', 'champinones'] },
        { name: 'Pan con Huevo y Aguacate', base: 'pan blanco', additions: ['huevos', 'aguacate'] },
        { name: 'Huevos Estrellados con Tortilla', base: 'huevos', additions: ['tortilla de maiz'] },
        { name: 'Licuado de Proteina', base: 'leche', additions: ['platano', 'frijoles'] },
        { name: 'Tortilla con Jamon y Queso', base: 'tortilla de maiz', additions: ['queso fresco'] },
        { name: 'Hot Cakes con Miel', base: 'leche', additions: ['platano'] },
        { name: 'Huevos con Tocino', base: 'huevos', additions: ['aguacate'] },
        { name: 'Pan Tostado con Aguacate', base: 'pan integral', additions: ['aguacate'] },
        { name: 'Yogur Griego con Fruta', base: 'yogur griego', additions: ['platano', 'manzana'] },
        { name: 'Chilaquiles Verdes', base: 'tortilla de maiz', additions: ['queso fresco', 'crema'] }
      ],
      lunch: [
        { name: 'Pollo con Arroz y Frijoles', protein: 'pollo', carb: 'arroz', extra: 'frijoles negros', veg: ['jitomate', 'cebolla'] },
        { name: 'Tacos de Pollo', protein: 'pollo', carb: 'tortilla de maiz', extra: 'aguacate', veg: ['cebolla', 'cilantro'] },
        { name: 'Enchiladas de Pollo', protein: 'pollo', carb: 'tortilla de maiz', extra: 'queso fresco', veg: ['lechuga', 'jitomate'] },
        { name: 'Burrito de Carne', protein: 'carne de res', carb: 'tortilla de harina', extra: 'frijoles', veg: ['cebolla', 'chile', 'jitomate'] },
        { name: 'Pechuga empanizada con Papa', protein: 'pollo', carb: 'papa', veg: ['ejotes', 'zanahoria'] },
        { name: 'Sopa de Frijol', protein: 'frijoles', carb: 'arroz', veg: ['cebolla', 'ajo', 'chile'] },
        { name: 'Pescado frito con Ensalada', protein: 'pescado', carb: 'arroz', veg: ['lechuga', 'jitomate', 'aguacate'] },
        { name: 'Milanesa de Pollo con Arroz', protein: 'pollo', carb: 'arroz', veg: ['lechuga', 'jitomate'] },
        { name: 'Tamales de Pollo', protein: 'pollo', carb: 'arroz', veg: ['salsa', 'cebolla'] },
        { name: 'Tortas de Jamon', protein: 'pollo', carb: 'pan blanco', veg: ['jitomate', 'aguacate', 'lechuga'] },
        { name: 'Pozole', protein: 'pollo', carb: 'arroz', veg: ['lechuga', 'ridicula', 'cebolla'] },
        { name: 'Chiles Rellenos', protein: 'carne de res', carb: 'arroz', veg: ['jitomate', 'queso fresco'] },
        { name: 'Sope de Carne', protein: 'carne de res', carb: 'frijoles', extra: 'queso fresco', veg: ['lechuga', 'jitomate'] },
        { name: 'Flautas de Pollo', protein: 'pollo', carb: 'tortilla de maiz', extra: 'aguacate', veg: ['lechuga', 'jitomate'] },
        { name: 'Molletes', protein: 'frijoles', carb: 'pan blanco', extra: 'queso fresco', veg: ['jitomate'] }
      ],
      dinner: [
        { name: 'Carne asada con Arroz', protein: 'carne de res', carb: 'arroz', veg: ['lechuga', 'jitomate', 'cebolla', 'aguacate'] },
        { name: 'Pollo Horneado con Verduras', protein: 'pollo', carb: 'papa', veg: ['brocoli', 'zanahoria', 'ejotes'] },
        { name: 'Chuletas de Cerdo con Elote', protein: 'carne de cerdo', carb: 'elote', veg: ['frijoles', 'calabaza'] },
        { name: 'Spaghetti con Carne', protein: 'carne de res', carb: 'pasta', veg: ['jitomate', 'cebolla', 'ajo'] },
        { name: 'Salmón a la Plancha', protein: 'pescado', carb: 'arroz', veg: ['espinacas', 'calabaza'] },
        { name: 'Ensalada de Pollo', protein: 'pollo', carb: 'tortilla de maiz', veg: ['lechuga', 'jitomate', 'aguacate', 'queso fresco'] },
        { name: 'Camaron al Mojo de Ajo', protein: 'camaron', carb: 'arroz', veg: ['chile', 'cebolla', 'ejotes'] },
        { name: 'Bistec con Papas', protein: 'carne de res', carb: 'papa', veg: ['cebolla', 'ajo'] },
        { name: 'Pechuga de Pollo Grill', protein: 'pollo', carb: 'arroz', veg: ['brocoli', 'ejotes'] },
        { name: 'Filete de Pescado Empanizado', protein: 'pescado', carb: 'papa', veg: ['ensalada', 'limon'] },
        { name: 'Tacos de Carne Asada', protein: 'carne de res', carb: 'tortilla de maiz', veg: ['cebolla', 'cilantro', 'limon'] },
        { name: 'Albondigas con Arroz', protein: 'carne de res', carb: 'arroz', veg: ['jitomate', 'cebolla'] },
        { name: 'Costillas de Cerdo', protein: 'carne de cerdo', carb: 'arroz', veg: ['frijoles', 'cebolla'] },
        { name: 'Pulpo a la Diabla', protein: 'camaron', carb: 'arroz', veg: ['cebolla', 'chile'] },
        { name: 'Tamales de Maiz', protein: 'pollo', carb: 'arroz', veg: ['salsa', 'cebolla'] }
      ]
    };

    this.mealTimings = {
      breakfast: { time: '07:00 - 08:00', tip: 'Start your day with protein to maintain energy levels' },
      snack1: { time: '10:00 - 11:00', tip: 'A light snack to maintain blood sugar levels' },
      lunch: { time: '13:00 - 14:00', tip: 'Main meal - balance protein and carbs for sustained energy' },
      snack2: { time: '16:00 - 17:00', tip: 'Pre-workout snack if exercising, otherwise optional' },
      dinner: { time: '19:00 - 20:00', tip: 'Lighter meal - avoid heavy carbs before bed' }
    };

    this.nutritionTips = [
      'Drink at least 2L of water daily',
      'Include vegetables in every meal',
      'Limit processed foods and added sugars',
      'Eat slowly and stop when feeling full',
      'Combine protein with complex carbs for sustained energy',
      'Healthy fats are essential for hormone production',
      'Fiber helps with digestion and satiety'
    ];

    this.days = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];
  }

  async generateMealPlan(user, dailyCalories, macros = null, goal = 'maintain', preferences = {}, restrictions = {}, excludedFoods = new Set()) {
    const mealDistribution = {
      lose_weight: { breakfast: 0.25, snack1: 0.10, lunch: 0.35, snack2: 0.05, dinner: 0.25 },
      maintain: { breakfast: 0.25, snack1: 0.10, lunch: 0.35, snack2: 0.05, dinner: 0.25 },
      gain_weight: { breakfast: 0.25, snack1: 0.10, lunch: 0.30, snack2: 0.10, dinner: 0.25 }
    };

    const distribution = mealDistribution[goal] || mealDistribution.maintain;
    const goalLabel = { lose_weight: 'Perder Peso', maintain: 'Mantenimiento', gain_weight: 'Ganar Masa Muscular' }[goal];

    const targetMacros = macros || {
      protein: (dailyCalories * 0.30) / 4,
      carbs: (dailyCalories * 0.40) / 4,
      fat: (dailyCalories * 0.30) / 9
    };

    const filteredTemplates = this.filterTemplatesByRestrictions(preferences, restrictions, excludedFoods);
    const filteredFoods = this.filterFoodsByRestrictions(preferences, restrictions, excludedFoods);

    const dailyMeals = this.days.map((day, dayIndex) => {
      const meals = [];
      const mealTypes = ['breakfast', 'snack1', 'lunch', 'snack2', 'dinner'];

      for (const mealType of mealTypes) {
        const targetCals = dailyCalories * distribution[mealType];
        const meal = this.createMeal(mealType, dayIndex, targetCals, targetMacros, goal, filteredTemplates, filteredFoods, preferences);
        meals.push(meal);
      }

      const dayTotals = meals.reduce((acc, meal) => ({
        calories: acc.calories + meal.totalCalories,
        protein: acc.protein + meal.totalProtein,
        carbs: acc.carbs + meal.totalCarbs,
        fat: acc.fat + meal.totalFat,
        fiber: acc.fiber + meal.totalFiber,
        sodium: acc.sodium + meal.totalSodium
      }), { calories: 0, protein: 0, carbs: 0, fat: 0, fiber: 0, sodium: 0 });

      const mealTiming = this.getMealTimingsForDay(day);

      return { 
        day, 
        meals, 
        mealTiming,
        summary: {
          totalCalories: dayTotals.calories,
          totalProtein: dayTotals.protein,
          totalCarbs: dayTotals.carbs,
          totalFat: dayTotals.fat,
          totalFiber: dayTotals.fiber,
          totalSodium: dayTotals.sodium
        }
      };
    });

    const weeklyTotals = {
      totalCalories: dailyMeals.reduce((sum, day) => sum + day.summary.totalCalories, 0),
      avgDailyCalories: Math.round(dailyMeals.reduce((sum, day) => sum + day.summary.totalCalories, 0) / 7),
      avgDailyProtein: Math.round(dailyMeals.reduce((sum, day) => sum + day.summary.totalProtein, 0) / 7),
      avgDailyCarbs: Math.round(dailyMeals.reduce((sum, day) => sum + day.summary.totalCarbs, 0) / 7),
      avgDailyFat: Math.round(dailyMeals.reduce((sum, day) => sum + day.summary.totalFat, 0) / 7),
      avgDailyFiber: Math.round(dailyMeals.reduce((sum, day) => sum + day.summary.totalFiber, 0) / 7),
      avgDailySodium: Math.round(dailyMeals.reduce((sum, day) => sum + day.summary.totalSodium, 0) / 7)
    };

    const compliance = this.calculateCompliance(weeklyTotals, targetMacros, dailyCalories);

    const today = new Date();
    const weekStart = today.toISOString().split('T')[0];

    const appliedRestrictions = {
      allergies: restrictions.allergies || [],
      dislikedFoods: restrictions.dislikedFoods || [],
      dietaryRestrictions: restrictions.dietaryRestrictions || []
    };

    return {
      weekStartDate: weekStart,
      goal: goalLabel,
      targetCalories: Math.round(dailyCalories),
      targetMacros: {
        protein: Math.round(targetMacros.protein),
        carbs: Math.round(targetMacros.carbs),
        fat: Math.round(targetMacros.fat)
      },
      preferences: {
        preferredProteins: preferences.preferredProteins || [],
        preferredCarbs: preferences.preferredCarbs || [],
        preferredVegetables: preferences.preferredVegetables || []
      },
      appliedRestrictions,
      dailyMeals,
      weeklyTotals,
      complianceScore: compliance,
      nutritionTips: this.nutritionTips
    };
  }

  calculateCompliance(weeklyTotals, targetMacros, targetCalories) {
    const avgCalories = weeklyTotals.avgDailyCalories;
    const avgProtein = weeklyTotals.avgDailyProtein;
    const avgCarbs = weeklyTotals.avgDailyCarbs;
    const avgFat = weeklyTotals.avgDailyFat;
    const avgFiber = weeklyTotals.avgDailyFiber;
    const avgSodium = weeklyTotals.avgDailySodium;

    const calorieDiff = Math.abs(avgCalories - targetCalories) / targetCalories;
    const proteinDiff = Math.abs(avgProtein - targetMacros.protein) / (targetMacros.protein || 1);
    const carbsDiff = Math.abs(avgCarbs - targetMacros.carbs) / (targetMacros.carbs || 1);
    const fatDiff = Math.abs(avgFat - targetMacros.fat) / (targetMacros.fat || 1);

    const calorieScore = Math.max(0, 100 - (calorieDiff * 100));
    const proteinScore = Math.max(0, 100 - (proteinDiff * 50));
    const carbsScore = Math.max(0, 100 - (carbsDiff * 50));
    const fatScore = Math.max(0, 100 - (fatDiff * 50));

    const fiberScore = Math.min(100, avgFiber / 25 * 100);
    const sodiumScore = Math.min(100, Math.max(0, 100 - (avgSodium - 1500) / 20));

    const overallScore = Math.round(
      (calorieScore * 0.30) +
      (proteinScore * 0.25) +
      (carbsScore * 0.20) +
      (fatScore * 0.15) +
      (fiberScore * 0.05) +
      (sodiumScore * 0.05)
    );

    let rating;
    if (overallScore >= 90) rating = 'Excellent';
    else if (overallScore >= 75) rating = 'Good';
    else if (overallScore >= 60) rating = 'Fair';
    else if (overallScore >= 40) rating = 'Poor';
    else rating = 'Needs Improvement';

    const recommendations = [];
    if (calorieDiff > 0.15) {
      recommendations.push(avgCalories > targetCalories 
        ? 'Consider reducing portion sizes to match calorie target' 
        : 'Consider increasing portion sizes to meet calorie target');
    }
    if (proteinDiff > 0.20) {
      recommendations.push(avgProtein < targetMacros.protein
        ? 'Increase protein intake for better satiety and muscle maintenance'
        : 'Reduce protein if exceeding goals significantly');
    }
    if (carbsDiff > 0.25) {
      recommendations.push(avgCarbs > targetMacros.carbs
        ? 'Reduce carbohydrate portions for better macro balance'
        : 'Add more complex carbs for energy');
    }
    if (fatDiff > 0.25) {
      recommendations.push(avgFat > targetMacros.fat
        ? 'Reduce added fats and oils in meals'
        : 'Add healthy fats like avocado or olive oil');
    }
    if (avgFiber < 20) {
      recommendations.push('Add more fiber-rich foods like vegetables, legumes, and whole grains');
    }
    if (avgSodium > 2500) {
      recommendations.push('Reduce sodium by using fresh ingredients and limiting processed foods');
    }

    return {
      overallScore,
      rating,
      metrics: {
        calories: {
          target: targetCalories,
          actual: avgCalories,
          score: Math.round(calorieScore),
          difference: Math.round(avgCalories - targetCalories),
          differencePercent: Math.round(calorieDiff * 100)
        },
        protein: {
          target: Math.round(targetMacros.protein),
          actual: avgProtein,
          score: Math.round(proteinScore),
          difference: Math.round(avgProtein - targetMacros.protein),
          differencePercent: Math.round(proteinDiff * 100)
        },
        carbs: {
          target: Math.round(targetMacros.carbs),
          actual: avgCarbs,
          score: Math.round(carbsScore),
          difference: Math.round(avgCarbs - targetMacros.carbs),
          differencePercent: Math.round(carbsDiff * 100)
        },
        fat: {
          target: Math.round(targetMacros.fat),
          actual: avgFat,
          score: Math.round(fatScore),
          difference: Math.round(avgFat - targetMacros.fat),
          differencePercent: Math.round(fatDiff * 100)
        },
        fiber: {
          actual: avgFiber,
          score: Math.round(fiberScore),
          note: avgFiber >= 25 ? 'Good fiber intake' : 'Fiber intake below recommended'
        },
        sodium: {
          actual: avgSodium,
          score: Math.round(sodiumScore),
          note: avgSodium <= 2300 ? 'Sodium within limits' : 'Sodium intake exceeds recommended'
        }
      },
      recommendations
    };
  }

  filterFoodsByRestrictions(preferences, restrictions, excludedFoods) {
    const filtered = {};
    
    for (const [category, foods] of Object.entries(this.foods)) {
      filtered[category] = foods.filter(food => {
        const foodName = food.name.toLowerCase();
        for (const excluded of excludedFoods) {
          if (foodName.includes(excluded)) return false;
        }
        return true;
      });
      
      if (filtered[category].length === 0) {
        filtered[category] = foods;
      }
    }
    
    return filtered;
  }

  generateShoppingList(mealPlan) {
    const aggregated = {};
    
    for (const day of mealPlan.dailyMeals) {
      for (const meal of day.meals) {
        for (const food of meal.foods) {
          const key = food.name.toLowerCase();
          if (!aggregated[key]) {
            aggregated[key] = {
              name: food.name,
              totalGrams: 0,
              totalCalories: 0,
              totalProtein: 0,
              totalCarbs: 0,
              totalFat: 0,
              totalFiber: 0,
              occurrences: 0
            };
          }
          aggregated[key].totalGrams += food.portionGrams;
          aggregated[key].totalCalories += food.calories;
          aggregated[key].totalProtein += food.protein;
          aggregated[key].totalCarbs += food.carbs;
          aggregated[key].totalFat += food.fat;
          aggregated[key].totalFiber += food.fiber;
          aggregated[key].occurrences += 1;
        }
      }
    }

    const categoryMap = this.getFoodCategories();
    const grouped = {
      proteins: [],
      carbohydrates: [],
      vegetables: [],
      fats: [],
      dairy: [],
      snacks: [],
      other: []
    };

    for (const [key, item] of Object.entries(aggregated)) {
      const category = this.categorizeFood(key, categoryMap);
      grouped[category].push({
        name: item.name,
        totalGrams: item.totalGrams,
        totalGramsRounded: Math.round(item.totalGrams / 100) * 100,
        portions: Math.round(item.totalGrams / 100),
        nutrition: {
          calories: item.totalCalories,
          protein: item.totalProtein,
          carbs: item.totalCarbs,
          fat: item.totalFat,
          fiber: item.totalFiber
        },
        mealsIncluded: item.occurrences
      });
    }

    for (const category of Object.keys(grouped)) {
      grouped[category].sort((a, b) => b.totalGrams - a.totalGrams);
    }

    const totals = {
      totalCalories: Object.values(aggregated).reduce((sum, item) => sum + item.totalCalories, 0),
      totalProtein: Object.values(aggregated).reduce((sum, item) => sum + item.totalProtein, 0),
      totalCarbs: Object.values(aggregated).reduce((sum, item) => sum + item.totalCarbs, 0),
      totalFat: Object.values(aggregated).reduce((sum, item) => sum + item.totalFat, 0),
      totalFiber: Object.values(aggregated).reduce((sum, item) => sum + item.totalFiber, 0),
      totalGrams: Object.values(aggregated).reduce((sum, item) => sum + item.totalGrams, 0),
      uniqueItems: Object.keys(aggregated).length
    };

    return {
      weekStartDate: mealPlan.weekStartDate,
      goal: mealPlan.goal,
      categories: grouped,
      totals,
      shoppingTips: [
        'Buy fresh produce for the first 3-4 days',
        'Store grains and proteins properly',
        'Consider freezing portions if needed',
        'Check unit prices for best value'
      ]
    };
  }

  getFoodCategories() {
    const map = {};
    for (const [category, foods] of Object.entries(this.foods)) {
      for (const food of foods) {
        map[food.name.toLowerCase()] = category;
      }
    }
    return map;
  }

  categorizeFood(foodName, categoryMap) {
    const lower = foodName.toLowerCase();
    
    if (categoryMap[lower]) {
      return categoryMap[lower];
    }
    
    for (const [key, category] of Object.entries(categoryMap)) {
      if (lower.includes(key)) {
        return category;
      }
    }
    
    if (lower.includes('pollo') || lower.includes('carne') || lower.includes('huevos') || 
        lower.includes('pescado') || lower.includes('atun') || lower.includes('camaron') ||
        lower.includes('frijol') || lower.includes('lenteja') || lower.includes('queso')) {
      return 'proteins';
    }
    if (lower.includes('arroz') || lower.includes('tortilla') || lower.includes('pan') || 
        lower.includes('pasta') || lower.includes('papa') || lower.includes('platano') ||
        lower.includes('avena')) {
      return 'carbohydrates';
    }
    if (lower.includes('jitomate') || lower.includes('cebolla') || lower.includes('aguacate') ||
        lower.includes('chile') || lower.includes('zanahoria') || lower.includes('brocoli') ||
        lower.includes('espinacas') || lower.includes('lechuga') || lower.includes('calabaza') ||
        lower.includes('ejotes') || lower.includes('champinones') || lower.includes('ajo') ||
        lower.includes('elote') || lower.includes('nopal') || lower.includes('cilantro') ||
        lower.includes('limon') || lower.includes('apio')) {
      return 'vegetables';
    }
    if (lower.includes('aceite') || lower.includes('mantequilla') || lower.includes('crema') ||
        lower.includes('aguacate')) {
      return 'fats';
    }
    if (lower.includes('leche') || lower.includes('yogur')) {
      return 'dairy';
    }
    if (lower.includes('almendra') || lower.includes('nuez') || lower.includes('pistacho') ||
        lower.includes('cacahuate') || lower.includes('frutos secos')) {
      return 'snacks';
    }
    
    return 'other';
  }

  filterTemplatesByRestrictions(preferences, restrictions, excludedFoods) {
    const filtered = {};
    const prefProteins = (preferences.preferredProteins || []).map(p => p.toLowerCase());
    const prefCarbs = (preferences.preferredCarbs || []).map(p => p.toLowerCase());
    const prefVeggies = (preferences.preferredVegetables || []).map(p => p.toLowerCase());
    
    const excludedArray = Array.from(excludedFoods);
    
    const fallbackTemplates = {
      lunch: [
        { name: 'Sopa de Frijol con Arroz', protein: 'frijoles', carb: 'arroz', veg: ['cebolla', 'ajo', 'chile'] },
        { name: 'Enchiladas de Queso', protein: 'queso fresco', carb: 'tortilla de maiz', veg: ['lechuga', 'jitomate'] },
        { name: 'Burrito de Frijoles', protein: 'frijoles', carb: 'tortilla de harina', veg: ['cebolla', 'jitomate'] },
        { name: 'Quesadillas', protein: 'queso oaxaca', carb: 'tortilla de maiz', veg: ['jitomate', 'aguacate'] },
        { name: 'Pasta con Frijoles', protein: 'frijoles', carb: 'pasta', veg: ['jitomate', 'cebolla'] }
      ],
      dinner: [
        { name: 'Ensalada de Frijoles', protein: 'frijoles', carb: 'arroz', veg: ['lechuga', 'jitomate', 'aguacate', 'queso fresco'] },
        { name: 'Tacos de Queso', protein: 'queso fresco', carb: 'tortilla de maiz', veg: ['cebolla', 'cilantro', 'limon'] },
        { name: 'Pasta con Vegetales', protein: 'queso fresco', carb: 'pasta', veg: ['brocoli', 'calabaza', 'ejotes'] },
        { name: 'Arroz con Frijoles', protein: 'frijoles', carb: 'arroz', veg: ['platano', 'aguacate'] },
        { name: 'Sope de Queso', protein: 'queso fresco', carb: 'tortilla de maiz', veg: ['lechuga', 'jitomate'] }
      ]
    };
    
    for (const [mealType, templates] of Object.entries(this.mealTemplates)) {
      const validTemplates = [];
      
      for (const template of templates) {
        let hasExcluded = false;
        const allFoods = [
          template.base, 
          template.protein, 
          template.carb, 
          template.extra, 
          ...(template.additions || []), 
          ...(template.veg || [])
        ];
        
        for (const food of allFoods) {
          if (food) {
            const foodLower = food.toLowerCase();
            for (const excluded of excludedArray) {
              if (foodLower.includes(excluded)) {
                hasExcluded = true;
                break;
              }
            }
          }
          if (hasExcluded) break;
        }
        
        if (!hasExcluded) {
          let score = 0;
          
          if (mealType === 'breakfast') {
            if (prefProteins.some(p => template.base.toLowerCase().includes(p))) score -= 100;
            for (const add of (template.additions || [])) {
              if (prefProteins.some(p => add.toLowerCase().includes(p)) || 
                  prefCarbs.some(p => add.toLowerCase().includes(p))) score -= 50;
            }
          } else {
            if (template.protein && prefProteins.some(p => template.protein.toLowerCase().includes(p))) score -= 100;
            if (template.carb && prefCarbs.some(p => template.carb.toLowerCase().includes(p))) score -= 50;
            for (const veg of (template.veg || [])) {
              if (prefVeggies.some(p => veg.toLowerCase().includes(p))) score -= 25;
            }
          }
          
          validTemplates.push({ ...template, score });
        }
      }
      
      if (validTemplates.length === 0 && fallbackTemplates[mealType]) {
        filtered[mealType] = fallbackTemplates[mealType];
      } else if (validTemplates.length === 0) {
        filtered[mealType] = templates;
      } else {
        filtered[mealType] = validTemplates.sort((a, b) => a.score - b.score);
      }
    }
    
    return filtered;
  }

  getMealTimingsForDay(day) {
    return this.mealTimings;
  }

  createMeal(mealType, dayIndex, targetCalories, targetMacros, goal = 'maintain', filteredTemplates = null, filteredFoods = null, preferences = {}) {
    if (mealType === 'snack1' || mealType === 'snack2') {
      return this.createSnack(mealType, dayIndex, targetCalories, filteredFoods, preferences);
    }

    const templates = filteredTemplates?.[mealType] || this.mealTemplates[mealType];
    const foodsDb = filteredFoods || this.foods;
    const hashIndex = (dayIndex * 3 + mealType.charCodeAt(0)) % templates.length;
    const template = templates[hashIndex];
    
    const foods = [];
    const baseScale = { breakfast: 450, lunch: 700, dinner: 550 };
    const scaleFactor = Math.min(targetCalories / baseScale[mealType], 1.2);
    
    if (mealType === 'breakfast') {
      const eggProtein = this.findFoodFromDb('huevos', 'proteins', foodsDb);
      const proteinPortion = Math.round(100 * scaleFactor);
      foods.push({ name: template.base, portionGrams: proteinPortion, ...this.getFoodNutrients(eggProtein, proteinPortion) });
      
      for (const addition of template.additions.slice(0, 2)) {
        const food = this.findFoodFromDb(addition, 'all', foodsDb);
        let portion;
        if (addition.includes('tortilla')) {
          portion = Math.round(60 * scaleFactor);
        } else if (addition.includes('pan')) {
          portion = Math.round(50 * scaleFactor);
        } else if (addition.includes('leche') || addition.includes('yogur')) {
          portion = Math.round(180 * scaleFactor);
        } else if (addition.includes('platano') || addition.includes('manzana')) {
          portion = Math.round(80 * scaleFactor);
        } else if (addition.includes('aguacate')) {
          portion = Math.round(50 * scaleFactor);
        } else if (food.proteinPer100g > 10) {
          portion = Math.round(50 * scaleFactor);
        } else {
          portion = Math.round(50 * scaleFactor);
        }
        foods.push({ name: food.name, portionGrams: portion, ...this.getFoodNutrients(food, portion) });
      }
    } else {
      const proteinFood = this.findFoodFromDb(template.protein, 'proteins', foodsDb);
      const proteinPortion = Math.round(100 * scaleFactor);
      foods.push({ name: template.protein, portionGrams: proteinPortion, ...this.getFoodNutrients(proteinFood, proteinPortion) });
      
      const carbFood = this.findFoodFromDb(template.carb, 'carbohydrates', foodsDb);
      const carbPortion = Math.round(120 * scaleFactor);
      foods.push({ name: template.carb, portionGrams: carbPortion, ...this.getFoodNutrients(carbFood, carbPortion) });
      
      if (template.extra) {
        const extraFood = this.findFoodFromDb(template.extra, 'all', foodsDb);
        const extraPortion = Math.round(50 * scaleFactor);
        foods.push({ name: template.extra, portionGrams: extraPortion, ...this.getFoodNutrients(extraFood, extraPortion) });
      }
      
      for (const vegName of (template.veg || []).slice(0, 3)) {
        const vegPortion = Math.round(50 * scaleFactor);
        foods.push({ name: vegName, portionGrams: vegPortion, ...this.getFoodNutrients(this.findFoodFromDb(vegName, 'vegetables', foodsDb), vegPortion) });
      }
      
      const fatFood = this.findFoodFromDb('aceite de oliva', 'fats', foodsDb);
      const fatPortion = Math.round(10 * scaleFactor);
      foods.push({ name: 'Aceite de Oliva', portionGrams: Math.max(fatPortion, 5), ...this.getFoodNutrients(fatFood, Math.max(fatPortion, 5)) });
    }

    const totals = foods.reduce((acc, f) => ({
      calories: acc.calories + f.calories,
      protein: acc.protein + f.protein,
      carbs: acc.carbs + f.carbs,
      fat: acc.fat + f.fat,
      fiber: acc.fiber + f.fiber,
      sodium: acc.sodium + f.sodium
    }), { calories: 0, protein: 0, carbs: 0, fat: 0, fiber: 0, sodium: 0 });

    const mealTiming = this.mealTimings[mealType];

    return {
      name: template.name,
      mealType: mealType,
      suggestedTime: mealTiming?.time || '',
      tip: mealTiming?.tip || '',
      foods: foods.map(f => ({ 
        name: f.name, 
        portionGrams: f.portionGrams, 
        calories: f.calories, 
        protein: f.protein, 
        carbs: f.carbs, 
        fat: f.fat,
        fiber: f.fiber,
        sodium: f.sodium
      })),
      totalCalories: totals.calories,
      totalProtein: totals.protein,
      totalCarbs: totals.carbs,
      totalFat: totals.fat,
      totalFiber: totals.fiber,
      totalSodium: totals.sodium
    };
  }

  createSnack(snackType, dayIndex, targetCalories, filteredFoods = null, preferences = {}) {
    const snackTemplates = [
      { name: 'Almendras y Fruta', base: 'almendras', addition: 'platano' },
      { name: 'Yogur con Nueces', base: 'yogur griego', addition: 'nueces' },
      { name: 'Manzana con Mantequilla de Mani', base: 'manzana', addition: 'cacahuates' },
      { name: 'Queso con Pan', base: 'queso fresco', addition: 'pan integral' },
      { name: 'Batido de Proteina', base: 'leche descremada', addition: 'platano' },
      { name: 'Verduras con Queso', base: 'brocoli', addition: 'queso fresco' },
      { name: 'Pistachos y Fruta', base: 'pistachos', addition: 'manzana' },
      { name: 'Yogur con Platano', base: 'yogur natural', addition: 'platano' }
    ];
    
    const foodsDb = filteredFoods || this.foods;
    const hashIndex = (dayIndex * 2 + (snackType === 'snack1' ? 1 : 2)) % snackTemplates.length;
    const template = snackTemplates[hashIndex];
    
    const scaleFactor = Math.min(targetCalories / 180, 1.3);
    const foods = [];
    
    const baseFood = this.findFoodFromDb(template.base, 'all', foodsDb);
    const basePortion = Math.round(35 * scaleFactor);
    foods.push({ name: baseFood.name, portionGrams: basePortion, ...this.getFoodNutrients(baseFood, basePortion) });
    
    if (template.addition) {
      const addFood = this.findFoodFromDb(template.addition, 'all', foodsDb);
      const addPortion = Math.round(35 * scaleFactor);
      foods.push({ name: addFood.name, portionGrams: addPortion, ...this.getFoodNutrients(addFood, addPortion) });
    }
    
    const totals = foods.reduce((acc, f) => ({
      calories: acc.calories + f.calories,
      protein: acc.protein + f.protein,
      carbs: acc.carbs + f.carbs,
      fat: acc.fat + f.fat,
      fiber: acc.fiber + f.fiber,
      sodium: acc.sodium + f.sodium
    }), { calories: 0, protein: 0, carbs: 0, fat: 0, fiber: 0, sodium: 0 });

    const mealTiming = this.mealTimings[snackType];

    return {
      name: template.name,
      mealType: snackType,
      suggestedTime: mealTiming?.time || '',
      tip: mealTiming?.tip || '',
      foods: foods.map(f => ({ 
        name: f.name, 
        portionGrams: f.portionGrams, 
        calories: f.calories, 
        protein: f.protein, 
        carbs: f.carbs, 
        fat: f.fat,
        fiber: f.fiber,
        sodium: f.sodium
      })),
      totalCalories: totals.calories,
      totalProtein: totals.protein,
      totalCarbs: totals.carbs,
      totalFat: totals.fat,
      totalFiber: totals.fiber,
      totalSodium: totals.sodium
    };
  }

  findFoodFromDb(name, category, foodsDb) {
    const searchName = name.toLowerCase();
    
    if (category === 'all') {
      for (const foods of Object.values(foodsDb)) {
        const found = foods.find(f => f.name.toLowerCase().includes(searchName));
        if (found) return found;
      }
    } else {
      const found = foodsDb[category]?.find(f => f.name.toLowerCase().includes(searchName));
      if (found) return found;
    }
    
    return foodsDb.proteins[0];
  }

  getFoodNutrients(food, portionGrams) {
    return {
      calories: Math.round((food.caloriesPer100g * portionGrams) / 100),
      protein: Math.round((food.proteinPer100g * portionGrams) / 100),
      carbs: Math.round((food.carbsPer100g * portionGrams) / 100),
      fat: Math.round((food.fatPer100g * portionGrams) / 100),
      fiber: Math.round((food.fiberPer100g || 0) * portionGrams / 100),
      sodium: Math.round((food.sodiumPer100g || 0) * portionGrams / 100)
    };
  }

  findFood(name, category) {
    const searchName = name.toLowerCase();
    
    if (category === 'all') {
      for (const foods of Object.values(this.foods)) {
        const found = foods.find(f => f.name.toLowerCase().includes(searchName));
        if (found) return found;
      }
    } else {
      const found = this.foods[category]?.find(f => f.name.toLowerCase().includes(searchName));
      if (found) return found;
    }
    
    return this.foods.proteins[0];
  }

  scalePortion(food, targetCalories) {
    if (food.caloriesPer100g === 0) return 100;
    return Math.round((targetCalories / food.caloriesPer100g) * 100);
  }

  calculatePortion(food, targetMacro) {
    const caloriesFromCarbs = targetMacro.carbs * 4;
    const caloriesFromProtein = targetMacro.protein * 4;
    const caloriesFromFat = targetMacro.fat * 9;
    const totalTargetCalories = caloriesFromCarbs + caloriesFromProtein + caloriesFromFat;
    
    if (food.proteinPer100g > 5) {
      return Math.round((targetMacro.protein * 100) / food.proteinPer100g);
    } else if (food.carbsPer100g > 10) {
      return Math.round((targetMacro.carbs * 100) / food.carbsPer100g);
    } else if (food.fatPer100g > 5) {
      return Math.round((targetMacro.fat * 100) / food.fatPer100g);
    }
    return Math.round((totalTargetCalories / food.caloriesPer100g) * 100);
  }

  createFoodItem(food, portionGrams) {
    return {
      name: food.name,
      portionGrams,
      calories: Math.round((food.caloriesPer100g * portionGrams) / 100),
      protein: Math.round((food.proteinPer100g * portionGrams) / 100),
      carbs: Math.round((food.carbsPer100g * portionGrams) / 100),
      fat: Math.round((food.fatPer100g * portionGrams) / 100),
      fiber: Math.round((food.fiberPer100g || 0) * portionGrams / 100),
      sodium: Math.round((food.sodiumPer100g || 0) * portionGrams / 100)
    };
  }
}

module.exports = MealPlanServiceImpl;
