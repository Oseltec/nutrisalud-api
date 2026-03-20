const express = require('express');
const router = express.Router();
const authenticateToken = require('../../infrastructure/middleware/authMiddleware');

module.exports = (mealPlanController) => {
  router.post('/generate', authenticateToken, (req, res) => mealPlanController.generate(req, res));
  return router;
};
