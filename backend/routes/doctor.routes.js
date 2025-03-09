const express = require("express");

const { authMiddleware, verifyStaff, verifyAdmin } = require("../middlewares/auth.middleware");
const  { createDoctor, updateDoctor, deleteDoctor, getDoctorById, getAllDoctors } = require("../controllers/doctor.controller");


const doctorRouter = express.Router();


// ✅ Add a new doctor (Admin)
doctorRouter.post("/create", authMiddleware,createDoctor);


// ✅ Get all doctors (Admin & Staff)
doctorRouter.get("/all", authMiddleware,  getAllDoctors);

// ✅ Get a specific doctor by ID (Admin & Staff)
doctorRouter.get("/all/:id", authMiddleware,  getDoctorById);



// ✅ Update doctor details (Admin)
doctorRouter.put("/update/:id", authMiddleware,verifyStaff, updateDoctor);

// ✅ Remove doctor (Admin)
doctorRouter.delete("/delete/:id", authMiddleware, verifyAdmin, deleteDoctor);

module.exports = doctorRouter;
