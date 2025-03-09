import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  UserRound,
  Users,
  Building2,
  Calendar,
  BookCheck,
  CreditCard,
  FileBarChart,
  HeartPulse,
  BedDouble,
  NotebookPen,
  Mail,
  LayoutGrid,
  ChevronDown,
  ChevronRight,
  X
} from 'lucide-react';
import mypic from '../assets/my image.jpg';

const Sidebar = () => {
  const [isDoctorMenuOpen, setIsDoctorMenuOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDoctorMenu = () => {
    setIsDoctorMenuOpen(!isDoctorMenuOpen);
  };
  const departments = [
    { name: "Cardiology", path: "/cardiology" },
    { name: "Neurology", path: "/neurology" },
    { name: "Orthopedics", path: "/orthopedics" },
    { name: "Pediatrics", path: "/pediatrics" },
    { name: "Radiology", path: "/radiology" },
  ];

  return (
    <>
    
      <div className="max-h-svw bg-teal-500  text-white shadow-md p-4 flex flex-col">
      <div className="p-4 flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center">
            <img src={mypic} alt="Profile" className="w-12 h-12 object-cover rounded-full" />
          </div>
          
          <div>
            <p className="text-md font-bold">MR. Abdul Rahman</p>
          </div>
        </div>

        <nav className="flex">
          <ul className="space-y-2">
            <li className="flex items-center p-2 space-x-2 text-white dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
              <NavLink to="/dashboard" className="flex items-center p-2 space-x-2">
                <LayoutDashboard size={20} />
                <span>Dashboard</span>
              </NavLink>
            </li>
            
            <button onClick={toggleDoctorMenu} className="w-full flex justify-between items-center p-3 space-x-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
              <div className="flex items-center space-x-2">
                <UserRound size={20} />
                <span>Doctor</span>
              </div>
              {isDoctorMenuOpen ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
            </button>
            {isDoctorMenuOpen && (
              <ul className="ml-6 mt-2 border-white space-y-2">
                 <li>
                  <NavLink to="/dashboard/adddoctor" className="block p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md">
                   Add Doctor 
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/doctor/list" className="block p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md">
                    Doctor List
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/doctor/schedule" className="block p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md">
                    Doctor Schedule
                  </NavLink>
                </li>
              </ul>
            )}
         
         <button onClick={toggleDoctorMenu} className="w-full flex justify-between items-center p-3 space-x-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
              <div className="flex items-center space-x-2">
                <Users size={20} />
                <span>Patient</span>
              </div>
              {isDoctorMenuOpen ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
            </button>
            {isDoctorMenuOpen && (
              <ul className="ml-6 mt-2 border-white space-y-2">
                 <li>
                  <NavLink to="/dashboard/adddoctor" className="block p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md">
                  Add Patient 
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/doctor/list" className="block p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md">
                  All Patients
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/doctor/schedule" className="block p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md">
                    Patient Schedule
                  </NavLink>
                </li>
              </ul>
            )}
              <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="w-full flex justify-between items-center p-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
      >
        <div className="flex items-center space-x-2">
          <Building2 size={20} />
          <span>Departments</span>
        </div>

              {isDoctorMenuOpen ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
            </button>
            {/* Collapsible Navigation */}
      {isMenuOpen && (
        <nav className="mt-2 space-y-2 pl-6">
          {departments.map((dept, index) => (
            <NavLink
              key={index}
              to={dept.path}
              className="flex items-center p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
            >
              <Building2 size={18} />
              <span className="ml-2">{dept.name}</span>
            </NavLink>
          ))}
        </nav>
            )}
            <li>
              <NavLink href="#" className="flex items-center p-3 space-x-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
                <Calendar size={20} />
                <span>Schedule</span>
              </NavLink>
            </li> 
            <li>
              <a href="#" className="flex items-center p-3 space-x-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
                <BookCheck size={20} />
                <span>Appointment</span>
              </a>
            </li>
            <button onClick={toggleDoctorMenu} className="w-full flex justify-between items-center p-3 space-x-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
              <div className="flex items-center space-x-2">
                <CreditCard size={20} />
                <span>Payment</span>
              </div>
              {isDoctorMenuOpen ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
            </button>
            {isDoctorMenuOpen && (
              <ul className="ml-6 mt-2 border-white space-y-2">
                 <li>
                  <NavLink to="" className="block p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md">
                  Invoices
                  </NavLink>
                </li>
                <li>
                  <NavLink to="" className="block p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md">
                  Transactions
                  </NavLink>
                </li>
                {/* <li>
                  <NavLink to="/dashboard/doctor/schedule" className="block p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md">
                    Doctor Schedule
                  </NavLink>
                </li> */}
              </ul>
            )}
            <button onClick={toggleDoctorMenu} className="w-full flex justify-between items-center p-3 space-x-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
              <div className="flex items-center space-x-2">
                <FileBarChart size={20} />
                <span>Report</span>
              </div>
              {isDoctorMenuOpen ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
            </button>
            {isDoctorMenuOpen && (
              <ul className="ml-6 mt-2 border-white space-y-2">
                 <li>
                  <NavLink to="" className="block p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md">
                  Daily Report
                  </NavLink>
                </li>
                <li>
                  <NavLink to="" className="block p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md">
                   15 days Report
                  </NavLink>
                </li>
                <li>
                  <NavLink to="" className="block p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md">
                  Monthly Report
                  </NavLink>
                </li>
              </ul>
            )}
            <li>
              <a href="#" className="flex items-center p-3  space-x-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
                <HeartPulse size={20} />
                <span>Human Resources</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center  p-3 space-x-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
                <BedDouble size={20} />
                <span>Bed Manager</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center  p-3 space-x-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
                <NotebookPen size={20} />
                <span>Notice</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center  p-3 space-x-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
                <Mail size={20} />
                <span>Mail</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center  p-3 space-x-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
                <LayoutGrid size={20} />
                <span>Widgets</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;