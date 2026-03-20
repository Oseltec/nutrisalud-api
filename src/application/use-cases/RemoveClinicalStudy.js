class RemoveClinicalStudy {
  constructor(patientRepository) {
    this.patientRepository = patientRepository;
  }

  async execute(patientId, studyId) {
    const patient = await this.patientRepository.findById(patientId);
    if (!patient) {
      throw new Error('Patient not found');
    }

    patient.removeClinicalStudy(studyId);
    await this.patientRepository.update(patientId, { clinicalStudies: patient.clinicalStudies });
    
    return { success: true, message: 'Clinical study removed successfully' };
  }
}

module.exports = RemoveClinicalStudy;
