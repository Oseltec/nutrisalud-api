const Patient = require('../../domain/entities/Patient');

class CreatePatient {
  constructor(patientRepository) {
    this.patientRepository = patientRepository;
  }

  async execute(data) {
    const errors = Patient.validateIdentification(data.identification || {});
    if (errors.length > 0) {
      throw new Error(`Validation failed: ${errors.join(', ')}`);
    }

    const patient = Patient.create(data);
    await this.patientRepository.create(patient);
    return patient.toJSON();
  }
}

module.exports = CreatePatient;
