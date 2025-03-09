import React from 'react';
import { Home } from 'lucide-react';
import mypic from '../assets/my image.jpg'; //

const DashboardHome = () => {
  return (
    <div className="w-full border-b border-gray-200 bg-white flex items-center justify-between px-6 py-4">
      {/* Left side - Dashboard title and features */}
      <div className="flex items-center space-x-4">
        <div className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center">
          <img 
            src={mypic}
            alt="Dashboard Logo" 
            className=" object-cover rounded-full"
          />
        </div>
        <div>
          <h1 className="text-teal-600 font-medium text-xl">Dashboard</h1>
          <p className="text-gray-500 text-sm">Dashboard Features</p>
        </div>
      </div>
      
      {/* Right side - Breadcrumb navigation */}
      <div className="flex items-center text-sm text-gray-500">
        <div className="flex items-center">
          <Home size={16} className="text-gray-400" />
          <span className="mx-2">Home</span>
          <span className="mx-2">/</span>
          <span className="text-gray-700">Dashboard</span>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;