import React from "react";
import "./HomePage.css";

function HomePage() {
  return (
    <section className="home">
      <div className="wrapper">
        <div className="home__wrapper">
          <div className="home-info">
          <h2>Home Info</h2>
            <p>This is some information about our home.</p>
          </div>
          <div className="home-contact"></div>
        </div>
      </div>
    </section>
  );
}


export default HomePage;
