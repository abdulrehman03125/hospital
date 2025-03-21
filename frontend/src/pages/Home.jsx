import React from 'react'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div>
      
      <div className="container mx-auto px-6 py-10 text-center">
        <Navbar/>
      <h1 className="text-4xl font-bold text-cyan-500">Welcome to Our Website</h1>
      <p className="mt-4 text-gray-600">
        We provide the best healthcare services with expert doctors and staff.
      </p>
      
    </div>
    
    </div>
  )
}

export default Home
