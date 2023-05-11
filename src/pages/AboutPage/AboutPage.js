import React from 'react';
import './About.css'
import { Button } from '../../components/ButtonComponent/Button';
import Footer from '../../components/FooterComponent/Footer';
function AboutPage() {
  return (
    <>
     <main>
      <section className="home">
    <div className="wrapper">
      <div className="home__wrapper">
        <div className="home-info">
        <h1 className="home__header__about">Universitatea<span> Dunarea </span>de Jos</h1>
          <p className="home__description">Clubul nostru de studenti face parte din Liga Studentilor din Galati in cadrul Universitatii Dunarea de Jos, suntem multumiti de faptul ca suntem sustinuti de Facultatea de Automatică, Calculatoare, Inginerie Electrică și Electronică</p>
          <Button buttonStyle="btn--outline" buttonSize="btn--large">
            Înscrie-te acum!
          </Button>
        </div>
        <div className="home-contact__about">
          <img className='img-about' src="../images/about.svg"/>
        </div>
      </div>
    </div>
  </section>
    </main>
    <Footer/>
    </>

  );
}

export default AboutPage;
