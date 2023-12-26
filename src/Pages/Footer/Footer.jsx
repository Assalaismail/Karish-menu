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
              <span className="phone-number"> 76176479 </span>
            </li>
<br></br>
            <li className="whatsapp">
              <FontAwesomeIcon icon={faWhatsapp} />  &nbsp;  &nbsp;
              <a href="https://wa.me/96176176479">
                WhatsApp
              </a>
            </li>
          </ul>
        </section>
      </main>
      <p className="copyright">
        Copyright © 2023 Karish All rights reserved || <a href="mailto:ismailassala1@gmail.com">Assala Ismail</a>
      </p>

    </footer>
  );
}

export default Footer;
