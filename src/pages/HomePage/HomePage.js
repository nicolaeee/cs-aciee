import React from "react";
import "./HomePage.css";
import { Button } from "../../components/ButtonComponent/Button";
function HomePage() {
  return (
    <>
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
    <section className="home-section-2">
        <div className="wrapper">
          <div className="home__wrapper">
            <div className="home-info-coursel">

            </div>
          </div>
        </div>
      </section>

    </>

  );
}


export default HomePage;
