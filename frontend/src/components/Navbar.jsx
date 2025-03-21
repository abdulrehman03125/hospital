import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Menu } from "lucide-react";
import { NavLink } from "react-router-dom";
import ContactNavbar from "./ContactNavbar";
import MeetOurTeam from "../pages/dashboard/MeetOurTeam";
import DoctorCards from "../pages/dashboard/DoctorCards";
import Footer from "../pages/dashboard/Footer";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState();

  return (
    <div>
      <ContactNavbar />
      <nav className="bg-white shadow-md mt-3 py-4 px-6 md:px-16 flex items-center justify-between border-t-4 border-cyan-400 mx-4 md:mx-8">
        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Menu size={24} className="text-gray-700" />
        </button>

        {/* Navbar Links */}
        <ul
          className={`absolute md:static top-full left-0 w-full md:w-auto bg-white md:flex
            space-x-6 text-gray-700 px-6 md:px-0 py-4 md:py-0 shadow-md md:shadow-none ${isMenuOpen ? "block" : "hidden"
            }`}
        >
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `cursor-pointer hover:text-cyan-500 ${isActive ? "text-cyan-500 font-semibold" : ""}`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => {
                // console.log("Contact Link Clicked, Active:", isActive);
                return `cursor-pointer hover:text-cyan-500 ${isActive ? "text-cyan-500 font-semibold" : ""}`;
              }}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `cursor-pointer hover:text-cyan-500 ${isActive ? "text-cyan-500 font-semibold" : ""}`
              }
            >
              About
            </NavLink>
          </li>
        </ul>

        {/* Search Bar */}
        <div className="relative hidden md:block">
          <input
            type="text"
            placeholder="Search"
            className="border border-gray-300 rounded-full px-4 py-2 w-48 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <Search className="absolute right-3 top-2.5 text-gray-400" size={16} />
        </div>
      </nav>
      <MeetOurTeam />
      <DoctorCards />
      <Footer />
    </div>
  );
};

export default Navbar;
