class ListPatients {
  constructor(patientRepository) {
    this.patientRepository = patientRepository;
  }

  async execute(filters = {}) {
    const patients = await this.patientRepository.findAll(filters);
    return patients.map(p => p.toSummary());
  }
}

module.exports = ListPatients;
