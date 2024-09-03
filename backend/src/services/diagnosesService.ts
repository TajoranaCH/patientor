import diagnosesData from '../../data/diagnoses';
import { DiagnosesEntry } from '../types';

const getDiagnoses = (): DiagnosesEntry[] => {
  return diagnosesData;
};

const addDiagnoses = () => {
  return null;
};

export default {
  getDiagnoses,
  addDiagnoses
};