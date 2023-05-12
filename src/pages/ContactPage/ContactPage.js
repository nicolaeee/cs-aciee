import React from 'react'
import './ContactPage.css'
import './ContactPageMobile.css'
import { Button } from '../../components/ButtonComponent/Button'

function ContactPage() {
  return (
    <>
    <main>
     <section className="home">
   <div className="wrapper">
     <div className="home__wrapper-contact">
       <div className="home-info">
       <h1 className="home__header__about">Suntem o <span> comunitate </span>dornica de <spap>noi</spap> cunostinte</h1>
       <div className="footer__social-contact">
          <a href="https://www.facebook.com/profile.php?id=100092369112514&locale=ro_RO"><i className="fab fa-facebook-f"></i></a>
          <a href="https://www.instagram.com/cs.faciee/"><i className="fab fa-instagram"></i></a>
        </div>
       </div>
     </div>
   </div>
 </section>
   </main>
   </>
  )
}

export default ContactPage