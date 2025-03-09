const jwt = require("jsonwebtoken");
require('dotenv').config();
const userModel = require('../models/user.model');

const authMiddleware = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        // if (!authHeader || !authHeader.startsWith('Bearer ')) 
            if (!authHeader) 
            {
            return res.status(401).json({ message: 'Invalid or missing authorization token' });
        }
          // Check if the header format is correct (Bearer token)
          if (!authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ message: 'Invalid authorization format. Use Bearer token' });
        }

        const token = authHeader.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_KEY);

        const user = await userModel.findById(decoded.id);
        if (!user) {
            return res.status(401).json({ message: 'User not found' });
        }

        req.user = user; // Store user object for later use
        req.role = user.role;

        next();
    } catch (error) {
        if (error.name === 'JsonWebTokenError') {
            return res.status(401).json({ message: 'Invalid token' });
        }
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({ message: 'Token expired' });
        }
        return res.status(500).json({ message: 'Internal server error' });
    }
};

// Role-based authorization middleware
const authorize = (...roles) => {
    return (req, res, next) => {
        if (!req.user) {
            return res.status(401).json({ message: 'User not authenticated' });
        }
        if (!roles.includes(req.role)) {
            return res.status(403).json({ message: 'Unauthorized access' });
        }
        next();
    };
};

// Specific role-based middleware
const verifyAdmin = (req, res, next) => {
    if (req.role === "admin") {
        return next();
    }
    return res.status(403).json({ message: "Admin access required" });
};

const verifyStaff = (req, res, next) => {
    if (["admin", "staff"].includes(req.role)) {
        return next();
    }
    return res.status(403).json({ message: "Staff access required" });
};

const verifyDoctor = (req, res, next) => {
    if (req.role === "doctor") {
        return next();
    }
    return res.status(403).json({ message: "Doctor access required" });
};

module.exports = { verifyDoctor, verifyStaff, verifyAdmin, authMiddleware ,authorize};
