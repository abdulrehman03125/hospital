const express = require('express');
const departmentRoutes = express.Router();
const { getDepartments, createDepartment, updateDepartment, deleteDepartment } = require('../controllers/department.controller');
// const { authMiddleware  } = require('../middlewares/auth.middleware');


// Add a new department (Admin only)
departmentRoutes.post('/create',  createDepartment);

// Get all departments (Admin & Staff)
departmentRoutes.get('/getDepartments',   getDepartments);


// Update department details (Admin only)
departmentRoutes.put('/updateDepartment/:id',   updateDepartment);

// Delete department (Admin only)
departmentRoutes.delete('/deleteDepartment/:id',   deleteDepartment);

module.exports = departmentRoutes;
