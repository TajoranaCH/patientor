import patientsData from '../../data/patients';
import { NewPatientEntry, NonSensitivePatientEntry, PatientEntry} from '../types';
import { v1 as uuid } from 'uuid';

const getPatients = (): NonSensitivePatientEntry[] => {
  return patientsData.map(({
    id,
    name,
    dateOfBirth,
    gender,
    occupation
  }) => (
    {
      id,
      name,
      dateOfBirth,
      gender,
      occupation
    }));
};

const addPatient = (newPatientEntry: NewPatientEntry): PatientEntry => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
  const patientEntry: PatientEntry = { ...newPatientEntry, id: uuid() };
  patientsData.push(patientEntry);
  return patientEntry;
};

export default {
  getPatients,
  addPatient
};