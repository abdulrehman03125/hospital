import React from 'react';
import { 
  Menu, 
  ShoppingCart, 
  Bell, 
  Mail, 
  UserCircle 
} from 'lucide-react';

const Topbar = ({ toggleSidebar }) => {
  return (
    <div className="w-full h-16 bg-gradient-to-r from-gray-800 to-gray-900 flex items-center justify-between px-4 z-10">
      {/* Logo section */}
      <div className="flex items-center">
        <span className="text-white font-bold text-lg">HEALTH</span>
        <span className="text-green-500 font-bold text-lg">ADMIN</span>
      </div>
      
      {/* Menu toggle button */}
      <div className="md:hidden">
        <button className="p-2 text-teal-400" onClick={toggleSidebar}>
          <Menu size={24} />
        </button>
      </div>
      
      {/* Notification icons */}
      <div className="hidden md:flex items-center space-x-4">
        <div className="relative">
          <ShoppingCart size={20} className="text-teal-400" />
          <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            8
          </span>
        </div>
        
        <div className="relative">
          <Bell size={20} className="text-teal-400" />
          <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            4
          </span>
        </div>
        
        <div className="relative">
          <Mail size={20} className="text-teal-400" />
          <span className="absolute -top-2 -right-2 bg-yellow-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            3
          </span>
        </div>
        
        <div className="relative">
          <div className="bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            5
          </div>
        </div>
        
        {/* User profile */}
        <div className="ml-4">
          <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden">
            <UserCircle size={32} className="text-gray-600" />
          </div>
        </div>
      </div>
      
      {/* Mobile notification icons - simplified for mobile */}
      <div className="md:hidden flex items-center space-x-3">
        <div className="relative">
          <Bell size={20} className="text-teal-400" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
            !
          </span>
        </div>
        
        {/* User profile */}
        <div>
          <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden">
            <UserCircle size={32} className="text-gray-600" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;