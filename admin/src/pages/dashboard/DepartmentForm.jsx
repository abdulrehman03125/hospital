import { useState } from "react";
import { Check, RefreshCw } from "lucide-react";

const DepartmentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    status: "active",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleReset = () => {
    setFormData({
      name: "",
      description: "",
      status: "active",
    });
  };

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Department Form</h2>

      {/* Department Name */}
      <div className="mb-4">
        <label className="block font-medium mb-1">
          Department Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300"
          placeholder="Department Name"
        />
      </div>

      {/* Description */}
      <div className="mb-4">
        <label className="block font-medium mb-1">Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300"
          placeholder="Description"
          rows="3"
        ></textarea>
      </div>

      {/* Status */}
      <div className="mb-4">
        <label className="block font-medium mb-1">Status</label>
        <div className="flex items-center space-x-4">
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="status"
              value="active"
              checked={formData.status === "active"}
              onChange={handleChange}
              className="text-blue-500"
            />
            <span>Active</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="status"
              value="inactive"
              checked={formData.status === "inactive"}
              onChange={handleChange}
              className="text-blue-500"
            />
            <span>Inactive</span>
          </label>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex space-x-4">
        <button
          onClick={handleReset}
          className="flex items-center px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition"
        >
          <RefreshCw className="w-4 h-4 mr-2" />
          Reset
        </button>

        <button
          className="flex items-center px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
        >
          <Check className="w-4 h-4 mr-2" />
          Save
        </button>
      </div>
    </div>
  );
};

export default DepartmentForm;
