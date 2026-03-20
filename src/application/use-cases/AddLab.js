class AddLab {
  constructor(patientRepository) {
    this.patientRepository = patientRepository;
  }

  async execute(patientId, labData) {
    const patient = await this.patientRepository.findById(patientId);
    if (!patient) {
      throw new Error('Patient not found');
    }

    const lab = patient.addLab(labData);
    await this.patientRepository.update(patientId, { labs: patient.labs });
    
    return lab;
  }
}

module.exports = AddLab;
