import React from "react";
import "./HomePage.css";

function HomePage() {
  return (
    <section className="home">
      <div className="wrapper">
        <div className="home__wrapper">
          <div className="home-info">
          <h1 className="home__header">Cine suntem noi?</h1>
            <p>După cum ne sugerează numele, suntem o adunare de studenți dornici să formăm o comunitate de voluntari care să devină o "voce a studenților".</p>
          </div>
          <div className="home-contact">
            <img src="../images/home_friends.svg"/>
          </div>
        </div>
      </div>
    </section>
  );
}


export default HomePage;
