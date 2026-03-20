const express = require('express');
const cors = require('cors');

const InMemoryUserRepository = require('./infrastructure/repositories/InMemoryUserRepository');
const InMemoryAuthRepository = require('./infrastructure/repositories/InMemoryAuthRepository');
const InMemoryPatientRepository = require('./infrastructure/repositories/InMemoryPatientRepository');
const MealPlanServiceImpl = require('./infrastructure/services/MealPlanService');
const authenticateToken = require('./infrastructure/middleware/authMiddleware');

const CreateUser = require('./application/use-cases/CreateUser');
const GetUser = require('./application/use-cases/GetUser');
const UpdateUser = require('./application/use-cases/UpdateUser');
const CalculateCalories = require('./application/use-cases/CalculateCalories');
const GenerateMealPlan = require('./application/use-cases/GenerateMealPlan');
const GenerateShoppingList = require('./application/use-cases/GenerateShoppingList');
const Register = require('./application/use-cases/Register');
const Login = require('./application/use-cases/Login');
const CreatePatient = require('./application/use-cases/CreatePatient');
const GetPatient = require('./application/use-cases/GetPatient');
const ListPatients = require('./application/use-cases/ListPatients');
const UpdatePatient = require('./application/use-cases/UpdatePatient');
const DeletePatient = require('./application/use-cases/DeletePatient');
const SearchPatients = require('./application/use-cases/SearchPatients');
const AddClinicalStudy = require('./application/use-cases/AddClinicalStudy');
const RemoveClinicalStudy = require('./application/use-cases/RemoveClinicalStudy');
const UpdateAnthropometricData = require('./application/use-cases/UpdateAnthropometricData');
const AddLab = require('./application/use-cases/AddLab');
const AddDiagnostic = require('./application/use-cases/AddDiagnostic');
const UpdateClinicalHistory = require('./application/use-cases/UpdateClinicalHistory');

const UserController = require('./presentation/controllers/UserController');
const CalorieController = require('./presentation/controllers/CalorieController');
const MealPlanController = require('./presentation/controllers/MealPlanController');
const AuthController = require('./presentation/controllers/AuthController');
const PatientController = require('./presentation/controllers/PatientController');

const userRoutes = require('./presentation/routes/userRoutes');
const calorieRoutes = require('./presentation/routes/calorieRoutes');
const mealPlanRoutes = require('./presentation/routes/mealPlanRoutes');
const shoppingListRoutes = require('./presentation/routes/shoppingListRoutes');
const authRoutes = require('./presentation/routes/authRoutes');
const patientRoutes = require('./presentation/routes/patientRoutes');

const app = express();
app.use(cors({ origin: '*' }));
app.use(express.json());

const userRepository = new InMemoryUserRepository();
const authRepository = new InMemoryAuthRepository();
const patientRepository = new InMemoryPatientRepository();
const mealPlanService = new MealPlanServiceImpl();

const createUser = new CreateUser(userRepository);
const getUser = new GetUser(userRepository);
const updateUser = new UpdateUser(userRepository);
const calculateCalories = new CalculateCalories(userRepository);
const generateMealPlan = new GenerateMealPlan(userRepository, mealPlanService);
const generateShoppingList = new GenerateShoppingList(generateMealPlan, mealPlanService);
const register = new Register(authRepository);
const login = new Login(authRepository);
const createPatient = new CreatePatient(patientRepository);
const getPatient = new GetPatient(patientRepository);
const listPatients = new ListPatients(patientRepository);
const updatePatient = new UpdatePatient(patientRepository);
const deletePatient = new DeletePatient(patientRepository);
const searchPatients = new SearchPatients(patientRepository);
const addClinicalStudy = new AddClinicalStudy(patientRepository);
const removeClinicalStudy = new RemoveClinicalStudy(patientRepository);
const updateAnthropometricData = new UpdateAnthropometricData(patientRepository);
const addLab = new AddLab(patientRepository);
const addDiagnostic = new AddDiagnostic(patientRepository);
const updateClinicalHistory = new UpdateClinicalHistory(patientRepository);

const userController = new UserController(createUser, getUser, updateUser);
const calorieController = new CalorieController(calculateCalories);
const mealPlanController = new MealPlanController(generateMealPlan);
const authController = new AuthController(register, login);
const patientController = new PatientController(
  createPatient, getPatient, listPatients, updatePatient, deletePatient,
  searchPatients, addClinicalStudy, removeClinicalStudy, updateAnthropometricData,
  addLab, addDiagnostic, updateClinicalHistory
);

app.use('/api/auth', authRoutes(authController));
app.use('/api/users', userRoutes(userController));
app.use('/api/calories', calorieRoutes(calorieController));
app.use('/api/meal-plans', mealPlanRoutes(mealPlanController));
app.use('/api/shopping-list', shoppingListRoutes(generateShoppingList));
app.use('/api/patients', authenticateToken, patientRoutes(patientController));

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

const HOST = process.env.HOST || '0.0.0.0';
const PORT = process.env.PORT || 3000;

if (require.main === module) {
  app.listen(PORT, HOST, () => {
    console.log(`Nutrition API running on http://${HOST}:${PORT}`);
  });
}

module.exports = app;
