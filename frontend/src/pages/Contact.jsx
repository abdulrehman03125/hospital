import React from 'react'

const Contact = () => {
  return (
    <div>
      <div className="container mx-auto px-6 py-10 text-center">
      <h1 className="text-4xl font-bold text-cyan-500">Contact Us</h1>
      <p className="mt-4 text-gray-600">Get in touch with us for any queries or appointments.</p>

      <form className="mt-6 max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border border-gray-300 rounded-md p-2 mb-4"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full border border-gray-300 rounded-md p-2 mb-4"
        />
        <textarea
          placeholder="Your Message"
          className="w-full border border-gray-300 rounded-md p-2 mb-4"
          rows="4"
        />
        <button className="bg-cyan-500 text-white px-4 py-2 rounded-md hover:bg-cyan-600">
          Send Message
        </button>
      </form>
    </div>
    </div>
  )
}

export default Contact
