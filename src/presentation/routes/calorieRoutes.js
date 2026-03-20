const express = require('express');
const router = express.Router();
const authenticateToken = require('../../infrastructure/middleware/authMiddleware');

module.exports = (calorieController) => {
  router.post('/calculate', authenticateToken, (req, res) => calorieController.calculate(req, res));
  return router;
};
