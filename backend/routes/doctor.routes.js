const express = require("express");

const { authMiddleware } = require("../middlewares/auth.middleware");
const  { createDoctor, updateDoctor, deleteDoctor, getDoctorById, getAllDoctors } = require("../controllers/doctor.controller");


const doctorRouter = express.Router();


// ✅ Add a new doctor (Admin)
doctorRouter.post("/create", createDoctor);


// ✅ Get all doctors (Admin & Staff)
doctorRouter.get("/all",   getAllDoctors);

// ✅ Get a specific doctor by ID (Admin & Staff)
doctorRouter.get("/all/:id",   getDoctorById);



// ✅ Update doctor details (Admin)
doctorRouter.put("/update/:id",  updateDoctor);

// ✅ Remove doctor (Admin)
doctorRouter.delete("/delete/:id",  deleteDoctor);

module.exports = doctorRouter;
