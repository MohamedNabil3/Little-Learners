// import LogoImg from "../../Images/Logo.png";
import "../../style/main.css";
import NavBar from "./Nav_Bar";
import TopBanner from "./TopBanner";
function Header() {
  return (
    <div className="Header">
      <TopBanner />
      <NavBar />
    </div>
  );
}

export default Header;
