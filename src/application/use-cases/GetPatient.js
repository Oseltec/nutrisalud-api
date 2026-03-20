class GetPatient {
  constructor(patientRepository) {
    this.patientRepository = patientRepository;
  }

  async execute(id, includeDetails = false) {
    const patient = await this.patientRepository.findById(id);
    if (!patient) {
      throw new Error('Patient not found');
    }
    
    if (includeDetails) {
      return patient.toJSON();
    }
    return patient.toSummary();
  }
}

module.exports = GetPatient;
