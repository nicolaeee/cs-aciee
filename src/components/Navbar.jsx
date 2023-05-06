import { useRef } from 'react';
import './navbar.css'
import {FaBars, Fabars, FaTimes} from 'react-icons/fa';



function Navbar() {
    const navRef = useRef();

    const showNavbar = () =>{
        navRef.current.classList.toggle('responsive_nav');
    }
  return (
  <header>
    <h3>Logo</h3>
    <nav ref={navRef}>
        <a href="#">Principal</a>
        <a href="#">Despre</a>
        <a href="#">Misiune</a>
        <a href="#">Contact</a>
        <button className='nav-btn nav-close-btn' onClick={showNavbar}>
            <FaTimes/>
        </button>
        <button className='nav-contact'>Alaturate</button>
    </nav>
    <button className='nav-btn ' onClick={showNavbar}>
            <FaBars/>
    </button>

  </header>
  )
}

export default Navbar