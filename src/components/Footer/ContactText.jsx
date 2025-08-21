import "../../style/main.css";
import MailIcon from "../../Images/MailIcon.svg";
import WhatsapIcon from "../../Images/WhatsapIcon.png";
import LocationIcon from "../../Images/LocationIcon.png";
import FooterLogo from "./FooterLogo";

function ContactText() {
  return (
    <div className="ContactTextcontainer">
      <div className="FoooterLogoContainer">
        <FooterLogo />
      </div>
      <div className="pharagraph">
        <p>
          We believe in the power of play to foster creativity, problem-solving
          skills, and imagination.
        </p>
      </div>
      <div className="aboutinfo"></div>
      <ul>
        <li>
          <img src={MailIcon} alt="" /> hello@littlelearners.com
        </li>
        <li>
          <img src={WhatsapIcon} alt="" /> +91 91813 23 2309
        </li>
        <li>
          <img src={LocationIcon} alt="" /> Somewhere in the World
        </li>
      </ul>
    </div>
  );
}

export default ContactText;
