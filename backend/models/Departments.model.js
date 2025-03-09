const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');


const departmentSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    description:
    {
        type: String,
        required: true
    },
    assignedDoctors:
        [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Doctor'
        }],
}, { timestamps: true });

const Department = mongoose.model('Department', departmentSchema);

module.exports = Department;
// module.exports = { User, Doctor, Patient, Appointment, Department };