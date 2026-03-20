const express = require('express');
const AuthController = require('../controllers/AuthController');

function authRoutes(authController) {
  const router = express.Router();

  router.post('/register', (req, res) => authController.registerUser(req, res));
  router.post('/login', (req, res) => authController.loginUser(req, res));

  return router;
}

module.exports = authRoutes;
