const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');


const patientSchema = new mongoose.Schema({
    name:
    {
        type: String,
        required: true
    },
    age:
    {
        type: Number,
        required: true
    },
    gender:
    {
        type: String,
        enum: ['Male', 'Female', 'Other'],
        required: true
    },
    contactInfo:
    {
        type: String,
        required: true
    },
    cnic: {
        type: String,
        required: true,
        unique: true,
        match: /^[0-9]{5}-[0-9]{7}-[0-9]{1}$/  // CNIC format: 12345-1234567-1
    },
    medicalHistory:
    {
        type: String,
        required: true
    },
    currentMedications:
    {
        type: String,
        required: true
    },
}, { timestamps: true });

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;