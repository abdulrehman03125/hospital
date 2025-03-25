import React, { useState, useEffect } from "react";
import { Pencil, Trash2, Eye } from "lucide-react";
import { toast } from "react-toastify";
import DoctorDetails from "./DoctorDetails";
import DoctorForm from "./DoctorForm";

const DoctorList = () => {
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [editDoctor, setEditDoctor] = useState(null);

  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = async () => {
    try {
      const response = await fetch("http://localhost:3002/doctors/all/");
      const data = await response.json();
      setDoctors(data);
    } catch (error) {
      toast.error("Error fetching doctors!");
    }
  };

  const deleteDoctor = async (doctorId) => {
    if (!window.confirm("Are you sure you want to delete this doctor?")) return;

    try {
      const response = await fetch(`http://localhost:3002/doctors/delete/${doctorId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        toast.success("Doctor deleted successfully!");
        setDoctors(doctors.filter((doctor) => doctor._id !== doctorId));
      } else {
        toast.error("Failed to delete doctor!");
      }
    } catch (error) {
      toast.error("An error occurred while deleting the doctor!");
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Doctor List</h2>
      <button
        className="mb-4 bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => setEditDoctor({ name: "", department: "", specialization: "", email: "", mobile: "" })}
      >
        Add New Doctor
      </button>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 shadow-md">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="py-2 px-1 border">SL.NO</th>
              <th className="py-2 px-1 border">Name</th>
              <th className="py-2 px-1 border">Department</th>
              <th className="py-2 px-1 border">Specialization</th>
              <th className="py-2 px-8 border">Email</th>
              <th className="py-2 px-2 border">Mobile No</th>
              <th className="py-2 px-4 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {doctors.length > 0 ? (
              doctors.map((doctor, index) => (
                <tr key={doctor._id} className="border">
                  <td className="py-2 text-center px-1 border">{index + 1}</td>
                  <td className="py-2 px-1 border">{doctor.name}</td>
                  <td className="py-1 px-2 border">{doctor.department?.name || "Not Assigned"}</td>
                  <td className="py-2 px-1 border">{doctor.specialization}</td>
                  <td className="py-2 px-8 border">{doctor.email}</td>
                  <td className="py-2 px-4 border">{doctor.mobile}</td>

                  <td className="py-2 px-4 border flex space-x-2">
                    <button className="text-green-500 hover:text-green-700" onClick={() => setSelectedDoctor(doctor)}>
                      <Eye size={18} />
                    </button>
                    <button className="text-blue-500 hover:text-blue-700" onClick={() => setEditDoctor(doctor)}>
                      <Pencil size={18} />
                    </button>
                    <button className="text-red-500 hover:text-red-700" onClick={() => deleteDoctor(doctor._id)}>
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="text-center py-4 text-gray-500">No doctors found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {selectedDoctor && <DoctorDetails doctor={selectedDoctor} onClose={() => setSelectedDoctor(null)} />}
      {editDoctor && <DoctorForm doctor={editDoctor} onClose={() => setEditDoctor(null)} refreshDoctors={fetchDoctors} />}
    </div>
  );
};

export default DoctorList;
