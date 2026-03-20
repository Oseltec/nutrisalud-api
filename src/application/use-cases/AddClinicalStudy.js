class AddClinicalStudy {
  constructor(patientRepository) {
    this.patientRepository = patientRepository;
  }

  async execute(patientId, studyData) {
    const patient = await this.patientRepository.findById(patientId);
    if (!patient) {
      throw new Error('Patient not found');
    }

    const study = patient.addClinicalStudy(studyData);
    await this.patientRepository.update(patientId, { clinicalStudies: patient.clinicalStudies });
    
    return study;
  }
}

module.exports = AddClinicalStudy;
