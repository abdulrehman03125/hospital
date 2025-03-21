import React from "react";
import { Pencil, Trash2, Eye } from "lucide-react";

const doctors = [
  {
    id: 1,
    picture: "https://via.placeholder.com/50",
    firstName: "Dr. Robert",
    lastName: "Taylor",
    department: "Emergency",
    email: "Robert@gmail.com",
    mobile: "0178985245",
    phone: "",
  },
  {
    id: 2,
    picture: "https://via.placeholder.com/50",
    firstName: "Dr. Laura",
    lastName: "Thomas",
    department: "Pediatrics",
    email: "laura@gmail.com",
    mobile: "017898524",
    phone: "",
  },
  {
    id: 3,
    picture: "https://via.placeholder.com/50",
    firstName: "Dr. James",
    lastName: "Anderson",
    department: "Nephrology",
    email: "James@gmail.com",
    mobile: "8801478985",
    phone: "",
  },
];

const DoctorList = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Doctor List</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 shadow-md">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="py-2 px-4 border">SL.NO</th>
              <th className="py-2 px-4 border">Picture</th>
              <th className="py-2 px-4 border">First Name</th>
              <th className="py-2 px-4 border">Last Name</th>
              <th className="py-2 px-4 border">Department</th>
              <th className="py-2 px-4 border">Email</th>
              <th className="py-2 px-4 border">Mobile No</th>
              <th className="py-2 px-4 border">Phone No</th>
              <th className="py-2 px-4 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor, index) => (
              <tr key={doctor.id} className="border">
                <td className="py-2 px-4 border">{index + 1}</td>
                <td className="py-2 px-4 border">
                  <img
                    src={doctor.picture}
                    alt={doctor.firstName}
                    className="w-12 h-12 rounded-full"
                  />
                </td>
                <td className="py-2 px-4 border">{doctor.firstName}</td>
                <td className="py-2 px-4 border">{doctor.lastName}</td>
                <td className="py-2 px-4 border">{doctor.department}</td>
                <td className="py-2 px-4 border">{doctor.email}</td>
                <td className="py-2 px-4 border">{doctor.mobile}</td>
                <td className="py-2 px-4 border">{doctor.phone || "-"}</td>
                <td className="py-2 px-4 border flex space-x-2">
                  <button className="text-green-500 hover:text-green-700">
                    <Eye size={18} />
                  </button>
                  <button className="text-blue-500 hover:text-blue-700">
                    <Pencil size={18} />
                  </button>
                  <button className="text-red-500 hover:text-red-700">
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DoctorList;
