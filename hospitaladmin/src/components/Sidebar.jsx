// import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import {
//   LayoutDashboard,
//   UserRound,
//   Users,
//   Building2,
//   Calendar,
//   BookCheck,
//   CreditCard,
//   FileBarChart,
//   HeartPulse,
//   BedDouble,
//   NotebookPen,
//   Mail,
//   LayoutGrid,
//   ChevronDown,
//   ChevronRight,
//   X
// } from 'lucide-react';
// import mypic from '../assets/my image.jpg';

// const Sidebar = () => {
//   const [isDoctorMenuOpen, setIsDoctorMenuOpen] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleDoctorMenu = () => {
//     setIsDoctorMenuOpen(!isDoctorMenuOpen);
//   };
//   const departments = [
//     { name: "Cardiology", path: "/cardiology" },
//     { name: "Neurology", path: "/neurology" },
//     { name: "Orthopedics", path: "/orthopedics" },
//     { name: "Pediatrics", path: "/pediatrics" },
//     { name: "Radiology", path: "/radiology" },
//   ];

//   return (
//     <>
    
//       <div className="max-h-svw bg-teal-500  text-white shadow-md p-4 flex flex-col">
//       <div className="p-4 flex items-center gap-3 mb-4">
//           <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center">
//             <img src={mypic} alt="Profile" className="w-12 h-12 object-cover rounded-full" />
//           </div>
          
//           <div>
//             <p className="text-md font-bold">MR. Abdul Rahman</p>
//           </div>
//         </div>

//         <nav className="flex-1 overflow-y-auto pb-4">
//           <ul className="space-y-2 p-2">
//             <li className="flex items-center p-2 space-x-2 text-white dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
//               <NavLink to="/dashboard" className="flex items-center p-2 space-x-2">
//                 <LayoutDashboard size={20} />
//                 <span>Dashboard</span>
//               </NavLink>
//             </li>
            
//             <button onClick={toggleDoctorMenu} className="w-full flex justify-between items-center p-3 space-x-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
//               <div className="flex items-center space-x-2">
//                 <UserRound size={20} />
//                 <span>Doctor</span>
//               </div>
//               {isDoctorMenuOpen ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
//             </button>
//             {isDoctorMenuOpen && (
//               <ul className="ml-6 mt-2 border-white space-y-2">
//                  <li>
//                   <NavLink to="/dashboard/adddoctor" className="block p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md">
//                    Add Doctor 
//                   </NavLink>
//                 </li>
//                 <li>
//                   <NavLink to="/dashboard/doctor/list" className="block p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md">
//                     Doctor List
//                   </NavLink>
//                 </li>
//                 <li>
//                   <NavLink to="/dashboard/doctor/schedule" className="block p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md">
//                     Doctor Schedule
//                   </NavLink>
//                 </li>
//               </ul>
//             )}
         
//          <button onClick={toggleDoctorMenu} className="w-full flex justify-between items-center p-3 space-x-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
//               <div className="flex items-center space-x-2">
//                 <Users size={20} />
//                 <span>Patient</span>
//               </div>
//               {isDoctorMenuOpen ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
//             </button>
//             {isDoctorMenuOpen && (
//               <ul className="ml-6 mt-2 border-white space-y-2">
//                  <li>
//                   <NavLink to="/dashboard/adddoctor" className="block p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md">
//                   Add Patient 
//                   </NavLink>
//                 </li>
//                 <li>
//                   <NavLink to="/dashboard/doctor/list" className="block p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md">
//                   All Patients
//                   </NavLink>
//                 </li>
//                 <li>
//                   <NavLink to="/dashboard/doctor/schedule" className="block p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md">
//                     Patient Schedule
//                   </NavLink>
//                 </li>
//               </ul>
//             )}
//               <button
//         onClick={() => setIsMenuOpen(!isMenuOpen)}
//         className="w-full flex justify-between items-center p-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
//       >
//         <div className="flex items-center space-x-2">
//           <Building2 size={20} />
//           <span>Departments</span>
//         </div>

