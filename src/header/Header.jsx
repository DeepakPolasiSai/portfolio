import { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import "./Header.css";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1170);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1170);
      if (window.innerWidth > 1170) {
        setIsMenuOpen(false); // Ensure menu closes on large screens
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Deepak Polasi Sai" />
      </div>

      {/* Mobile Navigation */}
      {isMobile ? (
        <>
          <div className="menu-icon" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </div>
          <nav className={`nav ${isMenuOpen ? "nav-open" : ""}`}>
            <ul className="nav-list">
              <li><a href="#about" onClick={toggleMenu}>About Me</a></li>
              <li><a href="#education" onClick={toggleMenu}>Education</a></li>
              <li><a href="#technical-skills" onClick={toggleMenu}>Technical Skills</a></li>
              <li><a href="#experience" onClick={toggleMenu}>Experience</a></li>
              <li><a href="#certifications" onClick={toggleMenu}>Certifications</a></li>
              <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
              <li><a href="#contact" onClick={toggleMenu}>Contact Me</a></li>
            </ul>
          </nav>
        </>
      ) : (
        /* Desktop Navigation */
        <nav className="nav-desktop">
          <ul className="nav-list1">
            <li><a href="#about">About Me</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#technical-skills">Technical Skills</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#certifications">Certifications</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact Me</a></li>
          </ul>
        </nav>
      )}
    </header>
  );
}
