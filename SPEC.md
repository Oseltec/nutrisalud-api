# Nutrition App API Specification

## 1. Project Overview

- **Project Name**: Nutrition API
- **Type**: RESTful Backend API
- **Core Functionality**: Provides user management, daily calorie calculation, and weekly meal plan generation for a nutrition tracking application
- **Target Users**: Mobile/Web nutrition apps, fitness enthusiasts

## 2. Technology Stack

- **Runtime**: Node.js 18+
- **Framework**: Express.js
- **Language**: TypeScript
- **Architecture**: Clean Architecture (Domain, Application, Infrastructure, Presentation)

## 3. Data Models

### User Entity
```typescript
interface User {
  id: string;
  name: string;
  age: number;           // years
  weight: number;        // kg
  height: number;        // cm
  goal: 'lose_weight' | 'maintain' | 'gain_weight';
  createdAt: Date;
}
```

## 4. API Endpoints

### 4.1 User Management

#### Create User
- **POST** `/api/users`
- **Request Body**:
  ```json
  {
    "name": "string",
    "age": "number",
    "weight": "number",
    "height": "number",
    "goal": "lose_weight" | "maintain" | "gain_weight"
  }
  ```
- **Response**: Created user object with generated ID

#### Get User
- **GET** `/api/users/:id`
- **Response**: User object

#### Update User
- **PUT** `/api/users/:id`
- **Request Body**: Partial user data
- **Response**: Updated user object

### 4.2 Calorie Calculation

#### Calculate Daily Calories
- **POST** `/api/calories/calculate`
- **Request Body**:
  ```json
  {
    "userId": "string"
  }
  ```
- **Response**:
  ```json
  {
    "bmr": "number",
    "tdee": "number",
    "dailyCalories": "number",
    "macros": {
      "protein": "number",
      "carbs": "number",
      "fat": "number"
    }
  }
  ```

**Calorie Calculation Formula**:
- BMR (Mifflin-St Jeor):
  - Male: (10 × weight in kg) + (6.25 × height in cm) - (5 × age in years) + 5
  - Female: (10 × weight in kg) + (6.25 × height in cm) - (5 × age in years) - 161
- TDEE = BMR × Activity Factor (default 1.2 - sedentary)
- Daily Calories based on goal:
  - lose_weight: TDEE - 500
  - maintain: TDEE
  - gain_weight: TDEE + 500

**Macros** (based on daily calories):
- Protein: 30% of daily calories
- Carbs: 40% of daily calories
- Fat: 30% of daily calories

### 4.3 Meal Plan Generation

#### Generate Weekly Meal Plan
- **POST** `/api/meal-plans/generate`
- **Request Body**:
  ```json
  {
    "userId": "string"
  }
  ```
- **Response**:
  ```json
  {
    "weekStartDate": "string",
    "dailyMeals": [
      {
        "day": "Monday",
        "meals": [
          {
            "name": "Breakfast",
            "foods": [
              { "name": "string", "calories": "number", "protein": "number", "carbs": "number", "fat": "number" }
            ],
            "totalCalories": "number"
          },
          { "name": "Lunch", ... },
          { "name": "Dinner", ... },
          { "name": "Snack", ... }
        ]
      }
    ],
    "weeklyTotals": {
      "totalCalories": "number",
      "avgDailyCalories": "number"
    }
  }
  ```

**Meal Distribution** (% of daily calories):
- Breakfast: 25%
- Lunch: 35%
- Dinner: 30%
- Snack: 10%

**Food Database** (sample meals):
- Breakfast options: Oatmeal, Eggs, Greek Yogurt, Toast, Smoothie
- Lunch options: Chicken Salad, Quinoa Bowl, Sandwich, Soup
- Dinner options: Grilled Salmon, Stir Fry, Pasta, Steak
- Snack options: Nuts, Fruit, Protein Bar, Cheese

## 5. Clean Architecture Structure

```
src/
├── domain/                    # Enterprise Business Rules
│   ├── entities/
│   │   └── User.ts
│   └── value-objects/
│       └── CalorieResult.ts
├── application/               # Application Business Rules
│   ├── use-cases/
│   │   ├── CreateUser.ts
│   │   ├── GetUser.ts
│   │   ├── CalculateCalories.ts
│   │   └── GenerateMealPlan.ts
│   └── interfaces/
│       ├── UserRepository.ts
│       └── MealPlanService.ts
├── infrastructure/            # Frameworks & Drivers
│   ├── repositories/
│   │   └── InMemoryUserRepository.ts
│   └── services/
│       └── MealPlanService.ts
└── presentation/              # Interface Adapters
    ├── controllers/
    │   ├── UserController.ts
    │   ├── CalorieController.ts
    │   └── MealPlanController.ts
    ├── routes/
    │   ├── userRoutes.ts
    │   ├── calorieRoutes.ts
    │   └── mealPlanRoutes.ts
    └── app.ts
```

## 6. Acceptance Criteria

1. **User CRUD**: Users can be created, retrieved, and updated via API
2. **Calorie Calculation**: Returns accurate BMR, TDEE, and goal-adjusted daily calories with macros
3. **Meal Plan**: Generates 7-day meal plan with varied meals matching calorie targets
4. **Error Handling**: Proper HTTP status codes and error messages
5. **Validation**: Input validation for all endpoints
6. **Code Quality**: TypeScript with no type errors, clean folder structure