//               {isDoctorMenuOpen ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
//             </button>
//             {/* Collapsible Navigation */}
//       {isMenuOpen && (
//         <nav className="mt-2 space-y-2 pl-6">
//           {departments.map((dept, index) => (
//             <NavLink
//               key={index}
//               to={dept.path}
//               className="flex items-center p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
//             >
//               <Building2 size={18} />
//               <span className="ml-2">{dept.name}</span>
//             </NavLink>
//           ))}
//         </nav>
//             )}
//             <li>
//               <NavLink href="#" className="flex items-center p-3 space-x-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
//                 <Calendar size={20} />
//                 <span>Schedule</span>
//               </NavLink>
//             </li> 
//             <li>
//               <a href="#" className="flex items-center p-3 space-x-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
//                 <BookCheck size={20} />
//                 <span>Appointment</span>
//               </a>
//             </li>
//             <button onClick={toggleDoctorMenu} className="w-full flex justify-between items-center p-3 space-x-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
//               <div className="flex items-center space-x-2">
//                 <CreditCard size={20} />
//                 <span>Payment</span>
//               </div>
//               {isDoctorMenuOpen ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
//             </button>
//             {isDoctorMenuOpen && (
//               <ul className="ml-6 mt-2 border-white space-y-2">
//                  <li>
//                   <NavLink to="" className="block p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md">
//                   Invoices
//                   </NavLink>
//                 </li>
//                 <li>
//                   <NavLink to="" className="block p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md">
//                   Transactions
//                   </NavLink>
//                 </li>
//                 {/* <li>
//                   <NavLink to="/dashboard/doctor/schedule" className="block p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md">
//                     Doctor Schedule
//                   </NavLink>
//                 </li> */}
//               </ul>
//             )}
//             <button onClick={toggleDoctorMenu} className="w-full flex justify-between items-center p-3 space-x-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
//               <div className="flex items-center space-x-2">
//                 <FileBarChart size={20} />
//                 <span>Report</span>
//               </div>
//               {isDoctorMenuOpen ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
//             </button>
//             {isDoctorMenuOpen && (
//               <ul className="ml-6 mt-2 border-white space-y-2">
//                  <li>
//                   <NavLink to="" className="block p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md">
//                   Daily Report
//                   </NavLink>
//                 </li>
//                 <li>
//                   <NavLink to="" className="block p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md">
//                    15 days Report
//                   </NavLink>
//                 </li>
//                 <li>
//                   <NavLink to="" className="block p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md">
//                   Monthly Report
//                   </NavLink>
//                 </li>
//               </ul>
//             )}
//             <li>
//               <a href="#" className="flex items-center p-3  space-x-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
//                 <HeartPulse size={20} />
//                 <span>Human Resources</span>
//               </a>
//             </li>
//             <li>
//               <a href="#" className="flex items-center  p-3 space-x-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
//                 <BedDouble size={20} />
//                 <span>Bed Manager</span>
//               </a>
//             </li>
//             <li>
//               <a href="#" className="flex items-center  p-3 space-x-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
//                 <NotebookPen size={20} />
//                 <span>Notice</span>
//               </a>
//             </li>
//             <li>
//               <a href="#" className="flex items-center  p-3 space-x-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
//                 <Mail size={20} />
//                 <span>Mail</span>
//               </a>
//             </li>
//             <li>
//               <a href="#" className="flex items-center  p-3 space-x-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
//                 <LayoutGrid size={20} />
//                 <span>Widgets</span>
//               </a>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </>
//   );
// };

// export default Sidebar;

import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Home, User, Calendar, FileText, CreditCard, Stethoscope, Users, Clipboard, BriefcaseMedical, Wallet, ChevronDown, ChevronRight, Menu } from "lucide-react";

