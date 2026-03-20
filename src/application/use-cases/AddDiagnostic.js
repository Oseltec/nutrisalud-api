class AddDiagnostic {
  constructor(patientRepository) {
    this.patientRepository = patientRepository;
  }

  async execute(patientId, diagnosticData) {
    const patient = await this.patientRepository.findById(patientId);
    if (!patient) {
      throw new Error('Patient not found');
    }

    const diagnostic = patient.addDiagnostic(diagnosticData);
    await this.patientRepository.update(patientId, { diagnosticImpression: patient.diagnosticImpression });
    
    return diagnostic;
  }
}

module.exports = AddDiagnostic;
