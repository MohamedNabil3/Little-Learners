import "../../style/about.css";
import Logo from "../../Images/About imgs/Logo.svg";
import React from "react";
import { Link } from "react-router-dom";
function Landing() {
  return (
    <header className="landing-header">
      <div className="announcement-bar">
        <span>Admission is Open, Grab your seat now</span>
        <span className="arrow">→</span>
      </div>
      <nav className="main-nav">
        <div className="logo-container">
          <span className="logo">
            <img src={Logo} alt="logo"></img>
          </span>
        </div>
        <ul className="nav-links">
          <li>
            <a href="#">Home</a>
          </li>
          <li className="active">
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <a href="#">Academics</a>
          </li>
          <li>
            <a href="#">Admissions</a>
          </li>
          <li>
            <a href="#">Student Life</a>
          </li>
          <li className="contact-link">
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Landing;
