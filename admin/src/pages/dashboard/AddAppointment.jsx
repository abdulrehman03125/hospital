import { useState, useEffect } from "react";
import axios from "axios";

const AddAppointment = () => {
  const [formData, setFormData] = useState({
    patientName: "",
    doctorId: "",
    date: "",
    time: "",
    reason: "",
  });

  const [doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Fetch doctors from API
  useEffect(() => {
    axios.get("http://localhost:3002/doctors/all/")
      .then((response) => {
        console.log("Doctors:", response.data); // Debugging
        setDoctors(response.data);
      })
      .catch((error) => {
        console.error("Error fetching doctors:", error);
      });
  }, []);

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    // If doctor is selected, find the doctor from the list
    if (e.target.name === "doctorId") {
      const doctor = doctors.find((doc) => doc._id === e.target.value);
      setSelectedDoctor(doctor || null);
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      await axios.post("http://localhost:3002/appointments/create", formData);
      setMessage("Appointment booked successfully!");
      setFormData({
        patientName: "",
        doctorId: "",
        date: "",
        time: "",
        reason: "",
      });
      setSelectedDoctor(null);
    } catch (error) {
      console.error("Error Response:", error.response?.data || error.message);
      setMessage(error.response?.data?.message || "Error booking appointment. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-lg p-6 rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Book Appointment</h2>

      {message && <p className="text-center text-lg font-semibold text-red-500">{message}</p>}

      <form onSubmit={handleSubmit}>
        {/* Patient Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium">Patient Name *</label>
          <input type="text" name="patientName" value={formData.patientName} onChange={handleChange} className="w-full p-2 border rounded-md" required />
        </div>

        {/* Doctor Selection */}
        <div className="mb-4">
          <label className="block text-sm font-medium">Select Doctor *</label>
          <select name="doctorId" value={formData.doctorId} onChange={handleChange} className="w-full p-2 border rounded-md" required>
            <option value="">Select Doctor</option>
            {doctors.map((doctor) => (
              <option key={doctor._id} value={doctor._id}>
                {doctor.name} - {doctor.specialization}
              </option>
            ))}
          </select>
        </div>

        {/* Show Selected Doctor Details */}
        {selectedDoctor && (
          <div className="bg-gray-100 p-4 rounded-md mb-4">
            <h3 className="text-lg font-semibold">Doctor Details</h3>
            <p><strong>Name:</strong> {selectedDoctor.name}</p>
            <p><strong>Specialization:</strong> {selectedDoctor.specialization}</p>
            <p><strong>Department:</strong> {selectedDoctor.department?.name || "N/A"}</p>
            <p><strong>Experience:</strong> {selectedDoctor.experience} years</p>
            <p><strong>Contact:</strong> {selectedDoctor.phone || selectedDoctor.mobile}</p>
          </div>
        )}

        {/* Date & Time */}
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label className="block text-sm font-medium">Date *</label>
            <input type="date" name="date" value={formData.date} onChange={handleChange} className="w-full p-2 border rounded-md" required />
          </div>
          <div>
            <label className="block text-sm font-medium">Time *</label>
            <input type="time" name="time" value={formData.time} onChange={handleChange} className="w-full p-2 border rounded-md" required />
          </div>
        </div>

        {/* Reason for Appointment */}
        <div className="mt-4">
          <label className="block text-sm font-medium">Reason *</label>
          <textarea name="reason" value={formData.reason} onChange={handleChange} className="w-full p-2 border rounded-md" required></textarea>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-4 mt-6">
          <button type="reset" className="bg-gray-200 px-4 py-2 rounded-md">Reset</button>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md" disabled={loading}>
            {loading ? "Booking..." : "Book Appointment"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddAppointment;
