import React from 'react'
import './index.css'
import Navbar from './components/NavbarComponent/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Background from './components/ParticlesComponent/Background'
import HomePage from './pages/HomePage/HomePage'
import About from './pages/AboutPage/AboutPage'
import ContactPage from './pages/ContactPage/ContactPage'

function App() {
  return (
   <>
   <Router>
    <Background/>
    <Navbar/>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<ContactPage/>} />
    </Routes>
   </Router>
   </>

  )
}

export default App

