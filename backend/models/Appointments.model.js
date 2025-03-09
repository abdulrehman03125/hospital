const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');


const appointmentSchema = new mongoose.Schema({

    patientId:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient',
        required: true
    },
    doctorId:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor',
        required: true
    },
    appointmentDateTime: {
        type: Date,
        required: true
    },
    status:
    {
        type: String,
        enum: ['Pending', 'Approved', 'Rejected'],
        default: 'Pending'
    },
}, { timestamps: true });

const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;