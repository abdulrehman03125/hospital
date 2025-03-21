import React from 'react'
import { Outlet } from 'react-router-dom'
import Topbar from "../components/Topbar";
import Sidebar from "../components/Sidebar";
const DashboardLayout = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-5 min-h-screen">
       
        {/* Sidebar Menu */}
        <aside className=" text-white w-full h-full p-6 pt-0 ps-0 md:col-span-1">
          <Sidebar />
        </aside>

        {/* Main Content */}
        <main className="bg-white dark:bg-gray-700 p-3 mt-1 md:col-span-4">
          <div className='mb-3'>
            <Topbar />
          
          </div>
         
          <div className='ChildPages'>
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout
