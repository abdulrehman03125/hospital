const Appointment = require('../models/Appointments.model');

// Get all appointments (Admin & Staff)
const getAllAppointments = async (req, res) => {
    try {
        const appointments = await Appointment.find()
            .populate('patientId', 'name email')
            .populate('doctorId', 'name specialization');
        res.status(200).json(appointments);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching appointments', error });
    }
};

// Book an appointment (Staff)
const bookAppointment = async (req, res) => {
    try {
        const { patientId, doctorId, appointmentDateTime } = req.body;

        if (!patientId || !doctorId || !appointmentDateTime) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const newAppointment = new Appointment({ patientId, doctorId, appointmentDateTime });
        await newAppointment.save();

        res.status(201).json({ message: 'Appointment booked successfully', appointment: newAppointment });
    } catch (error) {
        res.status(500).json({ message: 'Error booking appointment', error });
    }
};

// Update appointment status (Admin & Doctor)
const updateAppointmentStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;

        if (!['Pending', 'Approved', 'Rejected'].includes(status)) {
            return res.status(400).json({ message: 'Invalid status' });
        }

        const updatedAppointment = await Appointment.findByIdAndUpdate(id, { status }, { new: true });

        if (!updatedAppointment) {
            return res.status(404).json({ message: 'Appointment not found' });
        }

        res.status(200).json({ message: 'Appointment status updated', appointment: updatedAppointment });
    } catch (error) {
        res.status(500).json({ message: 'Error updating appointment status', error });
    }
};

module.exports = { getAllAppointments, bookAppointment, updateAppointmentStatus };
