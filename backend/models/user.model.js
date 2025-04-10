const mongoose = require("mongoose");
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// require('dotenv').config();

const userSchema = new mongoose.Schema({
    name:
    {
        type: String,
        required: true
    },
    email:
    {
        type: String,
        required: true, unique: true
    },
    password:
    {
        type: String,
        required: true
    },
    role:
    {
        type: String,
        enum: ["admin", "staff", "doctor"],
        default: "staff"
    },
}, { timestamps: true });
// Hash password before saving
// userSchema.pre('save', async function(next) {
//     try {
//         if (!this.isModified('password')) return next();
//         const salt = await bcrypt.genSalt(10);
//         this.password = await bcrypt.hash(this.password, salt);
//         next();
//     } catch (error) {
//         next(error);
//     }
// });

const User = mongoose.model("User", userSchema);

module.exports = User;