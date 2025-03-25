const express = require('express');
const { getAllAppointments, bookAppointment, updateAppointmentStatus } = require('../controllers/appointment.controller');
const { authMiddleware } = require('../middlewares/auth.middleware');

const appointmentRouter = express.Router();

appointmentRouter.get('/all',   getAllAppointments); // Admin & Staff
appointmentRouter.post('/bookAppointment',   bookAppointment); // Staff
appointmentRouter.put('/updateAppointment/:id/status',  updateAppointmentStatus); // Admin & Doctor

module.exports = appointmentRouter;
