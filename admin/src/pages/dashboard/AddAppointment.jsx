import { useState } from "react";
import { ChevronDown } from "lucide-react";

const AddAppointment = ()=> {
  const [formData, setFormData] = useState({
    patientId: "",
    doctorId: "",
    appointmentDateTime: "",
    status: "Pending",
    problem: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Appointment Data:", formData);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Add Appointment</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block font-medium">Patient ID <span className="text-red-500">*</span></label>
          <input type="text" name="patientId" value={formData.patientId} onChange={handleChange} className="w-full p-2 border rounded" placeholder="Patient ID" required />
        </div>
        
        <div>
          <label className="block font-medium">Doctor ID <span className="text-red-500">*</span></label>
          <input type="text" name="doctorId" value={formData.doctorId} onChange={handleChange} className="w-full p-2 border rounded" placeholder="Doctor ID" required />
        </div>

        <div>
          <label className="block font-medium">Appointment Date <span className="text-red-500">*</span></label>
          <input type="datetime-local" name="appointmentDateTime" value={formData.appointmentDateTime} onChange={handleChange} className="w-full p-2 border rounded" required />
        </div>
        
        <div>
          <label className="block font-medium">Status</label>
          <div className="flex space-x-4">
            <label className="flex items-center">
              <input type="radio" name="status" value="Pending" checked={formData.status === "Pending"} onChange={handleChange} className="mr-2" />
              Pending
            </label>
            <label className="flex items-center">
              <input type="radio" name="status" value="Approved" checked={formData.status === "Approved"} onChange={handleChange} className="mr-2" />
              Approved
            </label>
            <label className="flex items-center">
              <input type="radio" name="status" value="Rejected" checked={formData.status === "Rejected"} onChange={handleChange} className="mr-2" />
              Rejected
            </label>
          </div>
        </div>
        
        <div>
          <label className="block font-medium">Problem</label>
          <textarea name="problem" value={formData.problem} onChange={handleChange} className="w-full p-2 border rounded" placeholder="Problem" rows="3"></textarea>
        </div>
        
        <div className="flex space-x-4">
          <button type="reset" className="px-4 py-2 bg-gray-300 rounded">Reset</button>
          <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded">Save</button>
        </div>
      </form>
    </div>
  );
}

export default  AddAppointment ;