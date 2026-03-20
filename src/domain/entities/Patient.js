const crypto = require('crypto');

class Patient {
  constructor({
    id = null,
    service = {},
    identification = {},
    familyHistory = {},
    nonPathologicalHistory = {},
    pathologicalHistory = {},
    currentCondition = '',
    systemsReview = {},
    physicalExam = {},
    labs = [],
    previousTreatment = {},
    diagnosticImpression = [],
    treatment = {},
    caseAnalysis = '',
    clinicalStudies = [],
    anthropometricData = {},
    createdAt = null,
    updatedAt = null
  }) {
    this.id = id || crypto.randomUUID();
    this.service = {
      date: null,
      hour: null,
      type: 'general',
      interviewType: 'direct',
      ...service
    };
    this.identification = {
      firstName: '',
      lastName: '',
      age: null,
      sex: null,
      nationality: '',
      religion: '',
      education: '',
      civilStatus: '',
      address: '',
      placeOfOrigin: '',
      placeOfResidence: '',
      phone: '',
      email: '',
      emergencyContact: '',
      emergencyPhone: '',
      ...identification
    };
    this.familyHistory = {
      mother: '',
      father: '',
      paternalGrandparents: '',
      maternalGrandparents: '',
      siblings: '',
      notes: '',
      ...familyHistory
    };
    this.nonPathologicalHistory = {
      housing: '',
      hygieneHabits: '',
      dietaryHabits: '',
      sleepHabits: '',
      exerciseHabits: '',
      toxicHabits: {
        alcoholism: false,
        smoking: false,
        otherDrugs: ''
      },
      andrologicalHistory: '',
      gynecologicalHistory: {
        menarche: '',
        menstrualRhythm: '',
        firstSexualContact: '',
        numberOfPartners: '',
        contraceptiveMethod: '',
        stdHistory: '',
        fum: '',
        doc: '',
        climacterium: '',
        menopause: '',
        gestas: '',
        births: '',
        cesareans: '',
        abortions: '',
        gynecologicalSurgeries: ''
      },
      ...nonPathologicalHistory
    };
    this.pathologicalHistory = {
      previousIllnesses: [],
      traumaticHistory: [],
      allergies: [],
      transfusions: [],
      surgeries: [],
      currentMedications: [],
      notes: '',
      ...pathologicalHistory
    };
    this.currentCondition = currentCondition || '';
    this.systemsReview = {
      digestive: '',
      cardiovascular: '',
      respiratory: '',
      genitourinary: '',
      senses: '',
      musculoskeletal: '',
      skin: '',
      endocrine: '',
      nervous: '',
      psychic: '',
      ...systemsReview
    };
    this.physicalExam = {
      weight: null,
      height: null,
      pc: null,
      fc: null,
      fr: null,
      temperature: null,
      generalInspection: '',
      skinAndAppendages: '',
      hair: '',
      nails: '',
      head: '',
      neck: '',
      chest: '',
      abdomen: '',
      genitals: '',
      anorectal: '',
      upperExtremities: '',
      lowerExtremities: '',
      spine: '',
      peripheralVascular: '',
      psychologicalSphere: '',
      autonomicPhenomena: {
        dryAreas: '',
        hypersweatingAreas: '',
        uniformTemperature: true
      },
      ...physicalExam
    };
    this.labs = labs || [];
    this.previousTreatment = {
      treatment: '',
      results: '',
      ...previousTreatment
    };
    this.diagnosticImpression = diagnosticImpression || [];
    this.treatment = {
      indications: '',
      dietPlan: '',
      followUp: '',
      ...treatment
    };
    this.caseAnalysis = caseAnalysis || '';
    this.clinicalStudies = clinicalStudies || [];
    this.anthropometricData = {
      weight: null,
      height: null,
      bmi: null,
      bodyFatPercentage: null,
      waistCircumference: null,
      hipCircumference: null,
      imc: null,
      ...anthropometricData
    };
    this.createdAt = createdAt || new Date();
    this.updatedAt = updatedAt || new Date();
  }

