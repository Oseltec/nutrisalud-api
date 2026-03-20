const express = require('express');
const ShoppingListController = require('../controllers/ShoppingListController');
const authenticateToken = require('../../infrastructure/middleware/authMiddleware');

function createShoppingListRouter(generateShoppingList) {
  const router = express.Router();
  const controller = new ShoppingListController(generateShoppingList);

  router.post('/generate', authenticateToken, (req, res) => controller.generate(req, res));

  return router;
}

module.exports = createShoppingListRouter;
