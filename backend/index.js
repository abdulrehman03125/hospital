const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const userRouter = require('./routes/user.routes');
const doctorRoutes = require("./routes/doctor.routes");
const PatientsRoutes = require("./routes/patient.routes");
const  appointmentRouter  = require('./routes/appointment.routes');
const departmentRoutes = require('./routes/department.routes');

// Load environment variables
dotenv.config();

const port = process.env.PORT || 3002;

// Middleware
const app = express();
app.use(cors());
app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the API' });
});

// Routes
app.use('/User', userRouter);
app.use("/doctors", doctorRoutes);
app.use("/patients", PatientsRoutes);
app.use('/appointments', appointmentRouter);
app.use('/department', departmentRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URL)
  .then(() => {
    console.log('Connected to MongoDB');
    // Start server after successful database connection
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  });
  