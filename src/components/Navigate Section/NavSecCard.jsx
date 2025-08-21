import HRImgSrc from "../../Images/NavigateHr.png";
import linkarrow from "../../Images/Vector (Stroke).png";
function NavSecCard({ title, body, pagelink }) {
  return (
    <div className="Navigatecard-container">
      <h3>{title}</h3>
      <img src={HRImgSrc} alt="HR" />
      <p>{body}</p>

      <a className="LinkBtn" href={pagelink}>
        Learn More <img src={linkarrow} alt="" />
      </a>
    </div>
  );
}

export default NavSecCard;
