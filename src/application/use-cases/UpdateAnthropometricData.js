class UpdateAnthropometricData {
  constructor(patientRepository) {
    this.patientRepository = patientRepository;
  }

  async execute(patientId, data) {
    const patient = await this.patientRepository.findById(patientId);
    if (!patient) {
      throw new Error('Patient not found');
    }

    const anthropometricData = patient.updateAnthropometricData(data);
    await this.patientRepository.update(patientId, { anthropometricData });
    
    return anthropometricData;
  }
}

module.exports = UpdateAnthropometricData;
