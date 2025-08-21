import "../../style/main.css";
import FaceBookeIcon from "../../Images/FacebookIcon.svg";
import TwetierIcon from "../../Images/Twetiericon.svg";
import LinkedInIcon from "../../Images/LinkedinIcon.svg";

function Terms() {
  return (
    <div className="Termscontainer">
      <div className="Text">
        Terms of Service | Privacy Policy | Cookie Policy
      </div>
      <div className="Social">
        <img src={FaceBookeIcon} alt="Facebook Icon" />
        <img src={TwetierIcon} alt="Twetier Icon" />
        <img src={LinkedInIcon} alt="LinkedIn Icon" />
      </div>
    </div>
  );
}

export default Terms;
