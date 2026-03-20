class SearchPatients {
  constructor(patientRepository) {
    this.patientRepository = patientRepository;
  }

  async execute(query) {
    const patients = await this.patientRepository.search(query);
    return patients.map(p => p.toSummary());
  }
}

module.exports = SearchPatients;
