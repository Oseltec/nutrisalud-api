const express = require('express');
const router = express.Router();

module.exports = (userController) => {
  router.post('/', userController.create.bind(userController));
  router.get('/:id', userController.getById.bind(userController));
  router.put('/:id', userController.update.bind(userController));
  return router;
};
