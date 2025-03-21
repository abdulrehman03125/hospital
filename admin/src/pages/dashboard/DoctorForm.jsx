import { useState } from "react";
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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-lg p-6 rounded-lg">
      <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
        <User className="w-6 h-6 text-blue-500" />
        Add Doctor
      </h2>
      
      {/* Doctor Name */}
      <div className="mb-4">
        <label className="block text-sm font-medium">Full Name *</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full p-2 border rounded-md" />
      </div>

      {/* Email & Password */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">Email *</label>
          <div className="flex items-center border rounded-md p-2">
            <Mail className="w-5 h-5 text-gray-500 mr-2" />
            <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full outline-none" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium">Password *</label>
          <div className="flex items-center border rounded-md p-2">
            <Lock className="w-5 h-5 text-gray-500 mr-2" />
            <input type="password" name="password" value={formData.password} onChange={handleChange} className="w-full outline-none" />
          </div>
        </div>
      </div>

      {/* Specialization & Experience */}
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <label className="block text-sm font-medium">Specialization *</label>
          <input type="text" name="specialization" value={formData.specialization} onChange={handleChange} className="w-full p-2 border rounded-md" />
        </div>
        <div>
          <label className="block text-sm font-medium">Experience (Years) *</label>
          <input type="number" name="experience" value={formData.experience} onChange={handleChange} className="w-full p-2 border rounded-md" />
        </div>
      </div>

      {/* Contact & Department */}
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <label className="block text-sm font-medium">Contact Info *</label>
          <input type="text" name="contactInfo" value={formData.contactInfo} onChange={handleChange} className="w-full p-2 border rounded-md" />
        </div>
        <div>
          <label className="block text-sm font-medium">Department *</label>
          <select name="department" value={formData.department} onChange={handleChange} className="w-full p-2 border rounded-md">
            <option value="">Select Department</option>
            <option value="Cardiology">Cardiology</option>
            <option value="Neurology">Neurology</option>
            <option value="Orthopedics">Orthopedics</option>
          </select>
        </div>
      </div>

      {/* Availability */}
      <div className="mt-4">
        <label className="block text-sm font-medium">Availability Schedule *</label>
        <input type="text" name="availabilitySchedule" value={formData.availabilitySchedule} onChange={handleChange} className="w-full p-2 border rounded-md" />
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

      {/* Upload Picture */}
      <div className="mt-4">
        <label className="block text-sm font-medium">Profile Picture</label>
        <div className="flex items-center gap-2 border p-2 rounded-md">
          <Upload className="w-5 h-5 text-gray-500" />
          <input type="file" className="w-full" />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-4 mt-6">
        <button className="bg-gray-200 px-4 py-2 rounded-md">Reset</button>
        <button className="bg-green-500 text-white px-4 py-2 rounded-md">Save</button>
      </div>
    </div>
  );
};

export default DoctorForm;
