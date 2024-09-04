import express, { Request, Response, NextFunction }  from 'express';
import patientService from '../services/patientService';
import { NewPatientEntrySchema } from '../utils';

import { z } from 'zod';
import { NewPatientEntry, PatientEntry } from '../types'; 


const router = express.Router();

router.get('/', (_req, res) => {
  res.send(patientService.getPatients());
});

const newPatientParser = (req: Request, _res: Response, next: NextFunction) => {
  try {
    NewPatientEntrySchema.parse(req.body);
    console.log(req.body);
    next();
  } catch (error: unknown) {
    next(error);
  }
};

const errorMiddleware = (error: unknown, _req: Request, res: Response, next: NextFunction) => { 
  if (error instanceof z.ZodError) {
    res.status(400).send({ error: error.issues });
  } else {
    next(error);
  }
};

router.post('/', newPatientParser, (req: Request<unknown, unknown, NewPatientEntry>, res: Response<PatientEntry>) => {
  const addedPatient = patientService.addPatient(req.body);
  return res.json(addedPatient);
});

router.use(errorMiddleware);

export default router;