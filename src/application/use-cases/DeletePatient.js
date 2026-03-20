class DeletePatient {
  constructor(patientRepository) {
    this.patientRepository = patientRepository;
  }

  async execute(id) {
    const deleted = await this.patientRepository.delete(id);
    if (!deleted) {
      throw new Error('Patient not found');
    }
    return { success: true, message: 'Patient deleted successfully' };
  }
}

module.exports = DeletePatient;
