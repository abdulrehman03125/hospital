import { useState } from "react";
import { Pencil, Trash } from "lucide-react";

const departments = [
  { id: 1, name: "Nurse", description: "फी", status: "Active" },
  { id: 2, name: "Doctor-Chamber", description: "test", status: "Active" },
  { id: 3, name: "Nephrology", description: "Nephrology focuses on the diagnosis and treatment of kidney-related...", status: "Active" },
  { id: 4, name: "Laboratory", description: "Laboratory services. Health maintenance organisation hospitals...", status: "Active" },
  { id: 5, name: "Psychology", description: "Psychology deals with the diagnosis, treatment, and prevention...", status: "Active" },
  { id: 6, name: "Anesthesiology", description: "Anesthesiology, Pain management and anesthesia for surgeries", status: "Active" },
  { id: 7, name: "General Surgery", description: "General Surgery covers a wide range of surgical procedures for...", status: "Active" },
  { id: 8, name: "Gastroenterology", description: "Gastroenterology Focused on gastrointestinal disorders, this...", status: "Active" },
  { id: 9, name: "Obstetrics and Gynecology", description: "Obstetrics and Gynecology (OB/GYN) focuses on women's reproductive...", status: "Active" },
  { id: 10, name: "Oncology", description: "The Oncology department specializes in the diagnosis and treatment...", status: "Active" }
];

const DepartmentList = ()=> {
  const [entries, setEntries] = useState(10);

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <label className="flex items-center gap-2">
          Show
          <select
            value={entries}
            onChange={(e) => setEntries(parseInt(e.target.value))}
            className="border rounded p-1"
          >
            {[10, 25, 50, 100].map((num) => (
              <option key={num} value={num}>{num}</option>
            ))}
          </select>
          entries
        </label>
        <input
          type="text"
          placeholder="Search"
          className="border rounded p-1"
        />
      </div>

      <table className="w-full border-collapse border text-left">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">SL.NO</th>
            <th className="border p-2">Department Name</th>
            <th className="border p-2">Description</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {departments.slice(0, entries).map((dept, index) => (
            <tr key={dept.id} className="border">
              <td className="border p-2">{index + 1}</td>
              <td className="border p-2">{dept.name}</td>
              <td className="border p-2">{dept.description}</td>
              <td className="border p-2 text-green-600">{dept.status}</td>
              <td className="border p-2 flex gap-2">
                <button className="text-blue-500 hover:text-blue-700">
                  <Pencil size={16} />
                </button>
                <button className="text-red-500 hover:text-red-700">
                  <Trash size={16} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between items-center mt-4">
        <span>Previous</span>
        <div className="flex gap-2">
          <button className="bg-blue-500 text-white px-3 py-1 rounded">1</button>
          <button className="border px-3 py-1 rounded">2</button>
        </div>
        <span>Next</span>
      </div>
    </div>
  );
}
export default DepartmentList;