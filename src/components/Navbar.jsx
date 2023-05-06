import {Link, Navlink} from 'react-router-dom'

import './navbar.css'

import {FaBars, Fabars, FaTimes} from 'react-icons/fa';



const Navbar = () => {
  return (
  <header>
    <h3>Logo</h3>
    <nav>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Mision</a>
        <a href="#">Contact</a>
        <button>
            <FaTimes/>
        </button>
    </nav>
    <button>
            <FaBars/>
        </button>
  </header>
  )
}

export default Navbar