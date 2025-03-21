import React from 'react'

const About = () => {
  return (
    <div>
       <div className="container mx-auto px-6 py-10 text-center">
      <h1 className="text-4xl font-bold text-cyan-500">About Us</h1>
      <p className="mt-4 text-gray-600">
        We are a leading healthcare provider offering high-quality medical services.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-6">
        <div className="bg-white shadow-md p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-800">Our Mission</h2>
          <p className="text-gray-600 mt-2">To provide top-notch medical services to everyone.</p>
        </div>
        <div className="bg-white shadow-md p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-800">Our Vision</h2>
          <p className="text-gray-600 mt-2">To be the most trusted healthcare provider worldwide.</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default About
