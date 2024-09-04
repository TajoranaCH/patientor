import { z } from 'zod';
import { NewPatientEntrySchema } from './utils';

export enum Gender {
  Male = 'male',
  Female = 'female',
  Other = 'other'
}

export interface DiagnosesEntry {
  code: string,
  name: string,
  latin?: string
}

export interface PatientEntry {
  id: string,
  name: string,
  dateOfBirth: string,
  ssn: string,
  gender: Gender,
  occupation: string
}

export type NewPatientEntry = z.infer<typeof NewPatientEntrySchema>;

export type NonSensitivePatientEntry = Omit<PatientEntry, 'ssn'>;