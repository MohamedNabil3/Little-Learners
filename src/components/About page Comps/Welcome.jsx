// Welcome.jsx
import React from "react";
import "../../style/about.css";
import { ReactComponent as Pattern } from "../../Images/About imgs/Abstract Design (3).svg";

export default function Welcome() {
  return (
    <div className="welcome-container">
      <div className="pattern">
        <Pattern />
      </div>

      <div className="welcome-content">
        <div className="welcome-left">
          <button className="overview-btn">Overview</button>
          <h1 className="welcome-title">Welcome to Little Learners Academy</h1>
        </div>
        <div className="welcome-right">
          <p className="welcome-text">
            A leading kindergarten school dedicated to providing a nurturing and
            stimulating environment for young learners. With a commitment to
            excellence in early education, we believe in shaping curious minds
            and building a strong foundation for a lifelong love of learning.
            Our holistic approach fosters intellectual, social, emotional, and
            physical development, ensuring that each child reaches their full
            potential.
          </p>
        </div>
      </div>
    </div>
  );
}
