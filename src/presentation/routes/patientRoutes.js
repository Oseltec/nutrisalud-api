const express = require('express');
const PatientController = require('../controllers/PatientController');
const authenticateToken = require('../../infrastructure/middleware/authMiddleware');

function patientRoutes(patientController) {
  const router = express.Router();

  router.post('/', (req, res) => patientController.create(req, res));
  router.get('/', (req, res) => patientController.list(req, res));
  router.get('/search', (req, res) => patientController.search(req, res));
  router.get('/:id', (req, res) => patientController.getById(req, res));
  router.put('/:id', (req, res) => patientController.update(req, res));
  router.delete('/:id', (req, res) => patientController.delete(req, res));
  
  router.put('/:id/clinical-history', (req, res) => patientController.updateHistory(req, res));
  router.post('/:id/clinical-studies', (req, res) => patientController.addStudy(req, res));
  router.delete('/:id/clinical-studies/:studyId', (req, res) => patientController.removeStudy(req, res));
  router.put('/:id/anthropometric', (req, res) => patientController.updateAnthropometric(req, res));
  router.post('/:id/labs', (req, res) => patientController.addLab(req, res));
  router.post('/:id/diagnostics', (req, res) => patientController.addDiagnostic(req, res));

  return router;
}

module.exports = patientRoutes;
