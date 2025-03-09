const Department = require('../models/Departments.model');




// Add a new department
const createDepartment = async (req, res) => {
    try {
        const { name, description, assignedDoctors } = req.body;

        const department = new Department({ name, description, assignedDoctors });
        await department.save();

        res.status(201).json(department);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    // console.log(error);
};


// Get all departments
const getDepartments = async (req, res) => {
    try {
        const departments = await Department.find().populate('assignedDoctors', 'name specialization');
        res.status(200).json(departments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



// Update department details
const updateDepartment = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedDepartment = await Department.findByIdAndUpdate(id, req.body, { new: true });

        if (!updatedDepartment) {
            return res.status(404).json({ message: 'Department not found' });
        }

        res.status(200).json(updatedDepartment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete department
const deleteDepartment = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedDepartment = await Department.findByIdAndDelete(id);

        if (!deletedDepartment) {
            return res.status(404).json({ message: 'Department not found' });
        }

        res.status(200).json({ message: 'Department deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
module.exports = { createDepartment, getDepartments, updateDepartment, deleteDepartment };