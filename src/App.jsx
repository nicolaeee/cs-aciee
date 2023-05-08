import React from 'react'
import './index.css'
import Navbar from './components/NavbarComponent/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Design from './components/ParticlesComponent/Design'

function App() {
  return (
   <>
   <Router>
    <Navbar/>
    <Design/>
    <Routes>
    <Route path='/'exact/>
    </Routes>
   </Router>

   </>

  )
}

export default App
