const Patient = require('../models/Patients.model');



// @desc Add a new patient
// @route POST /api/patients
// @access Staff
const createPatient = async (req, res) => {
    try {
        // const { name, age, gender, contactInfo, medicalHistory, currentMedications } = req.body;

        const newPatient = new Patient(req.body);
        await newPatient.save();

        res.status(201).json({ message: "patients added successfully", patient: newPatient });
    } catch (error) {
        res.status(500).json({ message: "Failed to add patients", error });
    }
}


// @desc Get all patients
// @route GET /api/patients
// @access Admin & Staff
const getAllPatients = async (req, res) => {
    try {
        const patients = await Patient.find();
        res.status(200).json(patients);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// @desc Get a specific patient
// @route GET /api/patients/:id
// @access Admin & Staff
const getPatientById = async (req, res) => {
    try {
        const patient = await Patient.findById(req.params.id);
        if (!patient) return res.status(404).json({ message: 'Patient not found' });

        res.status(200).json(patient);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};



// @desc Update patient details
// @route PUT /api/patients/:id
// @access Staff
const updatePatient = async (req, res) => {
    try {
        const updatedPatient = await Patient.findByIdAndUpdate(req.params.id, req.body, { new: true });

        if (!updatedPatient) return res.status(404).json({ message: 'Patient not found' });

        res.status(200).json(updatedPatient);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// @desc Remove a patient
// @route DELETE /api/patients/:id
// @access Admin
const deletePatient = async (req, res) => {
    try {
        const deletedPatient = await Patient.findByIdAndDelete(req.params.id);

        if (!deletedPatient) return res.status(404).json({ message: 'Patient not found' });

        res.status(200).json({ message: 'Patient removed successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

module.exports = { createPatient, getAllPatients, getPatientById, updatePatient, deletePatient };
