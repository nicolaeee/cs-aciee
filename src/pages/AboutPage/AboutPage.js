import React from 'react';
import './About.css'
import { Button } from '../../components/ButtonComponent/Button';
function AboutPage() {
  return (
    <section className="home">
    <div className="wrapper">
      <div className="home__wrapper">
        <div className="home-info">
        <h1 className="home__header__about">Universitatea<span>Dunarea</span>de Jos</h1>
          <p className="home__description"></p>
          <Button buttonStyle="btn--outline" buttonSize="btn--large">
            Înscrie-te acum!
          </Button>
        </div>
        <div className="home-contact">
          <img src="../images/home_friends.svg"/>
        </div>
      </div>
    </div>
  </section>
  );
}

export default AboutPage;
