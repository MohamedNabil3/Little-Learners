import React from "react";
import "../../style/about.css";
import MissionIcon from "../../Images/About imgs/Icon (1).svg";
import VisionIcon from "../../Images/About imgs/Icon (2).svg";

export default function MissionVision() {
  return (
    <section className="mission-vision-section">
      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Mission</h2>
          <img src={MissionIcon} alt="Mission Icon" className="card-icon" />
        </div>
        <p className="card-text">
          At Little Learners Academy, our mission is to inspire a passion for
          learning and empower young minds to become confident, compassionate,
          and creative individuals. We strive to create a safe and inclusive
          space where children thrive academically, socially, and emotionally,
          setting the stage for a successful educational journey.
        </p>
      </div>

      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Vision</h2>
          <img src={VisionIcon} alt="Vision Icon" className="card-icon" />
        </div>
        <p className="card-text">
          Our vision is to be a beacon of educational excellence, where children
          are encouraged to explore, discover, and express their unique talents.
          We aim to foster a generation of lifelong learners equipped with
          critical thinking, empathy, and a deep appreciation for diversity.
        </p>
      </div>
    </section>
  );
}
