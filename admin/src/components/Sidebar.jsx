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
    <div className="flex ">
      <button
        className="lg:hidden p-2 text-white bg-blue-900 fixed top-4 left-4 z-50 rounded"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <Menu size={24} />
      </button>
      <div className={`fixed inset-y-0 left-0 w-64 bg-blue-900 text-white min-h-screen p-4 transition-transform duration-300 overflow-y-auto  ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 lg:relative`}>

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
        <nav className="flex-1 overflow-y-auto pb-4">
          <ul className="space-y-1 p-2">
            <li>
              <NavLink to="/dashboard" className="flex items-center gap-2 p-2 hover:bg-blue-800 rounded">
                <Home size={20} /> Dashboard
              </NavLink>
            </li>
            {[
              {
                name: "Department", icon: <BriefcaseMedical size={20} />,
                subItems: [{ label: "Add Department", path: "/dashboard/department/create" },
                { label: "Department List", path: "/dashboard/department/list" }]
              },
              {
                name: "Doctor", icon: <Stethoscope size={20} />,
                subItems: [{ label: "Add Doctor", path: "/dashboard/doctor/create" },
                { label: "Doctor List", path: "/dashboard/doctor/list" }]
              },
              {
                name: "Patient", icon: <Users size={20} />,
                subItems: [{ label: "Add Patient", path: "/dashboard/patient/createPatient" },
                { label: "Patient List", path: "/dashboard/patient/list" }]
              },
              {
                name: "Schedule", icon: <Calendar size={20} />,
                subItems: [{ label: "Add Schedule", path: "/dashboard/Schedule/create" },
                { label: "Schedule List", path: "/dashboard/Schedule/list" }]
              },
              { name: "Appointment", icon: <FileText size={20} />, 
              subItems: [{ label: "Add Appointment", path: "/dashboard/Schedule/create" },
                 { label: "Appointment List", path: "/dashboard/Schedule/list" }] },
            ].map((menu) => (
              <li key={menu.name}>
                <div
                  className="flex items-center justify-between gap-2 p-2 hover:bg-blue-800 rounded cursor-pointer"
                  onClick={() => toggleMenu(menu.name)}
                >
                  <div className="flex items-center gap-2">
                    {menu.icon} {menu.name}
                  </div>
                  {openMenus[menu.name] ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
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
          </ul>
        </nav>
      </div>
    </div>
  );
}
