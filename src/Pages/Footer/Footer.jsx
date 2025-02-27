import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-container">
      <main className="footer-main">
      <section className="clmn-4">
          <h1 class="location-contact">LOCATION & CONTACT</h1>
          <ul>
            <li className="lebanon">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="location-icon" />  &nbsp;
              <span className="location"> </span>حي الجامعة, موقف رقم 4
            </li>
            <br></br>

            <li className="calls">
              <FontAwesomeIcon icon={faPhone} /> &nbsp;
              <span className="phone-number"> 70746019 </span>
            </li>
            <br></br>
            <li className="whatsapp">
              <FontAwesomeIcon icon={faWhatsapp} />  &nbsp;  &nbsp;
              <a href="https://wa.me/96170746019">
                WhatsApp
              </a>
            </li>
          </ul>
        </section>
      </main>
      <p className="copyright">
        Copyright © 2025 Karish All rights reserved
      </p>

    </footer>
  );
}

export default Footer;
