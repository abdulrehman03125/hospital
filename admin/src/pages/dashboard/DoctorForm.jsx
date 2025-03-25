import { useState, useEffect } from "react";
import axios from "axios";
import { Upload, User, Mail, Lock, Phone, Calendar, Briefcase, CheckCircle, XCircle } from "lucide-react";

const DoctorForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    specialization: "",
    experience: "",
    contactInfo: "",
    department: "",
    availabilitySchedule: "",
    email: "",
    password: "",
    address: "",
    phone: "",
    mobile: "",
    sex: "male",
    status: "active",
  });

  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Fetch departments from API
  useEffect(() => {
    axios
      .get("http://localhost:3002/department/getDepartments/") // Updated API endpoint
      .then((response) => {
        setDepartments(response.data); // Assuming the response contains an array of departments
      })
      .catch((error) => {
        console.error("Error fetching departments:", error);
      });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
  
    try {
      const response = await axios.post("http://localhost:3002/doctors/create", formData);
      setMessage("Doctor added successfully!");
      setFormData({
        name: "",
        specialization: "",
        experience: "",
        Mobile_NO: "",
        department: "",
        email: "",
        sex: "male",
        status: "active",
      });
    } catch (error) {
      console.error("Error Response:", error.response?.data || error.message);
      setMessage(error.response?.data?.message || "Error adding doctor. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="max-w-3xl mx-auto bg-white shadow-lg p-6 rounded-lg">
      {/* <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
        <User className="w-6 h-6 text-blue-500" />
        Add Doctor
      </h2> */}

      {message && <p className="text-center text-lg font-semibold text-red-500">{message}</p>}

      <form onSubmit={handleSubmit}>
        {/* Doctor Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium">Full Name *</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full p-2 border rounded-md" required />
        </div>

        {/* Department */}
        <div className="mb-4">
          <label className="block text-sm font-medium">Department *</label>
          <select name="department" value={formData.department} onChange={handleChange} className="w-full p-2 border rounded-md" required>
            <option value="">Select Department</option>
            {departments.map((dept) => (
              <option key={dept._id} value={dept._id}>
                {dept.name}
              </option>
            ))}
          </select>
        </div>

        {/* Email & Password */}
        <div className="grid grid-cols-1 gap-4">
          <div>
            <label className="block text-sm font-medium">Email *</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-2 border rounded-md" required />
          </div>
        </div>

        {/* Specialization & Experience */}
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label className="block text-sm font-medium">Specialization *</label>
            <input type="text" name="specialization" value={formData.specialization} onChange={handleChange} className="w-full p-2 border rounded-md" required />
          </div>
          <div>
            <label className="block text-sm font-medium">Experience (Years) *</label>
            <input type="number" name="experience" value={formData.experience} onChange={handleChange} className="w-full p-2 border rounded-md" required />
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-4">
          <label className="block text-sm font-medium">Mobile_No *</label>
          <input type="text" name="Mobile_No" value={formData.Mobile_No} onChange={handleChange} className="w-full p-2 border rounded-md" required />
        </div>

        {/* Gender & Status */}
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label className="block text-sm font-medium">Sex</label>
            <div className="flex gap-4">
              <label className="flex items-center">
                <input type="radio" name="sex" value="male" checked={formData.sex === "male"} onChange={handleChange} />
                <span className="ml-2">Male</span>
              </label>
              <label className="flex items-center">
                <input type="radio" name="sex" value="female" checked={formData.sex === "female"} onChange={handleChange} />
                <span className="ml-2">Female</span>
              </label>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium">Status</label>
            <div className="flex gap-4">
              <label className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                <input type="radio" name="status" value="active" checked={formData.status === "active"} onChange={handleChange} />
                <span className="ml-2">Active</span>
              </label>
              <label className="flex items-center">
                <XCircle className="w-5 h-5 text-red-500 mr-2" />
                <input type="radio" name="status" value="inactive" checked={formData.status === "inactive"} onChange={handleChange} />
                <span className="ml-2">Inactive</span>
              </label>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-4 mt-6">
          <button type="reset" className="bg-gray-200 px-4 py-2 rounded-md">Reset</button>
          <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md" disabled={loading}>
            {loading ? "Saving..." : "Save"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default DoctorForm;
