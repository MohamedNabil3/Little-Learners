import LogoImg from "../../Images/Logo.png";
import "../../style/main.css";
function Logo() {
  return (
    <div className="logoimgcontainer">
      <img src={LogoImg} alt="Logo" />
    </div>
  );
}

export default Logo;
