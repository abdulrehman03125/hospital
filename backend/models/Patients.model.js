const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');


const patientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other'],
        required: true
    },
    mobileNo: {
        type: String,
        required: true,
        match: /^[0-9]{11}$/ // Validates 11-digit phone number
    },
    address: {
        type: String,
        required: true
    },
    cnic: {
        type: String,
        required: true,
        unique: true,
        match: /^[0-9]{5}-[0-9]{7}-[0-9]{1}$/ // CNIC format: 12345-1234567-1
    },
    bloodGroup: {
        type: String,
        enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
        required: true
    },
    medicalHistory: {
        type: String,
        required: true
    },
    currentMedications: {
        type: String,
        required: true
    }
}, { timestamps: true });

// Auto-generate `patientId` before saving
patientSchema.pre('save', async function (next) {
    
    if (!this.patientId) {
        this.patientId = `PAT-${Date.now()}`; 
    }
    next();
}
);

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;