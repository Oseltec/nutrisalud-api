class UpdateClinicalHistory {
  constructor(patientRepository) {
    this.patientRepository = patientRepository;
  }

  async execute(patientId, historyData) {
    const patient = await this.patientRepository.findById(patientId);
    if (!patient) {
      throw new Error('Patient not found');
    }

    const updateData = {};
    
    if (historyData.service) updateData.service = historyData.service;
    if (historyData.identification) updateData.identification = historyData.identification;
    if (historyData.familyHistory) updateData.familyHistory = historyData.familyHistory;
    if (historyData.nonPathologicalHistory) updateData.nonPathologicalHistory = historyData.nonPathologicalHistory;
    if (historyData.pathologicalHistory) updateData.pathologicalHistory = historyData.pathologicalHistory;
    if (historyData.currentCondition !== undefined) updateData.currentCondition = historyData.currentCondition;
    if (historyData.systemsReview) updateData.systemsReview = historyData.systemsReview;
    if (historyData.physicalExam) updateData.physicalExam = historyData.physicalExam;
    if (historyData.previousTreatment) updateData.previousTreatment = historyData.previousTreatment;
    if (historyData.caseAnalysis !== undefined) updateData.caseAnalysis = historyData.caseAnalysis;

    const updatedPatient = await this.patientRepository.update(patientId, updateData);
    return updatedPatient.toJSON();
  }
}

module.exports = UpdateClinicalHistory;
