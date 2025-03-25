const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');



const doctorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    specialization: { type: String, required: true },
    experience: { type: String, required: true },
    Mobile_No: { type: String, required: true },
    department: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    sex: { type: String, enum: ["male", "female", "other"], default: "male" },
    status: { type: String, enum: ["active", "inactive"], default: "active" }
}, { timestamps: true });
const Doctor = mongoose.model('Doctor', doctorSchema);
module.exports = Doctor;