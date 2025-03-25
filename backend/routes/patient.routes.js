const express = require('express');


const { authMiddleware  } = require('../middlewares/auth.middleware');
const  { createPatient, getAllPatients, getPatientById, updatePatient, deletePatient } = require("../controllers/patientController");


const PatientRoutes = express.Router();

// Routes for patient management
PatientRoutes.post('/create',  createPatient);
PatientRoutes.get('/all',    getAllPatients);
PatientRoutes.get('/all/:id',    getPatientById);
PatientRoutes.put('/update/:id',  updatePatient);
PatientRoutes.delete('/delete/:id',    deletePatient);

module.exports = PatientRoutes;
