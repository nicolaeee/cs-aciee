import { useRef } from 'react';
import './navbar.css'
import {FaBars, Fabars, FaTimes} from 'react-icons/fa';



const Navbar = () => {
    const navRef = useRef();

    const showNavbar = () =>{
        navRef.current.classList.toggle('responsive_nav');
    }
  return (
  <header>
    <h3>Logo</h3>
    <nav>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Mision</a>
        <a href="#">Contact</a>
        <button className='nav-btn nav-close-btn' onClick={showNavbar}>
            <FaTimes/>
        </button>
    </nav>
    <button className='nav-btn ' onClick={showNavbar}>
            <FaBars/>
    </button>
  </header>
  )
}

export default Navbar