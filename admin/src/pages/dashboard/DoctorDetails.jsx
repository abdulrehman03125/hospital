import React from "react";

const DoctorDetails = ({ doctor, onClose }) => {
  if (!doctor) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50" onClick={onClose}>
      <div
        className="bg-white p-6 rounded-md shadow-md w-96"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        <h3 className="text-xl font-bold mb-4 text-center">Doctor Details</h3>
        <div className="space-y-2">
          <p><strong>Name:</strong> {doctor.name}</p>
          <p><strong>Department:</strong> {doctor.department?.name || "Not Assigned"}</p>
          <p><strong>Specialization:</strong> {doctor.specialization || "N/A"}</p>
          <p><strong>Email:</strong> {doctor.email}</p>
          <p><strong>Mobile No:</strong> {doctor.Mobile_No}</p>
        </div>
        <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded w-full" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default DoctorDetails;
