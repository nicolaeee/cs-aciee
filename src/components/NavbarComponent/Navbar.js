import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import { Button } from '../ButtonComponent/Button';
import './navbar.css'

function Navbar() {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    const showButton = () => {
        if (window.innerWidth <= 960) {
          setButton(false);
        } else {
          setButton(true);
        }
      };

      useEffect(() => {
        showButton();
      }, []);


      window.addEventListener('resize', showButton);

  return (
  <>
    <nav className='navbar'>
        <div className='navbar-container'>
            <Link to='/' className='navbar-log'>
                CS FACIEE <i className='fab fa-typo3' onClick={closeMobileMenu}/>
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Principal
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                        Despre
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                        Contact
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                        Alature
                    </Link>
                </li>
            </ul>
            {button && <Button buttonStyle='btn--outline'>Alaturate</Button>}
        </div>
    </nav>
  </>
  )
}

export default Navbar