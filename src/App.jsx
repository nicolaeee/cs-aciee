import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from "./pages/home/Home"
import About from "./pages/about/About"
import Contact from "./pages/contact/Contact"
import Mision from "./pages/mision/Mision"
import NotFound from "./pages/notFound/NotFound"
import Navbar from './components/Navbar';


const App = () => {
  return (
    <BrowserRouter>
        <Navbar/>
        <Home/>
        <About/>
        <Mision/>
        <Contact/>
        <NotFound/>
    </BrowserRouter>
  )
}

export default App