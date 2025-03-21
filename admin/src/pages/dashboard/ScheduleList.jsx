import React, { useState } from "react";
import { Pencil, Trash } from "lucide-react";

const ScheduleList = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const entriesPerPage = 10;
  
  const scheduleData = [
    { id: 1, doctor: "Mrs. Nasima Chow", department: "Pediatrics", day: "Monday", startTime: "06:30:30", endTime: "20:40:30", perPatientTime: "04:00:00", serial: "Sequential", status: "Active" },
    { id: 4, doctor: "", department: "", day: "Thursday", startTime: "00:00:00", endTime: "23:00:00", perPatientTime: "01:00:00", serial: "Sequential", status: "Active" },
    { id: 7, doctor: "", department: "", day: "Monday", startTime: "00:00:00", endTime: "23:00:00", perPatientTime: "01:00:00", serial: "Timestamp", status: "Active" },
    { id: 8, doctor: "", department: "", day: "Tuesday", startTime: "00:00:00", endTime: "23:00:00", perPatientTime: "00:30:00", serial: "Timestamp", status: "Active" },
  ];

  const filteredData = scheduleData.filter((item) =>
    item.doctor.toLowerCase().includes(search.toLowerCase())
  );

  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = filteredData.slice(indexOfFirstEntry, indexOfLastEntry);

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <div className="flex justify-between mb-4">
        <input
          type="text"
          placeholder="Search..."
          className="border p-2 rounded w-1/3"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <table className="w-full border-collapse border rounded-lg text-sm">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">SL.NO</th>
            <th className="border p-2">Doctor Name</th>
            <th className="border p-2">Department Name</th>
            <th className="border p-2">Day</th>
            <th className="border p-2">Start Time</th>
            <th className="border p-2">End Time</th>
            <th className="border p-2">Per Patient Time</th>
            <th className="border p-2">Serial Visibility</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {currentEntries.map((item) => (
            <tr key={item.id} className="text-center border">
              <td className="border p-2">{item.id}</td>
              <td className="border p-2">{item.doctor}</td>
              <td className="border p-2">{item.department}</td>
              <td className="border p-2">{item.day}</td>
              <td className="border p-2">{item.startTime}</td>
              <td className="border p-2">{item.endTime}</td>
              <td className="border p-2">{item.perPatientTime}</td>
              <td className="border p-2">{item.serial}</td>
              <td className="border p-2 text-green-600">{item.status}</td>
              <td className="border p-2 flex justify-center gap-2">
                <button className="text-blue-500 hover:text-blue-700"><Pencil size={18} /></button>
                <button className="text-red-500 hover:text-red-700"><Trash size={18} /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between mt-4">
        <button
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>Page {currentPage}</span>
        <button
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
          onClick={() => setCurrentPage((prev) => prev + 1)}
          disabled={indexOfLastEntry >= filteredData.length}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ScheduleList;
