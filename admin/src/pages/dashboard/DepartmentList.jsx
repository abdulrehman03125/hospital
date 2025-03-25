import { useEffect, useState } from "react";
import { Pencil, Trash } from "lucide-react";
import axios from "axios";

const DepartmentList = () => {
  const [departments, setDepartments] = useState([]);
  const [entries, setEntries] = useState(10);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchDepartments();
  }, []);

  const fetchDepartments = async () => {
    try {
      const response = await axios.get("http://localhost:3002/department/getDepartments/");
      setDepartments(response.data);
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch departments.");
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this department?");
    if (!confirmDelete) return;

    try {
      await axios.delete(`http://localhost:3002/department/deleteDepartment/${id}`);
      setDepartments(departments.filter(dept => dept.id !== id));
    } catch (err) {
      setError("Failed to delete department.");
    }
  };

  const handleUpdate = (id) => {
    // Placeholder function, implement update logic here
    alert(`Update department with ID: ${id}`);
  };

  const filteredDepartments = departments.filter(dept =>
    dept.name.toLowerCase().includes(search.toLowerCase()) ||
    dept.description.toLowerCase().includes(search.toLowerCase())
  );

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
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded p-1"
        />
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
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
            {filteredDepartments.slice(0, entries).map((dept, index) => (
              <tr key={dept.id} className="border">
                <td className="border p-2">{index + 1}</td>
                <td className="border p-2">{dept.name}</td>
                <td className="border p-2">{dept.description}</td>
                <td className="border p-2 text-green-600">{dept.status}</td>
                <td className="border p-2 flex gap-2">
                  <button
                    className="text-blue-500 hover:text-blue-700"
                    onClick={() => handleUpdate(dept.id)}
                  >
                    <Pencil size={16} />
                  </button>
                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={() => handleDelete(dept.id)}
                  >
                    <Trash size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default DepartmentList;