  static GENDERS = ['male', 'female', 'other'];
  static SEX_OPTIONS = ['M', 'F', 'N'];
  static CIVIL_STATUS = ['single', 'married', 'divorced', 'widowed', 'cohabiting'];
  static INTERVIEW_TYPES = ['direct', 'indirect'];

  static create(data) {
    const patient = new Patient(data);
    return patient;
  }

  static validateIdentification(data) {
    const errors = [];
    if (!data.firstName) {
      errors.push('First name is required');
    }
    if (!data.lastName) {
      errors.push('Last name is required');
    }
    return errors;
  }

  addLab(labData) {
    const lab = {
      id: crypto.randomUUID(),
      date: labData.date || new Date().toISOString(),
      name: labData.name || '',
      results: labData.results || {},
      observations: labData.observations || '',
      createdAt: new Date()
    };
    this.labs.push(lab);
    this.updatedAt = new Date();
    return lab;
  }

  addDiagnostic(diagnostic) {
    const diag = {
      id: crypto.randomUUID(),
      code: diagnostic.code || '',
      description: diagnostic.description || '',
      type: diagnostic.type || 'primary',
      createdAt: new Date()
    };
    this.diagnosticImpression.push(diag);
    this.updatedAt = new Date();
    return diag;
  }

  addClinicalStudy(study) {
    const newStudy = {
      id: crypto.randomUUID(),
      date: new Date(),
      type: study.type || 'general',
      name: study.name || 'Clinical Study',
      results: study.results || {},
      attachments: study.attachments || [],
      notes: study.notes || '',
      createdAt: new Date()
    };
    this.clinicalStudies.push(newStudy);
    this.updatedAt = new Date();
    return newStudy;
  }

  removeClinicalStudy(studyId) {
    const index = this.clinicalStudies.findIndex(s => s.id === studyId);
    if (index === -1) {
      throw new Error('Clinical study not found');
    }
    this.clinicalStudies.splice(index, 1);
    this.updatedAt = new Date();
    return true;
  }

  updateAnthropometricData(data) {
    this.anthropometricData = { ...this.anthropometricData, ...data };
    this.physicalExam.weight = data.weight || this.physicalExam.weight;
    this.physicalExam.height = data.height || this.physicalExam.height;
    
    if (this.anthropometricData.weight && this.anthropometricData.height) {
      const heightM = this.anthropometricData.height / 100;
      this.anthropometricData.bmi = (
        this.anthropometricData.weight / (heightM * heightM)
      ).toFixed(2);
      this.physicalExam.pc = this.anthropometricData.bmi;
    }
    
    this.updatedAt = new Date();
    return this.anthropometricData;
  }

  getFullName() {
    return `${this.identification.firstName} ${this.identification.lastName}`.trim();
  }

  getAge() {
    if (!this.identification.age) return null;
    return this.identification.age;
  }

  toJSON() {
    return {
      id: this.id,
      service: this.service,
      identification: this.identification,
      familyHistory: this.familyHistory,
      nonPathologicalHistory: this.nonPathologicalHistory,
      pathologicalHistory: this.pathologicalHistory,
      currentCondition: this.currentCondition,
      systemsReview: this.systemsReview,
      physicalExam: this.physicalExam,
      labs: this.labs,
      previousTreatment: this.previousTreatment,
      diagnosticImpression: this.diagnosticImpression,
      treatment: this.treatment,
      caseAnalysis: this.caseAnalysis,
      clinicalStudies: this.clinicalStudies,
      anthropometricData: this.anthropometricData,
      age: this.getAge(),
      fullName: this.getFullName(),
      createdAt: this.createdAt.toISOString(),
      updatedAt: this.updatedAt.toISOString()
    };
  }

  toSummary() {
    return {
      id: this.id,
      fullName: this.getFullName(),
      age: this.getAge(),
      sex: this.identification.sex,
      serviceDate: this.service.date,
      lastVisit: this.updatedAt.toISOString()
    };
  }
}

module.exports = Patient;
