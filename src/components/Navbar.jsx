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
    <div className="header__logo">
    <a href="#" className="logo__title"> CS-FACIEE</a>
      <p className="logo__descrption">Knowledge and fun</p>
    <img src="" alt="" />
    </div>
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