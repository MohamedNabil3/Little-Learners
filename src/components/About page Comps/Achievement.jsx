import "../../style/about.css";
import AchievementIcon1 from "../../Images/About imgs/Icon (1).svg";
import AchievementIcon2 from "../../Images/About imgs/Icon (4).svg";
import AchievementIcon3 from "../../Images/About imgs/Icon (5).svg";
import RightArr from "../../Images/About imgs/Icon (6).svg";
import LeftArr from "../../Images/About imgs/Icon (7).svg";

export default function Achievement() {
  return (
    <div className="achievement-container">
      <div className="achievement-grid">
        <div className="achievement-card">
          <div className="achievement-icon">
            <img src={AchievementIcon1} alt="award icon" />
          </div>
          <h3 className="achievement-title">
            Outstanding Early Childhood Education Award
          </h3>
          <p className="achievement-description">
            Presented by the National Association for the Education of Young
            Children (NAEYC) in recognition of Little Learners Academy's
            commitment to delivering exceptional early childhood education and
            fostering a nurturing learning environment.
          </p>
        </div>

        <div className="achievement-card">
          <div className="achievement-icon">
            <img src={AchievementIcon2} alt="award icon" />
          </div>
          <h3 className="achievement-title">
            Innovative STEAM Education Award
          </h3>
          <p className="achievement-description">
            Awarded by the Education Excellence Association for our pioneering
            efforts in introducing innovative STEAM (Science, Technology,
            Engineering, Arts, and Mathematics) programs that ignite creativity
            and critical thinking in young learners.
          </p>
        </div>

        <div className="achievement-card">
          <div className="achievement-icon">
            <img src={AchievementIcon3} alt="award icon" />
          </div>
          <h3 className="achievement-title">Environmental Stewardship Award</h3>
          <p className="achievement-description">
            Received from the Green Earth Society for our dedication to
            environmental education, sustainable practices, and fostering a love
            for nature in our students.
          </p>
        </div>
      </div>

      <div className="achievement-footer">
        <p className="achievement-more">8 More Awards</p>
        <div className="achievement-arrows">
          <button className="arrow-btn">
            <img src={LeftArr} alt="left" />
          </button>
          <button className="arrow-btn">
            <img src={RightArr} alt="right" />
          </button>
        </div>
      </div>
    </div>
  );
}
