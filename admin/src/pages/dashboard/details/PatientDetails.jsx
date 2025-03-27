import React from "react";

const PatientDetails = ({ patient, onClose }) => {
  if (!patient) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">Patient Details</h2>
        <p><strong>Name:</strong> {patient.name}</p>
        <p><strong>Age:</strong> {patient.age}</p>
        <p><strong>Gender:</strong> {patient.gender}</p>
        <p><strong>Mobile No:</strong> {patient.mobileNo}</p>
        <p><strong>Address:</strong> {patient.address}</p>
        <p><strong>CNIC:</strong> {patient.cnic}</p>
        <p><strong>Blood Group:</strong> {patient.bloodGroup}</p>
        <p><strong>Medical History:</strong> {patient.medicalHistory}</p>
        <p><strong>Current Medications:</strong> {patient.currentMedications}</p>

        <button 
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default PatientDetails;
