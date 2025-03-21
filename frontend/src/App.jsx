import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
// import { About,Contact, Home } from 'lucide-react'
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact'  



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </>
  )
}

export default App
