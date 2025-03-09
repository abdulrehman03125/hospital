const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');



const doctorSchema = new mongoose.Schema({
    name:
        { type: String, required: true },
    specialization:
        { type: String, required: true },
    experience:
        { type: Number, required: true },
    contactInfo:
        { type: String, required: true },
    department:
        { type: mongoose.Schema.Types.ObjectId, ref: 'Department', required: true },
    availabilitySchedule:
        { type: String, required: true },
}, { timestamps: true });

const Doctor = mongoose.model('Doctor', doctorSchema);
module.exports = Doctor;