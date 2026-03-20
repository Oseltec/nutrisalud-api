class UpdatePatient {
  constructor(patientRepository) {
    this.patientRepository = patientRepository;
  }

  async execute(id, data) {
    const patient = await this.patientRepository.findById(id);
    if (!patient) {
      throw new Error('Patient not found');
    }

    const updatedPatient = await this.patientRepository.update(id, data);
    return updatedPatient.toJSON();
  }
}

module.exports = UpdatePatient;
