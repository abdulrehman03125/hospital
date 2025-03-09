const express = require('express');


const { authMiddleware,verifyStaff, verifyAdmin  } = require('../middlewares/auth.middleware');
const  { createPatient, getAllPatients, getPatientById, updatePatient, deletePatient } = require("../controllers/patientController");


const PatientRoutes = express.Router();

// Routes for patient management
PatientRoutes.post('/create',authMiddleware,  createPatient);
PatientRoutes.get('/all', authMiddleware,  verifyStaff,  getAllPatients);
PatientRoutes.get('/all/:id', authMiddleware, verifyStaff, verifyAdmin, getPatientById);
PatientRoutes.put('/update/:id', authMiddleware, verifyStaff, updatePatient);
PatientRoutes.delete('/delete/:id',  verifyStaff,  deletePatient);

module.exports = PatientRoutes;
