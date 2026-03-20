const Patient = require('../../domain/entities/Patient');

class InMemoryPatientRepository {
  constructor() {
    this.patients = new Map();
    this.curpIndex = new Map();
    this.nameIndex = new Map();
  }

  async create(patient) {
    const patientData = patient.toJSON();
    this.patients.set(patient.id, patient);
    
    if (patient.identification.curp) {
      this.curpIndex.set(patient.identification.curp, patient.id);
    }
    
    const fullName = patient.getFullName().toLowerCase();
    if (fullName) {
      const names = this.nameIndex.get(fullName) || [];
      names.push(patient.id);
      this.nameIndex.set(fullName, names);
    }
    
    return patient;
  }

  async findById(id) {
    return this.patients.get(id) || null;
  }

  async findAll(filters = {}) {
    let results = Array.from(this.patients.values());
    
    if (filters.sex) {
      results = results.filter(p => p.identification.sex === filters.sex);
    }
    
    if (filters.minAge) {
      results = results.filter(p => {
        const age = p.getAge();
        return age !== null && age >= filters.minAge;
      });
    }
    
    if (filters.maxAge) {
      results = results.filter(p => {
        const age = p.getAge();
        return age !== null && age <= filters.maxAge;
      });
    }
    
    if (filters.serviceDate) {
      results = results.filter(p => p.service.date === filters.serviceDate);
    }
    
    return results;
  }

  async update(id, data) {
    const patient = this.patients.get(id);
    if (!patient) {
      return null;
    }

    if (data.service) {
      patient.service = { ...patient.service, ...data.service };
    }
    
    if (data.identification) {
      patient.identification = { ...patient.identification, ...data.identification };
      if (data.identification.curp) {
        this.curpIndex.set(data.identification.curp, id);
      }
    }
    
    if (data.familyHistory) {
      patient.familyHistory = { ...patient.familyHistory, ...data.familyHistory };
    }
    
    if (data.nonPathologicalHistory) {
      patient.nonPathologicalHistory = { ...patient.nonPathologicalHistory, ...data.nonPathologicalHistory };
    }
    
    if (data.pathologicalHistory) {
      patient.pathologicalHistory = { ...patient.pathologicalHistory, ...data.pathologicalHistory };
    }
    
    if (data.currentCondition !== undefined) {
      patient.currentCondition = data.currentCondition;
    }
    
    if (data.systemsReview) {
      patient.systemsReview = { ...patient.systemsReview, ...data.systemsReview };
    }
    
    if (data.physicalExam) {
      patient.physicalExam = { ...patient.physicalExam, ...data.physicalExam };
    }
    
    if (data.labs) {
      patient.labs = data.labs;
    }
    
    if (data.previousTreatment) {
      patient.previousTreatment = { ...patient.previousTreatment, ...data.previousTreatment };
    }
    
    if (data.diagnosticImpression) {
      patient.diagnosticImpression = data.diagnosticImpression;
    }
    
    if (data.treatment) {
      patient.treatment = { ...patient.treatment, ...data.treatment };
    }
    
    if (data.caseAnalysis !== undefined) {
      patient.caseAnalysis = data.caseAnalysis;
    }
    
    if (data.clinicalStudies) {
      patient.clinicalStudies = data.clinicalStudies;
    }
    
    if (data.anthropometricData) {
      patient.updateAnthropometricData(data.anthropometricData);
    }
    
    patient.updatedAt = new Date();
    return patient;
  }

  async delete(id) {
    const patient = this.patients.get(id);
    if (!patient) {
      return false;
    }
    
    if (patient.identification.curp) {
      this.curpIndex.delete(patient.identification.curp);
    }
    
    this.patients.delete(id);
    return true;
  }

  async findByCurp(curp) {
    const patientId = this.curpIndex.get(curp);
    if (!patientId) {
      return null;
    }
    return this.patients.get(patientId) || null;
  }

  async search(query) {
    if (!query) {
      return Array.from(this.patients.values());
    }
    
    const searchTerm = query.toLowerCase();
    return Array.from(this.patients.values()).filter(patient => {
      const fullName = patient.getFullName().toLowerCase();
      const curp = patient.identification.curp?.toLowerCase() || '';
      const phone = patient.identification.phone?.toLowerCase() || '';
      const email = patient.identification.email?.toLowerCase() || '';
      
      return fullName.includes(searchTerm) ||
             curp.includes(searchTerm) ||
             phone.includes(searchTerm) ||
             email.includes(searchTerm);
    });
  }
}

module.exports = InMemoryPatientRepository;
