import Home from "./pages/home/Home"
import About from "./pages/about/About"
import Contact from "./pages/contact/Contact"
import Mision from "./pages/mision/Mision"
import NotFound from "./pages/notFound/NotFound"
import Navbar from './components/Navbar';
import './index.css'
import ParticleBackground from "./components/ParticleBackground"

function App() {
  return (
    <div className="w-full h-screen bg-banner-bg bg-no-repeat bg-center bg-cover">
        <Navbar/>
        <ParticleBackground/>
    </div>
  )
}

export default App
