import React from "react";
import "../../style/about.css";

import Image1 from "../../Images/About imgs/Image.svg";
import Image2 from "../../Images/About imgs/Image (1).svg";
import Image3 from "../../Images/About imgs/Image (2).svg";
import Image4 from "../../Images/About imgs/Image (3).svg";
import Image5 from "../../Images/About imgs/Image (4).svg";
import Image6 from "../../Images/About imgs/Image (5).svg";
import MailIcon from "../../Images/About imgs/Icon (8).svg";

const members = [
  {
    img: Image1,
    name: "Ms. Sarah Anderson",
    qualification:
      "Qualification: Bachelor's Degree in Early Childhood Education",
    description:
      "Ms. Sarah is a passionate educator with over 10 years of experience in guiding young minds. Her warm and nurturing approach creates a welcoming classroom environment where children feel comfortable to explore and learn.",
  },
  {
    img: Image2,
    name: "Mr. David Roberts",
    qualification: "Qualification: Master's Degree in Elementary Education",
    description:
      "With a strong background in elementary education, Mr. David brings a creative and interactive teaching style to his classroom. His enthusiasm for learning inspires students to ask questions and think critically.",
  },
  {
    img: Image3,
    name: "Ms. Emily Hernandez",
    qualification: "Qualification: Diploma in Child Psychology",
    description:
      "Ms. Emily's expertise in child psychology enables her to understand each child's unique needs and provide individualized support. Her caring nature fosters a strong sense of belonging and confidence in her students.",
  },
  {
    img: Image4,
    name: "Mr. Michael Turner",
    qualification: "Qualification: Bachelor's Degree in Physical Education",
    description:
      "Mr. Michael's passion for physical fitness and sports shines through in his energetic classes. He encourages students to stay active, promoting teamwork and a healthy lifestyle.",
  },
  {
    img: Image5,
    name: "Ms. Jessica Lee",
    qualification: "Qualification: Master's Degree in Special Education",
    description:
      "Ms. Jessica's specialization in special education allows her to create an inclusive and supportive learning environment for all students. She is dedicated to helping every child reach their full potential.",
  },
  {
    img: Image6,
    name: "Mr. William Parker",
    qualification: "Qualification: Bachelor's Degree in Fine Arts",
    description:
      "Mr. William's background in fine arts brings creativity and imagination to his classroom. Through art projects and activities, he nurtures the artistic expression and self-confidence of his students.",
  },
];

export default function Team() {
  return (
    <div className="team-container">
      {members.map((member, index) => (
        <div className="team-card" key={index}>
          <div className="team-top">
            <img src={member.img} alt={member.name} className="team-img" />
            <div className="team-info">
              <h3>{member.name}</h3>
            </div>
          </div>

          <div className="team-job">
            <p className="qualification">{member.qualification}</p>
            <p className="description">{member.description}</p>
          </div>

          <img src={MailIcon} alt="mail" className="mail-icon" />
        </div>
      ))}
    </div>
  );
}
