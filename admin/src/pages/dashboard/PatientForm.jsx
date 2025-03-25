import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PatientForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "Male",
    mobileNo: "",
    address: "",
    cnic: "",
    bloodGroup: "A+",
    medicalHistory: "",
    currentMedications: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://localhost:3002/patients/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json().catch(() => ({ message: "Invalid response from server" }));
      console.log("Server Response:", data);
      if (response.ok) {
        toast.success("✅ Patient added successfully!");
        setFormData({
          name: "",
          age: "",
          gender: "Male",
          mobileNo: "",
          address: "",
          cnic: "",
          bloodGroup: "",
          medicalHistory: "",
          currentMedications: "",
        });
        console.log(data)

      }

      else {
        toast.error(`❌ Error: ${data.message || "Failed to add patient"}`);
      }
    } catch (error) {
      toast.error("❌ Server error! Please try again.");
      console.error("API Error:", error);
    }

    setLoading(false);
  };

  return (
    <div className="max-w-xl mx-auto bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-bold mb-4">Add Patient</h2>

      {/* Toast Notifications */}
      <ToastContainer position="top-right" autoClose={3000} />

      <form onSubmit={handleSubmit} className="grid gap-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="border p-2 rounded w-full"
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={(e) => setFormData({ ...formData, age: Number(e.target.value) })} // Ensure it's a number
          required
          className="border p-2 rounded w-full"
        />

        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        >
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>
        <input
          type="text"
          name="mobileNo"
          placeholder="Mobile No (11 digits)"
          value={formData.mobileNo}
          onChange={handleChange}
          pattern="[0-9]{11}"
          required
          className="border p-2 rounded w-full"
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          required
          className="border p-2 rounded w-full"
        />
        <input
          type="text"
          name="cnic"
          placeholder="CNIC (12345-1234567-1)"
          value={formData.cnic}
          onChange={handleChange}
          pattern="[0-9]{5}-[0-9]{7}-[0-9]{1}"
          required
          className="border p-2 rounded w-full"
        />
        <select
          name="bloodGroup"
          value={formData.bloodGroup}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        >
          {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map((group) => (
            <option key={group}>{group}</option>
          ))}
        </select>
        <textarea
          name="medicalHistory"
          placeholder="Medical History"
          value={formData.medicalHistory}
          onChange={handleChange}
          required
          className="border p-2 rounded w-full"
        />
        <textarea
          name="currentMedications"
          placeholder="Current Medications"
          value={formData.currentMedications}
          onChange={handleChange}
          required
          className="border p-2 rounded w-full"
        />
        <button
          type="submit"
          disabled={loading}
          className={`bg-blue-600 text-white p-2 rounded ${loading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"
            }`}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default PatientForm;
