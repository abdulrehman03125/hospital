import { useState } from "react";
import { Lock, Unlock } from "lucide-react";
import PatientListButton from "./PatientListButton";

const PatientForm =()=> {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "Male",
    contactInfo: "",
    cnic: "",
    medicalHistory: "",
    currentMedications: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const [passwordVisible, setPasswordVisible] = useState(false);
  return (
    // <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg">
    //   <h2 className="text-xl  font-semibold mb-24">Patient Registration</h2>
    //   <div className="grid grid-cols-2 gap-4">
    //     <div>
    //       <label className="block text-sm font-medium">First Name *</label>
    //       <input type="text" className="w-full p-2 border rounded" />
    //     </div>
    //     <div>
    //       <label className="block text-sm font-medium">Last Name *</label>
    //       <input type="text" className="w-full p-2 border rounded" />
    //     </div>
    //     <div className="col-span-2">
    //       <label className="block text-sm font-medium">Email Address *</label>
    //       <input type="email" className="w-full p-2 border rounded" />
    //     </div>
    //     <div className="col-span-2 relative">
    //       <label className="block text-sm font-medium">Password *</label>
    //       <input
    //         type={passwordVisible ? "text" : "password"}
    //         className="w-full p-2 border rounded"
    //       />
    //       <button
    //         type="button"
    //         className="absolute right-2 top-10"
    //         onClick={() => setPasswordVisible(!passwordVisible)}
    //       >
    //         {passwordVisible ? <Unlock size={18} /> : <Lock size={18} />}
    //       </button>
    //     </div>
    //     <div>
    //       <label className="block text-sm font-medium">Phone No</label>
    //       <input type="text" className="w-full p-2 border rounded" />
    //     </div>
    //     <div>
    //       <label className="block text-sm font-medium">Mobile No *</label>
    //       <input type="text" className="w-full p-2 border rounded" />
    //     </div>
    //     <div className="col-span-2">
    //       <label className="block text-sm font-medium">Blood Group</label>
    //       <select className="w-full p-2 border rounded">
    //         <option>Select option</option>
    //         <option>O+</option>
    //         <option>o-</option>
    //         <option>A+</option>
    //         <option>A-</option>
    //         <option>B+</option>
    //         <option>B-</option>
    //         <option>AB+</option>
    //         <option>AB-</option>
    //       </select>
    //     </div>
    //     <div className="col-span-2">
    //       <label className="block text-sm font-medium">Sex *</label>
    //       <div className="flex gap-4">
    //         <label><input type="radio" name="sex" value="male" /> Male</label>
    //         <label><input type="radio" name="sex" value="female" /> Female</label>
    //         <label><input type="radio" name="sex" value="other" /> Other</label>
    //       </div>
    //     </div>
    //     <div className="col-span-2">
    //       <label className="block text-sm font-medium">Date of Birth *</label>
    //       <input type="date" className="w-full p-2 border rounded" />
    //     </div>
    //     <div className="col-span-2">
    //       <label className="block text-sm font-medium">Picture</label>
    //       <input type="file" className="w-full p-2 border rounded" />
    //     </div>
    //     <div className="col-span-2">
    //       <label className="block text-sm font-medium">Address *</label>
    //       <textarea className="w-full p-2 border rounded"></textarea>
    //     </div>
    //     <div className="col-span-2">
    //       <label className="block text-sm font-medium">Status</label>
    //       <div className="flex gap-4">
    //         <label><input type="radio" name="status" value="active" /> Active</label>
    //         <label><input type="radio" name="status" value="inactive" /> Inactive</label>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="mt-4 flex gap-4">
    //     <button className="px-4 py-2 bg-gray-300 rounded">Reset</button>
    //     <button className="px-4 py-2 bg-green-500 text-white rounded">Save</button>
    //   </div>
    // </div>
    
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg text-center">
      <PatientListButton/>
    <h2 className="text-xl font-semibold mb-4">Patient Registration</h2>
    <div className="grid grid-cols-2 gap-4 text-left">
      <div>
        <label className="block text-sm font-medium">Name *</label>
        <input type="text" name="name" className="w-full p-2 border rounded" onChange={handleChange} />
      </div>
      <div>
        <label className="block text-sm font-medium">Age *</label>
        <input type="number" name="age" className="w-full p-2 border rounded" onChange={handleChange} />
      </div>
      <div className="col-span-2">
        <label className="block text-sm font-medium">Gender *</label>
        <select name="gender" className="w-full p-2 border rounded" onChange={handleChange}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className="col-span-2">
        <label className="block text-sm font-medium">Contact Info *</label>
        <input type="text" name="contactInfo" className="w-full p-2 border rounded" onChange={handleChange} />
      </div>
      <div className="col-span-2">
        <label className="block text-sm font-medium">CNIC *</label>
        <input type="text" name="cnic" className="w-full p-2 border rounded" placeholder="12345-1234567-1" onChange={handleChange} />
      </div>
      <div className="col-span-2">
        <label className="block text-sm font-medium">Medical History *</label>
        <textarea name="medicalHistory" className="w-full p-2 border rounded" onChange={handleChange}></textarea>
      </div>
      <div className="col-span-2">
        <label className="block text-sm font-medium">Current Medications *</label>
        <textarea name="currentMedications" className="w-full p-2 border rounded" onChange={handleChange}></textarea>
      </div>
    </div>
    <div className="mt-4 flex gap-4 justify-center">
      <button className="px-4 py-2 bg-gray-300 rounded">Reset</button>
      <button className="px-4 py-2 bg-green-500 text-white rounded">Save</button>
    </div>
  </div>
  );
}
export default PatientForm