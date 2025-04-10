const UserModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require('dotenv').config();

// singup api

const Signup = async (req, res) => {
    try {

        const data = req.body;

        // check user already registered
        const already = await UserModel.findOne({ email: data.email });

        if (already !== null) {
            return res.status(403).json({
                status: "Fail",
                errors: "Email is already registered"
            });
            
        }
    
        // hash the password
        const hashed = bcrypt.hashSync(data.password, 3);


        await UserModel.create({
            name: data.name,
            email: data.email,
            password: hashed,
            gender: data.gender
        });

        return res.status(201).json({
            status: "Ok",
            message: "Successfully signed up"
        });

    } catch (err) {
        if (err.name === "ValidationError") {

            const errors = Object.entries(err.errors).map(([field, error]) => ({
                field,
                message: error.message,
            }));

            return res.status(400).json({
                status: "Fail",
                errors: errors
            });

        } else {
            console.error("Unexpected error:", err);
        }
    }
}


// login api

const Login = async (req, res) => {
    try {

        const data = req.body;

        // check user is registered
        const user = await UserModel.findOne({ email: data.email });

        if (user === null) {
            console.log("User not found in Login API");

            return res.status(403).json({
                status: "Fail",
                errors: "username or password is not opne "
            });
        }

        //console.log(user);


        // check password is correct
        const passStatus = bcrypt.compareSync(data.password, user.password);

        if (passStatus === false) {
            return res.status(403).json({
                status: "Fail",

                errors: "username or password is  hai p"
            });
            
        }
        // generate a jwt token
        const token = jwt.sign({ id: user._id }, process.env.JWT_KEY, {expiresIn: "2h"});

        return res.status(200).json({
            status: "Ok",
            message: "Successfully logged in",
            token: token,
            user: user.name
        });

    } catch (error) {
        console.log(error)
        if (error.name === "ValidationError") {

            const errors = Object.entries(err.errors).map(([field, error]) => ({
                field,
                message: error.message,
            }));

            return res.status(400).json({
                status: "Fail",
                errors: errors
            });

        } else {
            console.error("Unexpected error:", error);
        }
    }
}




module.exports = { Signup, Login }