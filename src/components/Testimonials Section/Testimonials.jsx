import { useRef } from "react";
import Sectionheading from "../Reusable Components/SectionsHeading/Sectionheading";
import Testimonialscard from "./Testimonialscard";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import profileimg1 from "../../Images/imgprofile1.png";
import profileimg2 from "../../Images/imgprofile2.png";
import profileimg3 from "../../Images/imgprofile3.png";
import starsimg from "../../Images/starsimg.png";
import prev from "../../Images/previousimg.png";
import next from "../../Images/Nextimg.png";

function Testimonials() {
  const sliderRef = useRef(null);

  const profiles = [
    {
      profileimgsrc: profileimg1,
      name: "Jennifer B",
      starsimgsrc: starsimg,
      description:
        "Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!",
    },
    {
      profileimgsrc: profileimg2,
      name: "David K",
      starsimgsrc: starsimg,
      description:
        "Choosing Little Learners Academy for my daughter was the best decision. She has thrived in their nurturing and stimulating environment.",
    },
    {
      profileimgsrc: profileimg3,
      name: "Emily L",
      starsimgsrc: starsimg,
      description:
        "My son's social and academic growth has been remarkable since joining Little Learners Academy. I am grateful for the supportive and dedicated teachers.",
    },
    {
      profileimgsrc: profileimg1,
      name: "Jennifer B",
      starsimgsrc: starsimg,
      description:
        "Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!",
    },
    {
      profileimgsrc: profileimg2,
      name: "David K",
      starsimgsrc: starsimg,
      description:
        "Choosing Little Learners Academy for my daughter was the best decision. She has thrived in their nurturing and stimulating environment.",
    },
    {
      profileimgsrc: profileimg3,
      name: "Emily L",
      starsimgsrc: starsimg,
      description:
        "My son's social and academic growth has been remarkable since joining Little Learners Academy. I am grateful for the supportive and dedicated teachers.",
    },
  ];
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    centerMode: true,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="Testimonials-container">
      <Sectionheading
        subtitle="Their Happy Words 🤗"
        title="Our Testimonials"
        description="Our testimonials are heartfelt reflections of the nurturing environment we provide, where children flourish both academically and emotionally."
      />

      <Slider
        ref={sliderRef}
        {...settings}
        rtl={true}
        className="Testimonialscards"
      >
        {profiles.map((profile, index) => (
          <div key={index}>
            <Testimonialscard
              imgsrc={profile.profileimgsrc}
              Name={profile.name}
              starsimgsrc={profile.starsimgsrc}
              description={profile.description}
            />
          </div>
        ))}
      </Slider>

      <div className="sliderBtns">
        <img
          className="prevBtn"
          src={prev}
          alt="prev"
          onClick={() => sliderRef.current.slickNext()}
        />
        <img
          className="nextBtn"
          src={next}
          alt="next"
          onClick={() => sliderRef.current.slickPrev()}
        />
      </div>
    </div>
  );
}

export default Testimonials;
