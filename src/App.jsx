import Home from "./pages/home/Home"
import About from "./pages/about/About"
import Contact from "./pages/contact/Contact"
import Mision from "./pages/mision/Mision"
import NotFound from "./pages/notFound/NotFound"
import Navbar from './components/Navbar';
import './index.css'

function App() {
  return (
    <div className="bg-banner-bg">
        <Navbar/>
        <Home/>
        <About/>
        <Mision/>
        <Contact/>
        <NotFound/>
    </div>
  )
}

export default App
