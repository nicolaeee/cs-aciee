import React from 'react'
import './index.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Design from './components/Design'

function App() {
  return (
   <>
   <Router>
    <Navbar/>
    <Routes>
    <Route path='/'exact/>
    </Routes>
   </Router>

   </>

  )
}

export default App
