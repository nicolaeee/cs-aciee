import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="wrapper">
        <div className="footer__social">
          <a href="https://www.facebook.com/profile.php?id=100092369112514&locale=ro_RO"><i className="fab fa-facebook-f"></i></a>
          <h2 className="footer__header">Ne poti gasi aici</h2>
          <a href="https://www.instagram.com/cs.faciee/"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
