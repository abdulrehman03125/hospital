const Doctor = require("../models/Doctors.model");

// // ✅ Add a new doctor (Admin)
const createDoctor = async (req, res) => {
  try {
    console.log("Incoming request:", req.body);
    const newDoctor = new Doctor(req.body);
    await newDoctor.save();
    res.status(201).json({ message: "Doctor added successfully", doctor: newDoctor });
  } catch (error) {
    res.status(500).json({ message: "Failed to add doctor", error });
  }
};

// ✅ Get all doctors (Admin & Staff)
const getAllDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.status(200).json(doctors);
  } catch (error) {
    console.error("Error creating doctor:", error);
    res.status(500).json({ message: "Failed to retrieve doctors", error });
  }
};

// ✅ Get a specific doctor by ID (Admin & Staff)
const getDoctorById = async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.id);
    if (!doctor) {
      return res.status(404).json({ message: "Doctor not found" });
    }
    res.status(200).json(doctor);
  } catch (error) {
    res.status(500).json({ message: "Error fetching doctor details", error });
  }
  // console.log(req.params.id);
};



// ✅ Update doctor details (Admin)
const updateDoctor = async (req, res) => {
  try {
    const updatedDoctor = await Doctor.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedDoctor) {

      return res.status(404).json({ message: "Doctor not found" });
     
    }
   

    res.status(200).json({ message: "Doctor updated successfully", doctor: updatedDoctor });
  } catch (error) {
    res.status(500).json({ message: "Failed to update doctor", error });
  }
};

// ✅ Remove doctor (Admin)
const deleteDoctor = async (req, res) => {
  try {
    const deletedDoctor = await Doctor.findByIdAndDelete(req.params.id);
    if (!deletedDoctor) {
      return res.status(404).json({ message: "Doctor not found" });
    }
    res.status(200).json({ message: "Doctor removed successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete doctor", error });
  }
};

module.exports = { getAllDoctors, getDoctorById, createDoctor, updateDoctor, deleteDoctor };
