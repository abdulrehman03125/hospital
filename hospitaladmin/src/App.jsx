
import './App.css'
import { Routes, Route } from 'react-router-dom'
import DashboardLayout from './pages/DashboardLayout'
import DashboardHome from './pages/DashboardHome';
import Notfound from './pages/Notfound';
import Doctor from './components/dashboard/Doctor';
// import Profile from "./pages/Profile";
// import Settings from "./components/dashboard/Settings";
// import Products from "./components/dashboard/Products";
// import CreateProductForm from './components/dashboard/CreateProductForm';
// import CreateProduct from './components/dashboard/CreateProduct';

function App() {

  return (
    <>
       <Routes>
        {/* <Route index element={<Login />} /> */}
        {/* <Route path="/signup" element={<Signup />} /> */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path="adddoctor" element={<Doctor />} />
        
          {/* <Route path='create' element={<CreateProductForm />} /> */}
          {/* <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} /> */}
        </Route>
        <Route path='*' element={<Notfound />} />
      </Routes>
    </>
  )
}

export default App;
