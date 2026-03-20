class PatientController {
  constructor(
    createPatient,
    getPatient,
    listPatients,
    updatePatient,
    deletePatient,
    searchPatients,
    addClinicalStudy,
    removeClinicalStudy,
    updateAnthropometricData,
    addLab,
    addDiagnostic,
    updateClinicalHistory
  ) {
    this.createPatient = createPatient;
    this.getPatient = getPatient;
    this.listPatients = listPatients;
    this.updatePatient = updatePatient;
    this.deletePatient = deletePatient;
    this.searchPatients = searchPatients;
    this.addClinicalStudy = addClinicalStudy;
    this.removeClinicalStudy = removeClinicalStudy;
    this.updateAnthropometricData = updateAnthropometricData;
    this.addLab = addLab;
    this.addDiagnostic = addDiagnostic;
    this.updateClinicalHistory = updateClinicalHistory;
  }

  async create(req, res) {
    try {
      const patient = await this.createPatient.execute(req.body);
      res.status(201).json(patient);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async getById(req, res) {
    try {
      const includeDetails = req.query.details === 'true';
      const patient = await this.getPatient.execute(req.params.id, includeDetails);
      res.json(patient);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  async list(req, res) {
    try {
      const filters = {
        sex: req.query.sex,
        minAge: req.query.minAge ? parseInt(req.query.minAge) : undefined,
        maxAge: req.query.maxAge ? parseInt(req.query.maxAge) : undefined,
        serviceDate: req.query.serviceDate
      };
      const patients = await this.listPatients.execute(filters);
      res.json(patients);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async update(req, res) {
    try {
      const patient = await this.updatePatient.execute(req.params.id, req.body);
      res.json(patient);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  async delete(req, res) {
    try {
      const result = await this.deletePatient.execute(req.params.id);
      res.json(result);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  async search(req, res) {
    try {
      const patients = await this.searchPatients.execute(req.query.q || '');
      res.json(patients);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async addStudy(req, res) {
    try {
      const study = await this.addClinicalStudy.execute(req.params.id, req.body);
      res.status(201).json(study);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  async removeStudy(req, res) {
    try {
      const result = await this.removeClinicalStudy.execute(req.params.id, req.params.studyId);
      res.json(result);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  async updateAnthropometric(req, res) {
    try {
      const data = await this.updateAnthropometricData.execute(req.params.id, req.body);
      res.json(data);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  async addLab(req, res) {
    try {
      const lab = await this.addLab.execute(req.params.id, req.body);
      res.status(201).json(lab);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  async addDiagnostic(req, res) {
    try {
      const diagnostic = await this.addDiagnostic.execute(req.params.id, req.body);
      res.status(201).json(diagnostic);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  async updateHistory(req, res) {
    try {
      const patient = await this.updateClinicalHistory.execute(req.params.id, req.body);
      res.json(patient);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }
}

module.exports = PatientController;