export default function Sidebar() {
  const [openMenus, setOpenMenus] = useState({});
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleMenu = (menu) => {
    setOpenMenus((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  return (
    <div className="flex overflow-auto">
      <button
        className="lg:hidden p-2 text-white bg-blue-900 fixed top-4 left-4 z-50 rounded"
      >
        <Menu size={24} />
      </button>
      <div className={`fixed inset-y-0 left-0 w-64 bg-blue-900 text-white min-h-screen p-4 transition-transform duration-300 overflow-y-auto ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 lg:relative`}> 
        <div className="flex flex-col items-center mb-6">
          <div className="text-2xl font-bold text-cyan-400">Hospital</div>
          <img
            src="https://via.placeholder.com/50"
            alt="Profile"
            className="w-16 h-16 rounded-full mt-4"
          />
          <div className="mt-2 font-semibold">TAREKUL ISLAM</div>
          <span className="text-green-400 text-sm">● Admin</span>
        </div>
        <nav>
          <ul className="space-y-2">
            <li>
              <NavLink to="/dashboard" className="flex items-center gap-2 p-2 hover:bg-blue-800 rounded">
                <Home size={20} /> Dashboard
              </NavLink>
            </li>
            {[
              { name: "Department", icon: <BriefcaseMedical size={20} />, subItems: [{ label: "Add Department", path: "/department/add" }, { label: "Department List", path: "/department/list" }] },
              { name: "Doctor", icon: <Stethoscope size={20} />, subItems: [{ label: "Add Doctor", path: "/doctor/add" }, { label: "Doctor List", path: "/doctor/list" }] },
              { name: "Patient", icon: <Users size={20} />, subItems: [{ label: "Add Patient", path: "/patient/add" }, { label: "Patient List", path: "/patient/list" }] },
              { name: "Schedule", icon: <Calendar size={20} />, subItems: [{ label: "Add Schedule", path: "/schedule/add" }, { label: "Schedule List", path: "/schedule/list" }] },
              { name: "Appointment", icon: <FileText size={20} />, subItems: [{ label: "Add Appointment", path: "/appointment/add" }, { label: "Appointment List", path: "/appointment/list" }] },
            ].map((menu) => (
              <li key={menu.name}>
                <div
                  className="flex items-center justify-between gap-2 p-2 hover:bg-blue-800 rounded cursor-pointer"
                  onClick={() => toggleMenu(menu.name)}
                >
                  <div className="flex items-center gap-2">
                    {menu.icon} {menu.name}
                  </div>
                  {openMenus[menu.name] ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                </div>
                {openMenus[menu.name] && (
                  <ul className="ml-6 space-y-1 text-sm">
                    {menu.subItems.map((subItem) => (
                      <li key={subItem.label}>
                        <NavLink to={subItem.path} className="block p-2 hover:bg-blue-700 rounded">
                          {subItem.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li>
              <NavLink to="/prescription" className="flex items-center gap-2 p-2 hover:bg-blue-800 rounded">
                <Clipboard size={20} /> Prescription
              </NavLink>
            </li>
            <li>
              <NavLink to="/account-manager" className="flex items-center gap-2 p-2 hover:bg-blue-800 rounded">
                <User size={20} /> Account Manager
              </NavLink>
            </li>
            <li>
              <NavLink to="/insurance" className="flex items-center gap-2 p-2 hover:bg-blue-800 rounded">
                <CreditCard size={20} /> Insurance
              </NavLink>
            </li>
            <li>
              <NavLink to="/billing" className="flex items-center gap-2 p-2 hover:bg-blue-800 rounded">
                <Wallet size={20} /> Billing
              </NavLink>
            </li>
            <li>
              <NavLink to="/billing" className="flex items-center gap-2 p-2 hover:bg-blue-800 rounded">
                <Wallet size={20} /> Billing
              </NavLink>
            </li>
            <li>
              <NavLink to="/billing" className="flex items-center gap-2 p-2 hover:bg-blue-800 rounded">
                <Wallet size={20} /> Billing
              </NavLink>
            </li>
            <li>
              <NavLink to="/billing" className="flex items-center gap-2 p-2 hover:bg-blue-800 rounded">
                <Wallet size={20} /> Billing
              </NavLink>
            </li>
            <li>
              <NavLink to="/billing" className="flex items-center gap-2 p-2 hover:bg-blue-800 rounded">
                <Wallet size={20} /> Billing
              </NavLink>
            </li>
            <li>
              <NavLink to="/billing" className="flex items-center gap-2 p-2 hover:bg-blue-800 rounded">
                <Wallet size={20} /> Billing
              </NavLink>
            </li>
            <li>
              <NavLink to="/billing" className="flex items-center gap-2 p-2 hover:bg-blue-800 rounded">
                <Wallet size={20} /> Billing
              </NavLink>
            </li>
            <li>
              <NavLink to="/billing" className="flex items-center gap-2 p-2 hover:bg-blue-800 rounded">
                <Wallet size={20} /> Billing
              </NavLink>
            </li>
            <li>
              <NavLink to="/billing" className="flex items-center gap-2 p-2 hover:bg-blue-800 rounded">
                <Wallet size={20} /> Billing
              </NavLink>
            </li>
            
          </ul>
        </nav>
      </div>
    </div>
  );
}
