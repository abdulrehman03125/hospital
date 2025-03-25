import React from 'react'
import DashboardCards from '../components/dashboard/DashboardCard';
import PieChartComponent from '../components/dashboard/PieChartComponent';
import AccountInformation from '../components/dashboard/AccountInformation';
import TotalProgressChart from '../components/dashboard/TotalProgressChart';

const DashboardHome = () => {
  return (
    <>
      <div className='mb-3'>
        {/* <h1 className='text-3xl mb-3'>Welcome back to admin</h1> */}
        <DashboardCards />
      </div>
      <div className="grid grid-cols-6 gap-4">
        {/* Account Information - Takes 2 columns */}
        <div className="col-span-4">
          <AccountInformation />
         <TotalProgressChart/>
       
        </div>

        {/* Pie Chart Component - Takes 1 column */}
        <div className="col-span-2">
          <PieChartComponent />
        </div>
      </div>

    </>
  )
}

export default DashboardHome
