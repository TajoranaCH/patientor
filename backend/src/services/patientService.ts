import patientsData from '../../data/patients';
import { NonSensitivePatientEntry } from '../types';

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

const addPatient = () => {
  return null;
};

export default {
  getPatients,
  addPatient
};