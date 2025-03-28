import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from "./pages/Home"
import DashboardLayout from "./pages/DashboardLayout";
import DashboardHome from "./pages/DashboardHome";
import PatientForm from "./pages/dashboard/PatientForm";
import PatientList from "./pages/dashboard/PatientList";
import DepartmentForm from './pages/dashboard/DepartmentForm';
import DepartmentList from './pages/dashboard/DepartmentList';
import DoctorForm from './pages/dashboard/DoctorForm';
import DoctorList from './pages/dashboard/DoctorList';
import DoctorScheduleForm from './pages/dashboard/DoctorScheduleForm';
import ScheduleList from './pages/dashboard/ScheduleList';
import AddAppointment from './pages/dashboard/AddAppointment';
import Notfound from './pages/Notfound';
import Login from './pages/Login';
import ProtectedRoute from "./components/ProtectedRoute";

import { ToastContainer } from "react-toastify";
function App() {
  // const [count, setCount] = useState(0)

  return (

    <>
      {/* <PatientForm/> */}
      {/* <PatientList/> */}
      <ToastContainer position="top-right" autoClose={3000} />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path="/dashboard" element={<ProtectedRoute><DashboardLayout /></ProtectedRoute>}>
          <Route index element={<DashboardHome />} />
          <Route path='patient/createPatient' element={<PatientForm />} />
          <Route path='patient/list' element={<PatientList />} />
          <Route path='department/create' element={<DepartmentForm />} />
          <Route path='department/list' element={<DepartmentList />} />
          <Route path='doctor/create' element={<DoctorForm />} />
          <Route path='doctor/list' element={<DoctorList />} />
          <Route path='Schedule/create' element={<DoctorScheduleForm />} />
          <Route path='Schedule/list' element={<ScheduleList />} />
          <Route path='AddAppointment/create' element={<AddAppointment />} />
        </Route>
        <Route path='*' element={<Notfound />} />
      </Routes>
    </>
  )
}

export default App
