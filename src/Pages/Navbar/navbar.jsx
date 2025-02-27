import React, { useState, useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import './navbar.css';

function Navbar() {
  const [scrolling, setScrolling] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  const scrollToSection = (sectionId) => {
    scroll.scrollTo(sectionId, {
      duration: 800,
      smooth: "easeInOutQuart",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const sections = ["مناقيش", "بيتزا", "جريش", "كعك" , "مشروبات"];

  const handleSetActive = (to) => {
    setActiveSection(to);
  };

  const handleButtonClick = (section) => {
    scrollToSection(section);
    setActiveSection(section);
  };

  return (
    <nav className={`navbar ${scrolling ? "fixed" : ""}`}>
      <div className="navbar-cat">

        {sections.map((section, index) => (
          <Link
            key={index}
            to={section}
            spy={true}
            smooth={true}
            offset={-88}
            duration={800}
            onSetActive={() => handleSetActive(section)}
          >
            <button
              className={`a-cat ${activeSection === section ? "active" : ""}`}
              onClick={() => handleButtonClick(section)}
            >
              {section}
            </button>
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
