const express = require('express');
const { getAllAppointments, bookAppointment, updateAppointmentStatus } = require('../controllers/appointment.controller');
const { authMiddleware,  verifyStaff } = require('../middlewares/auth.middleware');

const appointmentRouter = express.Router();

appointmentRouter.get('/all', authMiddleware, verifyStaff, getAllAppointments); // Admin & Staff
appointmentRouter.post('/bookAppointment', authMiddleware, verifyStaff, bookAppointment); // Staff
appointmentRouter.put('/updateAppointment/:id/status', authMiddleware, verifyStaff, updateAppointmentStatus); // Admin & Doctor

module.exports = appointmentRouter;
