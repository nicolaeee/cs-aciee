import React from "react";
import "./HomePage.css";
import "./HomePageMobile.css";
import { Button } from "../../components/ButtonComponent/Button";
import Carousel from "../../components/CarouselComponent/Carousel";
import Footer from "../../components/FooterComponent/Footer";

function HomePage() {
  return (
    <>
    <main>
    <section className="home">
      <div className="wrapper">
        <div className="home__wrapper">
          <div className="home-info">
          <h1 className="home__header">Cine <span>suntem </span>noi?</h1>
            <p className="home__description">După cum ne sugerează numele, suntem o adunare de studenți dornici să formăm o comunitate de voluntari care să devină o "voce a studenților".</p>
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
    <section className="home-section-two">
      <div className="wrapper">
        <div className="home__wrapper__two">
        <h1 className="home__header-two">Ce <span>reprezentam </span>noi?</h1>
      <div className="home-slider">
        <p className="home__description-two">Studenti,<span>prieteni</span> , și pur și simplu <span>oameni</span>  pasionati de accelasi <span>vis</span> </p>
      <Carousel/>
      </div>
        </div>
      </div>
      </section>
    </main>
    <Footer/>
    </>

  );
}

export default HomePage;
