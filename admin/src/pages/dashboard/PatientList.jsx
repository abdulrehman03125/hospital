import React, { useState, useEffect } from "react";
import { Pencil, Trash2, Eye } from "lucide-react";
import { toast } from "react-toastify";
import PatientDetails from "./details/PatientDetails"
// import PatientForm from "./PatientForm";

const PatientList = () => {
  const [patients, setPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [editPatient, setEditPatient] = useState(null);

  useEffect(() => {
    fetchPatients();
  }, []);

  const fetchPatients = async () => {
    try {
      const response = await fetch("http://localhost:3002/patients/all/");
      const data = await response.json();
      setPatients(data);
    } catch (error) {
      toast.error("Error fetching patients!");
    }
  };

  const deletePatient = async (patientId) => {
    if (!window.confirm("Are you sure you want to delete this patient?")) return;

    try {
      const response = await fetch(`http://localhost:3002/patients/delete/${patientId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        toast.success("Patient deleted successfully!");
        setPatients(patients.filter((patient) => patient._id !== patientId));
      } else {
        toast.error("Failed to delete patient!");
      }
    } catch (error) {
      toast.error("An error occurred while deleting the patient!");
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Patient List</h2>
      <button
        className="mb-4 bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => setEditPatient({ name: "", age: "", gender: "", mobileNo: "", address: "", cnic: "", bloodGroup: "", medicalHistory: "", currentMedications: "" })}
      >
        Add New Patient
      </button>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 shadow-md">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="py-2 px-1 border">SL.NO</th>
              <th className="py-2 px-1 border">Name</th>
              <th className="py-2 px-1 border">Age</th>
              <th className="py-2 px-1 border">Gender</th>
              <th className="py-2 px-8 border">Mobile No</th>
              <th className="py-2 px-4 border">CNIC</th>
              <th className="py-2 px-4 border">Blood Group</th>
              <th className="py-2 px-4 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {patients.length > 0 ? (
              patients.map((patient, index) => (
                <tr key={patient._id} className="border">
                  <td className="py-2 text-center px-1 border">{index + 1}</td>
                  <td className="py-2 px-1 border">{patient.name}</td>
                  <td className="py-2 px-1 border">{patient.age}</td>
                  <td className="py-2 px-1 border">{patient.gender}</td>
                  <td className="py-2 px-8 border">{patient.mobileNo}</td>
                  <td className="py-2 px-4 border">{patient.cnic}</td>
                  <td className="py-2 px-4 border">{patient.bloodGroup}</td>

                  <td className="py-2 px-4 border flex space-x-2">
                    <button className="text-green-500 hover:text-green-700" onClick={() => setSelectedPatient(patient)}>
                      <Eye size={18} />
                    </button>
                    <button className="text-blue-500 hover:text-blue-700" onClick={() => setEditPatient(patient)}>
                      <Pencil size={18} />
                    </button>
                    <button className="text-red-500 hover:text-red-700" onClick={() => deletePatient(patient._id)}>
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="text-center py-4 text-gray-500">No patients found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {selectedPatient && <PatientDetails patient={selectedPatient} onClose={() => setSelectedPatient(null)} />}
      {editPatient && <PatientForm patient={editPatient} onClose={() => setEditPatient(null)} refreshPatients={fetchPatients} />}
    </div>
  );
};

export default PatientList;
