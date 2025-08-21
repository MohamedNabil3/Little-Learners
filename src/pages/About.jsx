import React from "react";
import "../style/about.css";
import Section from "../components/About page Comps/Section.jsx";
import MissionVision from "../components/About page Comps/MissionVision.jsx";
import Achievement from "../components/About page Comps/Achievement.jsx";
import History from "../components/About page Comps/History.jsx";
import Team from "../components/About page Comps/Team.jsx";
function About() {
  return (
    <>
      <Section
        tag="Mission & Visions"
        title="Our Mission & Visions"
        description="We are here to provide a nurturing and inclusive environment where young minds can thrive,
  fostering a love for learning and personal growth."
      />
      <MissionVision />
      <Section
        tag="Our Achievements"
        title="Our Awards and Recognitions"
        description="Little Learners Academy takes pride in our commitment to delivering high-quality education and outstanding student experiences. We are honored to have received various awards and recognitions for our dedication to early childhood education. These accolades reflect our team's relentless efforts in creating an exceptional learning environment for our students."
      />
      <Achievement />
      <Section
        tag="Our Progressive Journey"
        title="Our History"
        description="Founded with a passion for early education in 2005, our kindergarten school boasts a rich history of empowering young learners to reach their potential through innovative teaching methods and a supportive learning environment"
      />
      <History />
      <Section
        tag="Our Teachers With Experties"
        title="Our Team Members"
        description="At Little Learners Academy, our teaching team is the heart of our educational journey. We take great pride in employing highly qualified and passionate educators who possess a deep understanding of early childhood development. Our teachers create a warm and engaging atmosphere, encouraging curiosity, instilling confidence, and fostering a love for learning."
      />
      <Team />
    </>
  );
}

export default About;
