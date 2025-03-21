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


function App() {
  // const [count, setCount] = useState(0)

  return (
    
   <>
   {/* <PatientForm/> */}
  {/* <PatientList/> */}
   <Routes>
   <Route index element={<Login />} />
    <Route path='/' element={<Home/>}/>
    <Route path="/dashboard" element={<DashboardLayout/>}>
    <Route index element={<DashboardHome/>}/>
    <Route path='/dashboard/patient/createPatient' element={<PatientForm/>}/>
    <Route path='/dashboard/patient/list' element={<PatientList/>}/>
    <Route path='/dashboard/department/create' element={<DepartmentForm/>}/>
    <Route path='/dashboard/department/list' element={<DepartmentList/>}/> 
    <Route path='/dashboard/doctor/create' element={<DoctorForm/>} />
    <Route path='/dashboard/doctor/list' element={<DoctorList/>}/>
    <Route path='/dashboard/Schedule/create' element={<DoctorScheduleForm/>}/>
    <Route path='/dashboard/Schedule/list' element={<ScheduleList/>}/>
    <Route path='/dashboard/AddAppointment/create' element={<AddAppointment/>}/>
    </Route>
    <Route path='*' element={<Notfound />} />
   </Routes>
   </>
  )
}

export default App
