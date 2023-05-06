import Home from "./pages/home/Home"
import About from "./pages/about/About"
import Contact from "./pages/contact/Contact"
import Mision from "./pages/mision/Mision"
import NotFound from "./pages/notFound/NotFound"



const App = () => {
  return (
    <div>
        <Home/>
        <About/>
        <Mision/>
        <Contact/>
        <NotFound/>
    </div>
  )
}

export default App